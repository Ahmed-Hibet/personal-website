var previousButton = document.querySelector('.previous-btn');
var nextButton = document.querySelector('.next-btn');
var slideOne = document.querySelector('.slide-number-1');
var slideTwo = document.querySelector('.slide-number-2');
var projectOne = document.querySelector('.pro1');
var projectTwo = document.querySelector('.pro2');
var projectThree = document.querySelector('.pro3');
var projectFour = document.querySelector('.pro4');
var projectFive = document.querySelector('.pro5');
var projectSix = document.querySelector('.pro6');

function previous() {
    previousButton.addEventListener('click', function () {
        projectOne.style.display = 'block';
        projectTwo.style.display = 'block';
        projectThree.style.display = 'block';
        projectFour.style.display = 'none';
        projectFive.style.display = 'none';
        projectSix.style.display = 'none';
        previousButton.disabled = true;
        nextButton.disabled = false;
        slideOne.disabled = true;
        slideTwo.disabled = false;

    })
}

function next() {
    nextButton.addEventListener('click', function () {
        projectOne.style.display = 'none';
        projectTwo.style.display = 'none';
        projectThree.style.display = 'none';
        projectFour.style.display = 'block';
        projectFive.style.display = 'block';
        projectSix.style.display = 'block';
        previousButton.disabled = false;
        nextButton.disabled = true;
        slideOne.disabled = false;
        slideTwo.disabled = true;

    })
}

function slide1() {
    slideOne.addEventListener('click', function () {
        projectOne.style.display = 'block';
        projectTwo.style.display = 'block';
        projectThree.style.display = 'block';
        projectFour.style.display = 'none';
        projectFive.style.display = 'none';
        projectSix.style.display = 'none';
        previousButton.disabled = true;
        nextButton.disabled = false;
        slideOne.disabled = true;
        slideTwo.disabled = false;

    })
}

function slide2() {
    slideTwo.addEventListener('click', function () {
        projectOne.style.display = 'none';
        projectTwo.style.display = 'none';
        projectThree.style.display = 'none';
        projectFour.style.display = 'block';
        projectFive.style.display = 'block';
        previousButton.disabled = false;
        nextButton.disabled = true;
        slideOne.disabled = false;
        slideTwo.disabled = true;

    })
}