import { useTheme } from '../../hooks/useTheme'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-primary-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-primary-400"
    >
      {theme === 'light' ? (
        <HiMoon className="h-5 w-5" />
      ) : (
        <HiSun className="h-5 w-5" />
      )}
    </button>
  )
}
