// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`
export const CreditCardContainer = styled.div`
  width: 50%;
  background-color: #3b4b69;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Heading = styled.h1`
  color: white;
  font-size: 30px;
  margin-bottom: 150px;
`
export const CreditCardDisplay = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  padding-top: 100px;
  padding-bottom: 80px;
  padding-right: 60px;
  padding-left: 60px;
  width: 60%;
  border-radius: 30px;
`
export const CreditCardNumber = styled.p`
  color: white;
  font-size: 35px;
  font-weight: 400px;
  margin-bottom: 60px;
`
export const NameHeading = styled.p`
  color: white;
  font-size: 15px;
  margin-bottom: 20px;
`
export const CreditCardName = styled.p`
  color: white;
  font-size: 25px;
`

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    height: 50vh;
    width: 100%;
  }
`
export const InputForm = styled.form`
  box-shadow: 0px 0px 10px 0px #bfbfbf;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  justify-content: center;
`
export const FormHeading = styled.h1`
  color: #475569;
`
export const InputField = styled.input`
  height: 45px;
  margin-bottom: 30px;
  border: 1px solid #c3cad9;
  width: 330px;
  border-radius: 5px;
  padding-left: 10px;
  color: #475569;
  outline: none;
`
