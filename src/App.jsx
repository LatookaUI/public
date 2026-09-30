import {
  Button,
  ButtonGroup,
  Callout,
  Card,
  Checkbox,
  Drawer,
  Icon,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Slider,
  Tag,
} from '@blueprintjs/core'
import { useMemo, useState } from 'react'
import './App.css'
import brandLogo from './assets/lu_brand_danger.png'

const thicknessOptions = [
  { label: 'Thin', value: 1.8 },
  { label: 'Regular', value: 2.11 },
  { label: 'Thick', value: 2.75 },
]

const pages = {
  home: {
    title: 'Latooka UI Home Page',
    description: 'Your starting point for the Latooka UI workspace.',
    eyebrow: 'HOME',
    icon: 'home',
  },
  about: {
    title: 'Personal Resume Page',
    description: 'A home for your experience, skills, and professional story.',
    eyebrow: 'ABOUT',
    icon: 'person',
  },
  portfolio: {
    title: 'Personal Projects Portfolio',
    description: 'A curated collection of projects and things you have made.',
    eyebrow: 'PORTFOLIO',
    icon: 'briefcase',
  },
  recipes: {
    title: 'Recipes',
    description: 'A place to collect, organize, and revisit favorite recipes.',
    eyebrow: 'RECIPES',
    icon: 'book',
  },
}

function PlaceholderPage({ page }) {
  return (
    <section className="placeholder-page">
      <div className="page-heading">
        <div>
          <div className="eyebrow"><span>LATOOKA UI</span><Icon icon="chevron-right" size={10} /><span>{page.eyebrow}</span></div>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
        </div>
        <Tag className="coming-soon-tag" minimal><Icon icon="build" size={12} />Coming soon</Tag>
      </div>
      <Card className="placeholder-card" elevation={0}>
        <div className="placeholder-icon"><Icon icon={page.icon} size={22} /></div>
        <div className="eyebrow">PAGE IN PROGRESS</div>
        <h2>{page.title}</h2>
        <p>This section is ready for its content. For now, use the navigation to explore the other areas of Latooka UI.</p>
      </Card>
    </section>
  )
}

