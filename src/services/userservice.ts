import { sendOnce } from "./socket"

const UserService = {
    // TODO: change route to add new peleton name
    async addPeletonName(name: string): Promise<void> {  await sendOnce(name, '/post/new/peleton') },

    // TODO: change route to add new schooter
    async addNewSchooter(schutter: { name: string, peleton: string, invite: boolean }): Promise<unknown> { return await sendOnce(schutter, '/post/new/schooter')},
    







    
    async getSchutters(): Promise<unknown> { return await sendOnce(null, '/get/users')}

    // async checkLoginCode(code: string): Promise<boolean> { return await sendOnce(code, '/auth/login')},
}

export default UserService
