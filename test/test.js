const assert = require('chai').assert
const dialerApp = require('../dialerApp')

describe('Dialer dialerApp', function() {
    // Input for testing
    dialerApp.insertContact("Keanu Reeves", "96857 68789")
    dialerApp.insertContact("Brad Pitt", "96877 83421")
    dialerApp.insertContact("Trisha", "97432 74880")
    dialerApp.insertContact("Vijay Sethupathy", "99490 83597")

    it('Keanu Reeves - 96857 68789', function() {
        let expectedContacName = "Keanu Reeves"
        assert.equal(expectedContacName, dialerApp.search("53268"))
        assert.equal(expectedContacName, dialerApp.search("733837"))
        assert.equal(expectedContacName, dialerApp.search("96857"))
        assert.equal(expectedContacName, dialerApp.search("68789"))
    })

    it('Brad Pitt - 96877 83421', function() {
        let expectedContactName = "Brad Pitt"
        assert.equal(expectedContactName, dialerApp.search("2723"))
        assert.equal(expectedContactName, dialerApp.search("7488"))
        assert.equal(expectedContactName, dialerApp.search("96877"))
        assert.equal(expectedContactName, dialerApp.search("83421"))
    })

    it('Trisha - 97432 74880', function() {
        let expectedContactName = "Trisha"
        assert.equal(expectedContactName, dialerApp.search("874742"))
        assert.equal(expectedContactName, dialerApp.search("97432"))
        assert.equal(expectedContactName, dialerApp.search("74880"))
    })

    it('Vijay Sethupathy - 99490 83597', function() {
        let expectedContactName = "Vijay Sethupathy"
        assert.equal(expectedContactName, dialerApp.search("84529"))
        assert.equal(expectedContactName, dialerApp.search("7384872849"))
        assert.equal(expectedContactName, dialerApp.search("99490"))
        assert.equal(expectedContactName, dialerApp.search("83597"))
    })
})