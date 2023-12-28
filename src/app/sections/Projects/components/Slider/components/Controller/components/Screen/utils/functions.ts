import data from "../../../../../../../../../../data/data.json";

const { skills } = { ...data };

export const getUrls = (urlSKills: string[]) => {
    if (!Array.isArray(urlSKills)) {
        console.error("Array not provided");
        return [];
    }
    const allSkills = skills.filter(({ name }: any) => urlSKills.includes(name)) || [];
    return allSkills.map(({source}: any) => source);
}
