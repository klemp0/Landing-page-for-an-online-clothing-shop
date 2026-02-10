const head = document.getElementsByClassName('site-header')[0];


const topbar = document.createElement('div');
topbar.setAttribute("class", "topbar");

const topr = document.createElement('div');
topr.setAttribute("class", "topbar-right top-dark" );

const ahelp = document.createElement("a");
ahelp.setAttribute("class", "a-white");
ahelp.innerText="Help";
ahelp.setAttribute("href", "#")

const sep = document.createElement('span');
sep.setAttribute("class", "sep sep-white");
sep.innerText="|";

const asign = document.createElement('a');
asign.setAttribute("class", "a-white");
asign.innerText="Sign In";
asign.setAttribute("href", "#");

topbar.appendChild(topr);
topr.appendChild(ahelp);
topr.appendChild(sep);
topr.appendChild(asign);
head.appendChild(topbar);


const nav = document.createElement('nav');
nav.setAttribute("class", "navbar");
head.appendChild(nav);

const logo = document.createElement('div');
logo.setAttribute("class", "logo");

const abrand = document.createElement('a');
abrand.setAttribute("class", "brand");
abrand.innerText="Cloathing Shop";
abrand.setAttribute("href", "#");

logo.appendChild(abrand);
nav.appendChild(logo);


const catalog = document.createElement("ul");
catalog.setAttribute("class", "catalog");
nav.appendChild(catalog);


const liMen = document.createElement("li");
liMen.setAttribute("class", "has-mega");

const aMen = document.createElement("a");
aMen.setAttribute("href", "#");
aMen.innerText = "Men";

liMen.appendChild(aMen);
catalog.appendChild(liMen);

const megaMen = document.createElement("div");
megaMen.setAttribute("class", "mega");
megaMen.setAttribute("role", "menu");
megaMen.setAttribute("aria-hidden", "true");

const megaInnerMen = document.createElement("div");
megaInnerMen.setAttribute("class", "mega-inner");

megaMen.appendChild(megaInnerMen);
liMen.appendChild(megaMen);

const colMenShoes = document.createElement("div");
colMenShoes.setAttribute("class", "mega-col");

const hMenShoes = document.createElement("h5");
hMenShoes.innerText = "Shoes";

const ulMenShoes = document.createElement("ul");

["All Shoes", "Sneakers", "Shoes", "Sport"].forEach(text => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.innerText = text;
  li.appendChild(a);
  ulMenShoes.appendChild(li);
});

colMenShoes.append(hMenShoes, ulMenShoes);
megaInnerMen.appendChild(colMenShoes);

const colMenCloth = document.createElement("div");
colMenCloth.setAttribute("class", "mega-col");

const hMenCloth = document.createElement("h5");
hMenCloth.innerText = "Clothing";

const ulMenCloth = document.createElement("ul");

["All Cloathing", "Hoodies", "Tops & T-shirts", "Accessorieas"].forEach(text => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.innerText = text;
  li.appendChild(a);
  ulMenCloth.appendChild(li);
});

colMenCloth.append(hMenCloth, ulMenCloth);
megaInnerMen.appendChild(colMenCloth);

const colMenSport = document.createElement("div");
colMenSport.setAttribute("class", "mega-col");

const hMenSport = document.createElement("h5");
hMenSport.innerText = "Sport";

const ulMenSport = document.createElement("ul");

["Running", "Football", "Basketball", "Training & Gym"].forEach(text => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.innerText = text;
  li.appendChild(a);
  ulMenSport.appendChild(li);
});

colMenSport.append(hMenSport, ulMenSport);
megaInnerMen.appendChild(colMenSport);

const liWoman = document.createElement("li");
liWoman.setAttribute("class", "has-mega");

const aWoman = document.createElement("a");
aWoman.setAttribute("href", "#");
aWoman.innerText = "Woman";

liWoman.appendChild(aWoman);
catalog.appendChild(liWoman);

// mega
const megaWoman = document.createElement("div");
megaWoman.setAttribute("class", "mega");
megaWoman.setAttribute("role", "menu");
megaWoman.setAttribute("aria-hidden", "true");

const megaInnerWoman = document.createElement("div");
megaInnerWoman.setAttribute("class", "mega-inner");

megaWoman.appendChild(megaInnerWoman);
liWoman.appendChild(megaWoman);

const colWomanShoes = document.createElement("div");
colWomanShoes.setAttribute("class", "mega-col");

const hWomanShoes = document.createElement("h5");
hWomanShoes.innerText = "Shoes";

const ulWomanShoes = document.createElement("ul");

["All Shoes", "Sneakers", "Shoes", "Sport"].forEach(text => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.innerText = text;
  li.appendChild(a);
  ulWomanShoes.appendChild(li);
});

colWomanShoes.appendChild(hWomanShoes);
colWomanShoes.appendChild(ulWomanShoes);
megaInnerWoman.appendChild(colWomanShoes);

