export interface CSSVariableConfig {
  [key: string]: string | number
}

export function generateCSSVariables(config: CSSVariableConfig): string {
  return Object.entries(config)
    .map(([key, value]) => `--${key}: ${value}`)
    .join('; ')
}

export function setCSSVariable(name: string, value: string | number): void {
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty(`--${name}`, String(value))
  }
}

export function getCSSVariable(name: string): string {
  if (typeof document !== 'undefined') {
    return getComputedStyle(document.documentElement).getPropertyValue(`--${name}`)
  }
  return ''
}
