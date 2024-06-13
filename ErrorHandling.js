try {
  let ezgi = "mal"
 // let furkan = ezgi + '' + emre 
} catch (err) {
    console.log(err)
}

let soru = prompt('what is your age')
try {
    if ( soru > 10) throw new Error('Yalan sÖYLÜYORSUN')
} catch (e) {
    alert('salak')
}
