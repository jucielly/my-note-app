

export class StringService {
    static getRandomString(length: number = 6) {
       let string = ''
       for(let i = 0; i < length; i++) {
         const randomNumber = Math.floor(Math.random() * 9)
         string += String(randomNumber)
       }
       return string
    }
}