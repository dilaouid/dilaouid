import { type IProject } from "@/types/project";

export interface ProjectCardProps {
    project: IProject;
    index: number;
    className?: string;
}