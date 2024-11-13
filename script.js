const namedashElements = document.querySelectorAll(".namedash");
const arrow = document.querySelector(".arrow");

arrow.addEventListener("click", () => {
   
    if (window.innerWidth > 480) {
        namedashElements.forEach(namedash => {
            namedash.style.display = namedash.style.display === "none" ? "block" : "none";
        });

        const header = document.querySelector(".header");
        const container = document.querySelector(".container");
        const dashboardItems = document.querySelectorAll(".dashboard-item");

        if (header.style.flexDirection === "column") {
            header.style.flexDirection = "row";
            header.style.gap = "193px";
            container.style.width = "20%";
            dashboardItems.forEach(dash => {
                dash.style.width = "100%";
            });
            arrow.style.transform = "rotate(180deg)";
        } else {
            header.style.flexDirection = "column";
            header.style.gap = "5px";
            container.style.width = "8%";
            dashboardItems.forEach(dash => {
                dash.style.width = "20%";
            });
            arrow.style.transform = "rotate(0deg)";
        }
    }


});
