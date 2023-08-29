const os = require(`os`)
const {readFileSync,wirteFileSync, writeFileSync}= require('fs')
// info about current user
const user = os.userInfo()
console.log(user)
const first = readFileSync('./content/first.txt', 'utf8')
console.log(first)
writeFileSync(
    './textS', "eloo"
)