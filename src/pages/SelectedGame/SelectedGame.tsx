import React, { useState } from 'react'
import { useTimer, useTypedSelector } from '../../hooks'
import GameWinMessage from './GameWin/GameWin'
import GameControlBar from './GameController/GameController'
import GameContext from './GameContext'
import { Container } from './styles'
import GameTiles from './GameTiles/GameTiles'

const SelectedGame: React.FC = () => {
  const [iconList, setIconList] = useState<string[]>([])
  const [iconFoundList, setIconFoundList] = useState<string[]>([])
  const [firstSelectedCard, setFirstSelectedCard] = useState(-1)
  const [secondSelectedCard, setSecondSelectedCard] = useState(-1)
  const [isShowingWinModal, setIsShowingWinModal] = useState(false)
  const [isCheckingCards, setIsCheckingCards] = useState(false)
  const [isPaused, setIsPaused] = useState(true)

  const { difficulty } = useTypedSelector(({ GameConfig }) => GameConfig)

  const {
    hoursText,
    minutesText,
    secondsText,
    onStartTimer,
    onStopTimer,
    onPauseTimer,
  } = useTimer()

  return (
    <GameContext.Provider
      value={{
        difficulty,
        isPaused,
        setIsPaused,
        iconList,
        setIconList,
        iconFoundList,
        setIconFoundList,
        firstSelectedCard,
        setFirstSelectedCard,
        secondSelectedCard,
        setSecondSelectedCard,
        isCheckingCards,
        setIsCheckingCards,
        isShowingWinModal,
        setIsShowingWinModal,
        hoursText,
        minutesText,
        secondsText,
        onStartTimer,
        onStopTimer,
        onPauseTimer,
      }}
    >
      <Container>
        <GameTiles />
        <GameControlBar />
        <GameWinMessage />
      </Container>
    </GameContext.Provider>
  )
}

export default SelectedGame;