import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // For decreasing quantity
        if (item.quantity < 0) {
          return currentCart
            .map((cartItem) =>
              cartItem.id === item.id
                ? {
                    ...cartItem,
                    quantity: Math.max(0, cartItem.quantity + item.quantity),
                  }
                : cartItem
            )
            .filter((item) => item.quantity > 0);
        }
        // For increasing quantity
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      // Add new item with quantity 1
      return [
        ...currentCart,
        { ...item, quantity: 1, restaurantId: item.restaurantId },
      ];
    });
  };

  const removeFromCart = (item) => {
    setCart((currentCart) =>
      currentCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
