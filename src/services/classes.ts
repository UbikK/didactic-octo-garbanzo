class ClassesService {
    async getClass(className: string) {
        const response = await fetch(
            `https://www.dnd5eapi.co/api/classes/${className}`
        );

        const result = await response.json();
        return result;
    }
}

export default ClassesService;

