//Destructuring -> Şeklini bozma
//spreading -> yayılmak, dağılmak
// Rest -> kalanın tamamı

const numberrs = [12,34,67]

console.log(numberrs[0])
console.log(numberrs[1])
console.log(numberrs[2])

function multiply(numbers){

    return numbers[0] * numbers[1]
} 

const numbers = [10,11]

console.log(multiply(numbers))

const user = {

    name : 'Furkan Onur',
    surname: 'Tozlu',
    isMarried : false

}

const copiedUser = {...user , isMarried: true}

console.log(copiedUser)

const fullstack = [
['HTML', 'CSS','REACT','JavaScricpt'],
['C#','.NET','Node']
]

const [Frontend , Backend] = fullstack  

console.log('Fronetend',Frontend)
console.log('Backend',Backend)

/*const diller = prompt('Öğrendiğin DİL')
if (result == Frontend[1]) {
console.log(Frontend)
}
*/