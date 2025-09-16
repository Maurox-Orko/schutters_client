import { sendOnce } from "./socket"

const UserService = {
    
    async getSchutters(): Promise<unknown> { return await sendOnce(null, '/get/users')}

    // async checkLoginCode(code: string): Promise<boolean> { return await sendOnce(code, '/auth/login')},
}

export default UserService
