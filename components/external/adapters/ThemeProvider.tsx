import React from 'react'

export interface ThemeProviderProps {
  children: React.ReactNode
  theme?: Record<string, any>
}

export function ThemeProvider({ children, theme = {} }: ThemeProviderProps) {
  return (
    <div data-theme-provider className="theme-provider">
      {children}
    </div>
  )
}
