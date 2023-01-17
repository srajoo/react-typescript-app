import styled from 'styled-components'
import Tiles from '../../../components/Tiles/Tiles'

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 16px 64px 16px;
  width: 50%;
`

type CardItemType = {
  numOfCardsInEachLine: number
}

export const CardItem = styled(Tiles)<CardItemType>`
  min-height: 100px;
  min-width: 100px;
  height: 16vh;
  font-size: 8rem;
  flex: 1 0
    calc(
      (100% / ${({ numOfCardsInEachLine }): number => numOfCardsInEachLine}) -
        16px
    );
`