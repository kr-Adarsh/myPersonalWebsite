Burger=document.querySelector('.burger')
NavBar=document.querySelector('.navBar')
NavList=document.querySelector('.navList')
RightNav=document.querySelector('.rightNav')

Burger.addEventListener('click',()=>{
    NavBar.classList.toggle('h-nav-resp');
    NavList.classList.toggle('v-class-resp');
    RightNav.classList.toggle('v-class-resp');
})

// querySelector : returns the first child element that matches a css selector(s).
// querySelectorAll : returns all child elements that matches a css selector(s).
// classList : returns the class name(s) of an element.

/* 
       addEventListener('eventName',listener);    //syntax
       toggle() : It toggles the properties.
*/


 