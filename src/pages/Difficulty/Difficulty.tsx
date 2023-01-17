import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import { ThemeTypes } from '../../types/Theme';
import { setGameConfig } from '../../store/actions/GameConfigAction';
import { setTheme } from '../../store/actions/ThemeActions';
import DIFFICULTIES from '../../config/Difficulties'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import {
    Container,
    MenuContainer,
    MenuContent,
    AppName,
    DifficultyContainer,
    DifficultyLabelContainer,
    DifficultyLabelSubtitle,
    DifficultyLabelTitle,
    SwitchThemesButton,
    DifficultyLabel,
    Difficulty,
    PlayButton,
    PlayButtonContainer,
  } from './styles'

const DifficultyChooser: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const themeType = useTypedSelector(({ Theme }) => Theme.type)

    const selectedDifficulty = useTypedSelector(({ GameConfig }) => GameConfig.difficulty,)

    const onSelectDifficulty = (difficulty: number) => (): void => {
        const action = setGameConfig({ difficulty })
        dispatch(action)
      }

    const onPlay = (): void => {
        navigate('/game')
        //console.log('game');
      }
    
    const onSwitchThemes = (): void => {
        const isUsingDark = themeType === ThemeTypes.dark
        const newThemeType = isUsingDark ? ThemeTypes.light : ThemeTypes.dark
        const action = setTheme({ type: newThemeType })
        dispatch(action)
      }
      return (
        <Container>
          <MenuContainer>
            <AppName>Memory Game - Powered by React</AppName>
    
            <MenuContent>
              <DifficultyLabelContainer>
                <DifficultyLabel>
                  <DifficultyLabelTitle>Choose a Level of Difficulty:</DifficultyLabelTitle>
                </DifficultyLabel>
    
                <SwitchThemesButton onClick={onSwitchThemes}>
                  <FontAwesomeIcon icon={faWandMagicSparkles} />
                </SwitchThemesButton>
              </DifficultyLabelContainer>
    
              <DifficultyContainer> 
                <Difficulty
                  name="Easy"
                  numOfCards={DIFFICULTIES.EASY}
                  onClick={onSelectDifficulty(DIFFICULTIES.EASY)}
                  isSelected={selectedDifficulty === DIFFICULTIES.EASY}
                />
                <Difficulty
                  name="Medium"
                  numOfCards={DIFFICULTIES.MEDIUM}
                  onClick={onSelectDifficulty(DIFFICULTIES.MEDIUM)}
                  isSelected={selectedDifficulty === DIFFICULTIES.MEDIUM}
                />
                <Difficulty
                  name="Hard"
                  numOfCards={DIFFICULTIES.HARD}
                  onClick={onSelectDifficulty(DIFFICULTIES.HARD)}
                  isSelected={selectedDifficulty === DIFFICULTIES.HARD}
                />
                <Difficulty
                  name="Very hard"
                  numOfCards={DIFFICULTIES.VERY_HARD}
                  onClick={onSelectDifficulty(DIFFICULTIES.VERY_HARD)}
                  isSelected={selectedDifficulty === DIFFICULTIES.VERY_HARD}
                />
              </DifficultyContainer>
    
              <PlayButtonContainer>
                <PlayButton onClick={onPlay}>Play</PlayButton>
              </PlayButtonContainer>
            </MenuContent>
          </MenuContainer>
        </Container>
      )
  }
    
export default DifficultyChooser;