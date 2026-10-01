import { useMemo } from 'react'
import { calculateDoughRecipe } from '../services/doughRecipe.js'

export default function useDoughRecipe(settings) {
  const { size, quantity, thickness, glutenFree } = settings
  return useMemo(
    () => calculateDoughRecipe({ size, quantity, thickness, glutenFree }),
    [size, quantity, thickness, glutenFree],
  )
}
