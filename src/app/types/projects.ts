export type PortfolioItem = {
    id: string
    order: number
    img: string
    title: string
    usedSkills: string[],
    link?: string
    github?: string
}


// props 

export interface ControllerButtonProps {
    disabled?: boolean
    icon: React.ReactNode
    onClick?: Function
}

export interface ScreenProps {
    currentItem: PortfolioItem
}

export interface ControllerProps {
    currentItem: PortfolioItem,
    portfolio: PortfolioItem[],
    setCurrentItem: Function
}