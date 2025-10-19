import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollToTopOnMount } from "@/hooks/use-scroll-to-top";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingCart, Plus, Minus, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

// Product images from public directory
const productImages = {
  immune: "/images/IMG_7214.webp",
  energy: "/images/IMG_7215.webp",
  digestive: "/images/IMG_7216.webp",
  sleep: "/images/IMG_7218.webp",
  bloodPressure: "/images/IMG_7219.webp",
  prosperity: "/images/IMG_7220.webp",
  protection: "/images/IMG_7221.webp",
  beauty: "/images/IMG_7222.webp",
  hairGrowth: "/images/IMG_7223.webp",
  detox: "/images/IMG_7225.webp",
  traditional: "/images/IMG_7227.webp"
};

// Complete product data with all products from the main catalog
const orderProducts = [
  // Health & Wellness
  { id: 1, name: "Immune Booster Blend", price: 250, priceDisplay: "R 250", category: "Health & Wellness", image: productImages.immune, description: "Powerful blend to strengthen your natural defenses. Contains echinacea and elderberry." },
  { id: 2, name: "Energy & Vitality Mix", price: 280, priceDisplay: "R 280", category: "Health & Wellness", image: productImages.energy, description: "Natural energy boost without caffeine jitters. Includes ginseng and rhodiola." },
  { id: 3, name: "Digestive Health Herbs", price: 220, priceDisplay: "R 220", category: "Health & Wellness", image: productImages.digestive, description: "Soothe your stomach naturally. Ginger, peppermint, and fennel blend." },
  { id: 4, name: "Sleep & Relaxation Tea", price: 240, priceDisplay: "R 240", category: "Health & Wellness", image: productImages.sleep, description: "Drift into peaceful sleep. Chamomile, lavender, and valerian root." },
  { id: 5, name: "Blood Pressure Balance", price: 290, priceDisplay: "R 290", category: "Health & Wellness", image: productImages.bloodPressure, description: "Support cardiovascular health naturally. Hawthorn and hibiscus." },
  { id: 6, name: "Diabetes Support Blend", price: 310, priceDisplay: "R 310", category: "Health & Wellness", image: productImages.immune, description: "Help manage blood sugar levels naturally. Bitter melon and fenugreek." },
  { id: 7, name: "Heart Health Formula", price: 300, priceDisplay: "R 300", category: "Health & Wellness", image: productImages.bloodPressure, description: "Keep your heart strong and healthy. Garlic and omega-rich herbs." },
  { id: 8, name: "Joint & Bone Strength", price: 320, priceDisplay: "R 320", category: "Health & Wellness", image: productImages.digestive, description: "Reduce inflammation and improve mobility. Turmeric and boswellia." },
  { id: 9, name: "Respiratory Relief Mix", price: 260, priceDisplay: "R 260", category: "Health & Wellness", image: productImages.energy, description: "Breathe easier naturally. Eucalyptus, thyme, and mullein." },
  { id: 10, name: "Anti-Inflammatory Blend", price: 275, priceDisplay: "R 275", category: "Health & Wellness", image: productImages.immune, description: "Natural inflammation fighter. Ginger, turmeric, and black pepper." },
  { id: 11, name: "Memory & Focus Herbs", price: 295, priceDisplay: "R 295", category: "Health & Wellness", image: productImages.energy, description: "Enhance mental clarity and concentration. Ginkgo and bacopa." },
  { id: 12, name: "Liver Detox Formula", price: 285, priceDisplay: "R 285", category: "Health & Wellness", image: productImages.detox, description: "Support your liver's natural cleansing. Milk thistle and dandelion." },
  
  // Wealth & Prosperity
  { id: 13, name: "Prosperity Blend", price: 350, priceDisplay: "R 350", category: "Wealth & Prosperity", image: productImages.prosperity, description: "Attract abundance and financial blessings. Traditional wealth herbs." },
  { id: 14, name: "Success & Abundance Mix", price: 380, priceDisplay: "R 380", category: "Wealth & Prosperity", image: productImages.prosperity, description: "Open doors to new opportunities. Prosperity-drawing botanicals." },
  { id: 15, name: "Protection Herbs", price: 320, priceDisplay: "R 320", category: "Wealth & Prosperity", image: productImages.protection, description: "Shield against negative energy. Sage and protective plants." },
  { id: 16, name: "Good Luck Herbs", price: 330, priceDisplay: "R 330", category: "Wealth & Prosperity", image: productImages.protection, description: "Enhance fortune in all areas of life. Lucky botanicals." },
  { id: 17, name: "Career Advancement Mix", price: 370, priceDisplay: "R 370", category: "Wealth & Prosperity", image: productImages.prosperity, description: "Rise to the top naturally. Professional success herbs." },
  { id: 18, name: "Money Drawing Blend", price: 360, priceDisplay: "R 360", category: "Wealth & Prosperity", image: productImages.prosperity, description: "Ancient recipe for financial attraction. Time-tested formula." },
  
  // Lifestyle Enhancement
  { id: 19, name: "Beauty & Skin Care", price: 295, priceDisplay: "R 295", category: "Lifestyle Enhancement", image: productImages.beauty, description: "Radiant skin from within. Rose, hibiscus, and collagen-boosting herbs." },
  { id: 20, name: "Hair Growth Formula", price: 310, priceDisplay: "R 310", category: "Lifestyle Enhancement", image: productImages.hairGrowth, description: "Strengthen and grow luscious hair. Rosemary, nettle, and horsetail." },
  { id: 21, name: "Natural Detox Blend", price: 280, priceDisplay: "R 280", category: "Lifestyle Enhancement", image: productImages.detox, description: "Full body cleanse and renewal. Gentle yet effective detox herbs." },
  { id: 22, name: "Stress Relief Mix", price: 265, priceDisplay: "R 265", category: "Lifestyle Enhancement", image: "/images/IMG_7226.webp", description: "Find your calm naturally. Adaptogenic stress-busting herbs." },
  { id: 23, name: "Weight Management Tea", price: 290, priceDisplay: "R 290", category: "Lifestyle Enhancement", image: productImages.detox, description: "Support healthy metabolism naturally. Green tea and garcinia." },
  { id: 24, name: "Anti-Aging Blend", price: 325, priceDisplay: "R 325", category: "Lifestyle Enhancement", image: productImages.beauty, description: "Turn back the clock naturally. Antioxidant-rich youth herbs." },
  
  // Traditional Remedies
  { id: 25, name: "Traditional Healing Blend", price: 330, priceDisplay: "R 330", category: "Traditional Remedies", image: productImages.traditional, description: "Ancient African healing wisdom. Multi-purpose wellness herbs." },
  { id: 26, name: "Ancestral Wisdom Mix", price: 350, priceDisplay: "R 350", category: "Traditional Remedies", image: productImages.traditional, description: "Connect with ancestral knowledge. Sacred traditional herbs." },
  { id: 27, name: "Cultural Heritage Herbs", price: 340, priceDisplay: "R 340", category: "Traditional Remedies", image: productImages.traditional, description: "Preserve cultural healing traditions. Authentic African botanicals." },
  { id: 28, name: "Spiritual Cleansing", price: 320, priceDisplay: "R 320", category: "Traditional Remedies", image: productImages.protection, description: "Purify your spirit and space. Sacred cleansing herbs." },
];

