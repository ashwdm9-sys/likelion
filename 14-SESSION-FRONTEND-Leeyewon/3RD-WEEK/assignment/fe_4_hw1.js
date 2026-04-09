const select = document.getElementById("colorSelect");
const current = document.getElementsByTagName("h1")[0];


select.addEventListener("change", () => {
  current.style.color = select.value;
});


