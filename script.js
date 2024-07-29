let searchBtn = document.querySelector(".searchBtn");
let closeBtn = document.querySelector(".closeBtn");
let searchBox = document.querySelector(".searchBox");

searchBtn.onclick = function () {
  searchBox.classList.add("active");
  closeBtn.classList.add("active");
  searchBox.classList.add("active");
};

closeBtn.onclick = function () {
  searchBox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBox.classList.remove("active");
};

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnlogin = document.querySelector(".btnLogin");
const iconclose = document.querySelector(".icon-close");
const showPW = document.querySelectorAll(".showPW");
const PW = document.querySelectorAll(".password");

showPW.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    PW.forEach((PW) => {
      if (PW.type === "password") {
        PW.type = "text";

        showPW.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        PW.type = "password";

        showPW.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

let data = [];
let AddData = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  data.push([name, email, password]);

  sessionStorage.setItem("user", JSON.stringify(data));
};

const menuWrapper = document.querySelector(".menu-wrapper");
const allBtns = document.querySelectorAll(".btn-product");
const btnContainer = document.querySelector(".all-btn");

btnContainer.addEventListener("click", (e) => {
  // const btnTarget = e.target.classList.contains("btn");
  const btnId = e.target.dataset.id;
  allBtns.forEach((btn) => {
    if (btnId) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    }
  });
});

const menuProducts = [
  {
    category: "samsung",
    title: "Samsung S24 Ultra",
    price: "$1040",
    imgSrc: "./Image/Samsung S24 Ultra.png",
  },
  {
    category: "tecno",
    title: "TECNO CAMON 16",
    price: "$499",
    imgSrc: "./Image/TECNO CAMON 16 Premier.png",
  },
  {
    category: "iphone",
    title: "Iphone 15 Pro Max",
    price: "$1399",
    imgSrc: "./Image/Iphone 15 Pro Max.png",
  },
  {
    category: "tecno",
    title: "TECNO POP 7 Pro",
    price: "$499",
    imgSrc: "./Image/TECNO POP 7 Pro.png",
  },
  {
    category: "tecno",
    title: "TECNO CAMON 17 Pro",
    price: "$1300",
    imgSrc: "./Image/TECNO CAMON 17 Pro.png",
  },
  {
    category: "iphone",
    title: "Iphone 14 Pro Max",
    price: "$399",
    imgSrc: "./Image/Iphone 14 Pro Max.png",
  },
  {
    category: "tecno",
    title: "TECNO POVA 4 Pro",
    price: "$499",
    imgSrc: "./Image/TECNO POVA 4 Pro.png",
  },
  {
    category: "iphone",
    title: "Iphone 11",
    price: "$399",
    imgSrc: "./Image/Iphone 11.png",
  },
  {
    category: "tecno",
    title: "TECNO POVA 3",
    price: "$499",
    imgSrc: "./Image/TECNO POVA 3.png",
  },
  {
    category: "samsung",
    title: "Samsung S22 Ultra",
    price: "$440",
    imgSrc: "./Image/Samsung S22 Ultra.png",
  },
  {
    category: "tecno",
    title: "TECNO CAMON 19 Pro",
    price: "$499",
    imgSrc: "./Image/TECNO CAMON 19 Pro.png",
  },
  {
    category: "huawei",
    title: "Huawei Nova Y71",
    price: "$1040",
    imgSrc: "./Image/Huawei Nova Y71.png",
  },
  {
    category: "tecno",
    title: "TECNO CAMON 18",
    price: "$499",
    imgSrc: "./Image/TECNO CAMON 18 Premier.png",
  },
  {
    category: "iphone",
    title: "Iphone 11 Pro Max",
    price: "$399",
    imgSrc: "./Image/Iphone 11 Pro Max.png",
  },
  {
    category: "tecno",
    title: "TECNO SPARK 9T",
    price: "$699",
    imgSrc: "./Image/TECNO SPARK 9T.png",
  },
  {
    category: "samsung",
    title: "Samsung Galaxy A42",
    price: "$840",
    imgSrc: "./Image/Samsung Galaxy A42 5G.png",
  },
  {
    category: "iphone",
    title: "Iphone 11 Pro",
    price: "$399",
    imgSrc: "./Image/Iphone 11 Pro.png",
  },
  {
    category: "tecno",
    title: "TECNO CAMON 20 Pro",
    price: "$399",
    imgSrc: "./Image/TECNO CAMON 20 Pro 5G.png",
  },
  {
    category: "huawei",
    title: "Huawei P40 Pro",
    price: "$999",
    imgSrc: "./Image/Huawei P40 Pro 5G.png",
  },
  {
    category: "iphone",
    title: "Iphone 12 Pro Max",
    price: "$599",
    imgSrc: "./Image/Iphone 12 Pro Max.png",
  },
];

allBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    const filterMenu = menuProducts.filter((item) => {
      return item.category == id;
    });
    if (id == "all") {
      showingPruducts(menuProducts);
    } else {
      showingPruducts(filterMenu);
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  showingPruducts(menuProducts);
});

const showingPruducts = (arrayProducts) => {
  const displayProduct = arrayProducts
    .map((p) => {
      return `<article class="card">
        <img src="${p.imgSrc}" alt="${p.title}" class="img" />
        <h3 class="card-heading">${p.title}</h3>
        <span class="price">${p.price}</span>
        <button class="btns"><i class="fa fa-cart-shopping"></i> Add to cart</button>
      </article>`;
    })
    .join("");
  menuWrapper.innerHTML = displayProduct;
};
