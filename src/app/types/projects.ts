export type PortfolioItem = {
    id: string
    order: number
    img:  string
    title: string
    usedSkills: string[],
    link?: string
    github?: string
}