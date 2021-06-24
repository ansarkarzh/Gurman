function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

const pageWidth = document.documentElement.scrollWidth

if (pageWidth<500){
    const mobNavStr = `
    <div class="menu-btn">
		<span></span>
		<span></span>
		<span></span>
	</div> 
    `
    document.querySelector(".header__wrapper").removeChild(document.querySelector('.navbar'))
    document.querySelector(".header__wrapper").innerHTML = mobNavStr

    let menuBtn = document.querySelector('.menu-btn')
    let menu = document.querySelector('.menu')
    let menuLink = document.querySelectorAll('.menu-link')

    menuBtn.addEventListener('click', function(){
	    menuBtn.classList.toggle('active');
	    menu.classList.toggle('active');
    })

    menuLink.forEach((e) => {
        e.addEventListener('click', function(){
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
        })
    })
    
}
