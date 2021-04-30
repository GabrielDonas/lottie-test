import lottie from "lottie-web";
import animationJson from "./data.json";

const animation = lottie.loadAnimation({
  container: document.getElementById("svgContainer"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  animationData: animationJson,
});

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
