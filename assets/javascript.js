const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});
// skills rating function
function rate(){
$('.skill-perc').each(function(){
  var $this = $(this);
  var perc = $this.attr('perc');
  $this.css("width",perc+'%');
});
}
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});
sr.reveal('.header-info-heading',{}); 
sr.reveal('.header-info-subheading',{delay: 500}); 
sr.reveal('.header-info-button',{delay: 600}); 

sr.reveal('.about-info-heading',{}); 
sr.reveal('.about-info-desc',{delay: 500}); 
sr.reveal('.about-img',{delay: 600});

sr.reveal('#Education',{delay: 500});

sr.reveal('#skills',{delay: 500});

sr.reveal('#Experience',{delay: 500});
 


