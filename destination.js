// JavaScript source code
//window.addEventListener('DOMContentLoaded', (event) => {
    fetch('./starter-code/data.json')
        .then(response => response.json())
        .then(data => {
            /*const spaceObject = JSON.parse(data);*/
            /*console.log(data);*/
            
            let navLinks = document.querySelectorAll(".nav-link")
            let moonContentNav = document.querySelectorAll(".moon-content-nav");
            let preClickedSpaceObject = "moon";
            let moonNavId = "";

            function pageLoad() {
                let name = data.destinations[0].name;
                let capitalName = name.toUpperCase();

                document.querySelector(".moon-heading").textContent = capitalName;
                document.querySelector(".moon-img").setAttribute("src", "./starter-code/" + data.destinations[0].images.png);
                document.querySelector(".moon-description").textContent = data.destinations[0].description;
                document.querySelector(".moon-distance-body").textContent = data.destinations[0].distance;
                document.querySelector(".moon-time-body").textContent = data.destinations[0].travel;

                
            }    

           
            function spaceObjectPage() {
               
                for (i = 0; i < moonContentNav.length; i++) {
                    moonContentNav[i].addEventListener("click", e => {
                        /*console.log(e.srcElement.attributes[3].value)*/
                        let clickedSpaceObject = e.srcElement.attributes[1].value;
                        data.destinations.forEach((item) => {
                            let spaceObject = item.name;

                            if (spaceObject.toUpperCase() === clickedSpaceObject.toUpperCase()) {

                                document.querySelector(".moon-heading").textContent = spaceObject.toUpperCase();
                                document.querySelector(".moon-img").setAttribute("src", "./starter-code/" + item.images.png);
                                document.querySelector(".moon-description").textContent = item.description;
                                document.querySelector(".moon-distance-body").textContent = item.distance;
                                document.querySelector(".moon-time-body").textContent = item.travel;


                            }
                        })
                        document.querySelector("#" + preClickedSpaceObject).classList.remove("moon-nav-clicked");
                        setTimeout(() => { document.querySelector("#" + clickedSpaceObject).classList.add("moon-nav-clicked") }, 20);

                        


                        preClickedSpaceObject = clickedSpaceObject;

                    });

                    //moonContentNav[i].addEventListener("mouseover", e => {
                    //    if (e.srcElement.attributes[1].value !== preClickedSpaceObject) {
                    //        setTimeout(()=> document.querySelector("#" + e.srcElement.attributes[1].value).classList.add("moon-nav-hover"),2000)
                    //        /*console.log(e.srcElement.attributes[1].value);*/
                    //    }
                    //})
                    //moonContentNav[i].addEventListener("mouseout", f => {
                    //    if (f.srcElement.attributes[1].value !== preClickedSpaceObject) {
                    //        setTimeout(() => document.querySelector("#" + f.srcElement.attributes[1].value).classList.remove("moon-nav-hover"),2000) 
                    //            }
                    //})
                }

               
                





                
                for (let j = 0; j < navLinks.length; j++) {
                    if (j !== 1) {
                        navLinks[j].addEventListener("mouseover", () => {
                            navLinks[j].classList.add("nav-link-hover");
                        })
                        navLinks[j].addEventListener("mouseout", () => {
                            navLinks[j].classList.remove("nav-link-hover");
                        })
                    }

                    // moonNavId = moonContentNav[j].getAttribute("id")
                    //if (moonNavId !== preClickedSpaceObject) {
                    //    document.querySelector("moonNavId").addEventListener("mouseover", () => {
                    //        document.querySelector("moonNavId").classList.add("moon-nav-hover");
                    //    })
                    //    document.querySelector("moonNavId").addEventListener("mouseout", () => {
                    //        document.querySelector("moonNavId").classList.remove("moon-nav-hover")
                    //    })
                    //}
                }
            }

            
             
            
           
            /*document.querySelector("#" + clickedSpaceObject).classList.add("moon-nav-clicked")*/

            
            //document.querySelector(".crew-img").setAttribute("src", "./starter-code/assets/crew/image-douglas-hurley.png");
            //console.log(data.crew[0].images.png);
            
           






            pageLoad();
            spaceObjectPage();
            
            

        })
        .catch(error => console.log(error));
//})








