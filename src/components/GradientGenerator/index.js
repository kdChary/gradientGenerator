import {Component} from 'react'

import {
  MainContainer,
  GradientControlsSection,
  GradientsDirectionsList,
  ColorsSection,
  ColorInput,
  ColorCard,
  Heading,
  Text,
  GenerateBtn,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    bgColorOne: '#8ae323',
    bgColorTwo: '#014f7b',
  }

  onChangeColorOne = event => {
    this.setState({colorOne: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({colorTwo: event.target.value})
  }

  changeDirection = value => {
    this.setState({direction: value})
  }

  onClickGenerate = () => {
    const {colorOne, colorTwo} = this.state
    this.setState({bgColorOne: colorOne, bgColorTwo: colorTwo})
  }

  render() {
    const {direction, colorOne, colorTwo, bgColorOne, bgColorTwo} = this.state
    const gradient = `to ${direction}, ${bgColorOne}, ${bgColorTwo}`

    return (
      <MainContainer gradient={gradient} data-testid="gradientGenerator">
        <Heading>Generate a CSS Color Gradient</Heading>

        <GradientControlsSection>
          <Text>Choose Direction</Text>

          <GradientsDirectionsList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                changeDirection={this.changeDirection}
                active={eachDirection.value === direction}
              />
            ))}
          </GradientsDirectionsList>
          <Text>Pick the Colors</Text>

          <ColorsSection>
            <ColorCard>
              <Text>{colorOne}</Text>
              <ColorInput
                type="color"
                id="colorOne"
                value={colorOne}
                onChange={this.onChangeColorOne}
              />
            </ColorCard>

            <ColorCard>
              <Text>{colorTwo}</Text>
              <ColorInput
                type="color"
                id="colorTwo"
                value={colorTwo}
                onChange={this.onChangeColorTwo}
              />
            </ColorCard>
          </ColorsSection>

          <GenerateBtn type="button" onClick={this.onClickGenerate}>
            Generate
          </GenerateBtn>
        </GradientControlsSection>
      </MainContainer>
    )
  }
}

export default GradientGenerator
