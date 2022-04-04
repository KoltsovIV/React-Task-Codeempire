
export interface CategoriesProps {
    activeCategory:string,
    handleCategoryChange(name: string): void
}

export interface HeaderProps {
    logo: string
}

export interface MessageFieldProps {
    activePhrase: string,
    isLoading: boolean,
    error: boolean
}
