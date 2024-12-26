// Styles for RestaurantScreen
import { StyleSheet } from "react-native";
import { colors, shadows } from "./common";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
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
    color: colors.black,
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
    color: colors.primary,
    fontSize: 14,
    fontWeight: "600",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: "500",
  },
  dotSeparator: {
    marginHorizontal: 8,
    color: colors.gray,
  },
  deliveryTime: {
    fontSize: 14,
    color: colors.gray,
  },
  deliveryFee: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 4,
  },
  minOrder: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600",
  },
  menuContainer: {
    flex: 1,
    padding: 20,
    paddingBottom: 80,
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.black,
    marginBottom: 16,
  },
  menuItem: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    ...shadows.medium,
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
    color: colors.black,
    marginBottom: 6,
  },
  menuItemDescription: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 8,
    lineHeight: 20,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.primary,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantityButton: {
    width: 32,
    height: 32,
    backgroundColor: colors.primary,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
  },
  quantityText: {
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: "600",
    color: colors.black,
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  addButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  floatingCartButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    ...shadows.large,
    zIndex: 1000,
  },
  cartButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
  },
});
