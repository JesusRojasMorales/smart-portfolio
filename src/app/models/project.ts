export interface Project {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    coverImagePath: string;
    downloads: Download[];
    visible: boolean;
}

export interface Download {
    name: string;
    path: string;
}