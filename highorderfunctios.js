 const callback = (n) => {
    return n ** 2
 }

 function cube( callback,n) {
return callback(n) ** n
 }

 console.log(cube(callback,2))


 function sayHello() {
return console.log('Hello World!')
 }

const callHello =  setInterval(sayHello, 2000)

setTimeout(callHello, 5000)
const contries = ['Finland','Germany','Russia','France']

contries.forEach((element) => console.log(element.toUpperCase()))

const ages = [21,22,23,24,25,26,27,12]
const age = ages.find((age) => age < 25)

console.log(age)

console.log(ages.sort)

const names = new Set();

names.add('Furkan');
names.add('Onur');
names.add('Tozlu');

console.log(names)

const companies = ['Facebook', 'X' , 'Google','Sanapchat']
const setCompannies = new Set ();

for ( const company of companies) {
 setCompannies.add(company)
}

 setCompannies.delete('Google')
 console.log(setCompannies)

 console.log(setCompannies.has('X'))

 var input =  document.createComment("input");
 
const a = [1,2,3,4,5,6,7,8]
const b = [ 2,4,5,6,8]

const c = new Set(b);
const C = new Set(a.filter(num => c.has(num)))

console.log(C)

const map = new Map();

map.set(1 , 'onur');
map.set(2, 'trr' );
map.set(true , 'tnur')
map.set(false,'emre')

console.log(map)

console.log(map.get(false))