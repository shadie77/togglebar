//checks if the navigation menu is open or closed in order to know if we need to open or close it
let toggleNavStatus = false;

//anonymous function that opens and closes the menu when the nav button is clicked
let toggleNav = function() {
    //changes css styling to expand and accomodate content in the sidebar. "get" is a best practice keyword used to grab items/elements in any programming language, "set" 
    //is used as best practice for changing items or element
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a"); //queryselectorAll grabs all the instances of a selection. only the first link would be selected in this case without "all"

    //check if the toggleNav status is = true or false. NB: javascript select from top to bottom so prioritizing elements to work on is key
    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible"; //unordered list is selected to changed its css attribute from hidden to visible i.e element.style.property
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        getSidebarUl.style.visibility = "hidden"; //unordered list is selected to changed its css attribute from hidden to visible i.e element.style.property
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        toggleNavStatus = false;
    }
}