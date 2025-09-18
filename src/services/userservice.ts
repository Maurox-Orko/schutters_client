import { SchutterModel } from "@/models/schutter.model"
import { sendOnce } from "./socket"
import { PelotonModel } from "@/models/peloton.model"

const UserService = {

    // EDIT PAGINA
    async addPelotonName(name: string): Promise<void> {  await sendOnce({ name }, '/add/peloton') },
    async addNewShooter(schutter: { name: string, peloton: string, invite: boolean }): Promise<unknown> { return await sendOnce(schutter, '/add/shooter')},
    async getPelotons(): Promise<PelotonModel[]> { return await sendOnce(null, '/get/all/pelotons')},

    async getAllSchutters(): Promise<SchutterModel[]> { return await sendOnce(null, '/get/all/shooters')},

    // TODO: zorg ervoor dat de status van lidgeld betaalt aanpast en via websocket de schutters terug worden meegegeven
    async paidMembershipChange(schutter: SchutterModel): Promise<void> { await sendOnce({ schutter }, '/post/memberschip/change')},

    // TODO: zorg ervoor dat de aanpassingen van de schutter worden opgeslaan en via websocket de schutters terug worden meegegeven
    async changeShooterInfo(schutter: { _id: string, name: string, peloton: string }) { await sendOnce(schutter, '/edit/shooter/info')}

    
}

export default UserService
