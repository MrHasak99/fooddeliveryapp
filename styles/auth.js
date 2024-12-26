// Styles for Login and Signup screens
import { StyleSheet } from "react-native";
import { colors, shadows } from "./common";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: colors.gray,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  formContainer: {
    width: "100%",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: colors.black,
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    backgroundColor: colors.lightGray,
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  loginButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    ...shadows.small,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  guestLoginButton: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  guestLoginText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPasswordButton: {
    alignItems: "center",
    marginTop: 15,
  },
  forgotPasswordText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "500",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  signupText: {
    color: colors.gray,
    fontSize: 14,
  },
  signupLink: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "600",
  },
  signupButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    ...shadows.small,
  },
  signupButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    color: colors.gray,
    fontSize: 14,
  },
  loginLink: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "600",
  },
  termsText: {
    fontSize: 12,
    color: colors.gray,
    textAlign: "center",
    paddingHorizontal: 40,
  },
  termsLink: {
    color: colors.primary,
    fontWeight: "500",
  },
});
