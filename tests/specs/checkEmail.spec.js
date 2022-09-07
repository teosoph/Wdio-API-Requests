const request = require('request');
const HelperQA = require('../pageObjects/HelperQA.page');

const email = `teosoph@mailsac.com`;

describe('Api request from wdio', () => {
    it('Get information about my account', async () => {
        await HelperQA.getInfoAboutMe();
    });
    it('Get information about message quantity', async () => {
        await HelperQA.getMessageCount(email);
    });
    it('Get general information about inbox messages', async () => {
        await HelperQA.getMessagesBody(email);
    });
    it('Get object formatted information about inbox messages', async () => {
        await HelperQA.getFormattedMessagesObj(email);
    });
    it('Delete all incoming messages from a specific domain', async () => {
        await HelperQA.postDeleteAllMessages('example.msdc.co');
    });
    it('Validate email addresses', async () => {
        await HelperQA.postValidationsAddresses();
    });
});
