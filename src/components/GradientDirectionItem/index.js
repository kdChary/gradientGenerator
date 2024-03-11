import {DirectionItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, active} = props
  const {value, displayText} = directionDetails

  const onClickDirection = () => {
    const {changeDirection} = props
    changeDirection(value)
  }

  return (
    <DirectionItem>
      <DirectionButton type="button" onClick={onClickDirection} active={active}>
        {displayText}
      </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
