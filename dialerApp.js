class DialerApp {
    constructor() {
        this.contacts = {}
        this.searchDict = {}
    }
    
    insertContact(name, phoneNumber) {
        this.contacts[name] = phoneNumber
        this.createSearchKeys(name, phoneNumber)
    }

    createSearchKeys(contactName, phoneNumber) {
        contactName.split(" ").forEach((name)=> {
            this.insertInSearchDict(this.getDailerPadCode(name), contactName)
        })
        this.insertInSearchDict(phoneNumber.substring(0, 5), contactName)
        this.insertInSearchDict(phoneNumber.substring(6, 11), contactName)
    }

    insertInSearchDict(key, contactName) {
        if(!this.searchDict[key])
            this.searchDict[key] = []
        this.searchDict[key].push(contactName)
    }

    getDailerPadCode(name) {
        const keypad = {"a": 2, "b": 2, "c": 2, "d": 3, "e": 3, "f": 3,
                        "g": 4, "h": 4, "i": 4, "j": 5, "k": 5, "l": 5,
                        "m": 6, "n": 6, "o": 6, "p": 7, "q": 7, "r": 7, "s": 7,
                        "t": 8, "u": 8, "v": 8, "w": 9, "x": 9, "y": 9, "z": 9}
        let code = ""
        for(let char of name.toLowerCase()) 
            code += keypad[char]
        return code
    }

    search(key) {
        let contacts = this.searchDict[key]
        return contacts ? contacts : "not found"
    }
}

let app = new DialerApp()
module.exports = app

//Input:

// app.insertContact("Keanu Reeves", "96857 68789")
// app.insertContact("Keanu Ringo", "12345 67890")
// app.insertContact("Ringo Thomas", "09876 54321")
// app.insertContact("Brad Pitt", "96877 83421")
// app.insertContact("Trisha", "97432 74880")
// app.insertContact("Vijay Sethupathy", "99490 83597")

//Testing:

// console.log(app.search("53268")) // Keanu Reeves
// console.log(app.search("733837")) // Keanu Reeves
// console.log(app.search("96857")) // Keanu Reeves
// console.log(app.search("68789")) // Keanu Reeves
// console.log(app.search("74646")) // Ringo

// console.log(app.search("874742")) // Trisha
// console.log(app.search("7488")) // Brad Pitt
// console.log(app.search("99490")) // Vijay Sethupathy
// console.log(app.search("74880")) // Trisha
