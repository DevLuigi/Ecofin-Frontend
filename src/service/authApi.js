import ServiceBase from './serviceBase.js';

export default class AuthApi extends ServiceBase {
    constructor() {
        super('/users');
    }

    async login(body){
        let response = await super.post('/login', body);
        return response;
    }

    async register(body) {
        let response = await super.post('', body);
        return response;
    }
}