import { routePaths } from './routes.js'

export const navigationItems = [
  { to: routePaths.home, label: 'Home', icon: 'home', end: true },
  { to: routePaths.about, label: 'About', icon: 'person' },
  { to: routePaths.portfolio, label: 'Portfolio', icon: 'briefcase' },
  { to: routePaths.recipes, label: 'Recipes', icon: 'book' },
]

export const toolItems = [
  { to: routePaths.doughCalculator, label: 'Dough Calculator', icon: 'calculator' },
]
