const userMain = document.querySelector(".user");
const userBox = document.querySelector(".user-box");

const shareBox = document.querySelector(".share");
const shareBtn = document.getElementById("btn");

const shareBtnImg = document.querySelector(".share-btn");

shareBtn.addEventListener("click", () => {
  userMain.classList.toggle("share-bg");
  userBox.classList.toggle("hidden");
  shareBox.classList.toggle("hidden");
  shareBtn.classList.toggle("btn-bg");

  shareBtnImg.classList.toggle("btn-img-clr");
});
