import React from 'react'
import { cn } from '@/lib/utils/cn'

export interface ComponentWrapperProps {
  children: React.ReactNode
  className?: string
}

export function ComponentWrapper({ children, className }: ComponentWrapperProps) {
  return (
    <div className={cn('external-component-wrapper', className)}>
      {children}
    </div>
  )
}

export function withExternalComponent<T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  baseClasses: string
): React.ComponentType<T> {
  return function WrappedComponent(props: T) {
    return (
      <ComponentWrapper className={baseClasses}>
        <Component {...props} />
      </ComponentWrapper>
    )
  }
}

export function mapExternalProps<T>(
  props: T,
  mapping: Record<string, string>
): T {
  const mapped = { ...props }
  
  Object.entries(mapping).forEach(([oldKey, newKey]) => {
    if (oldKey in mapped) {
      ;(mapped as any)[newKey] = (mapped as any)[oldKey]
      delete (mapped as any)[oldKey]
    }
  })
  
  return mapped
}

export function createStyledComponent<T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  styles: {
    base: string
    variants?: Record<string, { base: string }>
    defaultVariant?: string
  }
): React.ComponentType<T> {
  return function StyledComponent(props: T) {
    const { base, variants, defaultVariant } = styles
    const variant = (props as any).variant || defaultVariant
    const variantClasses = variant && variants?.[variant]?.base || ''
    
    return (
      <Component
        {...props}
        className={cn(base, variantClasses, (props as any).className)}
      />
    )
  }
}
