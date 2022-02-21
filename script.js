let sliderImages = document.querySelectorAll('.slide'),
  arrowLeft = document.querySelector('#arrow-left'),
  arrowRight = document.querySelector('#arrow-right'),
  current = 0;

// clear all images when slide changes
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// Init slider
function startSlide() {
  reset();
  // Grab onto first img
  sliderImages[0].style.display = 'block';
}

// Show previous slide
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block'; // Takes the current img and goes back 1.
  current--;
}

// Show next slide
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

// Left arrow click
arrowLeft.addEventListener('click', () => {
  // Check to see if it's at 0
  if (current === 0) {
    current = sliderImages.length; //goes to the last img in array.
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener('click', () => {
  if (current === sliderImages.length - 1) {
    // If you get to last image, go to first img in array
    current = -1;
  }
  slideRight();
});

startSlide();
