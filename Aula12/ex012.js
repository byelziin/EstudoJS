var agora = new Date()
var hr = agora.getHours()
console.log(`Agora são exatamente ${hr} horas.`)
if (hr < 12) {
    console.log('Bom dia!')
} else if (hr <= 18) {
    console.log('Boa tarde!')
} else if (hr < 24) {
    console.log('Boa noite!')
} else if (hr >= 24) {
    console.log('Rapazes da madruga!')
}