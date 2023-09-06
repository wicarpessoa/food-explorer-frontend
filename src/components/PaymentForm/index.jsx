import { useState, useEffect } from "react";
import { Receipt } from "phosphor-react";
import { Button } from "../Button";
import { Container, PaymentFormMethod } from "./styles";

export function PaymentForm({display}) {
  const [expiryMin, setExpiryMin] = useState(""); // Estado para o valor mínimo da validade
  const [creditCardValue, setCreditCardValue] = useState("");
  const [isCreditCardValid, setIsCreditCardValid] = useState(null);

  const [toggle, setToggle] = useState(false)
  function handleTogglePix() {
    setToggle(false)
  }
  function handleToggleCreditCard() {
    setToggle(true)
  }
  
  function isValidCreditCardNumber(cardNumber) {
    const sanitizedNumber = cardNumber.replace(/\s/g, ''); // Remova espaços em branco
    let sum = 0;
    let shouldDouble = false;
    for (let i = sanitizedNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitizedNumber[i], 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  }

  function formatCreditCardInput(value) {
    const formattedValue = value.replace(/\s/g, ''); // Remova os espaços em branco existentes
    let result = '';
    for (let i = 0; i < formattedValue.length; i++) {
      if (i > 0 && i % 4 === 0) {
        result += ' '; // Adicione um espaço a cada 4 dígitos
      }
      result += formattedValue[i];
    }
    return result;
  }

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear().toString().slice(-2);;
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    setExpiryMin(`${currentMonth.padStart(2, '0')}/${currentYear}`);
  }, []); 

  function formatExpiryInput(value) {
    if (value.length === 5) {
      const [month, year] = value.split("/");
      return `${month.padStart(2, '0')}/${year}`;
    }
    return value;
  }

  function handleCreditCardValidation() {
    const isNumberValid = isValidCreditCardNumber(creditCardValue);
    setIsCreditCardValid(isNumberValid);
  }

  function maskExpiryInput(value) {
    const formattedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    if (formattedValue.length <= 2) {
      return formattedValue;
    }
    return `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}`;
  }
  return (
    <Container display={display}>
        <h1 className="cart-item-title"> Pagamento </h1>
        <PaymentFormMethod toggle={toggle}>
          <div>
            <button onClick={handleTogglePix}><img src="src/assets/pix.svg" alt="" />PIX</button>
            <button onClick={handleToggleCreditCard}><img src="src/assets/creditcard.svg" alt="" />Crédito</button>
          </div>
          <form action="">
            <div>
              <label htmlFor="">Número do cartão</label>
              <input 
              type="text" 
              placeholder="0000 0000 0000 0000" 
              inputmode="numerical" 
              maxlength={19}
              value={formatCreditCardInput(creditCardValue)}
              onChange={(e) => setCreditCardValue(e.target.value)}
              onBlur={handleCreditCardValidation}
              />
              {isCreditCardValid === false &&  <span>O numero do cartão não é válido</span>}
            </div>
            <div>
              <div>
                <label htmlFor="">Validade</label>
                <input 
                type="text" 
                id="expiry" 
                min={expiryMin} 
                pattern="\d{2}/\d{2}" 
                maxlength={5}
                placeholder="MM/YY" 
                value={formatExpiryInput(expiryMin)}
                onChange={(e) => setExpiryMin(maskExpiryInput(e.target.value))}
                onBlur={(e) => e.target.value = formatExpiryInput(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">CVC</label>
                <input type="text" placeholder="000" inputmode="numerical" maxlength="3"/>
              </div>
            </div>
            <Button title="Finalizar pagamento" icon={Receipt}></Button>
          </form>
          <div>
            <img src="src/assets/qrcode.svg" alt="" />
          </div>
        </PaymentFormMethod>
    </Container>
  );
}