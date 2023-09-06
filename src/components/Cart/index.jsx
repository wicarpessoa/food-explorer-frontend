import { useEffect, useState, useRef } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import "./styles.css"

import {  ShoppingCart  } from "phosphor-react";
import { CartItens } from "../CartItens";
import { PaymentForm } from "../PaymentForm";
import { Button } from "../Button";

export function Cart({  }) {
  const [toggleDisplay, setToggleDisplay] = useState(true)
  function handleToggleDisplay() {
    setToggleDisplay(false)
    console.log("asdasdasd")
  }
  return (
    <Dialog.Root >
    <Dialog.Trigger asChild>
      <button className="Button"><ShoppingCart className="svg-cart" size={32}/></button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <div className="cart-container">
          <CartItens display={toggleDisplay}/>
          <button title="Avançar" onClick={handleToggleDisplay} className={`button-next ${toggleDisplay ? "flex" : "none"}`} >Avançar</button>
        </div>
          <PaymentForm display={toggleDisplay}/>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  );
}