import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  background-image: linear-gradient(${props => props.gradient});
`
export const Heading = styled.h2`
  font-weight: 600;
  font-size: 21px;
  color: #ededed;
`
export const GradientControlsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  //   border: solid 1px #ffffff;
`
export const GradientsDirectionsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0;
  //   border: solid 1px #ffffff;
`

export const Text = styled.p`
  font-weight: 500;
  font-size: 13px;
  color: #ededed;
`

export const ColorsSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 154px;
`
export const ColorInput = styled.input`
  width: 54px;
  height: 31px;
  border: none;
  background-color: transparent;
`
export const ColorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const GenerateBtn = styled.button`
  width: 96px;
  height: 25px;
  margin-top: 7px;
  background-color: #00c9b7;
  border: solid 1px #00c9b7;
  border-radius: 4px;
  color: #1e293b;
  font-size: 13px;
  font-weight: 600;
`
