const assert = require('chai').assert
const dialerApp = require('../dialerApp')

describe('Dialer app', ()=> {
    dialerApp.insertContact("Keanu Reeves", "96857 68789")
    dialerApp.insertContact("Brad Pitt", "96877 83421")
    dialerApp.insertContact("Trisha", "97432 74880")
    dialerApp.insertContact("Vijay Sethupathy", "99490 83597")

    describe('Keanu Reeves - 96857 68789', ()=> {
        let contactName = "Keanu Reeves", phoneNumber = "96857 68789"

        it('should return Keanu Reeves when search with first name(Keanu)', ()=> {
            assert.equal(contactName, dialerApp.search("53268")[0]) // Keanu - dialer pad code
        })

        it('should return Keanu Reeves when search with last name(Reeves)', ()=> {
            assert.equal(contactName, dialerApp.search("733837")[0]) // Reeves
        })

        it('should return Keanu Reeves when search with phone number first half(96857)', ()=> {
            assert.equal(contactName, dialerApp.search(phoneNumber.substring(0, 5))[0])
        })

        it('should return Keanu Reeves when search with phone number last half(68789)', ()=> {
            assert.equal(contactName, dialerApp.search(phoneNumber.substring(6, 11))[0]) 
        })
    })

    describe('Brad Pitt - 96877 83421', ()=> {
        let contactName = "Brad Pitt", phoneNumber = "96877 83421"
        it('should return Brad Pitt when search with first name(Brad)', ()=> {
            assert.equal(contactName, dialerApp.search("2723")[0]) // Brad
        })

        it('should return Brad Pitt when search with last name(Pitt)', ()=> {
            assert.equal(contactName, dialerApp.search("7488")[0]) // Pitt
        })

        it('should return Brad Pitt when search with phone number first half(96877)', ()=> {
            assert.equal(contactName, dialerApp.search(phoneNumber.substring(0, 5))[0])
        })

        it('should return Brad Pitt when search with phone number last half(83421)', ()=> {
            assert.equal(contactName, dialerApp.search(phoneNumber.substring(6, 11))[0])
        })

    })

    describe('Trisha - 97432 74880', ()=> {
        let contactName = "Trisha", phoneNumber = "97432 74880"
        it('should return Trish when search with first name(Trisha)', ()=> {
            assert.equal(contactName, dialerApp.search("874742")[0]) // Trisha
        })

        it('should return Trisha when search with phone number first half(97432)', ()=> {
            assert.equal(contactName, dialerApp.search(phoneNumber.substring(0, 5))[0])
        })

        it('should return Trisha when search with phone number last half(74880)', ()=> {
            assert.equal(contactName, dialerApp.search(phoneNumber.substring(6, 11))[0])
        })
    })

    describe('Vijay Sethupathy - 99490 83597', ()=> {
        let contactName = "Vijay Sethupathy", phoneNumber = "99490 83597"
        it('should return Vijay Sethupathy when search with first name(Vijay)', ()=> {
            assert.equal(contactName, dialerApp.search("84529")[0]) // Vijay
        })

        it('should return Vijay Sethupathy when search with last name(Sethupathy)', ()=> {
            assert.equal(contactName, dialerApp.search("7384872849")[0]) // Sethupathy
        })

        it('should retur Vijay Sethupathy when search with phone number first half(99490)', ()=> {
            assert.equal(contactName, dialerApp.search(phoneNumber.substring(0, 5))[0])
        })

        it('should return Vijay Sethupathy when search with phone number last half(83597)', ()=> {
            assert.equal(contactName, dialerApp.search(phoneNumber.substring(6, 11))[0])
        })
    })
})