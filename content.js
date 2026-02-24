const head = document.getElementsByClassName("site-header")[0];


const nav = document.createElement("nav");
nav.className = "navbar";
head.appendChild(nav);

const logo = document.createElement("div");
logo.className = "logo";

const abrand = document.createElement("a");
abrand.className = "brand";
abrand.href = "#";
abrand.innerText = "Clothing Shop";

logo.appendChild(abrand);
nav.appendChild(logo);

const catalogData = {
  men: {
    Shoes: ["All Shoes", "Sneakers", "Shoes", "Sport"],
    Clothing: ["All Clothing", "Hoodies", "Tops & T-shirts", "Accessories"],
    Sport: ["Running", "Football", "Basketball", "Training & Gym"],
  },
  woman: {
    Shoes: ["All Shoes", "Sneakers", "Shoes", "Sport"],
    Clothing: ["All Clothing", "Hoodies", "Leggings", "Tops & T-shirts"],
    Sport: ["Training & Gym", "Running", "Tennis", "Football"],
  },
  kids: {
    Shoes: ["All Shoes", "Sneakers", "Shoes", "Sport"],
    Clothing: ["All Clothing", "Tops & T-Shirts", "Tracksuits", "Jackets"],
    Sport: ["Running", "Football", "Basketball", "Physical Education"],
  },
};

const catalogSections = [
  { title: "Men", key: "men" },
  { title: "Woman", key: "woman" },
  { title: "Kids", key: "kids" },
];

const catalog = document.createElement("ul");
catalog.className = "catalog";
nav.appendChild(catalog);

function createMegaMenu(data) {
  const mega = document.createElement("div");
  mega.className = "mega";
  mega.setAttribute("role", "menu");
  mega.setAttribute("aria-hidden", "true");

  const megaInner = document.createElement("div");
  megaInner.className = "mega-inner";

  Object.entries(data).forEach(([category, items]) => {
    const col = document.createElement("div");
    col.className = "mega-col";

    const h5 = document.createElement("h5");
    h5.innerText = category;

    const ul = document.createElement("ul");

    for (let i = 0; i < items.length; i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.innerText = items[i];
      li.appendChild(a);
      ul.appendChild(li);
    }

    col.append(h5, ul);
    megaInner.appendChild(col);
  });

  mega.appendChild(megaInner);
  return mega;
}

catalogSections.forEach((section) => {
  const li = document.createElement("li");
  li.className = "has-mega";

  const a = document.createElement("a");
  a.href = "#";
  a.innerText = section.title;

  li.append(a, createMegaMenu(catalogData[section.key]));
  catalog.appendChild(li);
});

const navAction = document.createElement("div");
navAction.className = "nav-action";
nav.appendChild(navAction);

const form = document.createElement("form");
form.className = "search";
form.setAttribute("role", "search");

const input = document.createElement("input");
input.type = "search";
input.name = "q";
input.placeholder = "Search";
input.setAttribute("aria-label", "Search");

const btn = document.createElement("button");
btn.type = "submit";
btn.className = "search-btn";

const icon = document.createElement("span");
icon.className = "material-symbols-outlined";
icon.innerText = "search";

btn.appendChild(icon);
form.append(input, btn);
navAction.appendChild(form);

const themeBtn = document.createElement("button");
themeBtn.id = "themeToggle";
themeBtn.className = "theme-toggle";
themeBtn.setAttribute("aria-pressed", "false");

const light = document.createElement("span");
light.className = "material-symbols-outlined";
light.id = "light";
light.innerText = "light_mode";

const dark = document.createElement("span");
dark.className = "material-symbols-outlined";
dark.id = "dark";
dark.innerText = "dark_mode";

themeBtn.append(light, dark);
navAction.appendChild(themeBtn);
