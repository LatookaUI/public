import { Navigate, Route, Routes } from 'react-router-dom'
import { routePaths } from '../constants/routes.js'
import AppLayout from '../layouts/AppLayout.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import DoughCalculatorPage from '../pages/DoughCalculatorPage.jsx'
import HomePage from '../pages/HomePage.jsx'
import PlaceholderPage from '../pages/PlaceholderPage.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path={routePaths.about.slice(1)} element={<AboutPage />} />
        <Route path={routePaths.portfolio.slice(1)} element={<PlaceholderPage eyebrow="PORTFOLIO" title="Personal Projects Portfolio" description="A curated collection of projects and things you have made." icon="briefcase" />} />
        <Route path={routePaths.recipes.slice(1)} element={<PlaceholderPage eyebrow="RECIPES" title="Recipes" description="A place to collect, organize, and revisit favorite recipes." icon="book" />} />
        <Route path={routePaths.doughCalculator.slice(1)} element={<DoughCalculatorPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
