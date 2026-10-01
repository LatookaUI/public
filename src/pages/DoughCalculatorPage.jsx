import { Button, ButtonGroup, Callout, Card, Checkbox, Icon, Slider, Tag } from '@blueprintjs/core'
import { useState } from 'react'
import useDoughRecipe from '../hooks/useDoughRecipe.js'
import { formatRecipeText } from '../utils/formatRecipeText.js'

const thicknessOptions = [
  { label: 'Thin', value: 1.8 },
  { label: 'Regular', value: 2.11 },
  { label: 'Thick', value: 2.75 },
]

export default function DoughCalculatorPage() {
  const [size, setSize] = useState(16)
  const [quantity, setQuantity] = useState(6)
  const [thickness, setThickness] = useState(2.11)
  const [glutenFree, setGlutenFree] = useState(false)
  const [copied, setCopied] = useState(false)

  const { recipe, ingredients } = useDoughRecipe({ size, quantity, thickness, glutenFree })

  async function copyRecipe() {
    try {
      await navigator.clipboard.writeText(formatRecipeText({ ingredients, quantity, size, ball: recipe.ball }))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <div className="page-heading">
        <div><div className="eyebrow"><span>TOOLS</span><Icon icon="chevron-right" size={10} /><span>DOUGH</span></div><h1>Dough calculator</h1><p>Dial in your pizza dough and get every ingredient weighed out.</p></div>
        <Tag className="fermentation-tag" minimal><Icon icon="time" size={12} />{glutenFree ? 'Cold rest up to 48 hrs' : 'Cold ferment · 2–4 days'}</Tag>
      </div>
      <div className="calculator-layout">
        <section className="calculator-controls" aria-label="Dough settings">
          <Card className="settings-card" elevation={0}>
            <div className="card-heading"><div className="card-icon"><Icon icon="settings" /></div><div><h2>Build your batch</h2><p>Choose your pizza and dough style.</p></div></div>
            <div className="setting-row">
              <div className="setting-label"><label htmlFor="pizza-size">Pizza size</label><strong>{size}<span> in</span></strong></div>
              <Slider id="pizza-size" min={10} max={20} stepSize={1} labelStepSize={1} labelRenderer={(value) => <span className={value === size ? 'slider-tick-current' : value < size ? 'slider-tick-passed' : undefined}>{value}</span>} value={size} onChange={setSize} aria-label="Pizza size in inches" />
              <div className="range-ends"><span>10 in</span><span>20 in</span></div>
            </div>
            <div className="setting-row">
              <div className="setting-label"><label htmlFor="pizza-quantity">Number of pizzas</label><strong>{quantity}<span> {quantity === 1 ? 'pizza' : 'pizzas'}</span></strong></div>
              <Slider id="pizza-quantity" min={1} max={10} stepSize={1} labelStepSize={1} labelRenderer={(value) => <span className={value === quantity ? 'slider-tick-current' : value < quantity ? 'slider-tick-passed' : undefined}>{value}</span>} value={quantity} onChange={setQuantity} aria-label="Number of pizzas" />
              <div className="range-ends"><span>1 pizza</span><span>10 pizzas</span></div>
            </div>
            <div className="setting-row thickness-row">
              <div className="setting-label"><span>Crust thickness</span><span className="muted-value">Dough factor</span></div>
              <ButtonGroup className="thickness-options" fill>{thicknessOptions.map((option) => <Button key={option.value} active={thickness === option.value} onClick={() => setThickness(option.value)} aria-pressed={thickness === option.value}>{option.label}</Button>)}</ButtonGroup>
            </div>
            <div className="diet-option"><Checkbox checked={glutenFree} onChange={(event) => setGlutenFree(event.target.checked)}><span className="diet-title">Gluten-free dough</span><span className="diet-description">Use GF flour and adjusted hydration</span></Checkbox><Tag className="gf-tag" minimal>GF</Tag></div>
            {recipe.tip && <Callout className="recipe-tip" icon="lightbulb" intent="warning"><strong>{recipe.tip.title}</strong><span>{recipe.tip.text}</span></Callout>}
          </Card>
          <div className="stats-grid" aria-label="Recipe summary">
            <Card className="stat-card stat-highlight" elevation={0}><span className="stat-icon"><Icon icon="heat-grid" /></span><span className="stat-value">{recipe.ball}<small>g</small></span><span className="stat-label">Dough ball each</span></Card>
            <Card className="stat-card" elevation={0}><span className="stat-icon"><Icon icon="tint" /></span><span className="stat-value">{recipe.hydration}<small>%</small></span><span className="stat-label">Hydration</span></Card>
            <Card className="stat-card" elevation={0}><span className="stat-icon"><Icon icon="layers" /></span><span className="stat-value">{Math.round(recipe.flour)}<small>g</small></span><span className="stat-label">Total flour</span></Card>
            <Card className="stat-card" elevation={0}><span className="stat-icon"><Icon icon="tint" /></span><span className="stat-value">{recipe.water}<small>g</small></span><span className="stat-label">Total water</span></Card>
          </div>
        </section>
        <section className="recipe-column" aria-label="Calculated recipe">
          <Card className="recipe-card" elevation={0}>
            <div className="recipe-title-row"><div><div className="eyebrow">YOUR RECIPE</div><h2>Ingredients</h2></div><Tag className="batch-tag" minimal>{quantity} {quantity === 1 ? 'BALL' : 'BALLS'}</Tag></div>
            <p className="recipe-description">{glutenFree ? 'Gluten-free pizza dough' : 'Classic pizza dough'} <span>·</span> {size}-inch <span>·</span> {recipe.thicknessName} crust</p>
            <div className="ingredient-table-wrap"><table className="ingredient-table"><thead><tr><th>INGREDIENT</th><th>AMOUNT</th><th>BAKER’S %</th></tr></thead><tbody>{ingredients.map((ingredient) => <tr key={ingredient.name}><td><strong>{ingredient.name}</strong>{ingredient.note && <span className="ingredient-note">{ingredient.note}</span>}</td><td className="amount-cell">{ingredient.amount}<span>g</span></td><td><span className="bakers-percent">{ingredient.percent}</span></td></tr>)}</tbody></table></div>
            <div className="recipe-actions"><Button className="copy-button" intent="primary" icon={copied ? 'tick' : 'clipboard'} onClick={copyRecipe}>{copied ? 'Copied recipe' : 'Copy recipe'}</Button><Button icon="print" onClick={() => window.print()}>Print / save</Button></div>
          </Card>
          <Card className="instructions-card" elevation={0}>
            <div className="instructions-heading"><div className="card-icon"><Icon icon="manual" /></div><div><h2>{glutenFree ? 'Gluten-free instructions' : 'Dough making instructions'}</h2><p>Mix, rest, and get ready to bake.</p></div></div>
            <ol className="steps-list">{recipe.steps.map((step, index) => <li key={step}><span className="step-number">{String(index + 1).padStart(2, '0')}</span><span>{step}</span></li>)}</ol>
          </Card>
        </section>
      </div>
      <footer className="content-footer"><span>LATOOKA UI <b>·</b> KITCHEN TOOLS</span><span>Measure well. Make something good.</span></footer>
    </>
  )
}
