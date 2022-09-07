const axios = require('axios').default;
// const request = require('request');

class HelperQA {
    async configAxios() {
        return axios.create({
            baseURL: 'https://mailsac.com/api/',
            headers: {
                Host: 'mailsac.com',
                'Mailsac-Key': `k_wU5aX7qRtV76cAFmtN7Y9006iiyxzAaYZoZ4EAqr4tjfmI51`
            }
        });
    }
    async apiFailureCallback(error) {
        console.dir('Error code: -------------->', error.code);
        if (typeof error.response !== 'undefined') {
            console.log('---------------API REQUEST ERROR------------------');
            console.log('API reaquest ERROR data:', error.response.data);
            console.log('API reaquest ERROR status:', error.response.status);
            console.log('API reaquest ERROR headers:', error.response.headers);
            console.log('---------------API REQUEST ERROR------------------');
        }
        throw error;
    }
    async getInfoAboutMe() {
        const client = await this.configAxios();
        return client
            .get(`/me`)
            .then((response) => {
                console.log(response.data);
                return response.data;
            })
            .catch(this.apiFailureCallback);
    }
    async getMessageCount(email) {
        const client = await this.configAxios();
        return client
            .get(`addresses/${email}/message-count`)
            .then((response) => {
                console.log('GET message count =========>', response);
                console.log('GET message count Status >>>>>>>>>>>>>>>', response.status);
                console.log('GET message count Data ================================>', response.data);
                return response.data;
            })
            .catch(this.apiFailureCallback);
    }
    async getMessagesBody(email) {
        const client = await this.configAxios();
        return client
            .get(`addresses/${email}/messages`)
            .then((response) => {
                console.log('Response Data ...........................>', response.data);
                return response.data;
            })
            .catch(this.apiFailureCallback);
    }
    async getFormattedMessagesObj(email) {
        const client = await this.configAxios();
        return client
            .get(`addresses/${email}/messages/`)
            .then((response) => {
                const mailsObj = response.data.map((item) => {
                    return {
                        _id: item._id,
                        from: item.from[0].address,
                        to: item.to[0].address,
                        received: item.received,
                        subject: item.subject,
                        ip: item.ip,
                        via: item.via
                    };
                });
                console.log('Message objects: ------------------------------->', mailsObj);
            })
            .catch(this.apiFailureCallback);
    }
    async deleteMessageById(email, messageId) {
        const client = await this.configAxios();
        return client
            .delete(`https://mailsac.com/api/addresses/${email}/messages/${messageId}`, {})
            .then((response) => {
                console.log('Info about deleted message  ------------------> ', response.data);
                return response.data;
            })
            .catch((error) => {
                this.apiFailureCallback(error);
            });
    }
    async postDeleteAllMessages(domain) {
        const client = await this.configAxios();
        return client
            .post(`domains/${domain}/delete-all-domain-mail`, {})
            .then((response) => {
                console.log('Info about deleted messages  ------------------> ', response.data);
                return response.data;
            })
            .catch((error) => {
                this.apiFailureCallback(error);
            });
    }
    async postValidationsAddresses() {
        const client = await this.configAxios();
        return client
            .post(`validations/addresses`, {
                emails: ['teosoph@mailsac.com', 'test321@mailsac.com', '123@123.123']
            })
            .then((response) => {
                console.log('POST validations addresses body ---------------------------------------->', response.data);
            })
            .catch(this.apiFailureCallback);
    }
}

module.exports = new HelperQA();
