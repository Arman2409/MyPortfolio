export interface MenuItem {
    title: string
    scrollTo: {
        small: number
        large: number
    }
    y?: number
    x? :number
    order: number
}