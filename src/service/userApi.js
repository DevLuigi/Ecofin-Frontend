import ServiceBase from './serviceBase.js';

export default class UserApi extends ServiceBase {
    constructor() {
        super('/users');
    }

    async deleteUser() {
        // ?? - Destruit o token
        // ?? - Excluir tudo relacionado ao usuário antes de fazer o delete dele
        const response = await super.delete(`${this.getUser().id}`);
        return response;
    }
}