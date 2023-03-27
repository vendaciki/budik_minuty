/*
Vylepšete program naší kuchyňské minutky tak, aby zobrazovala nejen vteřiny, ale i minuty. Layout stránky je na to připraven. Nechejte uživatele zadat minuty, nikoliv vteřiny, a správně odpočítávejte čas až k nule.

Dejte pozor na správné formátování, kdy jednociferné hodnoty je zvykem zobrazovat s nulou na začátku. Vzpomeňte si, že na řetězcích máme metodu padStart, která nám s tímto může velmi pomoct.
*/


const minutka = (e) => {
	e.preventDefault()
	let min = Number(document.querySelector('.time-input').value)
	let sec = 0

	const minuty = document.querySelector('.alarm__minutes')
	minuty.textContent = String(min) + ':'

	const sekundy = document.querySelector('.alarm__seconds')
	sekundy.textContent = String(sec).padStart(2, '0')

	const alarm = document.querySelector('.alarm')
	alarm.classList.remove('alarm--ring')

	const odpocet = () => {
		if (min >= 0) {
			if (sec > 0) {
				sec -= 1
			} else {
				min -= 1
				sec = 59
			}
			minuty.textContent = String(min) + ':'
			sekundy.textContent = String(sec).padStart(2, '0')
		}
		if (min <= 0 && sec <= 0) {
			clearInterval(casovac)
			alarm.classList.add('alarm--ring')
			document.querySelector('audio').play()
		}
	}
	const casovac = setInterval(odpocet, 1000)
}

const formular = document.querySelector('.controls')
formular.addEventListener('submit', minutka)