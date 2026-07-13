$(window).on("scroll", function () {
  if ($(this).scrollTop() >= 80) {
    $("#navbar").addClass("noTransparent");
  } else {
    $("#navbar").removeClass("noTransparent");
  }
});

$(document).ready(function () {
  const circleSize = window.innerWidth <= 575 ? 112 : 130;

  $(".circle")
    .circleProgress({
      startAngle: -Math.PI / 2,
      size: circleSize,
      thickness: 10,
      lineCap: "round",
      emptyFill: "rgba(5, 117, 230, 0.12)",
      fill: {
        gradient: ["#74b9ff", "#0575e6"],
        gradientAngle: Math.PI / 4,
      },
      animation: { duration: 1400, easing: "circleProgressEasing" },
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("span")
        .text(Math.round(stepValue * 100) + "%");
    });

  $(".reveal").each(function (index) {
    const el = $(this);
    setTimeout(function () {
      el.addClass("is-visible");
    }, 120 + index * 140);
  });
});

const radios = document.querySelectorAll(".gallery-work input[type='radio']");
const items = document.querySelectorAll(".items .item");

function filterGallery(radioId) {
  items.forEach(function (item) {
    item.classList.add("disable");
  });

  if (radioId === "item-type-all") {
    items.forEach(function (item) {
      item.classList.remove("disable");
    });
    return;
  }

  document.querySelectorAll(".items ." + radioId).forEach(function (item) {
    item.classList.remove("disable");
  });
}

radios.forEach(function (radio) {
  radio.addEventListener("change", function () {
    filterGallery(radio.id);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    return;
  }

  const subject = encodeURIComponent("رسالة من موقع ناجي صبحة — " + name);
  const body = encodeURIComponent(
    "الاسم: " + name + "\nالبريد: " + email + "\n\nالرسالة:\n" + message
  );

  window.location.href =
    "mailto:nageammar628@gmail.com?subject=" + subject + "&body=" + body;
});
