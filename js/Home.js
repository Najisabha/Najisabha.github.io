$(window).scroll(function () {
  if ($(this).scrollTop() >= 200) {
    $("#navbar").addClass("noTransparent");
  } else {
    $("#navbar").removeClass("noTransparent");
  }
});
$(document).ready(function () {
  $(".circle")
    .circleProgress({
      startAngle: -Math.PI / 2,
      fill: "#0575e6",
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("span")
        .html(Math.round(stepValue * 100) + "%");
    });
});
const radios = document.querySelectorAll('input[type="radio"]');
const items = document.querySelectorAll(".items .item");

radios.forEach(function (radio) {
  radio.addEventListener("change", function () {
    // تعطيل التفاعل مع جميع العناصر
    items.forEach(function (item) {
      item.classList.add("disable");
    });

    // تمكين التفاعل مع العناصر المحددة فقط
    if (radio.id === "item-type-all") {
      items.forEach(function (item) {
        item.classList.remove("disable");
      });
    } else if (radio.id === "item-type-1") {
      const type1Items = document.querySelectorAll(".item-type-1");
      type1Items.forEach(function (item) {
        item.classList.remove("disable");
      });
    } else if (radio.id === "item-type-2") {
      const type2Items = document.querySelectorAll(".item-type-2");
      type2Items.forEach(function (item) {
        item.classList.remove("disable");
      });
    } else if (radio.id === "item-type-3") {
      const type3Items = document.querySelectorAll(".item-type-3");
      type3Items.forEach(function (item) {
        item.classList.remove("disable");
      });
    }
  });
});
