import { skills } from "../../../../../../../../../../data/data.json";

export const getUrls = (urlSKills: string[]) => {
    if(!Array.isArray(urlSKills)) {
        console.error("Array not provided");
        return [];
    }
    const allSkills = skills.filter(({ name }: any) => urlSKills.includes(name)) || [];
    return allSkills.map((skill: any) => skill.source);
}
