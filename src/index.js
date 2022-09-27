import './style.scss';
import './foo.css';
import logoImg from './logo.svg';

import getClasses from './getClasses';

console.log('ran from index.js!!++!!');

const obj = { a: 'alpha', b: 'bravo' };

const newObj = { ...obj, c: 'charlie' };
console.log(newObj);

getClasses();

const response = await fetch('https://api.chucknorris.io/jokes/random');
const data = await response.json();
console.log(data.value);

(async () => {
	console.log('calling');
	const responseAsync = await fetch('https://api.chucknorris.io/jokes/random');
	const dataAsync = await responseAsync.json();
	console.log(dataAsync.value);
	// expected output: "resolved"
})();

// get logo id
const logo = document.getElementById('logo');
logo.innerHTML = `${logoImg}`;
