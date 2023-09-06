import { useContext, createContext, useState,useEffect } from "react";

export const CartContext = createContext({})

function CartProvider({children}) {
  const [cart, setCart] =useState([])

  async function addCart({food_id, quantity, price}){
    try {
      const cartItem = {quantity, food_id, price}
      setCart(prevState => [...prevState, cartItem])
      localStorage.setItem("@foodexplorer:cart", JSON.stringify([...cart, cartItem]));
      alert("Adicionado ao carrinho com sucesso!")
    } catch (e) {
      if(e.response) {
        alert(e.response.data.message)
      } else {
        alert("Não foi possível adicionar item ao carrinho")
      }
    }
  }
  function cleanCart() {
    localStorage.removeItem("@foodexplorer:cart");
    setCart({});
  }
  useEffect(()=> {
    const cart = localStorage.getItem("@foodexplorer:cart");
    if (cart) {
      setCart(JSON.parse(cart))
    }
  },[])


  return (
      <CartContext.Provider value={{addCart, cleanCart}} >
        {children}
      </CartContext.Provider  >
  )
}

function useCart(){
  const context = useContext(CartContext)

  return context
}

export {CartProvider, useCart}