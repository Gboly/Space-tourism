// JavaScript source code
fetch("./starter-code/data.json")
    .then(response => response.json())
    .then(data => {                
        function $(n) {
            return document.querySelector(n);
        }
        function $All(n) {
            return document.querySelectorAll(n);
        }

        let preClickedName = "douglas-hurley";
        

        

       $(".crew-img").setAttribute("src", "./starter-code/" + data.crew[0].images.png);
       $(".crew-title").textContent = data.crew[0].role;
       $(".crew-name").textContent = data.crew[0].name;
       $(".crew-body").textContent = data.crew[0].bio;

        let currentName = $(".crew-name").textContent;

        let CrewSlideIndicator = $All(".crew-slide-indicator");
        for (i = 0; i < CrewSlideIndicator.length; i++) {
            CrewSlideIndicator[i].addEventListener("click", (e) => {
                let clickedName = e.srcElement.attributes[1].value;
                let realClickedName = clickedName.replace(/-/g," ")
                  data.crew.forEach(item => {
                    let jsonName = item.name                   
                    if (jsonName.toUpperCase() === realClickedName.toUpperCase()) {
                        

                            $(".crew-img").setAttribute("src", "./starter-code/" + item.images.png);
                            $(".crew-title").textContent = item.role;
                            $(".crew-name").textContent = item.name;
                            $(".crew-body").textContent = item.bio;
                        let newName = $(".crew-name").textContent;
                        if (currentName !== newName) {
                            $(".crew-content-container").classList.add("animation1")
                            setTimeout(() => { $(".crew-content-container").classList.remove("animation1") }, 500)

                            $(".crew-img").classList.add("animation2")
                            setTimeout(() => { $(".crew-img").classList.remove("animation2") }, 500)

                            currentName = newName;
                        }                        
                    }                 
                  })
                
                $("#" + preClickedName).classList.remove("crew-slide-active");
                setTimeout(() => { $("#" + clickedName).classList.add("crew-slide-active") }, 20);

                preClickedName = clickedName;
                
            })
        }


        let navLinks = $All(".nav-link")
        for (let j = 0; j < navLinks.length; j++) {
            if (j !== 2) {
                navLinks[j].addEventListener("mouseover", () => {
                    navLinks[j].classList.add("nav-link-hover");
                })
                navLinks[j].addEventListener("mouseout", () => {
                    navLinks[j].classList.remove("nav-link-hover");
                })
            }
        }



       
    })
    .catch(err => console.log(err));