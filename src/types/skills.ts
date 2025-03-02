import type { Point } from "./global"

export interface SkillProps {
    src: string
    dimesion: Point
}

export interface ConnectionsProps {
    width: number
    height: number
    dimensions: Point[]
}