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
import styles from "../styles/cart";

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
