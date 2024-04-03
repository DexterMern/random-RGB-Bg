let body = document.body;


(function () {
  let rgb1 = Math.floor(Math.random() * 255);
  let rgb2 = Math.floor(Math.random() * 255);
  let rgb3 = Math.floor(Math.random() * 255);
  body.style.backgroundColor = "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")";
})();
