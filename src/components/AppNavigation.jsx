import { Icon } from '@blueprintjs/core'
import { NavLink } from 'react-router-dom'
import { navigationItems, toolItems } from '../constants/navigation.js'

function NavigationLink({ item }) {
  return (
    <NavLink
      className={({ isActive }) => `nav-item${isActive ? ' is-active' : ''}${item.to.startsWith('/tools/') ? ' nav-subitem' : ''}`}
      to={item.to}
      end={item.end}
      onClick={item.onNavigate}
    >
      <Icon icon={item.icon} />
      <span>{item.label}</span>
    </NavLink>
  )
}

export default function AppNavigation({ onNavigate }) {
  return (
    <nav className="navigation-list" aria-label="Main navigation">
      {navigationItems.map((item) => <NavigationLink key={item.to} item={{ ...item, onNavigate }} />)}
      <div className="nav-section-label tools-nav-label">TOOLS</div>
      {toolItems.map((item) => <NavigationLink key={item.to} item={{ ...item, onNavigate }} />)}
    </nav>
  )
}
