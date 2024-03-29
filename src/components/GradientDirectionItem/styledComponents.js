import styled from 'styled-components'

export const DirectionItem = styled.li`
  list-style-type: none;
  border: none;
  background-color: transparent;
  margin-right: 5px;
`

export const DirectionButton = styled.button`
  font-size: 11px;
  padding: 5px 11px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #334155;
  border: solid 1px #ededed;
  border-radius: 4px;
  opacity: ${props => (props.active ? 1 : 0.5)};
  background-color: #ededed;
`
