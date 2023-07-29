let cities = ['Москва', 'Санкт-Петербург', 'Волгоград', 'Архангельск', 'Сочи', 'Краснодар', 'Иркутск', 'Новосибирск', 'Владивосток'];
let cityTemp = [];
let container = document.querySelector('.container');

for (let i = 0; i < cities.length; i++) {
    let temp = prompt(`Введите температуру для города ${cities[i]}:`);
    cityTemp.push(Number(temp));
}
for (let i = 0; i < cityTemp.length; i++) {
const cityTempInfo = document.createElement('p');
cityTempInfo.innerHTML = `В г ${cities[i]} : ${cityTemp[i]} °C`;
document.querySelector('.container').append(cityTempInfo);
}

let max;
let min;

for (i = 0; i < cityTemp.length; i++) {
    if (Number.isNaN(cityTemp[i])){
        continue;
    } else {
        min= Number(cityTemp[i]);
        max = min;
    }
}

for (let i = 0; i < cityTemp.length; i++) {
    if (cityTemp[i] > max) {
        max = cityTemp[i];
    }
    if (cityTemp[i] < min) {
        min = cityTemp[i];
    }
}

const maxTemp = document.createElement('div');
maxTemp.innerHTML = `Максимальная температура среди городов: ${max} °C`;
document.querySelector('.container').append(maxTemp);

const minTemp = document.createElement('div');
minTemp.innerHTML = `Минимальная температура среди городов: ${min} °C`;
document.querySelector('.container').append(minTemp);




