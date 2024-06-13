let pattern= 'Furkan'
let regEx = new RegExp(pattern)

console.log(regEx)

const str = 'I love Javascript'
const pattern2 = /love/g
const result = str.match(pattern2)
console.log(result)

const ben = 'Benim adım Furkan Onur Tozlu ve Hatayın Arsuz ilçesinde doğdum'

matchReplace = ben.replace(/Arsuz|arsuz/,'iskenderun')
console.log(matchReplace)

const paten = /\d+/g

const soz = 'This refular expansion made on 12 Jnauary 2013'
const matches = soz.match(paten)

console.log(matches)

const mail = 'onurtozlu@hotmail.com'

const mailRule = /hotmail[.com]/g

const validMail = mail.match(mailRule)

console.log(validMail)
