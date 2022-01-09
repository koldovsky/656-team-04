    const footerHamburger = document.querySelector(".footer-hamburger");
    const footerNavMenu = document.querySelector(".footer-nav-menu");

    footerHamburger.addEventListener("click", () => {
        footerHamburger.classList.toggle("active");
        footerNavMenu.classList.toggle("active");
    });
    document.querySelectorAll(".footer-nav-link").forEach(n => n.addEventListener("click", () => {
        footerHamburger.classList.remove("active");
        footerNavMenu.classList.remove("active");
    }));