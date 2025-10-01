import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollToTopOnMount } from "@/hooks/use-scroll-to-top";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingCart, Plus, Minus, Send } from "lucide-react";
import { toast } from "sonner";

// Import product images
import immuneBoosterImg from "@/assets/products/immune-booster.jpg";
import energyVitalityImg from "@/assets/products/energy-vitality.jpg";
import digestiveHealthImg from "@/assets/products/digestive-health.jpg";
import sleepRelaxationImg from "@/assets/products/sleep-relaxation.jpg";
import bloodPressureImg from "@/assets/products/blood-pressure.jpg";
import prosperityBlendImg from "@/assets/products/prosperity-blend.jpg";
import protectionHerbsImg from "@/assets/products/protection-herbs.jpg";
import beautySkincareImg from "@/assets/products/beauty-skincare.jpg";
import hairGrowthImg from "@/assets/products/hair-growth.jpg";
import detoxBlendImg from "@/assets/products/detox-blend.jpg";
import traditionalHealingImg from "@/assets/products/traditional-healing.jpg";

// Product data with images and numeric prices
const orderProducts = [
  { id: 1, name: "Immune Booster Blend", price: 250, priceDisplay: "R 250", category: "Health & Wellness", image: immuneBoosterImg },
  { id: 2, name: "Energy & Vitality Mix", price: 280, priceDisplay: "R 280", category: "Health & Wellness", image: energyVitalityImg },
  { id: 3, name: "Digestive Health Herbs", price: 220, priceDisplay: "R 220", category: "Health & Wellness", image: digestiveHealthImg },
  { id: 4, name: "Sleep & Relaxation Tea", price: 240, priceDisplay: "R 240", category: "Health & Wellness", image: sleepRelaxationImg },
  { id: 5, name: "Blood Pressure Balance", price: 290, priceDisplay: "R 290", category: "Health & Wellness", image: bloodPressureImg },
  { id: 6, name: "Prosperity Blend", price: 360, priceDisplay: "R 360", category: "Wealth & Prosperity", image: prosperityBlendImg },
  { id: 7, name: "Good Luck Herbs", price: 330, priceDisplay: "R 330", category: "Wealth & Prosperity", image: protectionHerbsImg },
  { id: 8, name: "Career Advancement Mix", price: 370, priceDisplay: "R 370", category: "Wealth & Prosperity", image: prosperityBlendImg },
  { id: 9, name: "Beauty & Skin Care", price: 295, priceDisplay: "R 295", category: "Lifestyle Enhancement", image: beautySkincareImg },
  { id: 10, name: "Hair Growth Formula", price: 310, priceDisplay: "R 310", category: "Lifestyle Enhancement", image: hairGrowthImg },
  { id: 11, name: "Natural Detox Blend", price: 280, priceDisplay: "R 280", category: "Lifestyle Enhancement", image: detoxBlendImg },
  { id: 12, name: "Traditional Healing Blend", price: 330, priceDisplay: "R 330", category: "Traditional Remedies", image: traditionalHealingImg },
];

