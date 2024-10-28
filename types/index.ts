export type Image = string | { src: string; alt?: string }
export type ThemeAbleImage = Image | { light: Image; dark: Image; alt?: string }
