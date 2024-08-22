export interface IProject {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    coverImagePath: string;
    downloads: IDownload[];
    visible: boolean;
    order: number;
}

interface IDownload {
    name: string;
    path: string;
}
