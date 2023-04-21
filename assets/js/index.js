$(document).ready(() => {

	$('.logo__inner').css('transform', 'translate(0)');
	if (parseInt($('body').width()) > 970) {
		$('.nav__inner').css('transform', 'translate(0)');
	}

	let mechanism = $('.mechanism__item');
	mechanismMove();
	function mechanismMove() {
		for (const i in mechanism) {
			if (Object.hasOwnProperty.call(mechanism, i)) {
				const gear = mechanism[i];
				if (i % 2 === 0) {
					$(gear).css('transform', 'rotate(360deg');
				}
				if (i % 2 !== 0) {
					$(gear).css('transform', 'rotate(-360deg');
				}
			}
		}
	}

	let counter = 360;
	$(window).scroll(function () {
		setTimeout(() => {
			counter = counter + 5;
			for (const i in mechanism) {
				if (Object.hasOwnProperty.call(mechanism, i)) {
					const gear = mechanism[i];
					if (i % 2 === 0) {
						$(gear).css('transform', `rotate(${counter}deg`);
					}
					if (i % 2 !== 0) {
						$(gear).css('transform', `rotate(-${counter}deg`);
					}
				}
			}
		}, 100);

	});

	$('.burger__inner').click(burgerAction);
	$('.nav__item').click(burgerAction);
	function burgerAction() {
		$('.burger__inner').toggleClass('burger__inner--active');
		$('.nav__inner').toggleClass('nav__inner--visible');
	}

	let worksHeight = $('.works__content').find('.works__item').eq(0).outerHeight(true);
	$('.works__content').css({ maxHeight: `${worksHeight}px` });
	$('#btn_works').click(function () {
		$(this).css(`display`, 'none').prev().css({ maxHeight: `none` });
	});

	$('textarea').keydown(function () {
		$(this).height(function () {
			console.log(this);
			return $(this).height() + $(this).scrollTop();
		});
	});

	const aboutAnim = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					$('#aside__item-left').css('transform', 'translate(-50%, 0) rotate(90deg)');
					$('#aside__item-right').css('transform', 'translate(50%, 0) rotate(90deg)');
					$('#about__img').css('transform', 'translate(0)');
					$('#about__text').css('transform', 'translate(0)');
				}
			});
		}
	);
	$('.about__inner').each(function () {
		aboutAnim.observe(this);
	});

	const stagesAnim = new IntersectionObserver(
		(entries) => {
			setTimeout(() => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						$(entry.target).css('transform', 'translate(0)');
					}
				});
			}, 100);


		}
	);
	$('.stages__item').each(function () {
		stagesAnim.observe(this);
	})
	$('.questions__details').slideUp();
	$('.questions__item').click(function () {
		$(this).find('.questions__details').slideToggle(500);
		$(this).find('.arrow-questions').toggleClass('rotate');
	})
});