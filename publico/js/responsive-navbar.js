class ResponsiveNavbar{
    constructor(ResponsiveMenu, navList, navLinks){
        this.ResponsiveMenu = document.querySelector(ResponsiveMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";
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