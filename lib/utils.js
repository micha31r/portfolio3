// Check if an object has symbol
export function hasSymbol(obj, symbol) {
  return !!Object.getOwnPropertySymbols(obj).find((item) => item === symbol)
}