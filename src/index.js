module.exports = function check(str, bracketsConfig) {
   
    let newBracketsConfig = bracketsConfig.map((el) => el.join(''))
    for (let i = 0; i < newBracketsConfig.length; i++) {
        const element = newBracketsConfig[i];
        if (str.includes(element)) {
            return check(str.split(element).join(''), bracketsConfig)
        }
    }
    return str.length == 0
 
}