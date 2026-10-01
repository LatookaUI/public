import { Button, Drawer, Icon, Navbar, NavbarGroup, NavbarHeading } from '@blueprintjs/core'
import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import brandLogo from '../assets/lu_brand_danger.png'
import AppNavigation from '../components/AppNavigation.jsx'
import { routePaths } from '../constants/routes.js'

const pageTitles = {
  [routePaths.home]: 'Latooka UI Home Page',
  [routePaths.about]: 'Personal Resume Page',
  [routePaths.portfolio]: 'Personal Projects Portfolio',
  [routePaths.recipes]: 'Recipes',
  [routePaths.doughCalculator]: 'Dough Calculator',
}

export default function AppLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()
  const title = pageTitles[location.pathname] ?? 'Latooka UI'
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <div className="app-shell bp6-dark">
      <Navbar className="topbar">
        <NavbarGroup>
          <Button className="mobile-menu-button" minimal icon="menu" aria-label="Open navigation menu" onClick={() => setDrawerOpen(true)} />
          <img className="brand-logo" src={brandLogo} alt="La Ookau" />
          <span className="topbar-divider" />
          <NavbarHeading>{title}</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup className="topbar-meta">
          <span className="status-dot" />
          <span>Recipe workspace</span>
        </NavbarGroup>
      </Navbar>

      <Drawer
        className="mobile-navigation-drawer bp6-dark"
        title="Navigation"
        icon="compass"
        position="left"
        isOpen={drawerOpen}
        onClose={closeDrawer}
        size="300px"
        usePortal
      >
        <div className="drawer-nav-content">
          <div className="nav-section-label">EXPLORE</div>
          <AppNavigation onNavigate={closeDrawer} />
          <div className="drawer-footer">LATOOKA UI <span>·</span> Kitchen tools</div>
        </div>
      </Drawer>

      <div className="workspace">
        <aside className="sidebar" aria-label="Application navigation">
          <div className="nav-section-label">EXPLORE</div>
          <AppNavigation />
          <div className="sidebar-footer">
            <div className="sidebar-footer-mark"><Icon icon="small-tick" /></div>
            <div><strong>Made for the kitchen</strong><span>Precise recipes, less guesswork.</span></div>
          </div>
        </aside>
        <main className="content-area"><Outlet /></main>
      </div>
    </div>
  )
}
