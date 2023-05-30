const form = document.querySelector("#kek");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const domain = document.querySelector("#domain").value;
  fetch("/ipof?domain=" + domain)
    .then((res) => res.json())
    .then((res) => console.log(res));
});
