export interface ExternalStyleOptions {
  prefix?: string
  override?: boolean
}

export function mapExternalStyles(
  className?: string, 
  options: ExternalStyleOptions = {}
): string {
  if (!className) return ''
  
  const { prefix = 'external', override = false } = options
  
  // Simple class mapping - customize as needed
  if (override) {
    return className
  }
  
  return `${prefix}-${className}`
}

export function normalizeProps<T extends Record<string, any>>(
  props: T,
  mapping: Record<string, string>
): T {
  const normalized = { ...props }
  
  Object.entries(mapping).forEach(([oldKey, newKey]) => {
    if (oldKey in normalized) {
      normalized[newKey as keyof T] = normalized[oldKey]
      delete normalized[oldKey]
    }
  })
  
  return normalized
}
