// N.7 Домашнее задание DRINKS_HASH_FUNC
// Создать проект DRINKS_HASH_FUNC.
// 1.
// Разработать класс HashStorageFunc в функциональном стиле (т.е. функцию-конструктор) для хранения в приватном хэше произвольных пар ключ-значение.
// Ключ может быть любой строкой; значение может иметь любой тип, в том числе векторный (хэш, массив и т.д.)
// Класс должен иметь следующий интерфейс (т.е. иметь следующие публичные методы):
// •	addValue(key,value) — сохраняет указанное значение под указанным ключом;
// •	getValue(key) — возвращает значение по указанному ключу либо undefined;
// •	deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
// •	getKeys() — возвращает массив, состоящий из одних ключей.
// Класс должен быть чистым (не должен использовать никаких глобальных переменных, не, должен «пачкать экран»).
// Класс должен быть универсальным, т.е. не зависеть ни от структуры хранимых данных, ни от способа их последующего использования (в т.ч. не должен содержать никаких ссылок на DOM, т.к. может использоваться и вообще без веб-страницы).

// 2.
// Создать объект drinkStorage класса HashStorageFunc для хранения рецептов напитков.
// Ключом является название напитка; значением — информация о напитке (алкогольный напиток или нет, строка с рецептом приготовления и т.д. по желанию).
// 3.
// Разработать веб-страницу для работы с хранилищем рецептов напитков.
// На странице должны быть кнопки:
// •	«ввод информации о напитке» — последовательно спрашивает название напитка, алкогольный он или нет, рецепт его приготовления; сохраняет информацию о напитке в хранилище.
// •	«получение информации о напитке» — спрашивает название напитка и выдаёт (на страницу, в консоль или в alert) либо информацию о нём (по примеру, приведённому ниже), либо сообщение об отсутствии такого напитка в хранилище.
// •	«удаление информации о напитке» — спрашивает название напитка и удаляет его из хранилища (если он там есть) с выдачей соответствующего сообщения в информационное окно.
// •	«перечень всех напитков» — выдаёт в информационное окно перечень всех напитков из хранилища (только названия).

// Пример информации о напитке:
// напиток Маргарита алкогольный: да рецепт приготовления: продукт, продукт... смешать...


// 1е задание

// function HashStorageFunc() {

// 	let _hash = {};

// 	this.addValue = function (key, value) {
// 		return _hash[key] = value;
// 	}
// 	this.getValue = function (key) {
// 		return _hash[key];
// 	}
// 	this.deleteValue = function (key) {
// 		if (key in _hash) {
// 			delete _hash[key]
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// 	this.getKeys = function () {
// 		let arr = [];
// 		for (let key in _hash) {
// 			arr.push(key);
// 		}
// 		return arr;
// 	}

// }

// let result = new HashStorageFunc();

// result.addValue('age', 26);
// result.addValue('wer', 33);
// result.addValue('23r', [1, 2, 3]);
// console.log(result.getValue('age'));
// console.log(result.deleteValue('wer'));
// console.log(result.getKeys());






// 2е, 3е задание

document.querySelector('.drink__item').addEventListener('click', function () {
	let elem = document.querySelector('.drink__form');
	elem.classList.toggle('none');
})

document.querySelector('.drink__res').addEventListener('click', function () {
	let inpName = document.querySelector('.drink__name').value;
	let inpAlc = document.querySelector('.drink__alc').checked;
	let drinc__recipe = document.querySelector('.drinc__recipe').value;
	let alc = null;
	if (inpAlc) {
		alc = 'Да';
	} else {
		alc = 'Нет';
	}

	let resipeRes = `Алкогольный: ${alc}. Рецепт: ${drinc__recipe}`
	drink.addValue(inpName, resipeRes);
})



document.querySelector('.drink__seachres').addEventListener('click', function () {
	let inpSeach = document.querySelector('.drink__seach').value;
	let seachText = document.querySelector('.drink__seachtext');

	seachText.textContent = drink.getValue(inpSeach);
})

document.querySelector('.drink__del').addEventListener('click', function () {
	let inpSeachDel = document.querySelector('.drink__seachdel').value;
	let seachTextDel = document.querySelector('.drink__seachtextdel');

	seachTextDel.textContent = drink.deleteValue(inpSeachDel);
})


document.querySelector('.drink__all').addEventListener('click', function () {
	let seachTextDel = document.querySelector('.drink__allres');

	seachTextDel.textContent = `Все имеющиеся напитки: ${drink.getKeys()}`;
})


// function HashStorageFunc() {

// 	let _drinkStorage = {};

// 	this.addValue = function (key, value) {
// 		console.log(_drinkStorage)
// 		return _drinkStorage[key.toLowerCase()] = value;
// 	}
// 	this.getValue = function (key) {
// 		if (key.toLowerCase() in _drinkStorage) {
// 			return `Напиток ${key}: ${_drinkStorage[key.toLowerCase()]}`
// 		} else {
// 			return 'Напиток не найден';
// 		}
// 	}
// 	this.deleteValue = function (key) {
// 		if (key.toLowerCase() in _drinkStorage) {
// 			delete _drinkStorage[key.toLowerCase()];
// 			return `Напиток Удален`
// 		} else {
// 			return 'Напиток не найден';
// 		}
// 	}
// 	this.getKeys = function () {
// 		let arr = [];
// 		for (let key in _drinkStorage) {
// 			arr.push(` ${key}`);
// 		}
// 		if (arr.length === 0) {
// 			return 'Напитков нет'
// 		}
// 		return arr;
// 	}

// }

// drink = new HashStorageFunc();


// homeWork 19=====================================================


class HashStorageClass {

	constructor() {
		this.drinkStorage = {};
	}


	addValue(key, value) {

		return this.drinkStorage[key.toLowerCase()] = value;
	}

	getValue(key) {
		if (key.toLowerCase() in this.drinkStorage) {
			return `Напиток ${key}: ${this.drinkStorage[key.toLowerCase()]}`
		} else {
			return 'Напиток не найден';
		}
	}
	deleteValue(key) {
		if (key.toLowerCase() in this.drinkStorage) {
			delete this.drinkStorage[key.toLowerCase()];
			return `Напиток Удален`
		} else {
			return 'Напиток не найден';
		}
	}
	getKeys() {
		let arr = [];
		for (let key in this.drinkStorage) {
			arr.push(` ${key}`);
		}
		if (arr.length === 0) {
			return 'Напитков нет'
		}
		return arr;
	}

}

drink = new HashStorageClass();
