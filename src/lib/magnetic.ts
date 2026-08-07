export interface Offset {
  x: number
  y: number
}

export function magneticOffset(
  pointerX: number,
  pointerY: number,
  rect: Pick<DOMRect, 'left' | 'top' | 'width' | 'height'>,
  strength = 0.3,
  maxDistance = Infinity,
): Offset {
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  let x = (pointerX - centerX) * strength
  let y = (pointerY - centerY) * strength

  const distance = Math.hypot(x, y)
  if (distance > maxDistance) {
    const scale = maxDistance / distance
    x *= scale
    y *= scale
  }

  return { x, y }
}
