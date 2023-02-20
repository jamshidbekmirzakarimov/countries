let target = document.body;
let theme = localStorage.getItem("theme");
if (theme != null) {
  target.classList.toggle("theme-dark");
}
function changeTheme() {
  let theme = localStorage.getItem("theme");
  if (theme != null) {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "theme-dark");
  }
  target.classList.toggle("theme-dark");
}


let elList = document.querySelector(".list")
let template = document.querySelector(".template").content
let newFragment = new DocumentFragment();

function base() {
  fetch("https://restcountries.com/v3.1/all").
  then((val) => val.json())
  .then((date) => {
    // console.log(date);
    render(date);
  })
}

base();

function render(date) {
  date.forEach(country => {
    const countryClone = template.cloneNode(true);
    countryClone.querySelector(".country-img").src = country.flags.png;
    countryClone.querySelector(".name-country").textContent = country.name.common;
    countryClone.querySelector(".population").textContent = country.population;
    countryClone.querySelector(".region").textContent = country.region;
    countryClone.querySelector(".capital").textContent = country.capital;
    newFragment.appendChild(countryClone);
  });
  elList.appendChild(newFragment);
}




