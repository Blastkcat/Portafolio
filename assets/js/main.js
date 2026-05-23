/* SHOW & CLOSE MENU */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/* REMOVE MOBILE MENU */
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* HOME TEXT CIRCULAR */
const homeText = document.getElementById('home-text'),
letters=homeText.textContent.trim().split(""),
angleStep=360/letters.length

homeText.textContent=""

letters.forEach((char, i) => {
   const span = document.createElement("span")
   span.textContent = char
   span.style.transform = `rotate(${i * angleStep}deg)`
   homeText.appendChild(span)
})

/* HOME TYPED JS */
const typed = new Typed("#home-typed", {
   strings: ["Game Developer", "UI/UX Designer"],
   typeSpeed: 60,
   backSpeed: 30,
   backDelay: 2000,
   loop: true,
})

/* CHANGE HEADER STYLES */
const scrollheader = () =>{
   const header = document.getElementById('header')
   window.scrollY >= 50 ? header.classList.add('scroll-header')
   : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollheader)

/* SWIPER WORK */ 
const swiperWork = new Swiper(".work__swiper",{
   loop: true,
   spaceBetween: 24,
   slidesPerView: "auto",
   grabCursor: true,
   speed: 600,

   pagination: {
      el: ".swiper-pagination",
      
   },
   autoplay:{
      delay: 3000,
      disableOnInteraction: false,
   }
})


/* SERVICES ACCORDION */ 
const servicesCards = document.querySelectorAll('.services__card'),
      servicesButtons = document.querySelectorAll('.services__button')

servicesButtons.forEach(button=>{
   button.addEventListener('click', () =>{
      const currentCard = button.closest('.services__card'),
         isOpen = currentCard.classList.contains('services-open')
      servicesCards.forEach(card =>{
         card.classList.replace("services-open", "services-close")
      })
      if(!isOpen){
         currentCard.classList.replace("services-close", "services-open")
      }
   })
})

/* CONTACT EMAIL JS */ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')


const sendEmail = async (e) =>{
   e.preventDefault()

   try {
      await emailjs.sendForm('service_yulwqat', 'template_u6wcjkm', '#contact-form', '1jAiAi5o2-m-_e_Ou')
      contactMessage.textContent = "Mensaje Enviado Correctamente ✅"
      contactForm.reset()
   } catch (error) {
      contactMessage.textContent = "Error al enviar el mensaje, intenta nuevamente"
   }finally{
      setTimeout(() => contactMessage.textContent = "", 5000)
   }
   

}

contactForm.addEventListener('submit', sendEmail)

/* SHOW SCROLL UP */ 
const scrollUp =() =>{document.getElementById('scroll-up')
   window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
   : scrollUp.classList.remove('show-scroll')               

} 
window.addEventListener('scroll', scrollUp)



/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
   const scrollY = window.scrollY
   sections.forEach(section =>{
      const id=section.id,
      top = section.offsetTop - 50,
      height = section.offsetHeight
      link = document.querySelector('.nav__menu a[href*=' + id + ']')
   if(!link) return

   link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)

/* SCROLLREVEAL ANIMATION */

const sr = ScrollReveal({
   origin: 'bottom',
   distance: '60px',
   duration: 1200,
   delay: 300,
   easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
})

sr.reveal(".home__subtitle")
sr.reveal(".home__title", {delay: 600})
sr.reveal(".home__description", {delay: 900})
sr.reveal(".home__box-1", {delay: 1200, rotate : {z: -20}})
sr.reveal(".home__box-2", {delay: 1300, rotate : {z: -30}})
sr.reveal(".home__box-3", {delay: 1400, rotate : {z: -40}})
sr.reveal(".home__img", {delay: 1700, distance: '-60px'})
sr.reveal(".home__circle", {delay: 2000, distance: '-100px'})

sr.reveal(".about__title")
sr.reveal(".about__description", {delay: 600})
sr.reveal(".about__button", {delay: 900})

sr.reveal(".work__swiper")

sr.reveal(".services__card:nth-child(odd)",{interval: 200, origin: 'left', distance: "100px"} )
sr.reveal(".services__card:nth-child(even)",{interval: 200, origin: 'right', distance: "100px"} )

sr.reveal(".skills__description")
sr.reveal(".skills__card", {delay: 600, interval: 200} )
sr.reveal(".skills__profession", {delay: 900} )
sr.reveal(".skills__list", {delay: 1200, interval: 200} )

sr.reveal(".contact__form")
sr.reveal(".contact__link", {delay: 600, interval: 200} )

sr.reveal(".footer__container")
