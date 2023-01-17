import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Dialog,
  Title,
  TitleContainer,
  CloseButton,
  Message,
  Footer,
} from './styles'

type AlertModalProps = {
  isShowing?: boolean
  onCloseModal?: () => void
  title?: string
  message?: string
  children?: React.ReactNode
}

const AlertModal: React.FC<AlertModalProps> = (props) => {
  const {
    isShowing = false,
    onCloseModal,
    title = '',
    message = '',
    children,
  } = props

  return (
    <Container isShowing={isShowing}>
      <Dialog>
        <TitleContainer>
          <Title>{title}</Title>
          <CloseButton onClick={onCloseModal}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </TitleContainer>

        <Message>{message}</Message>

        <Footer>{children}</Footer>
      </Dialog>
    </Container>
  )
}

export default AlertModal