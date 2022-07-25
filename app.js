// get slider items --1

let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
let sliderCount = sliderImages.length;
let currentSlide = 3;
let slideNumberElement = document.querySelector('.slider-number')
let prevButtonElement = document.querySelector('.prev');
let nextButtonElement = document.querySelector('.next');
// --1
nextButtonElement.onclick = nextSlide;
prevButtonElement.onclick = prevSlide;

// make the pagination --2
let paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');

for (let i = 1; i <= sliderCount; i++) {
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}
document.getElementById('indicators').appendChild(paginationElement)

let paginationCreatedUl = document.querySelector('#pagination-ul'); // pagination element ul
let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li '))
    // ----2

// make the checker function --3 
function checkerFunction() {
    slideNumberElement.textContent = `Slide # ${currentSlide}/${sliderCount}`; // slide number
    removeAllActive()
    sliderImages[currentSlide - 1].classList.add('active'); // put class active on current image
    paginationCreatedUl.children[currentSlide - 1].classList.add('active')

    if (currentSlide == 1) {
        prevButtonElement.classList.add('disabled')
    } else {
        prevButtonElement.classList.remove('disabled')

    }
    if (currentSlide == sliderCount) {
        nextButtonElement.classList.add('disabled')
    } else {
        nextButtonElement.classList.remove('disabled')

    }

}

function removeAllActive() {
    sliderImages.forEach(element => {
        element.classList.remove('active');
    });

    paginationBullets.forEach(element => {
            element.classList.remove('active');
        }


    )
}

// ---3

// trigger the checker function
checkerFunction();


function nextSlide() {
    if (nextButtonElement.classList.contains('disabled')) {
        return false;
    }
    currentSlide++;
    checkerFunction();
}

function prevSlide() {
    if (prevButtonElement.classList.contains('disabled')) {
        return false;
    }
    currentSlide--;
    checkerFunction();
}

for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function() {
        currentSlide = this.getAttribute('data-index');
        checkerFunction();
    }
}