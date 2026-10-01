import { Card, Icon } from '@blueprintjs/core'
import { Link } from 'react-router-dom'
import { routePaths } from '../constants/routes.js'

const shortcuts = [
  { to: routePaths.about, icon: 'person', title: 'About', text: 'Introduce yourself and share your story.' },
  { to: routePaths.portfolio, icon: 'briefcase', title: 'Portfolio', text: 'Showcase your projects and recent work.' },
  { to: routePaths.recipes, icon: 'book', title: 'Recipes', text: 'Collect your favorite recipes.' },
  { to: routePaths.doughCalculator, icon: 'calculator', title: 'Dough calculator', text: 'Scale pizza dough and get ingredient weights.' },
]

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div>
          <div className="eyebrow"><span>WELCOME</span><Icon icon="chevron-right" size={10} /><span>LATOOKA UI</span></div>
          <p className="home-kicker">A PERSONAL WORKSPACE</p>
          <h1>Make room for<br /><span>good ideas.</span></h1>
          <p className="home-description">A home for your story, your work, and the tools that make everyday projects easier.</p>
          <Link className="home-primary-action bp6-button bp6-intent-primary" to={routePaths.about}><Icon icon="arrow-right" />Explore Latooka UI</Link>
        </div>
        <div className="home-art" aria-hidden="true"><div className="home-art-ring" /><div className="home-art-center"><span>LU</span><i /><i /><i /></div><div className="home-art-caption">A LITTLE BIT OF EVERYTHING <span>01 — 04</span></div></div>
      </section>
      <section className="home-shortcuts" aria-labelledby="home-shortcuts-title">
        <div className="home-section-heading"><div><p className="about-section-kicker">YOUR SPACE</p><h2 id="home-shortcuts-title">Where do you want to go?</h2></div><span>Choose a section to get started</span></div>
        <div className="home-shortcut-grid">
          {shortcuts.map((item, index) => (
            <Card className="home-shortcut-card" elevation={0} key={item.to}>
              <div className="home-shortcut-top"><span>0{index + 1}</span><Icon icon={item.icon} /></div>
              <h3>{item.title}</h3><p>{item.text}</p>
              <Link to={item.to}>Open section <Icon icon="arrow-right" size={12} /></Link>
            </Card>
          ))}
        </div>
      </section>
      <footer className="content-footer"><span>LATOOKA UI <b>·</b> YOUR WORKSPACE</span><span>Make something good.</span></footer>
    </div>
  )
}
