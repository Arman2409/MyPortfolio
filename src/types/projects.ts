export interface PortfolioItem {
    order: number
    img: string
    title: string
    usedSkills: string[],
    description?: string,
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
    currentItem: PortfolioItem,
    loading: boolean
}

export interface ControllerProps {
    currentItem: PortfolioItem,
    portfolio: PortfolioItem[],
    loading: boolean,
    setCurrentItem: Function
}