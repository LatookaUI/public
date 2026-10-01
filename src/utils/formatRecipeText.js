export function formatRecipeText({ ingredients, quantity, size, ball }) {
  return [
    'DOUGH RECIPE',
    `${quantity}x ${size}" pizza · Dough ball: ${ball}g`,
    '',
    ...ingredients.map(({ name, amount }) => `${name}: ${amount}g`),
  ].join('\n')
}
