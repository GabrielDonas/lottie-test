import lottie from "lottie-web";
import animationJson from "./s.json";

const container = document.getElementById("svgContainer");

const animation = lottie.loadAnimation({
  container: container,
  renderer: "svg",
  loop: false,
  autoplay: false,
  animationData: animationJson,
});

const startAnimation = () => {
  animation.play();
};

const stopAnimation = () => {
  animation.pause();
};

const test = () => {
  animation.goToAndPlay(0);
};
container.addEventListener("mouseover", startAnimation);
//container.addEventListener("mouseover", startAnimation);
//container.addEventListener("mouseout", stopAnimation);

/*
import bodymovin from "bodymovin"
const animation = bodymovin.loadAnimation({
  container: document.getElementById("svgContainer"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../src/boom.json",
});
*/
