//  Toogle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav / nav tutup
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelector(".item-detail-button");

itemDetailButton.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

// klik tombol close maka hilang
document.querySelector(".modal #close").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Modal ke 2
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailButton2 = document.querySelector(".item-detail-button2");

itemDetailButton2.onclick = (e) => {
  itemDetailModal2.style.display = "flex";
  e.preventDefault();
};

document.querySelector(".modal #close2").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};

// const modal2 = document.querySelector("#item-detail-modal2");
// window.onclick = (e) => {
//   if (e.target === modal2) {
//     modal.style.display = "none";
//   }
// };

// // klik luar modal
// const modal = document.querySelector("#item-detail-modal");
// window.onclick = (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// };

// Modal ke 2
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailButton3 = document.querySelector(".item-detail-button3");

itemDetailButton3.onclick = (e) => {
  itemDetailModal3.style.display = "flex";
  e.preventDefault();
};

document.querySelector(".modal #close3").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};

function copyText() {
  var textToCopy = document.getElementById("textToCopy");
  textToCopy.select();
  document.execCommand("copy");
  alert("Teks sudah disalin ke clipboard!");
}

function copyemail() {
  var textToCopy = document.getElementById("email");
  textToCopy.select();
  document.execCommand("copy");
  alert("Teks sudah disalin ke clipboard!");
}
