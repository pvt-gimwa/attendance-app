export type Theme = "red" | "blue" | "yellow" | undefined
export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}