const Order = () => {
  useScrollToTopOnMount();

  const [selectedProducts, setSelectedProducts] = useState<{[key: number]: number}>({});
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    notes: ""
  });

  const handleProductToggle = (productId: number) => {
    setSelectedProducts(prev => ({
      ...prev,
      [productId]: prev[productId] ? 0 : 1
    }));
  };

  const handleQuantityChange = (productId: number, change: number) => {
    setSelectedProducts(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }));
  };

  const getSelectedProductsList = () => {
    return orderProducts.filter(product => selectedProducts[product.id] > 0);
  };

  const getTotalItems = () => {
    return Object.values(selectedProducts).reduce((sum, qty) => sum + qty, 0);
  };

  const getTotalCost = () => {
    return Object.entries(selectedProducts).reduce((total, [productId, qty]) => {
      const product = orderProducts.find(p => p.id === parseInt(productId));
      return total + (product ? product.price * qty : 0);
    }, 0);
  };

  const handleSubmitOrder = () => {
    const selectedList = getSelectedProductsList();
    
    if (selectedList.length === 0) {
      toast.error("Please select at least one product");
      return;
    }

    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Create order summary
    const orderSummary = selectedList.map(product => 
      `${product.name} - Quantity: ${selectedProducts[product.id]} - Unit Price: ${product.priceDisplay} - Subtotal: R ${product.price * selectedProducts[product.id]}`
    ).join('\n');

    const emailBody = `
New Order from Mamoe Gabhadiya Website

Customer Information:
Name: ${customerInfo.name}
Email: ${customerInfo.email}
Phone: ${customerInfo.phone}
Address: ${customerInfo.address}
City: ${customerInfo.city}
Country: ${customerInfo.country}

Order Details:
${orderSummary}

Total Items: ${getTotalItems()}
TOTAL COST: R ${getTotalCost()}

Additional Notes:
${customerInfo.notes}

Please contact the customer to confirm the order and arrange payment and delivery.
    `;

    const mailtoLink = `mailto:kawerifytech@gmail.com?subject=New Order - ${customerInfo.name}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
    toast.success("Order email opened! Please send the email to complete your order.");
  };

  const categories = [...new Set(orderProducts.map(p => p.category))];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Place Your Order
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the herbal products you need and provide your details. We'll contact you to confirm your order.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product Selection */}
            <div className="lg:col-span-2">
              <Card className="bg-card shadow-soft">
                <CardContent className="p-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Select Products
                  </h2>
                  
                  {categories.map(category => (
                    <div key={category} className="mb-8">
                      <h3 className="font-semibold text-lg text-primary mb-4">{category}</h3>
                      <div className="space-y-3">
                        {orderProducts.filter(p => p.category === category).map(product => (
                          <div key={product.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-center space-x-4">
                              <Checkbox
                                checked={selectedProducts[product.id] > 0}
                                onCheckedChange={() => handleProductToggle(product.id)}
                              />
                              <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-grow">
                                <p className="font-medium text-foreground">{product.name}</p>
                                <p className="text-lg font-bold text-primary">{product.priceDisplay}</p>
                                {selectedProducts[product.id] > 0 && (
                                  <p className="text-sm text-muted-foreground">
                                    Subtotal: R {product.price * selectedProducts[product.id]}
                                  </p>
                                )}
                              </div>
                            </div>
                            
                            {selectedProducts[product.id] > 0 && (
                              <div className="flex items-center space-x-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleQuantityChange(product.id, -1)}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center font-medium">
                                  {selectedProducts[product.id]}
                                </span>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleQuantityChange(product.id, 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Customer Information & Order Summary */}
            <div className="space-y-6">
              {/* Order Summary */}
              <Card className="bg-card shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                    Order Summary
                  </h3>
                  
                  {getSelectedProductsList().length === 0 ? (
                    <p className="text-muted-foreground">No products selected</p>
                  ) : (
                    <div className="space-y-3">
                      {getSelectedProductsList().map(product => (
                        <div key={product.id} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{product.name}</span>
                            <span>x{selectedProducts[product.id]}</span>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>{product.priceDisplay} each</span>
                            <span className="font-medium">R {product.price * selectedProducts[product.id]}</span>
                          </div>
                        </div>
                      ))}
                      <div className="border-t pt-3 mt-3 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Total Items:</span>
                          <span>{getTotalItems()}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg text-primary">
                          <span>Total Cost:</span>
                          <span>R {getTotalCost()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Customer Information */}
              <Card className="bg-card shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                    Your Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Full Name *
                      </label>
                      <Input
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo(prev => ({...prev, name: e.target.value}))}
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo(prev => ({...prev, email: e.target.value}))}
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Phone Number *
                      </label>
                      <Input
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo(prev => ({...prev, phone: e.target.value}))}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Address
                      </label>
                      <Input
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo(prev => ({...prev, address: e.target.value}))}
                        placeholder="Enter your address"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          City
                        </label>
                        <Input
                          value={customerInfo.city}
                          onChange={(e) => setCustomerInfo(prev => ({...prev, city: e.target.value}))}
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Country
                        </label>
                        <Input
                          value={customerInfo.country}
                          onChange={(e) => setCustomerInfo(prev => ({...prev, country: e.target.value}))}
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Additional Notes
                      </label>
                      <Textarea
                        value={customerInfo.notes}
                        onChange={(e) => setCustomerInfo(prev => ({...prev, notes: e.target.value}))}
                        placeholder="Any special requests or notes..."
                        rows={3}
                      />
                    </div>
                  </div>
                  
                  <Button
                    onClick={handleSubmitOrder}
                    className="w-full mt-6 bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Order Email
                  </Button>
                  
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    * Required fields. We'll contact you to confirm payment and delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Order;
