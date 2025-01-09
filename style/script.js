// toggle navbar
let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};



// Active color link Navbar 

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky navbar

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


    // hide link navbar

    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');

};


    // scrollReveal

scrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

scrollReveal().reveal('.home_content, .heading', { origin: 'top'});

scrollReveal().reveal('.home_img, .services_content, .portfolio_box, .contact form', { origin: 'bottom'});

scrollReveal().reveal('.home_content h1, .about_img', { origin: 'left'});

scrollReveal().reveal('.home_content p, .about_content', { origin: 'right'});



// Disable all Property

 document.addEventListener('contextmenu', (event) => event.preventDefault());
    document.addEventListener('selectstart', (event) => event.preventDefault());
    document.addEventListener('dragstart', (event) => event.preventDefault());
    document.addEventListener('keydown', (event) => {
      if (
        (event.ctrlKey && ['u', 's', 'c'].includes(event.key.toLowerCase())) ||
        (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'i')
      ) {
        event.preventDefault();
      }
    });