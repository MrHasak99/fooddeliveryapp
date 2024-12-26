// Styles for CartScreen
import { StyleSheet } from "react-native";
import { colors, shadows } from "./common";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.black,
  },
  clearButton: {
    backgroundColor: "#fff0ed",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  clearButtonText: {
    color: colors.error,
    fontWeight: "600",
    fontSize: 14,
  },
  cartItems: {
    flex: 1,
  },
  restaurantGroup: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 16,
    ...shadows.medium,
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
    color: colors.black,
  },
  itemCount: {
    fontSize: 14,
    color: colors.gray,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.black,
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantityButton: {
    width: 28,
    height: 28,
    backgroundColor: colors.primary,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: "600",
    color: colors.black,
  },
  totalContainer: {
    backgroundColor: colors.white,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 16,
    color: colors.gray,
  },
  totalAmount: {
    fontSize: 16,
    color: colors.black,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: colors.borderColor,
    marginVertical: 12,
  },
  grandTotalLabel: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.black,
  },
  grandTotalAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.primary,
  },
  checkoutButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
    ...shadows.small,
  },
  checkoutButtonText: {
    color: colors.white,
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
    color: colors.black,
    marginBottom: 8,
  },
  emptyCartSubtext: {
    fontSize: 16,
    color: colors.gray,
    textAlign: "center",
  },
});
