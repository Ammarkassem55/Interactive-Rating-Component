let spans = document.querySelectorAll(".rate-numbers span");
let btn = document.getElementById("btn");
let i = document.getElementById("icon");
let heading = document.getElementById("h");
let text = document.getElementById("text");
let p = document.getElementById("p");
let rate = document.getElementById("rate");
spans.forEach((span) => {
  span.addEventListener("click", function (e) {
    spans.forEach((span) => {
      span.classList.remove("chosen");
    });
    e.currentTarget.classList.add("chosen");
    btn.addEventListener("click", function (e) {
      // console.log(e);
      i.innerHTML = `You give us ${span.innerHTML} out of 5`;
      i.style.margin = "auto";
      i.style.width = "200px";
      i.style.textAlign = "center";
      i.style.color = " #fb7519";
      i.style.borderRadius = "25px";
      i.style.paddingTop = "5px";
      heading.innerHTML = "Thank You !";
      heading.style.textAlign = "center";
      heading.style.paddingTop = "60px";
      p.innerHTML =
        "We appreciate you taking the time to give a rating. if you ever need more support , don’t hesitate to get in touch!";
      p.style.textAlign = "center";
      p.style.margin = "auto";
      p.style.width = "200px";
      text.style.display = "block";
      e.currentTarget.style.display = "none";
      rate.style.display = "none";
    });
  });
});
