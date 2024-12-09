import ServiceBase from './serviceBase.js';

export default class TransactionApi extends ServiceBase {
    constructor() {
        super('/transaction');
    }

    async createTransaction(body) {
        let response = await super.post('', body);
        return response;
    }

    async getTransactions() {
        let response = await super.get('');
        return response;
    }

    async getTransactionById(id) {
        let response = await super.get(`/${id}`);
        return response;
    }

    async updateTransaction(id, body) {
        let response = await super.put(`/${id}`, body); 
        return response;
    }

    async deleteTransaction(id) {
        let response = await super.delete(`/${id}`);
        return response;
    }
}
