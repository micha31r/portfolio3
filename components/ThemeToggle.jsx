"use client"
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useTheme } from "next-themes"
import clsx from "clsx"
import { useEffect, useState } from 'react'

export default function ThemeToggle({ className }) {
  const { theme, setTheme } = useTheme()
  const [themeKey, setThemeKey] = useState('')

  // Have to create another state otherwise will result in toString not defined error
  useEffect(() => {
    setThemeKey(theme);
  }, [theme])

  return (
    //text-muted-foreground
    <div className={clsx("", className)} key={themeKey}>
      {theme === 'light' 
        ? (
            <button key={theme} className="flex w-12 h-12 bg-secondary rounded-full" onClick={() => setTheme("dark")}>
              <SunIcon className="h-6 w-6 m-auto"/>
            </button>
          )
        : (
            <button className="flex w-12 h-12 bg-secondary rounded-full" onClick={() => setTheme("light")}>
              <MoonIcon className="h-6 w-6 m-auto"/>
            </button>
          )
      }
    </div>
  )
}
