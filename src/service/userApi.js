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

    async updateUser(body){
        let user = this.getUser();
        const response = await super.put(`/${user.id}`, body);
        return response;
    }

    getUsername(){
        let user = this.getUser();
        return user.name;
    }

    getUserLastname(){
        let user = this.getUser();
        return user.lastName;
    }

    getUserEmail(){
        let user = this.getUser();
        return user.email;
    }

    getBalance(){
        let user = this.getUser();
        return user.balance;
    }

    getBirthDate(){
        let user = this.getUser();
        return user.birthDate;
    }

}