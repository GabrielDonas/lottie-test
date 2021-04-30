//const bodymovin = require("bodymovin");

const animation = bodymovin.loadAnimation({
  container: document.getElementById("svgContainer"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../src/data.json",
});