const colWomanCloth = document.createElement("div");
colWomanCloth.setAttribute("class", "mega-col");

const hWomanCloth = document.createElement("h5");
hWomanCloth.innerText = "Clothing";

const ulWomanCloth = document.createElement("ul");

["All Cloathing", "Hoodies", "Leggings", "Tops & T-shirts"].forEach(text => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.innerText = text;
  li.appendChild(a);
  ulWomanCloth.appendChild(li);
});

colWomanCloth.appendChild(hWomanCloth);
colWomanCloth.appendChild(ulWomanCloth);
megaInnerWoman.appendChild(colWomanCloth);

const colWomanSport = document.createElement("div");
colWomanSport.setAttribute("class", "mega-col");

const hWomanSport = document.createElement("h5");
hWomanSport.innerText = "Sport";

const ulWomanSport = document.createElement("ul");

["Training & Gym", "Running", "Tennis", "Football"].forEach(text => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.innerText = text;
  li.appendChild(a);
  ulWomanSport.appendChild(li);
});

colWomanSport.appendChild(hWomanSport);
colWomanSport.appendChild(ulWomanSport);
megaInnerWoman.appendChild(colWomanSport);

const liKids = document.createElement("li");
liKids.setAttribute("class", "has-mega");

const aKids = document.createElement("a");
aKids.setAttribute("href", "#");
aKids.innerText = "Kids";

liKids.appendChild(aKids);
catalog.appendChild(liKids);

// mega
const megaKids = document.createElement("div");
megaKids.setAttribute("class", "mega");
megaKids.setAttribute("role", "menu");
megaKids.setAttribute("aria-hidden", "true");

const megaInnerKids = document.createElement("div");
megaInnerKids.setAttribute("class", "mega-inner");

megaKids.appendChild(megaInnerKids);
liKids.appendChild(megaKids);

const colKidsShoes = document.createElement("div");
colKidsShoes.setAttribute("class", "mega-col");

const hKidsShoes = document.createElement("h5");
hKidsShoes.innerText = "Shoes";

const ulKidsShoes = document.createElement("ul");

["All Shoes", "Sneakers", "Shoes", "Sport"].forEach(text => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.innerText = text;
  li.appendChild(a);
  ulKidsShoes.appendChild(li);
});

colKidsShoes.appendChild(hKidsShoes);
colKidsShoes.appendChild(ulKidsShoes);
megaInnerKids.appendChild(colKidsShoes);

const colKidsCloth = document.createElement("div");
colKidsCloth.setAttribute("class", "mega-col");

const hKidsCloth = document.createElement("h5");
hKidsCloth.innerText = "Clothing";

const ulKidsCloth = document.createElement("ul");

["All Cloathing", "Tops & T-Shirts", "Tracksuits", "Jackets"].forEach(text => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.innerText = text;
  li.appendChild(a);
  ulKidsCloth.appendChild(li);
});

colKidsCloth.appendChild(hKidsCloth);
colKidsCloth.appendChild(ulKidsCloth);
megaInnerKids.appendChild(colKidsCloth);

const colKidsSport = document.createElement("div");
colKidsSport.setAttribute("class", "mega-col");

const hKidsSport = document.createElement("h5");
hKidsSport.innerText = "Sport";

const ulKidsSport = document.createElement("ul");

["Running", "Football", "Basketball", "Physical Education"].forEach(text => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.innerText = text;
  li.appendChild(a);
  ulKidsSport.appendChild(li);
});

colKidsSport.appendChild(hKidsSport);
colKidsSport.appendChild(ulKidsSport);
megaInnerKids.appendChild(colKidsSport);


const navAction = document.createElement("div");
navAction.setAttribute("class", "nav-action");
nav.appendChild(navAction);

const form = document.createElement("form");
form.setAttribute("class", "search");
form.setAttribute("role", "search");

const input = document.createElement("input");
input.type = "search";
input.name = "q";
input.placeholder = "Search";
input.setAttribute("aria-label", "Caută");

const btn = document.createElement("button");
btn.type = "submit";
btn.setAttribute("class", "search-btn");

const icon = document.createElement("span");
icon.setAttribute("class", "material-symbols-outlined");
icon.innerText = "search";

btn.appendChild(icon);
form.append(input, btn);
navAction.appendChild(form);

const themeBtn = document.createElement("button");
themeBtn.id = "themeToggle";
themeBtn.setAttribute("class", "theme-toggle");
themeBtn.setAttribute("aria-pressed", "false");

const light = document.createElement("span");
light.setAttribute("class", "material-symbols-outlined");
light.id = "light";
light.innerText = "light_mode";

const dark = document.createElement("span");
dark.setAttribute("class", "material-symbols-outlined");
dark.id = "dark";
dark.innerText = "dark_mode";

themeBtn.append(light, dark);
navAction.appendChild(themeBtn);
