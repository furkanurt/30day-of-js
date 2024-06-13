//FONKSİYONLAR

function sayı (num1 , num2) {

    total = num1 * num2

    return total
}
 console.log(sayı(2,5))


 function yazı (param1 , param2){

     param1 = 'iyi'

    param2 = ' kendine iyi bak'
    yazı = param1 + param2 

    return console.log(yazı)
 }

 function yazı2 (daram1, daram2){
      daram1 = 'neden neyin var?'
      daram2 = 'üzme kendini sakın'
     yazı2 = daram1 + daram2

     return console.log(yazı2)
 }
  
 /*const soru = prompt('selam','naber')
if (soru == 'iyiyim') {
  yazı()
}

else if ( soru == 'kötüyüm') {
yazı2()
}
*/

const toplama = (...numbers) => {
console.log(numbers)
}

toplama ( 1,2,3,4,5,)

function kare  ( x,y,sarkı) {
 total = (x * x) * (y * y)

cevap = 'bu sene' + ' ' + total + 'kere' + ' ' + sarkı + ' ' + 'dinledin'
 return cevap
}

console.log(kare( 2 , 366 , 'good days'))


function haftalıkDersSaati (dersSaati,dersSayısı) {
    total = 'haftalık ders saatin '+ dersSaati * dersSayısı

console.log(total)
}

haftalıkDersSaati(4,6)

/*  let saatsayısı = prompt('kaçdersin var?')
if (saatsayısı <= '7') {
    console.log(haftalıkDersSaati(saatsayısı,5))
}

else if (saatsayısı > '7') {

    console.log('bu kadar dersin olması imkansız')
}

*/
const course =  {
 courseName :'Operating Systems',
 courseId : '321',
  courseTeacher : 'Vildan Ateş',
  courseClass : 'BUS217',
  courseStudentNumber : '57',
  coırseBooks : [
    'book1',
      'book2S',
  ],
  getCourseName : function() {
   return console.log('Bu dersin adı' + '' + course.courseName + 'dir ve' + course.courseTeacher + 
   'tarafından' + this.courseClass + 'sınıfında '+ this.courseStudentNumber + 'kişiye verilmektedir' )
  }
}

course.coırseBooks.push('book3')

let dersbilgisi = prompt('Ders Kod gir')
if ( dersbilgisi == course.courseId) {
 console.log(course.getCourseName())
}


