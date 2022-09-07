const request = require('request');
const HelperQA = require('../pageObjects/HelperQA.page');

const email = `teosoph@mailsac.com`;

describe('api request from wdio ', () => {
    it('check Email', async () => {
        // await HelperQA.checkMesages(email);
        await HelperQA.getMessageCount(email);
    });
});

// const getMessageCount = {
//     method: 'GET',
//     url: `https://mailsac.com/api/addresses/${email}/message-count`,
//     headers: { 'Mailsac-Key': 'k_wU5aX7qRtV76cAFmtN7Y9006iiyxzAaYZoZ4EAqr4tjfmI51' }
// };
// request(getMessageCount, (error, response, body) => {
//     console.error('!!!!! error:', error);
//     console.log('>>>>>>> statusCode:', response && response.statusCode);
//     console.log('GET message count body ===========================================>', body);
// });

// const postValidationsAddresses = {
//     method: 'POST',
//     url: 'https://mailsac.com/api/validations/addresses',
//     headers: {
//         'content-type': 'application/json',
//         'Mailsac-Key': 'k_wU5aX7qRtV76cAFmtN7Y9006iiyxzAaYZoZ4EAqr4tjfmI51'
//     },
//     body: { emails: ['teosoph@mailsac.com'] },
//     json: true
// };
// request(postValidationsAddresses, (error, response, body) => {
//     console.error('!!!!! error:', error);
//     console.log('>>>>>>> statusCode:', response && response.statusCode);
//     console.log('POST validations addresses body ---------------------------------------->', body);
// });
