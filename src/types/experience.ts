export interface IExperience {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    current?: boolean;
    description: string;
    technologies: string[];
}
