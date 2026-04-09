const input = document.getElementsByTagName("input")[0];
const greeting = document.getElementsByTagName("h2")[0];
const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
  const name = input.value;
  greeting.textContent = `Hello, ${name}`;
});
