const mechanism = document.querySelectorAll('.mechanism__item');
let counter = 330;
mechanismRotate(counter);

window.addEventListener("wheel", mechanismDirection);

function mechanismDirection(event) {
	if (event.deltaY > 0) {
		counter += 10;
		mechanismRotate(counter);
	}
	else {
		counter -= 10;
		mechanismRotate(counter);
	}
}

function mechanismRotate(counter) {
	console.log(counter);
	for (const key in mechanism) {
		if (Object.hasOwnProperty.call(mechanism, key)) {
			const mechanismEl = mechanism[key];
			if (key % 2 !== 0) {
				mechanismEl.style.transform = `rotate(${counter}deg`;
			}
			if (key % 2 === 0) {
				mechanismEl.style.transform = `rotate(-${counter}deg`;
			}
		}
	}
}

const burger = document.querySelector('.burger__inner');
const navItem = document.querySelector('.nav__item');

burger.addEventListener("click", navShow);
navItem.addEventListener("click", navShow);

function navShow() {
	document.querySelector('.burger__inner').classList.toggle('burger__inner--active');
	document.querySelector('.nav__inner').classList.toggle('nav__inner--visible');
}

const aboutAnim = new IntersectionObserver(
	(entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				document.querySelector('#aside__item-left').style.transform = "translate(-50%, 0) rotate(90deg)";
				document.querySelector('#aside__item-right').style.transform = "translate(50%, 0) rotate(90deg)";
				document.querySelector('#about__img').style.transform = "translate(0)";
				document.querySelector('#about__text').style.transform = "translate(0)";
			}
		});
	}
);

aboutAnim.observe(document.querySelector('.about__inner'));

document.querySelector('#btn__works').addEventListener("click", showWorks);

function showWorks() {
	const worksItems = document.querySelectorAll('.works__item');
	for (const i in worksItems) {
		if (Object.hasOwnProperty.call(worksItems, i)) {
			const worksItem = worksItems[i];
			worksItem.style.display = "block";
			document.querySelector('#btn__works').style.display = "none";
		}
	}
}

const stagesAnim = new IntersectionObserver(
	(entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const stagesItems = document.querySelectorAll('.stages__item');
				for (const i in stagesItems) {
					if (Object.hasOwnProperty.call(stagesItems, i)) {
						const stagesItem = stagesItems[i];
						setTimeout(() => {
							stagesItem.style.transform = "translate(0)";
						}, 100)
					}
				}
			}
		});
	}
);

stagesAnim.observe(document.querySelector('.stages'));

const textarea = document.querySelector('textarea');
textarea.addEventListener("keypress", textareaSize);

function textareaSize() {
	textarea.style.height = `${textarea.scrollHeight}px`;
}

const questionsItems = document.querySelectorAll('.questions__item');
for (const i in questionsItems) {
	if (Object.hasOwnProperty.call(questionsItems, i)) {
		const questionsItem = questionsItems[i];
		questionsItem.addEventListener("click", questionShow.bind(null, questionsItem));
	}
}

function questionShow(questionItem) {
	questionItem.classList.toggle("questions__item--visible");
}