export function calculateDoughRecipe({ size, quantity, thickness, glutenFree }) {
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
  if (glutenFree) tip = { title: 'Gluten-free tip', text: 'GF dough is stickier — oil your hands before shaping.' }
  else if (size >= 18) tip = { title: 'Big pizza tip', text: `${size}" is large — preheat for the full 45 min at max temp.` }
  else if (quantity >= 8) tip = { title: 'Batch tip', text: `Making ${quantity} pizzas? Shape all balls at once — they keep 4 days in the fridge.` }
  else if (thickness === 2.75) tip = { title: 'Thick crust', text: 'Drop to 450°F and give it 10–12 min instead of 6–8.' }
  else if (thickness === 1.8) tip = { title: 'Thin crust', text: 'Thin crust cooks fast — 4–5 minutes. Watch it closely.' }

  const steps = glutenFree
    ? ['Add cold water and yeast', 'Add GF flour + olive oil, mix 2 min', 'Add sugar and salt, mix 3–4 min', 'Refrigerate 15 min to firm up', 'Oil hands, shape into balls', 'Refrigerate up to 48 hours', 'Bring to room temp before using']
    : ['Cool water to under 60°F', 'Mix water + active dry yeast', 'Add flour + olive oil, mix 2 min', 'Add sugar and salt on low', 'Mix 10 more minutes', 'Cover, rest 1–3 hours', 'Shape into balls, seal seam', 'Refrigerate 2–4 days (3 ideal)', 'Bring to room temp before using']

  const recipe = {
    flour, water, yeast, salt, sugar, oil, ball,
    hydration: Math.round(hydration * 100), thicknessName, tip, steps,
    flourName: glutenFree ? 'GF flour' : 'Bread flour',
    flourNote: glutenFree ? 'Caputo GF recommended' : '12–14% protein',
  }

  const ingredients = [
    { name: recipe.flourName, note: recipe.flourNote, amount: Math.round(recipe.flour), percent: '100%' },
    { name: 'Water', note: 'Cold, under 60°F', amount: recipe.water, percent: `${recipe.hydration}%` },
    { name: 'Yeast', note: 'Active dry', amount: recipe.yeast.toFixed(1), percent: '0.4%' },
    { name: 'Salt', amount: recipe.salt, percent: '2.5%' },
    { name: 'Sugar', amount: recipe.sugar, percent: '2%' },
    { name: 'Olive oil', amount: recipe.oil, percent: '3.3%' },
  ]

  return { recipe, ingredients }
}
