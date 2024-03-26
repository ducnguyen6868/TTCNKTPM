const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const slideWidth = slide[0].clientWidth;

let counter = 1;

setInterval(() => {
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(${-slideWidth * counter}px)`;

    counter++;

    if (counter === slide.length) {
        setTimeout(() => {
            slides.style.transition = 'none';
            slides.style.transform = `translateX(0)`;
            counter = 1;
        }, 500);
    }
}, 3000);

var options = document.querySelectorAll('.option');

options.forEach(function(option) {
    option.addEventListener('click', function() {
        // Loại bỏ lớp "selected" từ tất cả các option trước đó
        options.forEach(function(opt) {
            opt.classList.remove('selected');
        });
        // Thêm lớp "selected" vào option được nhấp
        this.classList.add('selected');
    });
});
