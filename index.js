let scrollProgress = 0; // Track the scroll progress
const maxScroll = 100; // Maximum value for animation

document.addEventListener(
  "wheel",
  function (event) {
    event.preventDefault(); // Prevent the page from scrolling

    const middleContainer = document.querySelector(".middle_container");

    if (event.deltaY > 0) {
      scrollProgress = Math.min(scrollProgress + 10, maxScroll);
    } else {
      scrollProgress = Math.max(scrollProgress - 10, 0); // Cap it at 0
    }

    // Map scroll progress to the animation
    const scrollFactor = scrollProgress / maxScroll;
    const scale = 1 - 0.5 * scrollFactor; // Scale from 1 to 0.5
    const translateX = -60 * scrollFactor; // Translate from 0vw to -50vw
    const translateY = -70 * scrollFactor; // Translate from 0vh to -50vh

    // Apply the transform instantly, without delay
    middleContainer.style.transform = `scale(${scale}) translate(${translateX}vw, ${translateY}vh)`;
  },
  { passive: false }
); // Disable passive scrolling to allow preventDefault
