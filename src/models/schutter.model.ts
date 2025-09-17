import { PeletonModel } from "./peleton.model";

export interface SchutterModel {
    _id: string,
    name: string,
    peleton: PeletonModel,
    paidTime: boolean,
    invite: number,
    present: number,
    title?: string,
}