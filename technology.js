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

        let preClickedName = "launch-vehicle";


        $(".technology-img").setAttribute("src","./starter-code/" + data.technology[0].images.portrait);
        $(".technology-img").classList.add("animation3");
        setTimeout(() => { $(".technology-img").classList.remove("animation3") }, 1500)
        $(".technology-name").textContent = data.technology[0].name;
        $(".technology-body").textContent = data.technology[0].description;
        $(".technology-content").classList.add("animation4");
        setTimeout(() => { $(".technology-content").classList.remove("animation4") }, 1500)
        let currentName = $(".technology-name").textContent;


        
       


      
        let technologySlideIndicator = $All(".technology-slide-indicator")
        for (i = 0; i < technologySlideIndicator.length; i++) {
            technologySlideIndicator[i].addEventListener("click", e => {
                let clickedName = e.srcElement.attributes[1].value;
                let realClickedName = clickedName.replace(/-/g, " ")

                data.technology.forEach(item => {
                    let jsonName = item.name;                    

                    if (jsonName.toUpperCase() === realClickedName.toUpperCase()) {
                        $(".technology-img").setAttribute("src", "./starter-code/" + item.images.portrait);
                        $(".technology-name").textContent = item.name;
                        $(".technology-body").textContent = item.description;


                        let newName = $(".technology-name").textContent;
                        if (currentName !== newName) {
                            $(".technology-content").classList.add("animation4")
                            setTimeout(() => { $(".technology-content").classList.remove("animation4") }, 1500)

                            $(".technology-img").classList.add("animation3")
                            setTimeout(() => { $(".technology-img").classList.remove("animation3") }, 1500)

                            currentName = newName;
                        }
                    }
                })

                $("#" + preClickedName).classList.remove("technology-slide-active");
                setTimeout(() => { $("#" + clickedName).classList.add("technology-slide-active") }, 20);

                preClickedName = clickedName;


            })
                                  
        }

        let navLinks = $All(".nav-link")
        for ( let j = 0; j < navLinks.length; j++) {
            if (j !== 3) {
                navLinks[j].addEventListener("mouseover", () => {
                    navLinks[j].classList.add("nav-link-hover");
                })
                navLinks[j].addEventListener("mouseout", () => {
                    navLinks[j].classList.remove("nav-link-hover");
                })
            }
        }





    })
    .catch(err => { console.log("error") });