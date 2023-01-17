import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faClock, faPlay, faPause, faUndo } from '@fortawesome/free-solid-svg-icons';
import useClearGameState from '../useClearGameState'
import GameContext from '../GameContext'
import {
  Container,
  LeftSideContainer,
  BackButton,
  DifficultyIndicator,
  RightSideContainer,
  Timer,
  TimerText,
  PlayPauseButton,
  RestartButton,
  ButtonText,
} from './styles'

const GameController: React.FC = () => {
  const {
    difficulty,
    isPaused,
    setIsPaused,
    hoursText,
    minutesText,
    secondsText,
    onStartTimer,
    onPauseTimer,
  } = useContext(GameContext)

  const onClearGameState = useClearGameState()
  const navigate = useNavigate()

  useEffect(onClearGameState, [])

  const onPlayPause = (): void => {
    setIsPaused(!isPaused)
    if (isPaused) onStartTimer()
    else onPauseTimer()
  }

  const onReturnToMenu = (): void => {
    const playerWantsToLeave = window.confirm(
      'Are you sure you want to stop playing?',
    )

    if (playerWantsToLeave) navigate(-1);
  }

  const onRestart = (): void => {
    if (isPaused) onClearGameState()
  }

  return (
    <Container>
      <LeftSideContainer>
        <BackButton onClick={onReturnToMenu}>
          <FontAwesomeIcon icon={ faChevronLeft } />
        </BackButton>

        
      </LeftSideContainer>

      <RightSideContainer>
        <Timer>
          <FontAwesomeIcon icon={faClock} />
          <TimerText>{` ${minutesText}:${secondsText}`}</TimerText>
        </Timer>

        <PlayPauseButton onClick={onPlayPause}>
          <FontAwesomeIcon icon={isPaused ? 'play' : 'pause'} />
        </PlayPauseButton>

        <RestartButton isPaused={isPaused} onClick={onRestart}>
          <FontAwesomeIcon icon={ faUndo } />
          <ButtonText>Restart</ButtonText>
        </RestartButton>
      </RightSideContainer>
    </Container>
  )
}

export default GameController;