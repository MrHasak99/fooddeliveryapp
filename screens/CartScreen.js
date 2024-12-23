import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useCart } from "../context/CartContext";

export default function CartScreen() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Helper function to format price
  const formatPrice = (price) => {
    return price % 1 === 0 ? price.toFixed(0) : price.toFixed(3);
  };

  // Group items by restaurant
  const groupedItems = cart.reduce((groups, item) => {
    if (!groups[item.restaurantId]) {
      groups[item.restaurantId] = [];
    }
    groups[item.restaurantId].push(item);
    return groups;
  }, {});

  // Handle clear cart with confirmation
  const handleClearCart = () => {
    Alert.alert(
      "Clear Cart",
      "Are you sure you want to remove all items from your cart?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Clear",
          onPress: () => clearCart(),
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        <>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Your Cart</Text>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={handleClearCart}
            >
              <Text style={styles.clearButtonText}>Clear All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            style={styles.cartItems}
            showsVerticalScrollIndicator={false}
          >
            {Object.entries(groupedItems).map(([restaurantId, items]) => (
              <View key={restaurantId} style={styles.restaurantGroup}>
                <View style={styles.restaurantHeader}>
                  <Text style={styles.restaurantName}>
                    {items[0].restaurantName}
                  </Text>
                  <Text style={styles.itemCount}>{items.length} items</Text>
                </View>
                {items.map((item) => (
                  <View key={item.id} style={styles.cartItem}>
                    <View style={styles.itemInfo}>
                      <Text style={styles.itemName}>{item.name}</Text>
                      <Text style={styles.itemPrice}>
                        {formatPrice(item.price)} KD
                      </Text>
                    </View>
                    <View style={styles.quantityControls}>
                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => {
                          if (item.quantity === 1) {
                            removeFromCart(item);
                          } else {
                            addToCart({
                              ...item,
                              quantity: -1,
                              restaurantId: item.restaurantId,
                            });
                          }
                        }}
                      >
                        <Text style={styles.quantityButtonText}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>{item.quantity}</Text>
                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() =>
                          addToCart({
                            ...item,
                            restaurantId: item.restaurantId,
                          })
                        }
                      >
                        <Text style={styles.quantityButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </ScrollView>

          <View style={styles.totalContainer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Subtotal</Text>
              <Text style={styles.totalAmount}>{formatPrice(total)} KD</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Delivery Fee</Text>
              <Text style={styles.totalAmount}>1.000 KD</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.totalRow}>
              <Text style={styles.grandTotalLabel}>Total</Text>
              <Text style={styles.grandTotalAmount}>
                {formatPrice(total + 1)} KD
              </Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartEmoji}>🛒</Text>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <Text style={styles.emptyCartSubtext}>
            Add items from restaurants to start an order
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  clearButton: {
    backgroundColor: "#fff0ed",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  clearButtonText: {
    color: "#ff4d4d",
    fontWeight: "600",
    fontSize: 14,
  },
  cartItems: {
    flex: 1,
  },
  restaurantGroup: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  restaurantHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  itemCount: {
    fontSize: 14,
    color: "#666",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: "#00a082",
    fontWeight: "600",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 25,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantityButton: {
    width: 28,
    height: 28,
    backgroundColor: "#00a082",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  totalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 16,
    color: "#666",
  },
  totalAmount: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginVertical: 12,
  },
  grandTotalLabel: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  grandTotalAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#00a082",
  },
  checkoutButton: {
    backgroundColor: "#00a082",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyCartEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyCartText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  emptyCartSubtext: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
