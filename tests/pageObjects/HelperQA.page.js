// const axios = require('axios').default;
const request = require('request');

class HelperQA {
    //     async configAxios() {
    //         return axios.create({
    //             baseURL: 'https://mailsac.com/api/',
    //             headers: {
    //                 Host: 'mailsac.com',
    //                 'Mailsac-Key': `k_wU5aX7qRtV76cAFmtN7Y9006iiyxzAaYZoZ4EAqr4tjfmI51`
    //             }
    //         });
    //     }
    //     async checkMesages(email) {
    //         const client = await this.configAxios();
    //         return client
    //             .get(`addresses/${email}/messages`)
    //             .then((response) => {
    //                 console.log('Response Data ...........................>', response.data);
    //                 return response.data;
    //             })
    //             .catch(this.apiFailureCallback);
    //     }
    // catchErrors(error) {
    //     console.dir(error);
    //     if (typeof error.response !== 'undefined') {
    //         console.log('---------------API REQUEST ERROR------------------');
    //         console.log(error.response.data);
    //         console.log(error.response.status);
    //         console.log(error.response.headers);
    //         console.log('---------------API REQUEST ERROR------------------');
    //     }
    //     throw error;
    // }
    async getMessageCount(email) {
        const getMessageCount = {
            method: 'GET',
            url: `https://mailsac.com/api/addresses/${email}/message-count`,
            headers: { 'Mailsac-Key': 'k_wU5aX7qRtV76cAFmtN7Y9006iiyxzAaYZoZ4EAqr4tjfmI51' }
        };
        await request(getMessageCount, (error, response, body) => {
            console.error('!!!!! error:', error);
            console.log('>>>>>>> statusCode:', response && response.statusCode);
            console.log('GET message count body ===========================================>', body);
        });
    }
    // async getMessageCount(email) {
    //     let returnData;
    //     const getMessageCount = {
    //         method: 'GET',
    //         url: `https://mailsac.com/api/addresses/${email}/message-count`,
    //         headers: { 'Mailsac-Key': 'k_wU5aX7qRtV76cAFmtN7Y9006iiyxzAaYZoZ4EAqr4tjfmI51' }
    //     };
    //     await request(getMessageCount, (error, response, body)).then((response) => {
    //         returnData = response.data;
    //     });
    //     return returnData;
    // }
}

module.exports = new HelperQA();
