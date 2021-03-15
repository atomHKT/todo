import renderMain from "./modules/initial-load";

const main = renderMain();

const domElements = (() => {
  // const contentSections = document.querySelectorAll("section[id]");
  // return {
  //   contentSections,
  // };
})();

const addListeners = (() => {
  // main.menuBtn.addEventListener("click", function () {
  //   main.container.classList.toggle("active");
  //   main.menuBtn.classList.toggle("active");
  //   main.nav.classList.toggle("active");
  // });

  // window.addEventListener("scroll", function () {
  //   if (window.pageYOffset > 4) {
  //     main.container.classList.add("scrolled");
  //     main.header.classList.add("scrolled");
  //     main.logoImg.classList.add("scrolled");
  //   } else {
  //     main.container.classList.remove("scrolled");
  //     main.header.classList.remove("scrolled");
  //     main.logoImg.classList.remove("scrolled");
  //   }
  // });

  // main.navItems.forEach((elem) => {
  //   elem[1].addEventListener("click", function () {
  //     main.navItems.forEach((item) => {
  //       item[1].classList.remove("active");
  //     });
  //     this.classList.add("active");
  //     main.menuBtn.classList.toggle("active");
  //     main.nav.classList.toggle("active");
  //     main.container.classList.toggle("active");
  //   });
  // });

  // window.addEventListener("scroll", function () {
  //   const mediaQuery = window.matchMedia("(max-width: 900px)");
  //   if (mediaQuery.matches) {
  //     // Get current scroll position
  //     let scrollY = window.pageYOffset;
  //     // Now we loop through sections to get height, top and ID values for each
  //     domElements.contentSections.forEach((section) => {
  //       section.classList.add("active");
  //       const sectionHeight = section.offsetHeight;
  //       const sectionTop = section.offsetTop - 100;
  //       const sectionId = section.getAttribute("id");

  //       if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  //         document
  //           .querySelector("nav ul a[href*=" + sectionId + "]")
  //           .classList.add("active");
  //       } else {
  //         document
  //           .querySelector("nav ul a[href*=" + sectionId + "]")
  //           .classList.remove("active");
  //       }
  //     });
  //   } else {
  //     // Get current scroll position
  //     let scrollX = window.pageXOffset;
  //     // Now we loop through sections to get height, top and ID values for each
  //     domElements.contentSections.forEach((section) => {
  //       const sectionWidth = section.offsetWidth;
  //       const sectionLeft = section.offsetLeft - 100;
  //       const sectionId = section.getAttribute("id");

  //       if (scrollX > sectionLeft && scrollX <= sectionLeft + sectionWidth) {
  //         document
  //           .querySelector("nav ul a[href*=" + sectionId + "]")
  //           .classList.add("active");
  //         section.classList.add("active");
  //       } else {
  //         document
  //           .querySelector("nav ul a[href*=" + sectionId + "]")
  //           .classList.remove("active");
  //         section.classList.remove("active");
  //       }
  //     });
  //   }
  // });
})();