function App() {
  const [size, setSize] = useState(16)
  const [quantity, setQuantity] = useState(6)
  const [thickness, setThickness] = useState(2.11)
  const [glutenFree, setGlutenFree] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activePage, setActivePage] = useState('dough-calculator')
  const [drawerOpen, setDrawerOpen] = useState(false)

  const activePageTitle = activePage === 'dough-calculator' ? 'Dough Calculator' : pages[activePage].title

  function renderNavigation() {
    const navItems = [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'about', label: 'About', icon: 'person' },
      { id: 'portfolio', label: 'Portfolio', icon: 'briefcase' },
      { id: 'recipes', label: 'Recipes', icon: 'book' },
    ]

    return (
      <nav className="navigation-list" aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            className={`nav-item${activePage === item.id ? ' is-active' : ''}`}
            type="button"
            key={item.id}
            aria-current={activePage === item.id ? 'page' : undefined}
            onClick={() => { setActivePage(item.id); setDrawerOpen(false) }}
          >
            <Icon icon={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
        <div className="nav-section-label tools-nav-label">TOOLS</div>
        <button
          className={`nav-item nav-subitem${activePage === 'dough-calculator' ? ' is-active' : ''}`}
          type="button"
          aria-current={activePage === 'dough-calculator' ? 'page' : undefined}
          onClick={() => { setActivePage('dough-calculator'); setDrawerOpen(false) }}
        >
          <Icon icon="calculator" />
          <span>Dough Calculator</span>
        </button>
      </nav>
    )
  }

  const recipe = useMemo(() => {
    const baseFlour = glutenFree ? 333 * 6 : 1509.797685 * (480 / 425)
    const doughFactor = 2550 / 1509.797685
    const flour = baseFlour * (size / 16) ** 2 * (quantity / 6) * (thickness / 2.11)
    const hydration = glutenFree ? 0.8 : 0.62
    const water = Math.round(flour * hydration)
    const yeast = flour * 0.004
    const salt = Math.round(flour * 0.025)
    const sugar = Math.round(flour * 0.02)
    const oil = Math.round(flour * 0.033)
    const ball = Math.round((flour * doughFactor) / quantity)
    const thicknessName = thickness === 1.8 ? 'thin' : thickness === 2.75 ? 'thick' : 'regular'

    let tip = null
    if (glutenFree) {
      tip = { title: 'Gluten-free tip', text: 'GF dough is stickier — oil your hands before shaping.' }
    } else if (size >= 18) {
      tip = { title: 'Big pizza tip', text: `${size}" is large — preheat for the full 45 min at max temp.` }
    } else if (quantity >= 8) {
      tip = { title: 'Batch tip', text: `Making ${quantity} pizzas? Shape all balls at once — they keep 4 days in the fridge.` }
    } else if (thickness === 2.75) {
      tip = { title: 'Thick crust', text: 'Drop to 450°F and give it 10–12 min instead of 6–8.' }
    } else if (thickness === 1.8) {
      tip = { title: 'Thin crust', text: 'Thin crust cooks fast — 4–5 minutes. Watch it closely.' }
    }

    const steps = glutenFree
      ? [
        'Add cold water and yeast',
        'Add GF flour + olive oil, mix 2 min',
        'Add sugar and salt, mix 3–4 min',
        'Refrigerate 15 min to firm up',
        'Oil hands, shape into balls',
        'Refrigerate up to 48 hours',
        'Bring to room temp before using',
      ]
      : [
        'Cool water to under 60°F',
        'Mix water + active dry yeast',
        'Add flour + olive oil, mix 2 min',
        'Add sugar and salt on low',
        'Mix 10 more minutes',
        'Cover, rest 1–3 hours',
        'Shape into balls, seal seam',
        'Refrigerate 2–4 days (3 ideal)',
        'Bring to room temp before using',
      ]

    return {
      flour,
      water,
      yeast,
      salt,
      sugar,
      oil,
      ball,
      hydration: Math.round(hydration * 100),
      thicknessName,
      tip,
      steps,
      flourName: glutenFree ? 'GF flour' : 'Bread flour',
      flourNote: glutenFree ? 'Caputo GF recommended' : '12–14% protein',
    }
  }, [glutenFree, quantity, size, thickness])

  const ingredients = [
    { name: recipe.flourName, note: recipe.flourNote, amount: Math.round(recipe.flour), percent: '100%' },
    { name: 'Water', note: 'Cold, under 60°F', amount: recipe.water, percent: `${recipe.hydration}%` },
    { name: 'Yeast', note: 'Active dry', amount: recipe.yeast.toFixed(1), percent: '0.4%' },
    { name: 'Salt', amount: recipe.salt, percent: '2.5%' },
    { name: 'Sugar', amount: recipe.sugar, percent: '2%' },
    { name: 'Olive oil', amount: recipe.oil, percent: '3.3%' },
  ]

  async function copyRecipe() {
    const lines = [
      'DOUGH RECIPE',
      `${quantity}x ${size}" pizza · Dough ball: ${recipe.ball}g`,
      '',
      ...ingredients.map(({ name, amount }) => `${name}: ${amount}g`),
    ]

    try {
      await navigator.clipboard.writeText(lines.join('\n'))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="app-shell bp6-dark">
      <Navbar className="topbar">
        <NavbarGroup>
          <Button
            className="mobile-menu-button"
            minimal
            icon="menu"
            aria-label="Open navigation menu"
            onClick={() => setDrawerOpen(true)}
          />
          <img className="brand-logo" src={brandLogo} alt="La Ookau" />
          <span className="topbar-divider" />
          <NavbarHeading>{activePageTitle}</NavbarHeading>
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
        onClose={() => setDrawerOpen(false)}
        size="300px"
        usePortal
      >
        <div className="drawer-nav-content">
          <div className="nav-section-label">EXPLORE</div>
          {renderNavigation()}
          <div className="drawer-footer">LATOOKA UI <span>·</span> Kitchen tools</div>
        </div>
      </Drawer>

      <div className="workspace">
        <aside className="sidebar" aria-label="Application navigation">
          <div className="nav-section-label">EXPLORE</div>
          {renderNavigation()}
          <div className="sidebar-footer">
            <div className="sidebar-footer-mark"><Icon icon="small-tick" /></div>
            <div><strong>Made for the kitchen</strong><span>Precise recipes, less guesswork.</span></div>
          </div>
        </aside>

        <main className="content-area">
          {activePage === 'dough-calculator' ? <>
            <div className="page-heading">
              <div>
                <div className="eyebrow"><span>TOOLS</span><Icon icon="chevron-right" size={10} /><span>DOUGH</span></div>
                <h1>Dough calculator</h1>
                <p>Dial in your pizza dough and get every ingredient weighed out.</p>
              </div>
              <Tag className="fermentation-tag" minimal>
                <Icon icon="time" size={12} />
                {glutenFree ? 'Cold rest up to 48 hrs' : 'Cold ferment · 2–4 days'}
              </Tag>
            </div>

            <div className="calculator-layout">
              <section className="calculator-controls" aria-label="Dough settings">
                <Card className="settings-card" elevation={0}>
                  <div className="card-heading">
                    <div className="card-icon"><Icon icon="settings" /></div>
                    <div><h2>Build your batch</h2><p>Choose your pizza and dough style.</p></div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label"><label htmlFor="pizza-size">Pizza size</label><strong>{size}<span> in</span></strong></div>
                    <Slider
                      id="pizza-size"
                      min={10}
                      max={20}
                      stepSize={1}
                      labelStepSize={1}
                      labelRenderer={(value) => (
                        <span className={value === size ? 'slider-tick-current' : value < size ? 'slider-tick-passed' : undefined}>
                          {value}
                        </span>
                      )}
                      value={size}
                      onChange={setSize}
                      aria-label="Pizza size in inches"
                    />
                    <div className="range-ends"><span>10 in</span><span>20 in</span></div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label"><label htmlFor="pizza-quantity">Number of pizzas</label><strong>{quantity}<span> {quantity === 1 ? 'pizza' : 'pizzas'}</span></strong></div>
                    <Slider
                      id="pizza-quantity"
                      min={1}
                      max={10}
                      stepSize={1}
                      labelStepSize={1}
                      labelRenderer={(value) => (
                        <span className={value === quantity ? 'slider-tick-current' : value < quantity ? 'slider-tick-passed' : undefined}>
                          {value}
                        </span>
                      )}
                      value={quantity}
                      onChange={setQuantity}
                      aria-label="Number of pizzas"
                    />
                    <div className="range-ends"><span>1 pizza</span><span>10 pizzas</span></div>
                  </div>

                  <div className="setting-row thickness-row">
                    <div className="setting-label"><span>Crust thickness</span><span className="muted-value">Dough factor</span></div>
                    <ButtonGroup className="thickness-options" fill>
                      {thicknessOptions.map((option) => (
                        <Button
                          key={option.value}
                          active={thickness === option.value}
                          onClick={() => setThickness(option.value)}
                          aria-pressed={thickness === option.value}
                        >
                          {option.label}
                        </Button>
                      ))}
                    </ButtonGroup>
                  </div>

                  <div className="diet-option">
                    <Checkbox checked={glutenFree} onChange={(event) => setGlutenFree(event.target.checked)}>
                      <span className="diet-title">Gluten-free dough</span>
                      <span className="diet-description">Use GF flour and adjusted hydration</span>
                    </Checkbox>
                    <Tag className="gf-tag" minimal>GF</Tag>
                  </div>

                  {recipe.tip && (
                    <Callout className="recipe-tip" icon="lightbulb" intent="warning">
                      <strong>{recipe.tip.title}</strong><span>{recipe.tip.text}</span>
                    </Callout>
                  )}
                </Card>

                <div className="stats-grid" aria-label="Recipe summary">
                  <Card className="stat-card stat-highlight" elevation={0}>
                    <span className="stat-icon"><Icon icon="heat-grid" /></span>
                    <span className="stat-value">{recipe.ball}<small>g</small></span>
                    <span className="stat-label">Dough ball each</span>
                  </Card>
                  <Card className="stat-card" elevation={0}>
                    <span className="stat-icon"><Icon icon="tint" /></span>
                    <span className="stat-value">{recipe.hydration}<small>%</small></span>
                    <span className="stat-label">Hydration</span>
                  </Card>
                  <Card className="stat-card" elevation={0}>
                    <span className="stat-icon"><Icon icon="layers" /></span>
                    <span className="stat-value">{Math.round(recipe.flour)}<small>g</small></span>
                    <span className="stat-label">Total flour</span>
                  </Card>
                  <Card className="stat-card" elevation={0}>
                    <span className="stat-icon"><Icon icon="tint" /></span>
                    <span className="stat-value">{recipe.water}<small>g</small></span>
                    <span className="stat-label">Total water</span>
                  </Card>
                </div>
              </section>

              <section className="recipe-column" aria-label="Calculated recipe">
                <Card className="recipe-card" elevation={0}>
                  <div className="recipe-title-row">
                    <div><div className="eyebrow">YOUR RECIPE</div><h2>Ingredients</h2></div>
                    <Tag className="batch-tag" minimal>{quantity} {quantity === 1 ? 'BALL' : 'BALLS'}</Tag>
                  </div>
                  <p className="recipe-description">{glutenFree ? 'Gluten-free pizza dough' : 'Classic pizza dough'} <span>·</span> {size}-inch <span>·</span> {recipe.thicknessName} crust</p>

                  <div className="ingredient-table-wrap">
                    <table className="ingredient-table">
                      <thead><tr><th>INGREDIENT</th><th>AMOUNT</th><th>BAKER’S %</th></tr></thead>
                      <tbody>
                        {ingredients.map((ingredient) => (
                          <tr key={ingredient.name}>
                            <td><strong>{ingredient.name}</strong>{ingredient.note && <span className="ingredient-note">{ingredient.note}</span>}</td>
                            <td className="amount-cell">{ingredient.amount}<span>g</span></td>
                            <td><span className="bakers-percent">{ingredient.percent}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="recipe-actions">
                    <Button className="copy-button" intent="primary" icon={copied ? 'tick' : 'clipboard'} onClick={copyRecipe}>
                      {copied ? 'Copied recipe' : 'Copy recipe'}
                    </Button>
                    <Button icon="print" onClick={() => window.print()}>Print / save</Button>
                  </div>
                </Card>

                <Card className="instructions-card" elevation={0}>
                  <div className="instructions-heading"><div className="card-icon"><Icon icon="manual" /></div><div><h2>{glutenFree ? 'Gluten-free instructions' : 'Dough making instructions'}</h2><p>Mix, rest, and get ready to bake.</p></div></div>
                  <ol className="steps-list">
                    {recipe.steps.map((step, index) => <li key={step}><span className="step-number">{String(index + 1).padStart(2, '0')}</span><span>{step}</span></li>)}
                  </ol>
                </Card>
              </section>
            </div>
          </> : <PlaceholderPage page={pages[activePage]} />}
          <footer className="content-footer"><span>LATOOKA UI <b>·</b> KITCHEN TOOLS</span><span>Measure well. Make something good.</span></footer>
        </main>
      </div>
    </div>
  )
}

export default App
