// Styles for HomeScreen
import { StyleSheet } from "react-native";
import { colors, shadows } from "./common";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  headerLocation: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 4,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerAddress: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.black,
    marginRight: 4,
  },
  locationIcon: {
    fontSize: 16,
  },
  headerButtons: {
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    width: 36,
    height: 36,
    backgroundColor: colors.lightGray,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    ...shadows.small,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  iconText: {
    fontSize: 18,
  },
  searchContainer: {
    padding: 15,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
    color: colors.gray,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
  },
  categoriesWrapper: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  categoriesContainer: {
    backgroundColor: colors.white,
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
    backgroundColor: colors.lightGray,
    borderWidth: 1,
    borderColor: colors.borderColor,
    minWidth: 80,
    alignItems: "center",
  },
  selectedCategory: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryText: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: "500",
  },
  selectedCategoryText: {
    color: colors.white,
    fontWeight: "600",
  },
  restaurantList: {
    flex: 1,
  },
  restaurantListContent: {
    padding: 15,
  },
  restaurantCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    ...shadows.medium,
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
    color: colors.black,
    flex: 1,
  },
  restaurantDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  cuisineTag: {
    backgroundColor: "#f0f8f6",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
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
  deliveryInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  deliveryText: {
    fontSize: 14,
    color: colors.gray,
  },
  dotSeparator: {
    color: colors.gray,
    marginHorizontal: 8,
  },
  minOrder: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600",
  },
  featuredBadge: {
    backgroundColor: "#fff0ed",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  featuredText: {
    color: colors.error,
    fontSize: 12,
    fontWeight: "600",
  },
});
