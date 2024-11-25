import ServiceBase from './serviceBase.js';

export default class AuthApi extends ServiceBase {
    constructor() {
        super('/users');
    }

    async login(email, password){
        let response = await super.post('/login', { email, password });
        return response;
    }
}