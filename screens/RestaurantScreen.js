import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useCart } from "../context/CartContext";
import { useNavigation } from "@react-navigation/native";

// Helper function to format price
const formatPrice = (price) => {
  return price % 1 === 0 ? price.toFixed(0) : price.toFixed(3);
};

// Replace the menuItems object with a function that returns menu based on restaurant ID
const getRestaurantMenu = (restaurantId) => {
  const menus = {
    // Pizza Palace
    1: [
      {
        id: "pp1",
        name: "Margherita Pizza",
        price: 4,
        description: "Fresh tomatoes, mozzarella, basil, olive oil",
        image:
          "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&auto=format",
      },
      {
        id: "pp2",
        name: "Chicken Supreme",
        price: 4.5,
        description: "Grilled halal chicken, extra cheese, Italian herbs",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format",
      },
      {
        id: "pp3",
        name: "BBQ Chicken Pizza",
        price: 5.0,
        description: "Halal chicken, red onions, BBQ sauce",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format",
      },
    ],

    // Pasta Paradise
    2: [
      {
        id: "ppa1",
        name: "Fettuccine Alfredo",
        price: 4.25,
        description: "Creamy parmesan sauce, fresh pasta",
        image:
          "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format",
      },
      {
        id: "ppa2",
        name: "Seafood Linguine",
        price: 5.75,
        description: "Fresh shrimp, mussels, calamari in herb sauce",
        image:
          "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&auto=format",
      },
      {
        id: "ppa3",
        name: "Chicken Penne",
        price: 4.5,
        description: "Halal chicken, spicy tomato sauce, garlic, fresh basil",
        image:
          "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&auto=format",
      },
    ],

    // Bella Italia
    3: [
      {
        id: "bi1",
        name: "Chicken Lasagna",
        price: 5.0,
        description: "Layered pasta, halal chicken, ricotta cheese",
        image:
          "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&auto=format",
      },
      {
        id: "bi2",
        name: "Eggplant Parmesan",
        price: 4.5,
        description: "Breaded eggplant, marinara, melted mozzarella",
        image:
          "https://images.unsplash.com/photo-1629115916087-31ca04368cde?w=500&auto=format",
      },
      {
        id: "bi3",
        name: "Gnocchi Pesto",
        price: 5.0,
        description: "Potato gnocchi, basil pesto, pine nuts",
        image:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format",
      },
    ],

    // Burger Barn
    4: [
      {
        id: "bb1",
        name: "Classic Barn Burger",
        price: 3.5,
        description: "Halal beef patty, lettuce, tomato, special sauce",
        image:
          "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format",
      },
      {
        id: "bb2",
        name: "Chicken Deluxe",
        price: 4.25,
        description: "Grilled halal chicken, cheddar, caramelized onions",
        image:
          "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&auto=format",
      },
      {
        id: "bb3",
        name: "Mushroom Swiss",
        price: 4.0,
        description: "Halal beef patty, mushrooms, Swiss cheese, garlic aioli",
        image:
          "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&auto=format",
      },
    ],

    // Wings & Things
    5: [
      {
        id: "wt1",
        name: "Classic Buffalo Wings",
        price: 4,
        description: "10 pieces halal chicken wings, choice of sauce",
        image:
          "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500&auto=format",
      },
      {
        id: "wt2",
        name: "Grilled Wings Combo",
        price: 4.5,
        description: "12 grilled halal wings, fries, coleslaw",
        image:
          "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format",
      },
      {
        id: "wt3",
        name: "Wing Party Pack",
        price: 7.5,
        description: "25 halal wings, multiple sauces, extra dips",
        image:
          "https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?w=500&auto=format",
      },
    ],

    // Steak House
    6: [
      {
        id: "sh1",
        name: "Ribeye Steak",
        price: 9,
        description: "12oz halal beef ribeye, garlic butter, vegetables",
        image:
          "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&auto=format",
      },
      {
        id: "sh2",
        name: "Filet Mignon",
        price: 10.5,
        description: "8oz halal beef tenderloin, herb sauce, mashed potatoes",
        image:
          "https://images.unsplash.com/photo-1558030006-450675393462?w=500&auto=format",
      },
      {
        id: "sh3",
        name: "Surf & Turf",
        price: 12,
        description: "6oz halal beef sirloin, grilled shrimp, asparagus",
        image:
          "https://images.unsplash.com/photo-1633237308525-cd587cf71926?w=500&auto=format",
      },
    ],

    // Sushi Station
    7: [
      {
        id: "ss1",
        name: "Signature Sushi Set",
        price: 7.5,
        description: "Fresh salmon, tuna, and vegetable rolls (24 pieces)",
        image:
          "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=500&auto=format",
      },
      {
        id: "ss2",
        name: "Sashimi Deluxe",
        price: 8.5,
        description: "Fresh salmon and tuna sashimi (15 pieces)",
        image:
          "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=500&auto=format",
      },
      {
        id: "ss3",
        name: "Tempura Combo",
        price: 5,
        description: "Shrimp and vegetable tempura with halal dipping sauce",
        image:
          "https://images.unsplash.com/photo-1581781870027-04212e231e96?w=500&auto=format",
      },
    ],

    // Ramen House
    8: [
      {
        id: "rh1",
        name: "Chicken Ramen",
        price: 4.5,
        description: "Halal chicken broth, grilled chicken, egg, vegetables",
        image:
          "https://images.unsplash.com/photo-1632709810780-b5a4343cebec?w=500&auto=format",
      },
      {
        id: "rh2",
        name: "Spicy Beef Ramen",
        price: 5.0,
        description: "Spicy broth, halal beef, corn, vegetables",
        image:
          "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=500&auto=format",
      },
      {
        id: "rh3",
        name: "Vegetable Ramen",
        price: 4.25,
        description: "Vegetable broth, tofu, mushrooms, bok choy",
        image:
          "https://images.unsplash.com/photo-1547928576-965be7f5f6a6?w=500&auto=format",
      },
    ],

    // Tokyo Bento
    9: [
      {
        id: "tb1",
        name: "Chicken Teriyaki Bento",
        price: 4,
        description: "Halal grilled chicken, rice, salad, vegetables",
        image:
          "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=500&auto=format",
      },
      {
        id: "tb2",
        name: "Salmon Bento",
        price: 4.5,
        description: "Grilled salmon, rice, miso soup, vegetables",
        image:
          "https://images.unsplash.com/photo-1535140728325-a4d3707eee61?w=500&auto=format",
      },
      {
        id: "tb3",
        name: "Beef Curry",
        price: 4.25,
        description: "Halal beef curry, steamed rice, vegetables",
        image:
          "https://images.unsplash.com/photo-1604579278540-db35e3c1dd68?w=500&auto=format",
      },
    ],

    // Taco Fiesta
    10: [
      {
        id: "tf1",
        name: "Street Tacos Combo",
        price: 3.5,
        description: "4 tacos with halal chicken or beef, onions, cilantro",
        image:
          "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=500&auto=format",
      },
      {
        id: "tf2",
        name: "Fajitas Platter",
        price: 5,
        description: "Halal grilled chicken or beef, peppers, tortillas",
        image:
          "https://images.unsplash.com/photo-1642384543715-d16e4c544f62?w=500&auto=format",
      },
      {
        id: "tf3",
        name: "Enchiladas Supremas",
        price: 4.5,
        description: "3 enchiladas with halal chicken, sauce, cheese",
        image:
          "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500&auto=format",
      },
    ],

    // Burrito Bros
    11: [
      {
        id: "bb1",
        name: "Super Burrito",
        price: 3.25,
        description: "Halal beef or chicken, rice, beans, guacamole",
        image:
          "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500&auto=format",
      },
      {
        id: "bb2",
        name: "Burrito Bowl",
        price: 3.5,
        description: "Halal meat, rice, beans, fresh toppings (no tortilla)",
        image:
          "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=500&auto=format",
      },
      {
        id: "bb3",
        name: "Quesadilla Grande",
        price: 3.0,
        description: "Halal chicken or beef with melted cheese",
        image:
          "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=500&auto=format",
      },
    ],

    // Curry House
    13: [
      {
        id: "ch1",
        name: "Butter Chicken",
        price: 4.5,
        description: "Creamy tomato curry with halal chicken, naan",
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format",
      },
      {
        id: "ch2",
        name: "Vegetable Curry",
        price: 4.0,
        description: "Mixed vegetables in curry sauce, rice",
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format",
      },
      {
        id: "ch3",
        name: "Lamb Curry",
        price: 5.0,
        description: "Halal lamb in spiced curry sauce, rice",
        image:
          "https://images.unsplash.com/photo-1545247181-516773cae754?w=500&auto=format",
      },
    ],

    // Tandoori Nights
    14: [
      {
        id: "tn1",
        name: "Tandoori Mixed Grill",
        price: 7.0,
        description: "Assorted halal grilled meats, naan, mint chutney",
        image:
          "https://images.unsplash.com/photo-1606471191009-63994c53433b?w=500&auto=format",
      },
      {
        id: "tn2",
        name: "Paneer Tikka",
        price: 4.25,
        description: "Grilled cottage cheese with peppers, onions",
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format",
      },
      {
        id: "tn3",
        name: "Dal Makhani",
        price: 3.5,
        description: "Creamy black lentils, butter, spices",
        image:
          "https://images.unsplash.com/photo-1585937422024-12e7a23b22cc?w=500&auto=format",
      },
    ],

    // Biryani Palace
    15: [
      {
        id: "bp1",
        name: "Chicken Biryani",
        price: 5,
        description: "Aromatic rice with halal chicken, saffron",
        image:
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format",
      },
      {
        id: "bp2",
        name: "Lamb Biryani",
        price: 5.5,
        description: "Traditional biryani with halal lamb",
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format",
      },
      {
        id: "bp3",
        name: "Vegetable Biryani",
        price: 4.25,
        description: "Mixed vegetables, aromatic rice, raita",
        image:
          "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=500&auto=format",
      },
    ],

    // Add Quesadilla Queen menu (id: 12)
    12: [
      {
        id: "qq1",
        name: "Classic Quesadilla",
        price: 3.5,
        description: "Halal chicken or beef with melted cheese blend",
        image:
          "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=500&auto=format",
      },
      {
        id: "qq2",
        name: "Supreme Quesadilla",
        price: 4,
        description: "Halal meat, peppers, onions, guacamole, sour cream",
        image:
          "https://images.unsplash.com/photo-1642384543715-d16e4c544f62?w=500&auto=format",
      },
      {
        id: "qq3",
        name: "Veggie Quesadilla",
        price: 3.25,
        description: "Grilled vegetables, mushrooms, cheese blend",
        image:
          "https://images.unsplash.com/photo-1628191139360-4083564d03fd?w=500&auto=format",
      },
    ],

    // Sweet Dreams
    20: [
      {
        id: "sd1",
        name: "Assorted Cupcakes",
        price: 3.5,
        description: "Box of 6 cupcakes: chocolate, vanilla, red velvet",
        image:
          "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500&auto=format",
      },
      {
        id: "sd2",
        name: "Cheesecake Slices",
        price: 4,
        description: "New York style cheesecake with berry compote",
        image:
          "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=500&auto=format",
      },
      {
        id: "sd3",
        name: "Tiramisu",
        price: 4.5,
        description: "Classic Italian dessert with coffee and mascarpone",
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format",
      },
    ],

    // Waffle House
    21: [
      {
        id: "wh1",
        name: "Belgian Waffle",
        price: 3.5,
        description: "Fresh waffle with maple syrup and butter",
        image:
          "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&auto=format",
      },
      {
        id: "wh2",
        name: "Chocolate Waffle",
        price: 4,
        description: "Waffle topped with chocolate sauce and whipped cream",
        image:
          "https://images.unsplash.com/photo-1513267257196-91eb8b11967b?w=500&auto=format",
      },
      {
        id: "wh3",
        name: "Fruit Waffle Supreme",
        price: 4.5,
        description: "Waffle with fresh berries, banana, and cream",
        image:
          "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=500&auto=format",
      },
    ],

    // Ice Cream Paradise
    22: [
      {
        id: "ip1",
        name: "Ice Cream Box",
        price: 6,
        description: "4 scoops: vanilla, chocolate, strawberry, pistachio",
        image:
          "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format",
      },
      {
        id: "ip2",
        name: "Sundae Special",
        price: 4.5,
        description: "3 scoops with nuts, sauce, and whipped cream",
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format",
      },
      {
        id: "ip3",
        name: "Milkshake",
        price: 3.5,
        description: "Choice of flavor with whipped cream topping",
        image:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format",
      },
    ],
  };

  return menus[restaurantId] || [];
};

