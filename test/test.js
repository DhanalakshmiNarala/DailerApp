const assert = require('chai').assert
const dialerApp = require('../dialerApp')

describe('Dialer dialerApp', ()=> {
    it('Keanu Reeves - 96857 68789', ()=> {
        let contactName = "Keanu Reeves", phoneNumber = "96857 68789"
        dialerApp.insertContact(contactName, phoneNumber)
        assert.equal(contactName, dialerApp.search("53268")) // Keanu - dialer pad code
        assert.equal(contactName, dialerApp.search("733837")) // Reeves
        assert.equal(contactName, dialerApp.search(phoneNumber.substring(0, 5)))
        assert.equal(contactName, dialerApp.search(phoneNumber.substring(6, 11))) 
    })

    it('Brad Pitt - 96877 83421', ()=> {
        let contactName = "Brad Pitt", phoneNumber = "96877 83421"
        dialerApp.insertContact(contactName, phoneNumber)
        assert.equal(contactName, dialerApp.search("2723")) // Brad
        assert.equal(contactName, dialerApp.search("7488")) // Pitt
        assert.equal(contactName, dialerApp.search(phoneNumber.substring(0, 5)))
        assert.equal(contactName, dialerApp.search(phoneNumber.substring(6, 11)))
    })

    it('Trisha - 97432 74880', ()=> {
        let contactName = "Trisha", phoneNumber = "97432 74880"
        dialerApp.insertContact(contactName, phoneNumber)
        assert.equal(contactName, dialerApp.search("874742")) // Trisha
        assert.equal(contactName, dialerApp.search(phoneNumber.substring(0, 5)))
        assert.equal(contactName, dialerApp.search(phoneNumber.substring(6, 11)))
    })

    it('Vijay Sethupathy - 99490 83597', ()=> {
        let contactName = "Vijay Sethupathy", phoneNumber = "99490 83597"
        dialerApp.insertContact(contactName, phoneNumber)
        assert.equal(contactName, dialerApp.search("84529")) // Vijay
        assert.equal(contactName, dialerApp.search("7384872849")) // Sethupathy
        assert.equal(contactName, dialerApp.search(phoneNumber.substring(0, 5)))
        assert.equal(contactName, dialerApp.search(phoneNumber.substring(6, 11)))
    })
})