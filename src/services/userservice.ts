import { SchutterModel } from "@/models/schutter.model"
import { sendOnce } from "./socket"
import { PeletonModel } from "@/models/peleton.model"

const UserService = {
    // TODO: change route to add new peleton name
    async addPeletonName(name: string): Promise<void> {  await sendOnce({ name }, '/post/new/peleton') },

    // TODO: change route to add new schooter
    async addNewSchooter(schutter: { name: string, peleton: string, invite: boolean }): Promise<unknown> { return await sendOnce(schutter, '/post/new/schooter')},

    // TODO: make sure to get peletons
    async getPeletons(): Promise<PeletonModel[]> { return await sendOnce(null, '/get/peletons')},

    // TODO: get alle schutters
    async getAllSchutters(): Promise<SchutterModel[]> { return await sendOnce(null, '/get/all/schutters')},
    


    // async checkLoginCode(code: string): Promise<boolean> { return await sendOnce(code, '/auth/login')},
}

export default UserService
