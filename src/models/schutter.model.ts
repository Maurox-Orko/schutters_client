import { PelotonModel } from "./peloton.model";

export interface SchutterModel {
    _id: string,
    name: string,
    peloton: PelotonModel,
    paidTime: boolean,
    invite: number,
    present: number,
    title?: string,
}