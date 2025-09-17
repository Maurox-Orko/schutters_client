import { SchutterModel } from "@/models/schutter.model"
import { sendOnce } from "./socket"
import { PelotonModel } from "@/models/peloton.model"

const UserService = {

    // TODO: als ik een peloton naam aanmaak moet ik true terug krijgen als het succesvol gelukt is




    // TODO: change route to add new peloton name
    async addPelotonName(name: string): Promise<void> {  await sendOnce({ name }, '/add/peloton') },

    // TODO: change route to add new schooter
    async addNewSchooter(schutter: { name: string, peloton: string, invite: boolean }): Promise<unknown> { return await sendOnce(schutter, '/add/schooter')},

    // TODO: make sure to get pelotons
    async getPelotons(): Promise<PelotonModel[]> { return await sendOnce(null, '/get/all/pelotons')},

    // TODO: get alle schutters
    async getAllSchutters(): Promise<SchutterModel[]> { return await sendOnce(null, '/get/all/shooters')},
    


    // async checkLoginCode(code: string): Promise<boolean> { return await sendOnce(code, '/auth/login')},

    
}

export default UserService
