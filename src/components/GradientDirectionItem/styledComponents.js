import styled from 'styled-components'

export const DirectionItem = styled.ul`
  list-style-type: none;
  border: none;
  background-color: transparent;
`

export const DirectionButton = styled.button`
  width: 48px;
  height: 27px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #334155;
  border: solid 1px #ededed50;
  border-radius: 4px;
  background-color: ${props => (props.active ? '#ededed50' : '#ededed')};
`
