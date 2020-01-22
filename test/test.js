const assert = require('chai').assert
const app = require('../dialerApp')

describe('Dialer app', function() {
    // Input for testing
    app.insertContact("Keanu Reeves", "96857 68789")
    app.insertContact("Brad Pitt", "96877 83421")
    app.insertContact("Trisha", "97432 74880")
    app.insertContact("Vijay Sethupathy", "99490 83597")

    it('Keanu Reeves - 96857 68789', function() {
        let expectedName = "Keanu Reeves"
        assert.equal('Keanu Reeves', app.search("53268"))
        assert.equal('Keanu Reeves', app.search("733837"))
        assert.equal('Keanu Reeves', app.search("96857"))
        assert.equal('Keanu Reeves', app.search("68789"))
    })

    it('Brad Pitt - 96877 83421', function() {
        let expectedName = "Brad Pitt"
        assert.equal(expectedName, app.search("2723"))
        assert.equal(expectedName, app.search("7488"))
        assert.equal(expectedName, app.search("96877"))
        assert.equal(expectedName, app.search("83421"))
    })

    it('Trisha - 97432 74880', function() {
        let expectedName = "Trisha"
        assert.equal(expectedName, app.search("874742"))
        assert.equal(expectedName, app.search("97432"))
        assert.equal(expectedName, app.search("74880"))
    })
    
    it('Vijay Sethupathy - 99490 83597', function() {
        let expectedName = "Vijay Sethupathy"
        assert.equal(expectedName, app.search("84529"))
        assert.equal(expectedName, app.search("7384872849"))
        assert.equal(expectedName, app.search("99490"))
        assert.equal(expectedName, app.search("83597"))
    })
})