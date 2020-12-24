import React from 'react';
import { ThemeProvider } from "./theme-context"

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">{children}</main>
    </ThemeProvider>
  )
}

export default Layout