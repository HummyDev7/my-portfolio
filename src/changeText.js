const btnOne = document.querySelector('.btn__one');
const btnTwo = document.querySelector('.btn__two');
const btnThree = document.querySelector('.btn__three');

var style = document.querySelector('.btn__one').style;

document.querySelector('body').addEventListener('click', () => {
    btnOne.className="btn__one about-text slideUp";
    btnTwo.className="btn__two work-text slideUp";
    btnThree.className="btn__three contact-text slideUp";
});