const Order = () => {
  useScrollToTopOnMount();

  const [selectedProducts, setSelectedProducts] = useState<{[key: number]: number}>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
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

    if (!customerInfo.name || !customerInfo.phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }

    // Create order summary
    const orderSummary = selectedList.map(product => 
      `• ${product.name} - Qty: ${selectedProducts[product.id]} - ${product.priceDisplay} each - Subtotal: R ${product.price * selectedProducts[product.id]}`
    ).join('\n');

    const whatsappMessage = `🌿 *NEW ORDER - Mamoe Gabhadiya*\n\n👤 *Customer Information:*\nName: ${customerInfo.name}\nEmail: ${customerInfo.email || 'Not provided'}\nPhone: ${customerInfo.phone}\nAddress: ${customerInfo.address}\nCity: ${customerInfo.city}\nCountry: ${customerInfo.country}\n\n🛒 *Order Details:*\n${orderSummary}\n\n📊 *Order Summary:*\nTotal Items: ${getTotalItems()}\n💰 *TOTAL COST: R ${getTotalCost()}*\n\n📝 *Additional Notes:*\n${customerInfo.notes || 'None'}\n\nPlease confirm this order and let me know about payment and delivery options. Thank you! 🙏`;

    // SA WhatsApp number
    const whatsappNumber = "+27814687186";
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecting to WhatsApp to send your order!");
    
    // Reset form after successful submission
    setSelectedProducts({});
    setCustomerInfo({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      notes: ""
    });
  };

  const categories = [...new Set(orderProducts.map(p => p.category))];
  const allCategories = ["All", ...categories];
  
  const filteredProducts = selectedCategory === "All" 
    ? orderProducts 
    : orderProducts.filter(p => p.category === selectedCategory);

  const orderPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Order African Herbal Products Online",
    "description": "Order premium African herbal products online with WhatsApp delivery. Fast, secure ordering process with expert consultation.",
    "mainEntity": {
      "@type": "Store",
      "name": "Mamoe Gabhadiya Herbal Store",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Herbal Products for Order",
        "itemListElement": orderProducts.slice(0, 10).map((product, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "category": product.category,
            "image": `https://mamoegabhadiya.com${product.image}`
          },
          "price": product.price.toString(),
          "priceCurrency": "ZAR",
          "availability": "https://schema.org/InStock",
          "position": index + 1
        }))
      },
      "paymentAccepted": "WhatsApp Order",
      "currenciesAccepted": "ZAR",
      "openingHours": "Mo-Su 08:00-20:00"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <SEO 
        title="Order Premium African Herbal Products Online | WhatsApp Delivery | Mamoe Gabhadiya"
        description="Order authentic African herbal products online. 28+ natural herbs for health, wealth, beauty & healing. Fast WhatsApp delivery across South Africa & Zimbabwe. Expert consultation included. Order now!"
        keywords="order african herbs online, buy herbal products whatsapp, herbal products delivery south africa, zimbabwe herbal delivery, order natural herbs online, whatsapp herbal ordering, african traditional medicine order, herbal supplements order, natural health products delivery, mamoe gabhadiya order, herbal consultation order, traditional healing herbs order, immune booster order, energy herbs order, prosperity herbs order, beauty herbs order, order herbs whatsapp delivery, secure herbal ordering, fast herb delivery"
        url="https://mamoegabhadiya.com/order"
        schemaData={orderPageSchema}
      />
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Place Your Order
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the herbal products you need and provide your details. We'll contact you to confirm your order.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Product Selection */}
            <div className="lg:col-span-3">
              <Card className="bg-card shadow-soft">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Select Products ({orderProducts.length} available)
                    </h2>
                    
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2">
                      {allCategories.map(category => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                          className="text-xs"
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProducts.map(product => (
                      <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <span className="bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full">
                              {product.category}
                            </span>
                          </div>
                        </div>
                        
                        <CardContent className="p-3 h-48">
                          <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-1">{product.name}</h3>
                          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-lg font-bold text-primary">{product.priceDisplay}</span>
                            <Checkbox
                              checked={selectedProducts[product.id] > 0}
                              onCheckedChange={() => handleProductToggle(product.id)}
                            />
                          </div>
                          
                          {selectedProducts[product.id] > 0 && (
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Quantity:</span>
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
                              </div>
                              <div className="text-sm font-medium text-primary">
                                Subtotal: R {product.price * selectedProducts[product.id]}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
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
                    className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white"
                    size="lg"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Order via WhatsApp
                  </Button>
                  
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    * Name and phone required. Order will be sent to our SA WhatsApp for confirmation.
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
