import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { PrimaryAction, SecondaryAction } from './styles'
import AlertModal from '../../../components/AlertModal/AlertModal'
import useClearGameState from '../useClearGameState'
import useCheckGameEnd from '../useCheckGameEnd'
import GameContext from '../GameContext'

const GameWin: React.FC = () => {
  const { isShowingWinModal, setIsShowingWinModal } = useContext(GameContext)

  const onClearGameState = useClearGameState()
  const navigate = useNavigate()
  useCheckGameEnd()

  const onGoBack = (): void => {
    navigate(-1);
  }

  const onPlayAgain = (): void => {
    setIsShowingWinModal(false)
    onClearGameState()
  }

  return (
    <AlertModal
      isShowing={isShowingWinModal}
      onCloseModal={onPlayAgain}
      title="Congratulations!"
      message="You proved that your memory is powerful"
    >
      <SecondaryAction onClick={onGoBack}>Go Back</SecondaryAction>
      <PrimaryAction onClick={onPlayAgain}>Play Again</PrimaryAction>
    </AlertModal>
  )
}

export default GameWin;