import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/Global'
import { useTypedSelector } from './hooks/index'
import THEME_COLORS from './styles/Theme'
import { ThemeTypes } from './types/Theme'
import Difficulty from './pages/Difficulty/Difficulty'
import SelectedGame from './pages/SelectedGame/SelectedGame'

const App: React.FC = () => {
  const themeType = useTypedSelector(({ Theme }) => Theme.type)
  const themeColor = THEME_COLORS[themeType || ThemeTypes.dark]

  return (
    <ThemeProvider theme={themeColor}>
        <GlobalStyles />
        <Routes>
            <Route path='/' element={ <Difficulty /> } />
            <Route path='/game' element={ <SelectedGame />} />
        </Routes>
    </ThemeProvider>
  );
}

  

export default App;
