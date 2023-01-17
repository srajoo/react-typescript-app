import React, { memo } from 'react'
import { Container } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

type CardProps = {
  children: React.ReactNode
  onClick: () => void
  isShowingFrontFace?: boolean
  isVisible?: boolean
  className?: string
  disabled?: boolean
}

const Tiles: React.FC<CardProps> = (props) => {
  const {
    children,
    onClick,
    isShowingFrontFace = false,
    isVisible = true,
    className,
    disabled = false,
  } = props

  return (
    <Container
      isVisible={isVisible}
      className={className}
      isShowingFrontFace={isShowingFrontFace}
      onClick={onClick}
      disabled={disabled}
    >
      {isShowingFrontFace ? (
        children
      ) : (
        <FontAwesomeIcon icon={faCircleQuestion} />
      )}
    </Container>
  )
}

export default memo(Tiles)