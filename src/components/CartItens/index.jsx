import { Container, CartItem, CartItemContent, CartItemImg, CartItemText, CartItemContainer } from "./styles";
import LogoFooter from '../../assets/logoFooter.png'

export function CartItens({display}) {
  console.log(display)
 return( 
    <Container display={display}>
        <h1 className="cart-item-title">Meu pedido</h1>
        <CartItemContainer> 
        <CartItem >
          <CartItemImg src="src/assets/salad.png" alt="" className="cart-item-img" />
          <CartItemContent >
            <CartItemText >
              <span>1 X Salada Radish</span>
              <span  >R$ 25,97</span>
            </CartItemText>
            <button >excluir</button>
          </CartItemContent>
        </CartItem>
        <CartItem >
          <CartItemImg src="src/assets/salad.png" alt="" className="cart-item-img" />
          <CartItemContent >
            <CartItemText >
              <span>1 X Salada Radish</span>
              <span className="cart-item-price" >R$ 25,97</span>
            </CartItemText>
            <button className="cart-item-delete">excluir</button>
          </CartItemContent>
        </CartItem>
        <CartItem >
          <CartItemImg src="src/assets/salad.png" alt="" className="cart-item-img" />
          <CartItemContent >
            <CartItemText >
              <span>1 X Salada Radish</span>
              <span className="cart-item-price" >R$ 25,97</span>
            </CartItemText>
            <button className="cart-item-delete">excluir</button>
          </CartItemContent>
        </CartItem>
        <CartItem >
          <CartItemImg src="src/assets/salad.png" alt="" className="cart-item-img" />
          <CartItemContent >
            <CartItemText >
              <span>1 X Salada Radish</span>
              <span className="cart-item-price" >R$ 25,97</span>
            </CartItemText>
            <button className="cart-item-delete">excluir</button>
          </CartItemContent>
        </CartItem>
        <CartItem >
          <CartItemImg src="src/assets/salad.png" alt="" className="cart-item-img" />
          <CartItemContent >
            <CartItemText >
              <span>1 X Salada Radish</span>
              <span className="cart-item-price" >R$ 25,97</span>
            </CartItemText>
            <button className="cart-item-delete">excluir</button>
          </CartItemContent>
        </CartItem>
        <CartItem >
          <CartItemImg src="src/assets/salad.png" alt="" className="cart-item-img" />
          <CartItemContent >
            <CartItemText >
              <span>1 X Salada Radish</span>
              <span className="cart-item-price" >R$ 25,97</span>
            </CartItemText>
            <button className="cart-item-delete">excluir</button>
          </CartItemContent>
        </CartItem>
        <CartItem >
          <CartItemImg src="src/assets/salad.png" alt="" className="cart-item-img" />
          <CartItemContent >
            <CartItemText >
              <span>1 X Salada Radish</span>
              <span className="cart-item-price" >R$ 25,97</span>
            </CartItemText>
            <button className="cart-item-delete">excluir</button>
          </CartItemContent>
        </CartItem>
        <CartItem >
          <CartItemImg src="src/assets/salad.png" alt="" className="cart-item-img" />
          <CartItemContent >
            <CartItemText >
              <span>1 X Salada Radish</span>
              <span className="cart-item-price" >R$ 25,97</span>
            </CartItemText>
            <button className="cart-item-delete">excluir</button>
          </CartItemContent>
        </CartItem>
        </CartItemContainer>
        <span className="cart-total-price">Total: R$: 103,88</span>
  </Container>
  )
}