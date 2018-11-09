(function () {
	'use strict'
	let logo = document.querySelectorAll('header .navbar-brand');
	let header = document.querySelector('header');
	let sec = document.querySelector('.j-section');
	let post = document.querySelectorAll('.wrapper-post');
	let about = document.getElementById('about-fade');
	let aboutItem = document.querySelectorAll('.about-block');

	window.onload = function () {
		for (let i = 0, j = 1; i < aboutItem.length, j < aboutItem.length; i = i + 2, j = j + 2) {
			aboutItem[i].style.transform = 'translate(-300%)';
			aboutItem[j].style.transform = 'translate(300%)';
		};
		document.querySelector('.btn-top').style.opacity = '0';
	};

	window.onscroll = function () {
		if (header.classList.contains('slim-nav') && window.pageYOffset < 100) {
			header.classList.remove('slim-nav');
		} else if (window.pageYOffset >= 100) {
			header.classList.add('slim-nav');
		};

		if (about.getBoundingClientRect().top <= 250) {
			for (let i = 0, j = 1; i < aboutItem.length, j < aboutItem.length; i = i + 2, j = j + 2) {
				aboutItem[i].classList.add('fade-lf');
				aboutItem[i].style.transform = '';
				aboutItem[j].classList.add('fade-rt');
				aboutItem[j].style.transform = '';
			};
			document.querySelector('.btn-top').style.opacity = '1';
		} else if (sec.getBoundingClientRect().top >= 600) {
			for (let i = 0, j = 1; i < aboutItem.length, j < aboutItem.length; i = i + 2, j = j + 2) {
				aboutItem[i].classList.remove('fade-lf');
				aboutItem[j].classList.remove('fade-rt');
				aboutItem[i].style.transform = 'translate(-300%)';
				aboutItem[j].style.transform = 'translate(300%)';
			};
			document.querySelector('.btn-top').style.opacity = '0';
		};

		if (sec.getBoundingClientRect().top <= 0) {
			for (let i = 0, j = 1; i < post.length, j < post.length; i = i + 2, j = j + 2) {
				post[i].classList.add('fade-lf');
				post[j].classList.add('fade-rt');
			};
		} else if (sec.getBoundingClientRect().top >= 0) {
			for (let i = 0, j = 1; i < post.length, j < post.length; i = i + 2, j = j + 2) {
				post[i].classList.remove('fade-lf');
				post[j].classList.remove('fade-rt');
			};
		};
	};
})();