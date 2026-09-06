// ========================================
// NAVIGATION AND PAGE INTERACTIONS
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // Select page elements
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("main section[id]");


    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================

    function updateNavbar() {

        if (window.scrollY > 20) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }


    window.addEventListener("scroll", updateNavbar);


    // ========================================
    // ACTIVE NAVIGATION LINK
    // ========================================

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 150;
            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveLink
    );


    // ========================================
    // INITIALIZE PAGE STATE
    // ========================================

    updateNavbar();
    updateActiveLink();

});