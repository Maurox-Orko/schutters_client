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
    // TODO: Iedere keer dat een van deze functies wordt uitgevoerd moeten de spelers van het spel terug worden gestuurd via de websocket.
    // TODO: sla op dat het spel start
    async startGame(): Promise<void> { await sendOnce(null, '/start/game') },
    // TODO: sla de score van de speler op
    async addScoreToShooter(_id: string, points: number, scoreName: string): Promise<void> { await sendOnce( { _id, points, scoreName }, '/add/score/to/user' )},
    // TODO: sla de aangepaste score van de speler op
    async editScoreShooter(_id: string, points: number, score: { name: string }[]): Promise<void> { await sendOnce( { _id, points, score }, '/edit/score/to/user' )},
    // TODO: het id wordt meegegeven en als de status van de speler of false (afwezig) staat dan moet hij naar true (aanwezig) en omgekeerd
    async togglePresent(_id: string): Promise<void> { await sendOnce({ _id }, '/toggle/shooter/present')},

    
}

export default UserService
