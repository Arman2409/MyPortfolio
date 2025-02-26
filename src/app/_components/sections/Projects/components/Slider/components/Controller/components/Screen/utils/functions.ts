import data from "../../../../../../../../../../../data/data.json";

const { skills } = { ...data };

export const getUrls = (urlSkills: string[] = []) => {
    if (!Array.isArray(urlSkills)) {
        console.error("Array not provided");
        return [];
    }
    // Check if skills with give names exist otherwise return empty array 
    const allSkills = skills.filter(
        ({ name }: { name: string }) => {
            return urlSkills.includes(name)
        }) || [];
    // Return only the sources of the skills 
    return allSkills.map(({ source }: { source: string }) => source);
}
