export function randomItem (array) {
  return array[Math.floor(Math.random() * array.length)]
}
export function capitalize (string) {
  return string[0].charAt(0).toUpperCase() + string.slice(1)
}
