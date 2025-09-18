import { SchutterModel } from "@/models/schutter.model"
import { sendOnce } from "./socket"
import { PelotonModel } from "@/models/peloton.model"
import { GameModel } from "@/models/game.model"

const UserService = {

    // EDIT PAGINA
    async addPelotonName(name: string): Promise<void> {  await sendOnce({ name }, '/add/peloton') },
    async addNewShooter(schutter: { name: string, peloton: string, invite: boolean }): Promise<unknown> { return await sendOnce(schutter, '/add/shooter')},
    async getPelotons(): Promise<PelotonModel[]> { return await sendOnce(null, '/get/all/pelotons')},
    async getAllSchutters(): Promise<SchutterModel[]> { return await sendOnce(null, '/get/all/shooters')},
    async paidMembershipChange(schutter: SchutterModel): Promise<void> { await sendOnce({ schutter }, '/post/memberschip/change')},
    async changeShooterInfo(schutter: { _id: string, name: string, peloton: string }): Promise<void> { await sendOnce(schutter, '/edit/shooter/info')},
    async deleteShooter(schutter: SchutterModel): Promise<void> { await sendOnce({ schutter }, '/delete/shooter')},

    // GAME PAGINA 
    async getAllGameShooters(): Promise<GameModel[]> { return await sendOnce(null, '/get/all/game/shooters') }

    
}

export default UserService
