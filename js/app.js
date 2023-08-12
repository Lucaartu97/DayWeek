//Grab giorno della settimana locale
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Domenica';
        quote = 'Giorno di relax!';
        break;
    case 1:
        nameOfDay = 'Lunedì';
        quote = 'La tristezza del lunedì mattina!';
        break;
    case 2:
        nameOfDay = 'Martedì';
        quote = 'Tempo di Tacos!';
        break;
    case 3:
        nameOfDay = 'Mercoledì';
        quote = 'Altri due giorni al fine settimana.';
        break;
    case 4:
        nameOfDay = 'Giovedì';
        quote = 'Il weekend è quasi qui...';
        break;
    case 5:
        nameOfDay = 'Venerdì';
        quote = 'Weekend è qui!';
        break;
    case 6:
        nameOfDay = 'Sabato';
        quote = 'Giorno di pizza!';
        break;

}
//Mostra il giorno della settimana
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Mostra la frase
let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`


