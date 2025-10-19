import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ShoppingCart as CartIcon, Plus, Minus, Trash2, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const ShoppingCart = () => {
  const { state, updateQuantity, removeFromCart, clearCart, closeCart, getTotalItems, getTotalPrice } = useCart();
  
  // Debug logging
  console.log('Cart state:', state);
  console.log('Cart items:', state.items);
  
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (!checkoutForm.name || !checkoutForm.phone || !checkoutForm.address) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Generate WhatsApp message
    const orderDetails = state.items.map(item => 
      `• ${item.product.name} (×${item.quantity}) - R ${item.product.price * item.quantity}`
    ).join('\n');

    const message = `🛒 *New Order from ${checkoutForm.name}*

📱 Phone: ${checkoutForm.phone}
📍 Address: ${checkoutForm.address}

*Order Details:*
${orderDetails}

💰 *Total: R ${getTotalPrice()}*

${checkoutForm.notes ? `📝 Notes: ${checkoutForm.notes}` : ''}

Thank you for choosing Mamoe Gabhadiya! 🌿`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/27814687186?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecting to WhatsApp to complete your order!');
    clearCart();
    closeCart();
    setCheckoutForm({ name: '', phone: '', address: '', notes: '' });
  };

  return (
    <Sheet open={state.isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-lg">
        <div className="flex flex-col h-full">
          <SheetHeader className="flex-shrink-0 pb-4">
            <SheetTitle className="flex items-center gap-2">
              <CartIcon className="h-5 w-5" />
              Shopping Cart ({getTotalItems()} items)
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto pr-2">
            <div className="space-y-6">
              {state.items.length === 0 ? (
                <div className="text-center py-8">
                  <CartIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                  <p className="text-xs text-muted-foreground mt-2">Add products to see them here</p>
                </div>
              ) : (
                <>
                  {/* Cart Items Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">Cart Items ({state.items.length})</h3>
                        <p className="text-xs text-muted-foreground">
                          {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} • Total: R {getTotalPrice()}
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={clearCart}
                        className="text-xs text-muted-foreground hover:text-destructive"
                      >
                        Clear All
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {state.items.map((item) => (
                        <div key={item.product.id} className="flex gap-3 p-4 border rounded-lg bg-card hover:shadow-sm transition-shadow">
                          <div className="relative">
                            <img
                              src={item.product.images[0]}
                              alt={item.product.name}
                              className="w-20 h-20 object-cover rounded-md"
                            />
                            <item.product.icon className="absolute -top-1 -right-1 h-4 w-4 text-primary bg-background rounded-full p-0.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm truncate">{item.product.name}</h4>
                                <Badge variant="outline" className="text-xs mt-1">
                                  {item.product.category}
                                </Badge>
                              </div>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive ml-2"
                                onClick={() => removeFromCart(item.product.id)}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col">
                                <span className="font-bold text-primary text-sm">{item.product.priceDisplay} each</span>
                                <span className="text-xs text-muted-foreground">
                                  Qty: {item.quantity} • Subtotal: R {item.product.price * item.quantity}
                                </span>
                                {item.product.inStock ? (
                                  <span className="text-xs text-green-600">✓ In Stock</span>
                                ) : (
                                  <span className="text-xs text-red-600">⚠ Out of Stock</span>
                                )}
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 w-7 p-0"
                                  onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="text-sm font-medium w-8 text-center bg-muted rounded px-2 py-1">
                                  {item.quantity}
                                </span>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 w-7 p-0"
                                  onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <h3 className="font-semibold text-sm">Order Summary</h3>
                    <div className="space-y-1 text-xs">
                      {state.items.map((item) => (
                        <div key={item.product.id} className="flex justify-between">
                          <span className="truncate mr-2">
                            {item.product.name} (×{item.quantity})
                          </span>
                          <span className="font-medium">R {item.product.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-2 flex justify-between items-center font-bold">
                      <span>Total ({getTotalItems()} items):</span>
                      <span className="text-primary text-lg">R {getTotalPrice()}</span>
                    </div>
                  </div>

                  {/* Checkout Form */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Checkout Information</h3>
                    
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={checkoutForm.name}
                        onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})}
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={checkoutForm.phone}
                        onChange={(e) => setCheckoutForm({...checkoutForm, phone: e.target.value})}
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">Delivery Address *</Label>
                      <Textarea
                        id="address"
                        value={checkoutForm.address}
                        onChange={(e) => setCheckoutForm({...checkoutForm, address: e.target.value})}
                        placeholder="Your complete delivery address"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        value={checkoutForm.notes}
                        onChange={(e) => setCheckoutForm({...checkoutForm, notes: e.target.value})}
                        placeholder="Any special instructions or requests"
                        rows={2}
                      />
                    </div>

                    <Button 
                      onClick={handleCheckout}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      size="lg"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Complete Order via WhatsApp
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
