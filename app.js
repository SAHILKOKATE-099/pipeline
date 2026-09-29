/**
 * QUICKY BITE - Food Delivery Engine
 * Dynamic Interactive Application Logic
 */

(function () {
  'use strict';

  // ==========================================
  // 1. DATA REPOSITORY: DISHES & MENU
  // ==========================================
  const MENU_ITEMS = [
    {
      id: 'burger-1',
      title: 'Truffle Smash Double Burger',
      category: 'burgers',
      price: 13.99,
      originalPrice: 16.99,
      rating: 4.9,
      reviewsCount: 382,
      prepTime: '15-20 min',
      calories: 680,
      isVeg: false,
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
      description: 'Double Angus beef patties, aged white cheddar, sautéed wild mushrooms, black truffle aioli on a toasted brioche bun.',
      customizations: {
        sizes: [
          { name: 'Regular (Single Patty)', priceAdd: 0 },
          { name: 'Double Patty Deluxe', priceAdd: 3.50 },
          { name: 'Triple Monster Stack', priceAdd: 5.99 }
        ],
        addons: [
          { name: 'Smoked Crispy Bacon', price: 2.00 },
          { name: 'Extra Truffle Aioli', price: 1.25 },
          { name: 'Melted Cheddar Cheese', price: 1.50 },
          { name: 'Jalapeño Relish', price: 0.99 }
        ],
        spiciness: ['Classic Mild', 'Tangy Medium', 'Flaming Hot']
      }
    },
    {
      id: 'burger-2',
      title: 'Avocado Green Crunch Burger',
      category: 'burgers',
      price: 11.49,
      originalPrice: 13.50,
      rating: 4.8,
      reviewsCount: 215,
      prepTime: '12-18 min',
      calories: 490,
      isVeg: true,
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80',
      description: 'Handcrafted spiced chickpea & quinoa patty, sliced Hass avocado, pickled red onions, cilantro lime crema in artisan multigrain bun.',
      customizations: {
        sizes: [
          { name: 'Standard Burger', priceAdd: 0 },
          { name: 'Protein Double Patty', priceAdd: 2.99 }
        ],
        addons: [
          { name: 'Extra Guacamole Scoop', price: 2.25 },
          { name: 'Vegan Mozzarella', price: 1.75 },
          { name: 'Crispy Onion Straws', price: 1.00 }
        ],
        spiciness: ['Mild', 'Spicy Jalapeño']
      }
    },
    {
      id: 'burger-3',
      title: 'Nashville Fiery Hot Chicken',
      category: 'burgers',
      price: 12.99,
      originalPrice: 15.00,
      rating: 4.85,
      reviewsCount: 410,
      prepTime: '15-22 min',
      calories: 720,
      isVeg: false,
      isBestseller: false,
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=700&q=80',
      description: 'Jumbo buttermilk brined crispy chicken thigh dunked in Nashville cayenne butter, sweet slaw, dill pickles, garlic ranch.',
      customizations: {
        sizes: [
          { name: 'Regular Crispy', priceAdd: 0 },
          { name: 'Colossal Tender Size', priceAdd: 3.25 }
        ],
        addons: [
          { name: 'Double Sweet Pickles', price: 0.75 },
          { name: 'Pepper Jack Cheese', price: 1.50 },
          { name: 'Extra Cayenne Dip', price: 1.20 }
        ],
        spiciness: ['Medium Heat', 'Hot', 'Nashville Inferno (Extreme)']
      }
    },
    {
      id: 'pizza-1',
      title: 'Artisan Wood-Fired Margherita',
      category: 'pizzas',
      price: 14.99,
      originalPrice: 18.00,
      rating: 4.9,
      reviewsCount: 520,
      prepTime: '18-25 min',
      calories: 620,
      isVeg: true,
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=700&q=80',
      description: 'San Marzano DOP tomato sauce, fresh buffalo mozzarella, aromatic sweet basil leaves, Sicilian extra virgin olive oil.',
      customizations: {
        sizes: [
          { name: 'Medium 10" (6 Slices)', priceAdd: 0 },
          { name: 'Large 12" (8 Slices)', priceAdd: 4.50 },
          { name: 'Family 16" (12 Slices)', priceAdd: 8.00 }
        ],
        addons: [
          { name: 'Stuffed Garlic Crust', price: 2.99 },
          { name: 'Extra Burrata Cheese', price: 3.50 },
          { name: 'Kalamata Olives', price: 1.50 }
        ],
        spiciness: ['Original Herb', 'Chili Flakes Infused']
      }
    },
    {
      id: 'pizza-2',
      title: 'Smoky BBQ Pepperoni & Sausage',
      category: 'pizzas',
      price: 16.99,
      originalPrice: 20.50,
      rating: 4.92,
      reviewsCount: 390,
      prepTime: '20-25 min',
      calories: 840,
      isVeg: false,
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
      description: 'Crisp cupping pepperoni, Italian fennel sausage, charred red peppers, smoked provolone, drizzle of hot honey.',
      customizations: {
        sizes: [
          { name: 'Medium 10"', priceAdd: 0 },
          { name: 'Large 12"', priceAdd: 4.50 },
          { name: 'Family 16"', priceAdd: 8.50 }
        ],
        addons: [
          { name: 'Hot Honey Drizzle Cup', price: 1.50 },
          { name: 'Bacon Jam Swirl', price: 2.25 },
          { name: 'Double Pepperoni', price: 2.75 }
        ],
        spiciness: ['Mild Sweet BBQ', 'Spicy Chipotle BBQ']
      }
    },
    {
      id: 'pizza-3',
      title: 'Truffle Mushroom & Wild Herb',
      category: 'pizzas',
      price: 15.89,
      originalPrice: 19.00,
      rating: 4.75,
      reviewsCount: 180,
      prepTime: '18-24 min',
      calories: 590,
      isVeg: true,
      isBestseller: false,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80',
      description: 'Roasted cremini, shiitake and oyster mushrooms, garlic cream sauce, fontina, rosemary thyme dust, white truffle oil.',
      customizations: {
        sizes: [
          { name: 'Medium 10"', priceAdd: 0 },
          { name: 'Large 12"', priceAdd: 4.50 }
        ],
        addons: [
          { name: 'Caramelized Leeks', price: 1.50 },
          { name: 'Extra Truffle Drizzle', price: 2.00 }
        ],
        spiciness: ['Herbaceous Mild']
      }
    },
    {
      id: 'asian-1',
      title: 'Tonkotsu Black Garlic Ramen',
      category: 'asian',
      price: 15.49,
      originalPrice: 18.00,
      rating: 4.95,
      reviewsCount: 460,
      prepTime: '15-20 min',
      calories: 680,
      isVeg: false,
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80',
      description: '18-hour simmered silky pork bone broth, springy wheat noodles, tender rolled chashu pork, molten ajitsuke tamago egg, nori and mayu oil.',
      customizations: {
        sizes: [
          { name: 'Standard Bowl', priceAdd: 0 },
          { name: 'Sumo Size (Double Noodles & Chashu)', priceAdd: 4.99 }
        ],
        addons: [
          { name: 'Extra Ajitama Egg', price: 1.75 },
          { name: 'Spicy Chili Bamboo Shoots', price: 1.25 },
          { name: 'Crispy Pork Dumplings (3pcs)', price: 3.50 }
        ],
        spiciness: ['Original Rich', 'Level 1 Spicy', 'Level 2 Dragon Fire']
      }
    },
    {
      id: 'asian-2',
      title: 'Tokyo Teriyaki Chicken Rice Bowl',
      category: 'asian',
      price: 12.89,
      originalPrice: 14.50,
      rating: 4.8,
      reviewsCount: 290,
      prepTime: '12-16 min',
      calories: 550,
      isVeg: false,
      isBestseller: false,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80',
      description: 'Char-grilled chicken thigh glazed in sweet mirin soy glaze, fluffy Japanese steamed rice, broccoli florets, sesame seeds.',
      customizations: {
        sizes: [
          { name: 'Regular Bowl', priceAdd: 0 },
          { name: 'Protein Mega Bowl', priceAdd: 3.50 }
        ],
        addons: [
          { name: 'Fried Egg Sunny Side Up', price: 1.25 },
          { name: 'Kimchi Side', price: 1.50 },
          { name: 'Extra Teriyaki Glaze', price: 0.75 }
        ],
        spiciness: ['Sweet Soy Mild', 'Spicy Sriracha Blend']
      }
    },
    {
      id: 'asian-3',
      title: 'Spicy Dan Dan Vegan Noodles',
      category: 'asian',
      price: 11.99,
      originalPrice: 13.99,
      rating: 4.78,
      reviewsCount: 165,
      prepTime: '14-18 min',
      calories: 510,
      isVeg: true,
      isBestseller: false,
      image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=700&q=80',
      description: 'Hand-pulled style noodles, savory minced shiitake & crumbled tofu, baby bok choy, toasted Sichuan pepper sesame broth.',
      customizations: {
        sizes: [
          { name: 'Regular Bowl', priceAdd: 0 },
          { name: 'Big Bowl Size', priceAdd: 2.75 }
        ],
        addons: [
          { name: 'Crushed Peanuts Topping', price: 0.75 },
          { name: 'Steamed Edamame Side', price: 2.50 }
        ],
        spiciness: ['Medium Tingling', 'Authentic Sichuan Spicy']
      }
    },
    {
      id: 'healthy-1',
      title: 'Mediterranean Salmon Quinoa Bowl',
      category: 'healthy',
      price: 15.99,
      originalPrice: 18.50,
      rating: 4.88,
      reviewsCount: 310,
      prepTime: '12-16 min',
      calories: 460,
      isVeg: false,
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
      description: 'Wild Alaskan grilled salmon filet, organic tri-color quinoa, Persian cucumbers, Kalamata olives, cherry tomatoes, tahini herb dressing.',
      customizations: {
        sizes: [
          { name: 'Standard Bowl (6oz Filet)', priceAdd: 0 },
          { name: 'Athlete Double Salmon (10oz)', priceAdd: 5.50 }
        ],
        addons: [
          { name: 'Crumbled Sheep Feta', price: 1.50 },
          { name: 'Half Sliced Avocado', price: 1.99 },
          { name: 'Roasted Almond Slivers', price: 1.00 }
        ],
        spiciness: ['Lemon Herb', 'Zesty Pepper']
      }
    },
    {
      id: 'healthy-2',
      title: 'Super Green Goddess Detox Bowl',
      category: 'healthy',
      price: 10.99,
      originalPrice: 12.99,
      rating: 4.7,
      reviewsCount: 140,
      prepTime: '10-14 min',
      calories: 340,
      isVeg: true,
      isBestseller: false,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
      description: 'Baby Tuscan kale, crisp romaine, roasted edamame, cucumber ribbons, hemp hearts, avocado, creamy green goddess dressing.',
      customizations: {
        sizes: [
          { name: 'Regular Salad Bowl', priceAdd: 0 },
          { name: 'Jumbo Share Bowl', priceAdd: 3.50 }
        ],
        addons: [
          { name: 'Organic Grilled Tofu (4oz)', price: 2.50 },
          { name: 'Extra Dressing Cup', price: 0.99 }
        ],
        spiciness: ['Herbaceous Clean']
      }
    },
    {
      id: 'dessert-1',
      title: 'Molten Belgian Chocolate Lava Cake',
      category: 'desserts',
      price: 7.99,
      originalPrice: 9.50,
      rating: 4.96,
      reviewsCount: 640,
      prepTime: '10-15 min',
      calories: 520,
      isVeg: true,
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
      description: 'Warm 70% dark Belgian cocoa sponge cake with an erupting gooey chocolate core, dusted with powdered sugar.',
      customizations: {
        sizes: [
          { name: 'Single Warm Cake', priceAdd: 0 },
          { name: 'Twin Love Pack (2 Cakes)', priceAdd: 6.50 }
        ],
        addons: [
          { name: 'Madagascar Vanilla Bean Ice Cream Cup', price: 2.25 },
          { name: 'Warm Salted Caramel Drizzle', price: 1.20 },
          { name: 'Fresh Raspberries', price: 1.50 }
        ],
        spiciness: ['Sweet Indulgence']
      }
    },
    {
      id: 'dessert-2',
      title: 'New York Salted Caramel Cheesecake',
      category: 'desserts',
      price: 6.99,
      originalPrice: 8.50,
      rating: 4.84,
      reviewsCount: 280,
      prepTime: '5-8 min',
      calories: 460,
      isVeg: true,
      isBestseller: false,
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80',
      description: 'Velvety Philadelphia cream cheese filling on a buttery graham cracker crust, topped with hand-spun salted caramel drizzle.',
      customizations: {
        sizes: [
          { name: 'Slice', priceAdd: 0 },
          { name: 'Double Slice Duo', priceAdd: 5.50 }
        ],
        addons: [
          { name: 'Whipped Chantilly Cream', price: 1.00 },
          { name: 'Toasted Pecans', price: 1.25 }
        ],
        spiciness: ['Sweet Perfection']
      }
    },
    {
      id: 'drinks-1',
      title: 'Belgian Triple Fudge Thickshake',
      category: 'drinks',
      price: 6.49,
      originalPrice: 7.99,
      rating: 4.9,
      reviewsCount: 390,
      prepTime: '5-8 min',
      calories: 420,
      isVeg: true,
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80',
      description: 'Rich dark chocolate gelato churned with fresh milk, chocolate fudge ripples, whipped topping, cocoa crispies.',
      customizations: {
        sizes: [
          { name: 'Regular (16 oz)', priceAdd: 0 },
          { name: 'Large (24 oz)', priceAdd: 1.99 }
        ],
        addons: [
          { name: 'Boba Pearls', price: 1.00 },
          { name: 'Oreo Cookie Crumbs', price: 0.85 },
          { name: 'Extra Whipped Cream', price: 0.60 }
        ],
        spiciness: ['Ice Cold Sweet']
      }
    },
    {
      id: 'drinks-2',
      title: 'Mango Dragonfruit Sparkler',
      category: 'drinks',
      price: 5.49,
      originalPrice: 6.50,
      rating: 4.82,
      reviewsCount: 220,
      prepTime: '5-8 min',
      calories: 140,
      isVeg: true,
      isBestseller: false,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
      description: 'Refreshing blend of Alphonso mango nectar, real red dragonfruit cubes, sparkling green tea and fresh mint over ice.',
      customizations: {
        sizes: [
          { name: 'Regular (16 oz)', priceAdd: 0 },
          { name: 'Large (24 oz)', priceAdd: 1.50 }
        ],
        addons: [
          { name: 'Chia Seeds', price: 0.75 },
          { name: 'Coconut Water Base', price: 1.00 }
        ],
        spiciness: ['Refreshing Fruity']
      }
    }
  ];

  // India-friendly pricing for the demo menu. Values in the original data are
  // converted once at startup, then rendered consistently with the rupee sign.
  const INR_PRICE_MULTIPLIER = 18;
  const formatMoney = amount => `₹${Math.round(Number(amount) || 0).toLocaleString('en-IN')}`;
  MENU_ITEMS.forEach(item => {
    ['price', 'originalPrice'].forEach(key => {
      if (typeof item[key] === 'number') item[key] = Math.round(item[key] * INR_PRICE_MULTIPLIER);
    });
    item.customizations?.sizes?.forEach(option => { option.priceAdd = Math.round(option.priceAdd * INR_PRICE_MULTIPLIER); });
    item.customizations?.addons?.forEach(option => { option.price = Math.round(option.price * INR_PRICE_MULTIPLIER); });
  });

  // ==========================================
  // 2. PROMO CODES CONFIGURATION
  // ==========================================
  const PROMO_CODES = {
    'QUICKY20': { type: 'percent', value: 0.20, desc: '20% Off All Items', minOrder: 15 },
    'FREEDEL': { type: 'free_delivery', value: 49, desc: 'Free Delivery', minOrder: 199 },
    'BITE50': { type: 'fixed', value: 180, desc: '₹180 Off Orders ₹720+', minOrder: 720 }
  };

  // ==========================================
  // 3. PERSISTENT APPLICATION STATE
  // ==========================================
  const state = {
    theme: localStorage.getItem('qb_theme') || 'light',
    address: localStorage.getItem('qb_address') || '104 Main Street, Downtown',
    cart: JSON.parse(localStorage.getItem('qb_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('qb_wishlist') || '[]'),
    orders: JSON.parse(localStorage.getItem('qb_orders') || '[]'),
    appliedPromo: null,
    activeOrder: null,
    liveTrackerInterval: null,
    filter: {
      category: 'all',
      vegOnly: false,
      sort: 'popular',
      query: ''
    }
  };

  // Keep carts created before the INR update usable.
  if (localStorage.getItem('qb_currency_version') !== 'inr-v1') {
    state.cart.forEach(item => { item.unitPrice = Math.round((item.unitPrice || 0) * INR_PRICE_MULTIPLIER); });
    state.orders.forEach(order => {
      order.total = Math.round((order.total || 0) * INR_PRICE_MULTIPLIER);
      order.subtotal = Math.round((order.subtotal || 0) * INR_PRICE_MULTIPLIER);
      order.items?.forEach(item => { item.price = Math.round((item.price || 0) * INR_PRICE_MULTIPLIER); });
    });
    localStorage.setItem('qb_currency_version', 'inr-v1');
    localStorage.setItem('qb_cart', JSON.stringify(state.cart));
    localStorage.setItem('qb_orders', JSON.stringify(state.orders));
  }

  // Seed sample initial order if fresh browser
  if (state.orders.length === 0) {
    state.orders.push({
      id: 'QB-84912',
      date: new Date(Date.now() - 3600000 * 24).toLocaleString(),
      status: 'Delivered',
      items: [
        { name: 'Truffle Smash Double Burger', qty: 2, price: 252 },
        { name: 'Belgian Triple Fudge Thickshake', qty: 1, price: 117 }
      ],
      total: 621,
      address: '104 Main Street, Downtown'
    });
    localStorage.setItem('qb_orders', JSON.stringify(state.orders));
  }

  // ==========================================
  // 4. DOM ELEMENT CACHE
  // ==========================================
  const DOM = {
    // Theme & Navigation
    html: document.documentElement,
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),
    navbar: document.getElementById('navbar'),
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    wishlistModalBtn: document.getElementById('wishlistModalBtn'),
    wishlistCount: document.getElementById('wishlistCount'),
    ordersHistoryBtn: document.getElementById('ordersHistoryBtn'),
    cartOpenBtn: document.getElementById('cartOpenBtn'),
    cartBadgeCount: document.getElementById('cartBadgeCount'),
    cartNavTotal: document.getElementById('cartNavTotal'),
    locationSelectorBtn: document.getElementById('locationSelectorBtn'),
    currentAddressText: document.getElementById('currentAddressText'),

    // Hero buttons
    liveOrderDemoBtn: document.getElementById('liveOrderDemoBtn'),

    // Filters & Grid
    categoryPills: document.getElementById('categoryPills'),
    vegOnlyToggle: document.getElementById('vegOnlyToggle'),
    sortSelect: document.getElementById('sortSelect'),
    filterStatus: document.getElementById('filterStatus'),
    searchQueryBadge: document.getElementById('searchQueryBadge'),
    resetFilterBtn: document.getElementById('resetFilterBtn'),
    foodGrid: document.getElementById('foodGrid'),
    emptyState: document.getElementById('emptyState'),
    emptyResetBtn: document.getElementById('emptyResetBtn'),

    // Cart Drawer
    cartDrawer: document.getElementById('cartDrawer'),
    cartBackdrop: document.getElementById('cartBackdrop'),
    cartCloseBtn: document.getElementById('cartCloseBtn'),
    cartDrawerCount: document.getElementById('cartDrawerCount'),
    cartItemsContainer: document.getElementById('cartItemsContainer'),
    meterText: document.getElementById('meterText'),
    meterFill: document.getElementById('meterFill'),
    promoInput: document.getElementById('promoInput'),
    applyPromoBtn: document.getElementById('applyPromoBtn'),
    promoStatusMessage: document.getElementById('promoStatusMessage'),
    subtotalPrice: document.getElementById('subtotalPrice'),
    discountRow: document.getElementById('discountRow'),
    discountName: document.getElementById('discountName'),
    discountPrice: document.getElementById('discountPrice'),
    deliveryPrice: document.getElementById('deliveryPrice'),
    taxPrice: document.getElementById('taxPrice'),
    grandTotalPrice: document.getElementById('grandTotalPrice'),
    proceedToCheckoutBtn: document.getElementById('proceedToCheckoutBtn'),

    // Customization Modal
    customizeModalOverlay: document.getElementById('customizeModalOverlay'),
    closeCustomizeModal: document.getElementById('closeCustomizeModal'),
    customizeModalBody: document.getElementById('customizeModalBody'),

    // Checkout Modal
    checkoutModalOverlay: document.getElementById('checkoutModalOverlay'),
    closeCheckoutModal: document.getElementById('closeCheckoutModal'),
    checkoutForm: document.getElementById('checkoutForm'),
    checkoutSummaryCount: document.getElementById('checkoutSummaryCount'),
    checkoutSummarySubtotal: document.getElementById('checkoutSummarySubtotal'),
    checkoutSummaryTotal: document.getElementById('checkoutSummaryTotal'),
    custAddress: document.getElementById('custAddress'),

    // Live Tracker Modal
    trackerModalOverlay: document.getElementById('trackerModalOverlay'),
    closeTrackerModal: document.getElementById('closeTrackerModal'),
    trackerOrderId: document.getElementById('trackerOrderId'),
    trackerEta: document.getElementById('trackerEta'),
    step1: document.getElementById('step1'),
    step2: document.getElementById('step2'),
    step3: document.getElementById('step3'),
    step4: document.getElementById('step4'),
    driverMapMarker: document.getElementById('driverMapMarker'),
    trackerItemsList: document.getElementById('trackerItemsList'),
    callRiderBtn: document.getElementById('callRiderBtn'),

    // History Modal
    historyModalOverlay: document.getElementById('historyModalOverlay'),
    closeHistoryModal: document.getElementById('closeHistoryModal'),
    historyListContainer: document.getElementById('historyListContainer'),

    // Wishlist Modal
    wishlistModalOverlay: document.getElementById('wishlistModalOverlay'),
    closeWishlistModal: document.getElementById('closeWishlistModal'),
    wishlistGridContainer: document.getElementById('wishlistGridContainer'),

    // Location Modal
    locationModalOverlay: document.getElementById('locationModalOverlay'),
    closeLocationModal: document.getElementById('closeLocationModal'),
    newAddressInput: document.getElementById('newAddressInput'),
    saveCustomAddressBtn: document.getElementById('saveCustomAddressBtn'),

    // Toast & Mobile Bar & Confetti
    toastContainer: document.getElementById('toastContainer'),
    mobileCartFloat: document.getElementById('mobileCartFloat'),
    mobileCartCount: document.getElementById('mobileCartCount'),
    mobileCartPrice: document.getElementById('mobileCartPrice'),
    mobileCartOpenBtn: document.getElementById('mobileCartOpenBtn'),
    confettiCanvas: document.getElementById('confettiCanvas')
  };

  // ==========================================
  // 5. TOAST NOTIFICATIONS & CONFETTI ENGINE
  // ==========================================
  function showToast(message, type = 'info', icon = 'fa-circle-info') {
    if (!DOM.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span>${message}</span>
    `;
    DOM.toastContainer.appendChild(toast);

    // Animate in
    setTimeout(() => toast.classList.add('show'), 20);

    // Auto dismiss
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  function launchConfetti() {
    const canvas = DOM.confettiCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#FF5A36', '#00B887', '#38BDF8', '#F59E0B', '#A855F7', '#EC4899'];
    for (let i = 0; i < 110; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height * 0.5,
        w: Math.random() * 9 + 5,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 4 + 3,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8
      });
    }

    let animationFrame;
    const startTime = Date.now();

    function renderConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const elapsed = Date.now() - startTime;

      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      if (elapsed < 3500) {
        animationFrame = requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animationFrame);
      }
    }

    renderConfetti();
  }

  // ==========================================
  // 6. THEME INITIALIZATION & TOGGLE
  // ==========================================
  function applyTheme(theme) {
    state.theme = theme;
    DOM.html.setAttribute('data-theme', theme);
    localStorage.setItem('qb_theme', theme);
    if (DOM.themeIcon) {
      if (theme === 'dark') {
        DOM.themeIcon.className = 'fa-solid fa-sun';
      } else {
        DOM.themeIcon.className = 'fa-solid fa-moon';
      }
    }
  }

  function toggleTheme() {
    const nextTheme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
    showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info', nextTheme === 'dark' ? 'fa-moon' : 'fa-sun');
  }

  // ==========================================
  // 7. LOCATION & ADDRESS HANDLING
  // ==========================================
  function setAddress(newAddr) {
    if (!newAddr.trim()) return;
    state.address = newAddr.trim();
    localStorage.setItem('qb_address', state.address);
    if (DOM.currentAddressText) {
      DOM.currentAddressText.textContent = state.address;
    }
    if (DOM.custAddress) {
      DOM.custAddress.value = state.address;
    }
    closeModal(DOM.locationModalOverlay);
    showToast(`Delivery location set to: ${state.address}`, 'success', 'fa-map-pin');
  }

  // ==========================================
  // 8. MENU RENDERING & FILTERING
  // ==========================================
  function getFilteredItems() {
    let items = [...MENU_ITEMS];

    // 1. Category Filter
    if (state.filter.category !== 'all') {
      items = items.filter(item => item.category === state.filter.category);
    }

    // 2. Veg only Filter
    if (state.filter.vegOnly) {
      items = items.filter(item => item.isVeg);
    }

    // 3. Search Query Filter
    if (state.filter.query.trim()) {
      const q = state.filter.query.toLowerCase().trim();
      items = items.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }

    // 4. Sort
    switch (state.filter.sort) {
      case 'rating':
        items.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-asc':
        items.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        items.sort((a, b) => b.price - a.price);
        break;
      case 'prep-time':
        items.sort((a, b) => parseInt(a.prepTime) - parseInt(b.prepTime));
        break;
      case 'popular':
      default:
        items.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
    }

    return items;
  }

  function renderFoodGrid() {
    const items = getFilteredItems();

    // Handle Active Filter Indicator
    if (state.filter.query.trim()) {
      DOM.filterStatus.style.display = 'flex';
      DOM.searchQueryBadge.textContent = state.filter.query;
    } else {
      DOM.filterStatus.style.display = 'none';
    }

    if (items.length === 0) {
      DOM.foodGrid.innerHTML = '';
      DOM.emptyState.style.display = 'block';
      return;
    }

    DOM.emptyState.style.display = 'none';

    DOM.foodGrid.innerHTML = items.map(item => {
      const isFav = state.wishlist.includes(item.id);
      return `
        <article class="food-card" data-id="${item.id}">
          <div class="card-image-box">
            <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy" />
            
            <div class="card-badge-container">
              ${item.isBestseller ? '<span class="badge-bestseller"><i class="fa-solid fa-fire"></i> Popular</span>' : ''}
              <span class="badge-diet ${item.isVeg ? 'veg' : 'non-veg'}">
                <i class="fa-solid ${item.isVeg ? 'fa-leaf' : 'fa-drumstick-bite'}"></i>
                ${item.isVeg ? 'Veg' : 'Non-Veg'}
              </span>
            </div>

            <button class="fav-btn ${isFav ? 'active' : ''}" data-fav-id="${item.id}" aria-label="Add to Wishlist" title="Add to Wishlist">
              <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>

            <div class="card-quick-stats">
              <span class="pill-stat rating">
                <i class="fa-solid fa-star"></i> ${item.rating} (${item.reviewsCount})
              </span>
              <span class="pill-stat">
                <i class="fa-solid fa-stopwatch"></i> ${item.prepTime}
              </span>
            </div>
          </div>

          <div class="card-content">
            <div class="card-title-row">
              <h3 class="card-title">${item.title}</h3>
            </div>
            <p class="card-desc">${item.description}</p>
            
            <div class="card-footer-row">
              <div class="price-container">
        <span class="current-price">${formatMoney(item.price)}</span>
        ${item.originalPrice ? `<span class="original-price">${formatMoney(item.originalPrice)}</span>` : ''}
              </div>
              <button class="add-cart-btn" data-action="customize" data-id="${item.id}">
                <i class="fa-solid fa-plus"></i> Add
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners to cards
    attachCardEvents();
  }

  function attachCardEvents() {
    // Wishlist toggles
    document.querySelectorAll('.fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-fav-id');
        toggleWishlist(id);
      });
    });

    // Add / Customize buttons
    document.querySelectorAll('[data-action="customize"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        openCustomizationModal(id);
      });
    });
  }

  // ==========================================
  // 9. WISHLIST MANAGEMENT
  // ==========================================
  function toggleWishlist(itemId) {
    const index = state.wishlist.indexOf(itemId);
    const item = MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;

    if (index > -1) {
      state.wishlist.splice(index, 1);
      showToast(`Removed "${item.title}" from saved bites`, 'info', 'fa-heart-crack');
    } else {
      state.wishlist.push(itemId);
      showToast(`Added "${item.title}" to favorites!`, 'success', 'fa-heart');
    }

    localStorage.setItem('qb_wishlist', JSON.stringify(state.wishlist));
    updateWishlistUI();
    renderFoodGrid();
  }

  function updateWishlistUI() {
    if (DOM.wishlistCount) {
      DOM.wishlistCount.textContent = state.wishlist.length;
    }
  }

  function renderWishlistModal() {
    const container = DOM.wishlistGridContainer;
    if (!container) return;

    if (state.wishlist.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
          <i class="fa-regular fa-heart" style="font-size: 3rem; margin-bottom: 0.8rem; color: var(--text-light);"></i>
          <h4>Your wishlist is empty</h4>
          <p style="font-size: 0.85rem; margin-top: 0.3rem;">Tap the heart on any food card to bookmark your dream meals!</p>
        </div>
      `;
      return;
    }

    const items = MENU_ITEMS.filter(i => state.wishlist.includes(i.id));
    container.innerHTML = items.map(item => `
      <div class="wishlist-item-row">
        <img src="${item.image}" alt="${item.title}" class="wishlist-thumb" />
        <div class="wishlist-item-info">
          <h4>${item.title}</h4>
          <span>${formatMoney(item.price)}</span>
        </div>
        <button class="btn btn-primary btn-sm" style="padding: 0.45rem 0.9rem; font-size: 0.8rem;" data-wish-add="${item.id}">
          <i class="fa-solid fa-plus"></i> Order
        </button>
        <button class="cart-item-delete" data-wish-remove="${item.id}" title="Remove">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join('');

    container.querySelectorAll('[data-wish-add]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-wish-add');
        closeModal(DOM.wishlistModalOverlay);
        openCustomizationModal(id);
      });
    });

    container.querySelectorAll('[data-wish-remove]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-wish-remove');
        toggleWishlist(id);
        renderWishlistModal();
      });
    });
  }

  // ==========================================
  // 10. ITEM CUSTOMIZATION MODAL
  // ==========================================
  let currentCustomizingItem = null;

  function openCustomizationModal(itemId) {
    const item = MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;
    currentCustomizingItem = item;

    const body = DOM.customizeModalBody;
    body.innerHTML = `
      <div class="customize-hero">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <div class="customize-content">
        <div class="customize-header">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>

        <!-- Portion Size Selection -->
        ${item.customizations.sizes ? `
          <div class="custom-section">
            <div class="custom-section-title">
              <span>Choose Portion Size</span>
              <span class="badge-req">Required</span>
            </div>
            <div class="custom-options-list">
              ${item.customizations.sizes.map((size, idx) => `
                <label class="option-choice">
                  <div class="option-left">
                    <input type="radio" name="customSize" value="${size.name}" data-price="${size.priceAdd}" ${idx === 0 ? 'checked' : ''} />
                    <span class="option-label">${size.name}</span>
                  </div>
                  <span class="option-price">${size.priceAdd > 0 ? `+${formatMoney(size.priceAdd)}` : 'Standard'}</span>
                </label>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Add-on Extras -->
        ${item.customizations.addons && item.customizations.addons.length ? `
          <div class="custom-section">
            <div class="custom-section-title">
              <span>Delicious Add-ons</span>
              <span style="font-size: 0.72rem; color: var(--text-muted);">Optional</span>
            </div>
            <div class="custom-options-list">
              ${item.customizations.addons.map(addon => `
                <label class="option-choice">
                  <div class="option-left">
                    <input type="checkbox" name="customAddon" value="${addon.name}" data-price="${addon.price}" />
                    <span class="option-label">${addon.name}</span>
                  </div>
                  <span class="option-price">+${formatMoney(addon.price)}</span>
                </label>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Spiciness or Seasoning Choice -->
        ${item.customizations.spiciness ? `
          <div class="custom-section">
            <div class="custom-section-title">
              <span>Spice / Seasoning Level</span>
            </div>
            <div class="custom-options-list">
              ${item.customizations.spiciness.map((spice, idx) => `
                <label class="option-choice">
                  <div class="option-left">
                    <input type="radio" name="customSpice" value="${spice}" ${idx === 0 ? 'checked' : ''} />
                    <span class="option-label">${spice}</span>
                  </div>
                </label>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Special Instructions -->
        <div class="custom-section">
          <div class="custom-section-title">
            <span>Special Chef Notes</span>
          </div>
          <input type="text" id="customItemNotes" placeholder="e.g. dressing on the side, extra crispy..." style="width: 100%; padding: 0.65rem 0.85rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-surface-muted); color: var(--text-main);" />
        </div>

        <!-- Customization Footer with Dynamic Price & Add -->
        <div class="customize-footer">
          <div class="qty-stepper">
            <button class="qty-btn" id="customQtyMinus"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-val" id="customQtyVal">1</span>
            <button class="qty-btn" id="customQtyPlus"><i class="fa-solid fa-plus"></i></button>
          </div>
          <button class="btn btn-primary btn-lg" id="confirmAddToCartBtn" style="flex: 1;">
            <span>Add to Cart &bull; <span id="customCalcTotal">${formatMoney(item.price)}</span></span>
          </button>
        </div>
      </div>
    `;

    // Recalculate modal price dynamically
    let modalQty = 1;

    function recalculateModalTotal() {
      let base = item.price;
      const sizeRadio = body.querySelector('input[name="customSize"]:checked');
      if (sizeRadio) base += parseFloat(sizeRadio.getAttribute('data-price') || 0);

      body.querySelectorAll('input[name="customAddon"]:checked').forEach(chk => {
        base += parseFloat(chk.getAttribute('data-price') || 0);
      });

      const total = base * modalQty;
      const totalSpan = document.getElementById('customCalcTotal');
      if (totalSpan) totalSpan.textContent = formatMoney(total);
      return { unitPrice: base, total };
    }

    // Attach stepper & recalculation events
    body.querySelectorAll('input').forEach(input => {
      input.addEventListener('change', recalculateModalTotal);
    });

    const minusBtn = document.getElementById('customQtyMinus');
    const plusBtn = document.getElementById('customQtyPlus');
    const qtyVal = document.getElementById('customQtyVal');

    minusBtn.addEventListener('click', () => {
      if (modalQty > 1) {
        modalQty--;
        qtyVal.textContent = modalQty;
        recalculateModalTotal();
      }
    });

    plusBtn.addEventListener('click', () => {
      modalQty++;
      qtyVal.textContent = modalQty;
      recalculateModalTotal();
    });

    // Add to cart submission
    const confirmBtn = document.getElementById('confirmAddToCartBtn');
    confirmBtn.addEventListener('click', () => {
      const { unitPrice } = recalculateModalTotal();
      const sizeChecked = body.querySelector('input[name="customSize"]:checked');
      const spiceChecked = body.querySelector('input[name="customSpice"]:checked');
      const addonsChecked = Array.from(body.querySelectorAll('input[name="customAddon"]:checked')).map(c => c.value);
      const notes = document.getElementById('customItemNotes').value.trim();

      const cartItem = {
        cartItemId: `${item.id}-${Date.now()}`,
        itemId: item.id,
        title: item.title,
        unitPrice: unitPrice,
        qty: modalQty,
        image: item.image,
        size: sizeChecked ? sizeChecked.value : '',
        spice: spiceChecked ? spiceChecked.value : '',
        addons: addonsChecked,
        notes: notes
      };

      addToCart(cartItem);
      closeModal(DOM.customizeModalOverlay);
      openCartDrawer();
    });

    openModal(DOM.customizeModalOverlay);
  }

  // ==========================================
  // 11. CART MANAGEMENT & CALCULATIONS
  // ==========================================
  function addToCart(cartItem) {
    // Check if an exact match exists
    const existing = state.cart.find(item =>
      item.itemId === cartItem.itemId &&
      item.size === cartItem.size &&
      item.spice === cartItem.spice &&
      JSON.stringify(item.addons) === JSON.stringify(cartItem.addons) &&
      item.notes === cartItem.notes
    );

    if (existing) {
      existing.qty += cartItem.qty;
    } else {
      state.cart.push(cartItem);
    }

    saveCart();
    renderCart();
    showToast(`Added ${cartItem.qty}x "${cartItem.title}" to cart!`, 'success', 'fa-bag-shopping');
  }

  function removeFromCart(cartItemId) {
    state.cart = state.cart.filter(item => item.cartItemId !== cartItemId);
    saveCart();
    renderCart();
  }

  function updateCartItemQty(cartItemId, delta) {
    const item = state.cart.find(i => i.cartItemId === cartItemId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(cartItemId);
    } else {
      saveCart();
      renderCart();
    }
  }

  function saveCart() {
    localStorage.setItem('qb_cart', JSON.stringify(state.cart));
  }

  function calculateCartTotals() {
    let subtotal = 0;
    let totalItems = 0;

    state.cart.forEach(item => {
      subtotal += item.unitPrice * item.qty;
      totalItems += item.qty;
    });

    let discount = 0;
    let deliveryFee = subtotal > 0 ? 49 : 0;

    // Apply promo if valid
    if (state.appliedPromo && PROMO_CODES[state.appliedPromo]) {
      const promo = PROMO_CODES[state.appliedPromo];
      if (subtotal >= promo.minOrder) {
        if (promo.type === 'percent') {
          discount = subtotal * promo.value;
        } else if (promo.type === 'fixed') {
          discount = Math.min(subtotal, promo.value);
        } else if (promo.type === 'free_delivery') {
          deliveryFee = 0;
          discount = 49;
        }
      }
    }

    // Free delivery above ₹599 threshold
    if (subtotal >= 599 && deliveryFee > 0) {
      deliveryFee = 0;
    }

    const taxes = subtotal > 0 ? (subtotal - discount) * 0.08 : 0;
    const grandTotal = Math.max(0, subtotal - discount + deliveryFee + taxes);

    return {
      subtotal,
      totalItems,
      discount,
      deliveryFee,
      taxes,
      grandTotal
    };
  }

  function renderCart() {
    const { subtotal, totalItems, discount, deliveryFee, taxes, grandTotal } = calculateCartTotals();

    // 1. Navbar badge & Mobile pill sync
    if (DOM.cartBadgeCount) DOM.cartBadgeCount.textContent = totalItems;
    if (DOM.cartNavTotal) DOM.cartNavTotal.textContent = formatMoney(grandTotal);
    if (DOM.cartDrawerCount) DOM.cartDrawerCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;

    if (DOM.mobileCartFloat) {
      if (totalItems > 0) {
        DOM.mobileCartFloat.style.display = 'flex';
        DOM.mobileCartCount.textContent = `${totalItems} items in order`;
        DOM.mobileCartPrice.textContent = formatMoney(grandTotal);
      } else {
        DOM.mobileCartFloat.style.display = 'none';
      }
    }

    // 2. Free delivery progress meter
    const freeDeliveryGoal = 599;
    if (subtotal >= freeDeliveryGoal || (state.appliedPromo === 'FREEDEL')) {
      DOM.meterText.innerHTML = '🎉 You unlocked <strong>FREE Delivery</strong>!';
      DOM.meterFill.style.width = '100%';
    } else {
      const remaining = freeDeliveryGoal - subtotal;
      const percent = Math.min(100, (subtotal / freeDeliveryGoal) * 100);
      DOM.meterText.innerHTML = `Add <strong>${formatMoney(remaining)}</strong> more for FREE Delivery!`;
      DOM.meterFill.style.width = `${percent}%`;
    }

    // 3. Render Cart Items List
    const container = DOM.cartItemsContainer;
    if (state.cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-message">
          <i class="fa-solid fa-basket-shopping"></i>
          <h4>Your cart is empty</h4>
          <p>Explore our menu and add your favorite dishes to begin!</p>
        </div>
      `;
      DOM.proceedToCheckoutBtn.disabled = true;
      DOM.proceedToCheckoutBtn.style.opacity = '0.5';
    } else {
      DOM.proceedToCheckoutBtn.disabled = false;
      DOM.proceedToCheckoutBtn.style.opacity = '1';
      container.innerHTML = state.cart.map(item => `
        <div class="cart-item-card" data-cart-id="${item.cartItemId}">
          <img src="${item.image}" alt="${item.title}" class="cart-item-thumb" />
          <div class="cart-item-details">
            <div class="cart-item-title-row">
              <span class="cart-item-name">${item.title}</span>
              <button class="cart-item-delete" data-delete-id="${item.cartItemId}" title="Remove item">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            
            <div class="cart-item-customs">
              ${item.size ? `<span>${item.size}</span> &bull; ` : ''}
              ${item.spice ? `<span>${item.spice}</span> &bull; ` : ''}
              ${item.addons && item.addons.length ? `<span>+${item.addons.join(', ')}</span>` : ''}
              ${item.notes ? `<div style="font-style: italic; color: var(--text-light); margin-top: 2px;">Note: "${item.notes}"</div>` : ''}
            </div>

            <div class="cart-item-bottom">
              <span class="cart-item-price">${formatMoney(item.unitPrice * item.qty)}</span>
              <div class="qty-stepper">
                <button class="qty-btn" data-cart-minus="${item.cartItemId}"><i class="fa-solid fa-minus"></i></button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" data-cart-plus="${item.cartItemId}"><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
          </div>
        </div>
      `).join('');

      // Wire cart item event listeners
      container.querySelectorAll('[data-cart-minus]').forEach(btn => {
        btn.addEventListener('click', () => updateCartItemQty(btn.getAttribute('data-cart-minus'), -1));
      });
      container.querySelectorAll('[data-cart-plus]').forEach(btn => {
        btn.addEventListener('click', () => updateCartItemQty(btn.getAttribute('data-cart-plus'), 1));
      });
      container.querySelectorAll('[data-delete-id]').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(btn.getAttribute('data-delete-id')));
      });
    }

    // 4. Update Price Breakdown Rows
    DOM.subtotalPrice.textContent = formatMoney(subtotal);
    if (discount > 0) {
      DOM.discountRow.style.display = 'flex';
      DOM.discountName.textContent = state.appliedPromo || 'Free Del';
      DOM.discountPrice.textContent = `-${formatMoney(discount)}`;
    } else {
      DOM.discountRow.style.display = 'none';
    }

    DOM.deliveryPrice.textContent = deliveryFee === 0 ? 'FREE' : formatMoney(deliveryFee);
    DOM.taxPrice.textContent = formatMoney(taxes);
    DOM.grandTotalPrice.textContent = formatMoney(grandTotal);
  }

  // ==========================================
  // 12. PROMO CODE APPLICATION
  // ==========================================
  function applyCoupon(code) {
    if (!code) return;
    const cleanCode = code.toUpperCase().trim();
    const statusBox = DOM.promoStatusMessage;

    if (!PROMO_CODES[cleanCode]) {
      statusBox.className = 'promo-status error';
      statusBox.textContent = '❌ Invalid or expired coupon code!';
      return;
    }

    const { subtotal } = calculateCartTotals();
    const promo = PROMO_CODES[cleanCode];

    if (subtotal < promo.minOrder) {
      statusBox.className = 'promo-status error';
      statusBox.textContent = `⚠️ Requires minimum order of ${formatMoney(promo.minOrder)}`;
      return;
    }

    state.appliedPromo = cleanCode;
    statusBox.className = 'promo-status success';
    statusBox.textContent = `🎉 Coupon applied: ${promo.desc}!`;
    renderCart();
    showToast(`Code "${cleanCode}" applied successfully!`, 'success', 'fa-tag');
  }

  // ==========================================
  // 13. DRAWER & MODAL HELPERS
  // ==========================================
  function openCartDrawer() {
    DOM.cartDrawer.classList.add('open');
    DOM.cartBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    DOM.cartDrawer.classList.remove('open');
    DOM.cartBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ==========================================
  // 14. CHECKOUT PROCESS
  // ==========================================
  function openCheckout() {
    if (state.cart.length === 0) {
      showToast('Your cart is empty! Add items first.', 'warning', 'fa-triangle-exclamation');
      return;
    }

    closeCartDrawer();
    const { subtotal, totalItems, grandTotal } = calculateCartTotals();
    DOM.checkoutSummaryCount.textContent = totalItems;
    DOM.checkoutSummarySubtotal.textContent = formatMoney(subtotal);
    DOM.checkoutSummaryTotal.textContent = formatMoney(grandTotal);
    DOM.custAddress.value = state.address;

    openModal(DOM.checkoutModalOverlay);
  }

  function handleCheckoutSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const notes = document.getElementById('custNotes').value.trim();
    const paymentRadio = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentMethod = paymentRadio ? paymentRadio.value : 'card';

    if (!name || !phone || !address) {
      showToast('Please fill out all required contact and delivery fields.', 'warning');
      return;
    }

    const { grandTotal, subtotal } = calculateCartTotals();
    const orderId = `QB-${Math.floor(10000 + Math.random() * 90000)}`;

    const newOrder = {
      id: orderId,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Confirmed',
      items: state.cart.map(c => ({
        name: c.title,
        qty: c.qty,
        price: c.unitPrice,
        size: c.size,
        addons: c.addons
      })),
      total: grandTotal,
      subtotal: subtotal,
      address: address,
      customer: { name, phone, notes },
      paymentMethod: paymentMethod
    };

    // Save to order history
    state.orders.unshift(newOrder);
    localStorage.setItem('qb_orders', JSON.stringify(state.orders));

    // Clear Cart
    state.cart = [];
    state.appliedPromo = null;
    saveCart();
    renderCart();

    // Close checkout & launch confetti
    closeModal(DOM.checkoutModalOverlay);
    launchConfetti();
    showToast(`Order #${orderId} placed successfully!`, 'success', 'fa-circle-check');

    // Initiate and open Live Tracker
    startLiveTracking(newOrder);
  }

  // ==========================================
  // 15. LIVE ORDER TRACKER ENGINE
  // ==========================================
  function startLiveTracking(order) {
    state.activeOrder = order;
    clearInterval(state.liveTrackerInterval);

    DOM.trackerOrderId.textContent = order.id;
    DOM.trackerEta.textContent = '20 - 24 mins';

    // Render tracker items summary
    if (DOM.trackerItemsList) {
      DOM.trackerItemsList.innerHTML = `
        <h5>Items in this Order (${order.items.reduce((s, i) => s + i.qty, 0)} items) &bull; Total: ${formatMoney(order.total)}</h5>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.35rem; padding-left: 0.2rem;">
          ${order.items.map(i => `
            <li style="display: flex; justify-content: space-between;">
              <span><strong>${i.qty}x</strong> ${i.name}</span>
              <span style="font-weight: 700;">${formatMoney(i.price * i.qty)}</span>
            </li>
          `).join('')}
        </ul>
      `;
    }

    // Reset steps
    [DOM.step1, DOM.step2, DOM.step3, DOM.step4].forEach(s => {
      s.classList.remove('active', 'completed');
    });

    DOM.step1.classList.add('active');
    DOM.driverMapMarker.style.left = '20%';

    openModal(DOM.trackerModalOverlay);

    // Dynamic progression simulation
    let currentStepIndex = 1;
    state.liveTrackerInterval = setInterval(() => {
      currentStepIndex++;

      if (currentStepIndex === 2) {
        DOM.step1.classList.add('completed');
        DOM.step2.classList.add('active');
        DOM.trackerEta.textContent = '14 - 18 mins';
        DOM.driverMapMarker.style.left = '35%';
        showToast('Chef is preparing your fresh order in the kitchen!', 'info', 'fa-fire-burner');
      } else if (currentStepIndex === 3) {
        DOM.step2.classList.add('completed');
        DOM.step3.classList.add('active');
        DOM.trackerEta.textContent = '6 - 9 mins';
        DOM.driverMapMarker.style.left = '65%';
        showToast('Alex Rivera picked up your order and is riding to you!', 'info', 'fa-motorcycle');
      } else if (currentStepIndex === 4) {
        DOM.step3.classList.add('completed');
        DOM.step4.classList.add('active');
        DOM.trackerEta.textContent = 'Arrived!';
        DOM.driverMapMarker.style.left = '85%';
        launchConfetti();
        showToast('Ding-Dong! Your Quicky Bite delivery has arrived!', 'success', 'fa-bell');
        clearInterval(state.liveTrackerInterval);
      }
    }, 7000); // Progresses every 7 seconds for an engaging demo
  }

  // ==========================================
  // 16. ORDER HISTORY MODAL
  // ==========================================
  function renderHistoryModal() {
    const container = DOM.historyListContainer;
    if (!container) return;

    if (state.orders.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-clock-rotate-left" style="font-size: 2.5rem; margin-bottom: 0.6rem;"></i>
          <h4>No past orders found</h4>
          <p>Your previous orders and digital invoices will show up here.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = state.orders.map(order => `
      <div class="history-card">
        <div class="history-header">
          <span class="history-order-num">#${order.id}</span>
          <span class="history-status-badge">${order.status || 'Delivered'}</span>
        </div>
        <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.4rem;">
          <i class="fa-regular fa-calendar"></i> ${order.date} &bull; <i class="fa-solid fa-location-dot"></i> ${order.address}
        </div>
        <div class="history-items-text">
          ${order.items.map(i => `${i.qty}x ${i.name}`).join(', ')}
        </div>
        <div class="history-footer">
          <span class="history-total">Total: ${formatMoney(order.total)}</span>
          <button class="btn btn-secondary btn-sm" data-reorder-id="${order.id}" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">
            <i class="fa-solid fa-rotate-right"></i> Re-order
          </button>
        </div>
      </div>
    `).join('');

    // Reorder event
    container.querySelectorAll('[data-reorder-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-reorder-id');
        const pastOrder = state.orders.find(o => o.id === id);
        if (!pastOrder) return;

        pastOrder.items.forEach(pastItem => {
          const original = MENU_ITEMS.find(m => m.title === pastItem.name) || MENU_ITEMS[0];
          state.cart.push({
            cartItemId: `${original.id}-${Date.now()}-${Math.random()}`,
            itemId: original.id,
            title: pastItem.name,
            unitPrice: pastItem.price,
            qty: pastItem.qty,
            image: original.image,
            size: pastItem.size || '',
            addons: pastItem.addons || []
          });
        });

        saveCart();
        renderCart();
        closeModal(DOM.historyModalOverlay);
        openCartDrawer();
        showToast(`Items from Order #${id} added to cart!`, 'success', 'fa-bag-shopping');
      });
    });
  }

  // ==========================================
  // 17. EVENT LISTENERS INITIALIZATION
  // ==========================================
  function initEventListeners() {
    // Theme toggle
    DOM.themeToggleBtn.addEventListener('click', toggleTheme);

    // Navbar Scroll Shadow
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        DOM.navbar.classList.add('scrolled');
      } else {
        DOM.navbar.classList.remove('scrolled');
      }
    });

    // Search Input & Clear
    DOM.searchInput.addEventListener('input', (e) => {
      state.filter.query = e.target.value;
      if (state.filter.query.trim()) {
        DOM.clearSearchBtn.style.display = 'block';
      } else {
        DOM.clearSearchBtn.style.display = 'none';
      }
      renderFoodGrid();
    });

    DOM.clearSearchBtn.addEventListener('click', () => {
      DOM.searchInput.value = '';
      state.filter.query = '';
      DOM.clearSearchBtn.style.display = 'none';
      renderFoodGrid();
    });

    DOM.resetFilterBtn.addEventListener('click', () => {
      DOM.searchInput.value = '';
      state.filter.query = '';
      DOM.clearSearchBtn.style.display = 'none';
      renderFoodGrid();
    });

    DOM.emptyResetBtn.addEventListener('click', () => {
      DOM.searchInput.value = '';
      state.filter.query = '';
      state.filter.category = 'all';
      state.filter.vegOnly = false;
      DOM.vegOnlyToggle.checked = false;
      document.querySelectorAll('.category-pill').forEach(p => {
        p.classList.toggle('active', p.getAttribute('data-category') === 'all');
      });
      renderFoodGrid();
    });

    // Category Filter Pills
    DOM.categoryPills.addEventListener('click', (e) => {
      const pill = e.target.closest('.category-pill');
      if (!pill) return;

      DOM.categoryPills.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      state.filter.category = pill.getAttribute('data-category');
      renderFoodGrid();
    });

    // Veg Only Switch
    DOM.vegOnlyToggle.addEventListener('change', (e) => {
      state.filter.vegOnly = e.target.checked;
      renderFoodGrid();
      if (state.filter.vegOnly) {
        showToast('Showing Pure Vegetarian options only 🥗', 'info');
      }
    });

    // Sort Dropdown
    DOM.sortSelect.addEventListener('change', (e) => {
      state.filter.sort = e.target.value;
      renderFoodGrid();
    });

    // Cart Drawer Open / Close
    DOM.cartOpenBtn.addEventListener('click', openCartDrawer);
    DOM.cartCloseBtn.addEventListener('click', closeCartDrawer);
    DOM.cartBackdrop.addEventListener('click', closeCartDrawer);
    if (DOM.mobileCartOpenBtn) {
      DOM.mobileCartOpenBtn.addEventListener('click', openCartDrawer);
    }

    // Promo Code Box
    DOM.applyPromoBtn.addEventListener('click', () => {
      applyCoupon(DOM.promoInput.value);
    });

    DOM.promoInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyCoupon(DOM.promoInput.value);
      }
    });

    // Coupon copy buttons on promo strip
    document.querySelectorAll('.copy-coupon-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-code');
        navigator.clipboard?.writeText(code);
        DOM.promoInput.value = code;
        openCartDrawer();
        applyCoupon(code);
      });
    });

    // Modal Close Buttons
    DOM.closeCustomizeModal.addEventListener('click', () => closeModal(DOM.customizeModalOverlay));
    DOM.closeCheckoutModal.addEventListener('click', () => closeModal(DOM.checkoutModalOverlay));
    DOM.closeTrackerModal.addEventListener('click', () => closeModal(DOM.trackerModalOverlay));
    DOM.closeHistoryModal.addEventListener('click', () => closeModal(DOM.historyModalOverlay));
    DOM.closeWishlistModal.addEventListener('click', () => closeModal(DOM.wishlistModalOverlay));
    DOM.closeLocationModal.addEventListener('click', () => closeModal(DOM.locationModalOverlay));

    // Backdrop click dismiss for all modals
    [
      DOM.customizeModalOverlay,
      DOM.checkoutModalOverlay,
      DOM.trackerModalOverlay,
      DOM.historyModalOverlay,
      DOM.wishlistModalOverlay,
      DOM.locationModalOverlay
    ].forEach(overlay => {
      if (!overlay) return;
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal(overlay);
      });
    });

    // Checkout Trigger & Form Submit
    DOM.proceedToCheckoutBtn.addEventListener('click', openCheckout);
    DOM.checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    // Payment Cards Radio Selection
    document.querySelectorAll('.payment-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        const radio = card.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });

    // Orders History Trigger
    DOM.ordersHistoryBtn.addEventListener('click', () => {
      renderHistoryModal();
      openModal(DOM.historyModalOverlay);
    });

    // Wishlist Trigger
    DOM.wishlistModalBtn.addEventListener('click', () => {
      renderWishlistModal();
      openModal(DOM.wishlistModalOverlay);
    });

    // Location Selector Trigger
    DOM.locationSelectorBtn.addEventListener('click', () => {
      openModal(DOM.locationModalOverlay);
    });

    document.querySelectorAll('.location-option-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.location-option-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const addr = card.getAttribute('data-addr');
        setAddress(addr);
      });
    });

    DOM.saveCustomAddressBtn.addEventListener('click', () => {
      setAddress(DOM.newAddressInput.value);
      DOM.newAddressInput.value = '';
    });

    // Hero Live Order Demo Button
    DOM.liveOrderDemoBtn.addEventListener('click', () => {
      const demoOrder = state.orders[0] || {
        id: 'QB-91048',
        items: [
          { name: 'Truffle Smash Double Burger', qty: 1, price: 13.99 },
          { name: 'Wood-Fired Margherita Royale', qty: 1, price: 14.99 }
        ],
        total: 34.20
      };
      startLiveTracking(demoOrder);
    });

    // Call Rider Simulator
    DOM.callRiderBtn.addEventListener('click', () => {
      showToast('Calling Courier Alex Rivera at +1 (555) 019-7422...', 'info', 'fa-phone');
    });

    // Footer cuisine links
    document.querySelectorAll('[data-cat-link]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.getAttribute('data-cat-link');
        state.filter.category = cat;
        DOM.categoryPills.querySelectorAll('.category-pill').forEach(p => {
          p.classList.toggle('active', p.getAttribute('data-category') === cat);
        });
        renderFoodGrid();
        document.getElementById('menuSection').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // ==========================================
  // 18. APPLICATION STARTUP
  // ==========================================
  function init() {
    applyTheme(state.theme);
    if (DOM.currentAddressText) DOM.currentAddressText.textContent = state.address;
    if (DOM.custAddress) DOM.custAddress.value = state.address;

    updateWishlistUI();
    renderFoodGrid();
    renderCart();
    initEventListeners();

    console.log('%c🚀 Quicky Bite Food Delivery Engine Activated!', 'color: #FF5A36; font-size: 16px; font-weight: bold;');
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
