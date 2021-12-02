class ResponsiveNavbar{
    constructor(ResponsiveMenu, navList, navLinks){
        this.ResponsiveMenu = document.querySelector(ResponsiveMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
                ?(link.style.animation = "")
                :(link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
        })
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.responsiveMenu.classList.toggle(this.activeClass);
        this.animateLinks(); 
    }

    addClickEvent(){
        this.responsiveMenu.addEventListener("click", () => console.log("hey"));
    }

    init(){
        if(this.responsiveMenu){
            this.addClickEvent();
        }
        return this
    }
}

const responsiveNavbar = new ResponsiveNavbar(
    "responsive-menu",
    ".nav-list",
    ".nav-list li"
);

responsiveNavbar.init();