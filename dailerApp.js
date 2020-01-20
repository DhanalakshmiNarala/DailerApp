class DailerApp {
    constructor() {
        this.contactsList = {}
        this.searchDict = {}
    }
    
    insertContact(name, phoneNumber) {
        this.contactsList[name] = phoneNumber
        this.insertInSearchDict(name, phoneNumber)
    }

    insertInSearchDict(name, phoneNumber) {
        let names = name.split(" ")
        for(let i=0; i<names.length; i++)
            this.searchDict[this.getDailerPadCode(names[i])] = name
        this.searchDict[phoneNumber.substring(0, 5)] = name
        this.searchDict[phoneNumber.substring(6, 11)] = name
    }

    getDailerPadCode(name) {
        let keypad = {"a": 2, "b": 2, "c": 2, "d": 3, "e": 3, "f": 3,
                        "g": 4, "h": 4, "i": 4, "j": 5, "k": 5, "l": 5,
                        "m": 6, "n": 6, "o": 6, "p": 7, "q": 7, "r": 7, "s": 7,
                        "t": 8, "u": 8, "v": 8, "w": 9, "x": 9, "y": 9, "z": 9}
        let code = ""
        name = name.toLowerCase()
        for(let i=0; i<name.length; i++) {
            code += keypad[name]
        }
        return code
    }

    search(key) {
        return this.searchDict[key]
    }
}

let app = new DailerApp()

app.insertContact("Keanu Reeves", "96857 68789")
app.insertContact("Brad Pitt", "96877 83421")
app.insertContact("Trisha", "97432 74880")
app.insertContact("Vijay Sethupathy", "99490 83597")

// Testing 
console.log(app.search("53268")) // Keanu Reeves
console.log(app.search("733837")) // Keanu Reeves
console.log(app.search("96857")) // Keanu Reeves
console.log(app.search("68789")) // Keanu Reeves

console.log(app.search("874742")) // Trisha
console.log(app.search("7488")) // Brad Pitt
console.log(app.search("99490")) // Vijay Sethupathy
console.log(app.search("74880")) // Trisha
