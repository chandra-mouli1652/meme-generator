// Style your components here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`

export const Heading = styled.h1`
  font-size: 24px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: left;
  }
`

export const FormAndMemeContainer = styled.div`
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const MemeContainer = styled.div`
  margin-bottom: 50px;
  background-image: url(${props => props.backgroundImage});
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`

export const TextContent = styled.p`
  font-size: ${props => props.activeFontSizeId}px;
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const CustomLabel = styled.label`
  font-size: 12px;
`

export const CustomInput = styled.input`
  height: 40px;
`

export const CustomSelect = styled.select`
  height: 40px;
`

export const CustomOption = styled.option`
  font-size: 16px;
`

export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
