const request = require('request');
const HelperQA = require('../pageObjects/HelperQA.page');

const email = `teosoph@mailsac.com`;
const messageId = `59yzhbz1Q7iwuo3bK2pTYKaZ4iAi-0`;

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
    it('Get formatted to object information about incoming messages', async () => {
        await HelperQA.getFormattedMessagesObj(email);
    });
    it('Delete inbox message by Id', async () => {
        await HelperQA.deleteMessageById(email, messageId);
    });
    it('Delete all incoming messages from a specific domain', async () => {
        await HelperQA.postDeleteAllMessages('example.msdc.co');
    });
    it('Validate email addresses', async () => {
        await HelperQA.postValidationsAddresses();
    });
});
