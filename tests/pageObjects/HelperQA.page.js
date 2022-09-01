const axios = require('axios').default;

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

    async checkMesages(email) {
        const client = await this.configAxios();
        return client
            .get(`addresses/${email}/messages`)
            .then((response) => {
                console.log('Response Data ...........................>', response.data);
                return response.data;
            })
            .catch(this.apiFailureCallback);
    }

    catchErrors(error) {
        console.dir(error);
        if (typeof error.response !== 'undefined') {
            console.log('---------------API REQUEST ERROR------------------');
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            console.log('---------------API REQUEST ERROR------------------');
        }
        throw error;
    }
}

module.exports = new HelperQA();
