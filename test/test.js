const assert = require('chai').assert
const dialerApp = require('../dialerApp')

describe('Dialer dialerApp', function() {
    it('Keanu Reeves - 96857 68789', function() {
        let contactName = "Keanu Reeves"
        dialerApp.insertContact(contactName, "96857 68789")
        assert.equal(contactName, dialerApp.search("53268"))
        assert.equal(contactName, dialerApp.search("733837"))
        assert.equal(contactName, dialerApp.search("96857"))
        assert.equal(contactName, dialerApp.search("68789"))
    })

    it('Brad Pitt - 96877 83421', function() {
        let contactName = "Brad Pitt"
        dialerApp.insertContact(contactName, "96877 83421")
        assert.equal(contactName, dialerApp.search("2723"))
        assert.equal(contactName, dialerApp.search("7488"))
        assert.equal(contactName, dialerApp.search("96877"))
        assert.equal(contactName, dialerApp.search("83421"))
    })

    it('Trisha - 97432 74880', function() {
        let contactName = "Trisha"
        dialerApp.insertContact(contactName, "97432 74880")
        assert.equal(contactName, dialerApp.search("874742"))
        assert.equal(contactName, dialerApp.search("97432"))
        assert.equal(contactName, dialerApp.search("74880"))
    })

    it('Vijay Sethupathy - 99490 83597', function() {
        let contactName = "Vijay Sethupathy"
        dialerApp.insertContact(contactName, "99490 83597")
        assert.equal(contactName, dialerApp.search("84529"))
        assert.equal(contactName, dialerApp.search("7384872849"))
        assert.equal(contactName, dialerApp.search("99490"))
        assert.equal(contactName, dialerApp.search("83597"))
    })
})