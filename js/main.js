// ! ==================== burger menu ===================

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("burger").addEventListener("click", function () {
		document.querySelector(".header-top-box").classList.toggle("active")
	})
})

// ! ==================== Swiper ====================

const swiper = new Swiper('.swiper', {

	// ===== Optional parameters =====
	direction: 'horizontal',
	loop: true,
	speed: 1500,
	effect: 'slider', // slider - за замовч., cards, coverflow, flip, fade, cube

	// ===== Pagination =====
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		// type: 'fraction',
	},

	// ===== Navigation arrows =====
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// ===== Автоматичне перегортання =====
	// autoplay: {
	// 	delay: 3000,
	// },

	breakpoints: {
		300: {
			slidesPerView: 1,
			// spaceBetween: 10,
			// centerInsufficientSlides: false,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},

	// centerInsufficientSlides: true,

});

// ! ==================== Accordion ====================

document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
	item.addEventListener('click', () => {
		const parent = item.parentNode;

		if (parent.classList.contains('accordion-item--active')) {
			parent.classList.remove('accordion-item--active');
		} else {
			document.querySelectorAll('.accordion-item').forEach((child) => child.classList.remove('accordion-item--active'))

			parent.classList.add('accordion-item--active');
		}
	})
)