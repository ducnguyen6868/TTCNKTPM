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



//Ẩn hiện menu theo từng mục 
const combo = document.getElementById("combo-button");
const combo_list = document.getElementById("combo");
const pizza = document.getElementById("pizza-button");
const pizza_list = document.getElementById("pizza");
const appetizer = document.getElementById("appetizer-button");
const appetizer_list = document.getElementById("appetizer");
combo.addEventListener('click', () => {
    combo_list.style.display = 'grid';
    combo.classList.add('border-bottom');
    appetizer_list.style.display='none';
    appetizer.classList.remove('border-bottom');
    pizza_list.style.display = 'none';
    pizza.classList.remove('border-bottom');
});

pizza.addEventListener('click', () => {
    combo_list.style.display = 'none';
    combo.classList.remove('border-bottom');
    appetizer_list.style.display = 'none';
    appetizer.classList.remove('border-bottom');
    pizza_list.style.display = 'grid';
    pizza.classList.add('border-bottom');

});
appetizer.addEventListener('click', () => {
    combo_list.style.display = 'none';
    combo.classList.remove('border-bottom');
    pizza_list.style.display = 'none';
    pizza.classList.remove('border-bottom');
    appetizer_list.style.display = 'grid';
    appetizer.classList.add('border-bottom');
});

