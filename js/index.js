const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src'])

const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent["main-content"]['middle-img-src'])

const navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent.nav['nav-item-1'];
navItems[1].textContent = siteContent.nav['nav-item-2'];
navItems[2].textContent = siteContent.nav['nav-item-3'];
navItems[3].textContent = siteContent.nav['nav-item-4'];
navItems[4].textContent = siteContent.nav['nav-item-5'];
navItems[5].textContent = siteContent.nav['nav-item-6'];

const mainHeading = document.querySelector('h1');
mainHeading.textContent = siteContent.cta.h1;

const btnText = document.querySelector('button');
btnText.textContent = siteContent.cta.button;

const h4Headers = document.querySelectorAll('h4');
h4Headers[0].textContent = siteContent["main-content"]['features-h4'];
h4Headers[1].textContent = siteContent["main-content"]['about-h4'];
h4Headers[2].textContent = siteContent["main-content"]['services-h4'];
h4Headers[3].textContent = siteContent["main-content"]['product-h4'];
h4Headers[4].textContent = siteContent["main-content"]['vision-h4'];
h4Headers[5].textContent = siteContent["contact"]['contact-h4'];

const allPs = document.querySelectorAll('p');
allPs[0].textContent = siteContent["main-content"]['features-content'];
allPs[1].textContent = siteContent["main-content"]['about-content'];
allPs[2].textContent = siteContent["main-content"]['services-content'];
allPs[3].textContent = siteContent["main-content"]['product-content'];
allPs[4].textContent = siteContent["main-content"]['vision-content'];
allPs[5].textContent = siteContent["contact"]['address'];
allPs[6].textContent = siteContent["contact"]['phone'];
allPs[7].textContent = siteContent["contact"]['email'];
allPs[8].textContent = siteContent["footer"]['copyright'];

navItems.forEach((item) => {
  item.style.color = 'green';
});

const navBar = document.querySelector('nav');
const newLink1 = document.createElement('a');
const newLink2 = document.createElement('a');

navBar.appendChild(newLink1);
newLink1.textContent = 'NewAppendLink';
newLink1.style.color = 'green';

navBar.prepend(newLink2);
newLink2.textContent = 'NewPrependLink';
newLink2.style.color = 'green';