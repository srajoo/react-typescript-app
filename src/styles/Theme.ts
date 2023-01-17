import { ThemeTypes } from '../types/Theme'

export default {
  [ThemeTypes.dark]: {
    accent: '#954f3d',
    primaryText: '#ffffff',
    secondaryText: '#ccc',
    background: '#44302c',
    controlBar: '#d07058',
    cardBackFace: '#111111',
    cardFrontFace: '#e6e6e6',
  },
  [ThemeTypes.light]: {
    accent: '#cb603e',
    primaryText: '#442924',
    secondaryText: '#5a4542',
    background: '#ffffff',
    controlBar: '#d07058',
    cardBackFace: '#deb6af',
    cardFrontFace: '#cb603e',
  },
}