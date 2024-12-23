import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";
import { CartProvider } from "./context/CartContext";
import { useAuth } from "./context/AuthContext";
import { AuthProvider } from "./context/AuthContext";
import SignupScreen from "./screens/SignupScreen";

const Stack = createNativeStackNavigator();

// Sample restaurant data with more realistic content
const restaurants = [
  // Italian Restaurants
  {
    id: 1,
    name: "Pizza Palace",
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: "1",
    minOrder: "3",
    image:
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&auto=format",
    cuisine: "Italian",
    featured: true,
  },
  {
    id: 2,
    name: "Pasta Paradise",
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: "1.250",
    minOrder: "4.500",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format",
    cuisine: "Italian",
    featured: false,
  },
  {
    id: 3,
    name: "Bella Italia",
    rating: 4.4,
    deliveryTime: "30-40 min",
    deliveryFee: "1",
    minOrder: "4",
    image:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&auto=format",
    cuisine: "Italian",
    featured: false,
  },

  // American Restaurants
  {
    id: 4,
    name: "Burger Barn",
    rating: 4.3,
    deliveryTime: "15-25 min",
    deliveryFee: "1.250",
    minOrder: "5",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format",
    cuisine: "American",
    featured: true,
  },
  {
    id: 5,
    name: "Wings & Things",
    rating: 4.4,
    deliveryTime: "25-35 min",
    deliveryFee: "1.250",
    minOrder: "6",
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500&auto=format",
    cuisine: "American",
    featured: false,
  },
  {
    id: 6,
    name: "Steak House",
    rating: 4.7,
    deliveryTime: "35-45 min",
    deliveryFee: "1.500",
    minOrder: "7.500",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&auto=format",
    cuisine: "American",
    featured: true,
  },

  // Japanese Restaurants
  {
    id: 7,
    name: "Sushi Station",
    rating: 4.7,
    deliveryTime: "30-40 min",
    deliveryFee: "1.500",
    minOrder: "6",
    image:
      "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=500&auto=format",
    cuisine: "Japanese",
    featured: true,
  },
  {
    id: 8,
    name: "Ramen House",
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: "1.250",
    minOrder: "4.500",
    image:
      "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=500&auto=format",
    cuisine: "Japanese",
    featured: false,
  },
  {
    id: 9,
    name: "Tokyo Bento",
    rating: 4.3,
    deliveryTime: "20-30 min",
    deliveryFee: "1.000",
    minOrder: "3.500",
    image:
      "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=500&auto=format",
    cuisine: "Japanese",
    featured: false,
  },

  // Mexican Restaurants
  {
    id: 10,
    name: "Taco Fiesta",
    rating: 4.4,
    deliveryTime: "20-30 min",
    deliveryFee: "1.000",
    minOrder: "3.500",
    image:
      "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=500&auto=format",
    cuisine: "Mexican",
    featured: true,
  },
  {
    id: 11,
    name: "Burrito Bros",
    rating: 4.3,
    deliveryTime: "25-35 min",
    deliveryFee: "1.250",
    minOrder: "4.500",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&auto=format",
    cuisine: "Mexican",
    featured: false,
  },
  {
    id: 12,
    name: "Quesadilla Queen",
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: "1.000",
    minOrder: "3.500",
    image:
      "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=500&auto=format",
    cuisine: "Mexican",
    featured: false,
  },

  // Indian Restaurants
  {
    id: 13,
    name: "Curry House",
    rating: 4.6,
    deliveryTime: "25-40 min",
    deliveryFee: "1.250",
    minOrder: "5.500",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format",
    cuisine: "Indian",
    featured: true,
  },
  {
    id: 14,
    name: "Tandoori Nights",
    rating: 4.4,
    deliveryTime: "30-45 min",
    deliveryFee: "1.250",
    minOrder: "6",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format",
    cuisine: "Indian",
    featured: false,
  },
  {
    id: 15,
    name: "Biryani Palace",
    rating: 4.7,
    deliveryTime: "35-45 min",
    deliveryFee: "1.500",
    minOrder: "7.500",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format",
    cuisine: "Indian",
    featured: true,
  },

  // Dessert Restaurants
  {
    id: 20,
    name: "Sweet Dreams",
    rating: 4.6,
    deliveryTime: "15-25 min",
    deliveryFee: "1",
    minOrder: "3",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500&auto=format",
    cuisine: "Dessert",
    featured: true,
  },
  {
    id: 21,
    name: "Waffle House",
    rating: 4.7,
    deliveryTime: "15-25 min",
    deliveryFee: "1.250",
    minOrder: "3.500",
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&auto=format",
    cuisine: "Dessert",
    featured: false,
  },
  {
    id: 22,
    name: "Ice Cream Paradise",
    rating: 4.5,
    deliveryTime: "15-25 min",
    deliveryFee: "1",
    minOrder: "3.500",
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format",
    cuisine: "Dessert",
    featured: false,
  },
].sort((a, b) => a.name.localeCompare(b.name));

function HomeScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { user, logout } = useAuth();

  const categories = [
    "All",
    ...[
      "Italian",
      "American",
      "Japanese",
      "Mexican",
      "Indian",
      "Dessert",
    ].sort(),
  ];

  const filteredRestaurants = restaurants
    .filter((restaurant) => {
      const matchesCategory =
        selectedCategory === "All"
          ? true
          : restaurant.cuisine === selectedCategory;

      const matchesSearch = restaurant.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerLocation}>Deliver to</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.headerAddress}>Current Location</Text>
            <Text style={styles.locationIcon}>📍</Text>
          </View>
        </View>
        <View style={styles.headerButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate("Cart")}
          >
            <Text style={styles.iconText}>🛒</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              if (user?.isGuest) {
                navigation.replace("Login");
              } else {
                logout();
                navigation.replace("Login");
              }
            }}
          >
            <Text style={styles.iconText}>{user?.isGuest ? "👤" : "👤"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search restaurants or cuisines"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categoriesWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.selectedCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Restaurant List */}
      <ScrollView
        style={styles.restaurantList}
        contentContainerStyle={styles.restaurantListContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredRestaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            style={styles.restaurantCard}
            onPress={() => navigation.navigate("Restaurant", { restaurant })}
            activeOpacity={0.7}
          >
            <Image
              source={{ uri: restaurant.image }}
              style={styles.restaurantImage}
            />
            <View style={styles.restaurantInfo}>
              <View style={styles.restaurantHeader}>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                {restaurant.featured && (
                  <View style={styles.featuredBadge}>
                    <Text style={styles.featuredText}>Featured</Text>
                  </View>
                )}
              </View>
              <View style={styles.restaurantDetails}>
                <View style={styles.cuisineTag}>
                  <Text style={styles.cuisineText}>{restaurant.cuisine}</Text>
                </View>
                <View style={styles.ratingContainer}>
                  <Text style={styles.rating}>⭐ {restaurant.rating}</Text>
                </View>
              </View>
              <View style={styles.deliveryInfo}>
                <Text style={styles.deliveryText}>
                  🕒 {restaurant.deliveryTime}
                </Text>
                <Text style={styles.dotSeparator}>•</Text>
                <Text style={styles.deliveryText}>
                  {restaurant.deliveryFee} KD delivery
                </Text>
              </View>
              <Text style={styles.minOrder}>
                Min. order: {restaurant.minOrder} KD
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function AppNavigator() {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={({ route }) => ({
          title: route.params.restaurant.name,
          headerShown: true,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Shopping Cart",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerLocation: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerAddress: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  locationIcon: {
    marginLeft: 4,
    fontSize: 16,
  },
  headerButtons: {
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    width: 36,
    height: 36,
    backgroundColor: "#f8f8f8",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#eee",
  },
  iconText: {
    fontSize: 18,
  },
  searchContainer: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  categoriesWrapper: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  categoriesContainer: {
    backgroundColor: "#fff",
  },
  categoriesContent: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: "#f8f8f8",
    borderWidth: 1,
    borderColor: "#eee",
    minWidth: 80,
    alignItems: "center",
  },
  selectedCategory: {
    backgroundColor: "#00a082",
    borderColor: "#00a082",
  },
  categoryText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  selectedCategoryText: {
    color: "#fff",
    fontWeight: "600",
  },
  restaurantList: {
    flex: 1,
  },
  restaurantListContent: {
    padding: 15,
  },
  restaurantCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  restaurantImage: {
    width: "100%",
    height: 200,
  },
  restaurantInfo: {
    padding: 15,
  },
  restaurantHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    flex: 1,
  },
  featuredBadge: {
    backgroundColor: "#fff0ed",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  featuredText: {
    color: "#ff4d4d",
    fontSize: 12,
    fontWeight: "600",
  },
  cuisineTag: {
    backgroundColor: "#f0f8f6",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
  },
  cuisineText: {
    color: "#00a082",
    fontSize: 14,
    fontWeight: "600",
  },
  restaurantDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
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
  deliveryInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  deliveryText: {
    fontSize: 14,
    color: "#666",
  },
  dotSeparator: {
    color: "#666",
    marginHorizontal: 8,
  },
  minOrder: {
    fontSize: 14,
    color: "#00a082",
    fontWeight: "600",
  },
});
