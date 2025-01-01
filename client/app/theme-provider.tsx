"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider attribute="class" enableSystem={false} defaultTheme="system" disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}