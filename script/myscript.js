//Toggle between darkmode and light mode
function myLightFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
}

//Responsive Topnav
function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".topnav .nav_link");
    const divs = document.querySelectorAll("main > div");
    const defaultActiveDiv = document.querySelector("#about_div");

    // Function to hide all divs
    const hideAllDivs = () => {
        divs.forEach(div => {
            div.style.display = "none";
        });
    };

    // Function to show a specific div
    const showDiv = (div) => {
        div.style.display = "block";
    };

    // Initially hide all divs except the about section
    hideAllDivs();
    showDiv(defaultActiveDiv);
    defaultActiveDiv.classList.add("active");

    // Event listener for each navigation link
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Get the target div ID from the link's href attribute
            const targetDivID = link.getAttribute("href").substring(1);
            const targetDiv = document.getElementById(targetDivID);

            if (targetDiv) {
                // Hide all divs
                hideAllDivs();

                // Remove the "active" class from the currently active div
                const currentActiveDiv = document.querySelector(".active");
                if (currentActiveDiv) {
                    currentActiveDiv.classList.remove("active");
                }

                // Show the clicked div and add the "active" class
                showDiv(targetDiv);
                targetDiv.classList.add("active");
            }
        });
    });
});