export default function RestaurantScreen({ route }) {
  const { restaurant } = route.params;
  const navigation = useNavigation();
  const { addToCart, removeFromCart, cart } = useCart();
  const restaurantMenu = getRestaurantMenu(restaurant.id);

  const getItemQuantity = (itemId) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  const getTotalCartItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image source={{ uri: restaurant.image }} style={styles.heroImage} />
        <View style={styles.heroOverlay} />
        <View style={styles.restaurantInfoOverlay}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <View style={styles.restaurantDetails}>
            <View style={styles.cuisineTag}>
              <Text style={styles.cuisineText}>{restaurant.cuisine}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>⭐ {restaurant.rating}</Text>
              <Text style={styles.dotSeparator}>•</Text>
              <Text style={styles.deliveryTime}>
                🕒 {restaurant.deliveryTime}
              </Text>
            </View>
          </View>
          <Text style={styles.deliveryFee}>
            Delivery: {restaurant.deliveryFee} KD
          </Text>
          <Text style={styles.minOrder}>
            Minimum order: {restaurant.minOrder} KD
          </Text>
        </View>
      </View>

      {/* Menu Section */}
      <ScrollView
        style={styles.menuContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.menuTitle}>Menu</Text>
        {restaurantMenu.map((item) => (
          <View key={item.id} style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <View style={styles.menuItemInfo}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemDescription}>
                  {item.description}
                </Text>
                <Text style={styles.menuItemPrice}>
                  {formatPrice(item.price)} KD
                </Text>
              </View>
              <Image
                source={{ uri: item.image }}
                style={styles.menuItemImage}
              />
            </View>
            <View style={styles.addToCartContainer}>
              {getItemQuantity(item.id) > 0 ? (
                <View style={styles.quantityControls}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => {
                      if (getItemQuantity(item.id) === 1) {
                        removeFromCart(item);
                      } else {
                        addToCart({
                          ...item,
                          quantity: -1,
                          restaurantId: restaurant.id,
                          restaurantName: restaurant.name,
                        });
                      }
                    }}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>
                    {getItemQuantity(item.id)}
                  </Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() =>
                      addToCart({
                        ...item,
                        restaurantId: restaurant.id,
                        restaurantName: restaurant.name,
                      })
                    }
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() =>
                    addToCart({
                      ...item,
                      restaurantId: restaurant.id,
                      restaurantName: restaurant.name,
                    })
                  }
                >
                  <Text style={styles.addButtonText}>Add to Cart</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Cart Button */}
      {getTotalCartItems() > 0 && (
        <TouchableOpacity
          style={styles.floatingCartButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.cartButtonText}>
            View Cart ({getTotalCartItems()} items)
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  heroSection: {
    height: 300,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  restaurantInfoOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  restaurantDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  cuisineTag: {
    backgroundColor: "#f0f8f6",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 12,
  },
  cuisineText: {
    color: "#00a082",
    fontSize: 14,
    fontWeight: "600",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  dotSeparator: {
    marginHorizontal: 8,
    color: "#666",
  },
  deliveryTime: {
    fontSize: 14,
    color: "#666",
  },
  deliveryFee: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  minOrder: {
    fontSize: 14,
    color: "#00a082",
    fontWeight: "600",
  },
  menuContainer: {
    flex: 1,
    padding: 20,
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    marginBottom: 16,
  },
  menuItem: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  menuItemContent: {
    flexDirection: "row",
    marginBottom: 12,
  },
  menuItemInfo: {
    flex: 1,
    marginRight: 16,
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  menuItemDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    lineHeight: 20,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#00a082",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 25,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantityButton: {
    width: 32,
    height: 32,
    backgroundColor: "#00a082",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  quantityText: {
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  addButton: {
    backgroundColor: "#00a082",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  floatingCartButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#00a082",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
