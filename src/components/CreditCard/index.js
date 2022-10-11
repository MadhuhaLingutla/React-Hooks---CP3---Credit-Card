// Write your code here
import {useState} from 'react'
import {
  Container,
  CreditCardContainer,
  Heading,
  CreditCardDisplay,
  CreditCardNumber,
  NameHeading,
  CreditCardName,
  InputForm,
  FormHeading,
  InputField,
  FormContainer,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const capName = cardName.toUpperCase()

  const updateCardHolderName = event => setCardName(event.target.value)
  const updateCardNumber = event => setCardNumber(event.target.value)

  return (
    <Container>
      <CreditCardContainer>
        <Heading>CREDIT CARD</Heading>
        <CreditCardDisplay data-testid="creditCard ">
          <CreditCardNumber>{cardNumber}</CreditCardNumber>
          <NameHeading>CARDHOLDER NAME</NameHeading>
          <CreditCardName>{capName}</CreditCardName>
        </CreditCardDisplay>
      </CreditCardContainer>
      <FormContainer>
        <InputForm>
          <FormHeading>Payment Method</FormHeading>
          <InputField
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={updateCardNumber}
          />
          <InputField
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={updateCardHolderName}
          />
        </InputForm>
      </FormContainer>
    </Container>
  )
}

export default CreditCard
