let circles = document.querySelector("#circle");
const btn = document.querySelector("#btn");
const svglem = document.querySelector("svg");

window.addEventListener("mousemove", function (details) {
  let xValue = details.clientX;
  let yValue = details.clientY;
  this.setTimeout(function () {
    circles.style.top = `${yValue}px`;
    circles.style.left = `${xValue}px`;
  }, 50);
});

btn.addEventListener("click", function () {
  t1.reverse();
  setTimeout(function () {
    svglem.classList.add("animate");
  }, 3500);
});

let t1 = gsap.timeline();

t1.from("#wrapper", {
  duration: 4,
  scale: 7,
  ease: "Expo.easeInOut",
  opacity: 0,
})
  .from(
    "#whitestrip",
    {
      duration: 2,
      width: 0,
      ease: "Expo.easeInOut",
    },
    "-=2.5"
  )
  .from(
    "#blackcard",
    {
      duration: 1.5,
      x: 50,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "-=1"
  )
  .from(
    "#linelem",
    {
      duration: 1.5,
      x: 50,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "-=1"
  )
  .from(
    "#linelem .line",
    {
      duration: 2,
      width: 50,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "-=1"
  )
  .from(
    "#blackcard p",
    {
      duration: 1.2,
      y: 30,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "-=2"
  )
  .from(
    "#sidelem",
    {
      duration: 2,
      x: 30,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "-=2"
  );
