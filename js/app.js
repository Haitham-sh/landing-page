/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const all =document.querySelectorAll("section");
const thePar =document.getElementById("navbar__list");
const links =document.createElement('li');

/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the nav
// Build menu 
// Scroll to anchor ID
for(let i = 0; i < all.length; i++){
  const call = all[i].getAttribute('data-nav');
  const sete = all[i].getAttribute('id');
  const strig ='<a class="menu__link" data-nav='+sete+' href="#'+sete+'">'+call+'</a>';
  const link = document.createElement('li');
  link.innerHTML = strig;
  link.classList.add(sete)
  thePar.appendChild(link);
};


/**
 * End Main Functions
 * Add class 'active' to section when near top of viewport
 * Begin Events
 * 
*/
const elemanta = document.querySelectorAll('a')
window.addEventListener('scroll',function(){
const activity = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("your-active-class");
    }
    else {
      entry.target.classList.remove("your-active-class");
      } 
  })
},{ threshold:0.6})
  all.forEach((section) => {
  activity.observe(section);
})
})

// Scroll to section on link click
const lis =document.querySelectorAll("li");
for(let x = 0; x < lis.length; x++){
lis[x].addEventListener('click', function (event) { 
  event.preventDefault();
  all[x].scrollIntoView({behavior: "smooth"});
})};

// Set sections as active
window.addEventListener("scroll", () => {
  let fay = "";
  all.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 2.25) {
      fay = section.getAttribute("id");
    }
  });
    lis.forEach((li) => { 
        let chld = li.firstChild
      if (li.classList.contains(fay)) {
          chld.classList.add("toto");
          chld.classList.remove("menu__link");
    }
    else {
          chld.classList.remove("toto");
          chld.classList.add("menu__link");
    } 
  });
});





