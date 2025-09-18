import { PelotonModel } from "./peloton.model";

export interface SchutterModel {
    _id: string,
    name: string,
    peloton: PelotonModel,
    paidTime: boolean,
    isInvite: boolean,
    present: number,
    title?: string,
}