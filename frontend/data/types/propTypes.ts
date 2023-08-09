export type SkillProps = {
    zIndex: number,
    source: string,
    percentage: number,
    top: number,
    left: number
}
  
export type PortfolioItemProps = {
    img: string
    link: string
    description: string
    left: number
    top: number
    index?: number
    id?: number
}

export type DemoProps = {
    state: boolean
}

export type LangSkillProps = {
    language: string,
    level: string
}
  

export type LinkTypeProps = {
    link: string
    image: any
    name: string
}