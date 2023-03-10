const btn = document.querySelector(".btn");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

btn.addEventListener("click", () => {
  if (username.value === "egcmember" && password.value === "locked") {
    window.open("https://gotb.netlify.app/home.html")
  }
});
