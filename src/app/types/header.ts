export type Point = {
    x: number
    y: number
}

export type MenuItem = {
    title: string
    scrollTo: {
        small: number
        large: number
    }
    y?: number
    x? :number
    order: number
}