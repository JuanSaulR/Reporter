import { Photo } from "./Photo";

export class Report {
    public id: string;
    public date: Date;
    public location: string;
    public title: string;
    public description: string;
    public photos: Photo[] = [];
}