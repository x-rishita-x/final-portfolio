//list of all mouse events : https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
let resume_button= document.getElementById("btn-1")

// the first argument is the event which we want to listen and 
//the second argument is the function we want to operate when the event happens

resume_button.addEventListener("click", ()=>{
    // say if we wanted to change the html part of the code to 
    //something else then the code would have had been

    /*
    document.querySelector(".box").innerHTML=
    "<b>
        "any statement "
    </b>"
    */ 
    //window.location.href = 'https://www.overleaf.com/latex/templates/deedy-cv/bjryvfsjdyxz';
    let url = 'https://www.overleaf.com/latex/templates/deedy-cv/bjryvfsjdyxz';  // Replace with the actual URL

    // Open the URL in a new tab
    window.open(url, '_blank');

})

let github_button=document.getElementById("btn-2")

github_button.addEventListener("click", ()=>{
    //window.location.href="https://github.com/x-rishita-x/"
    let url = 'https://github.com/x-rishita-x/';  // Replace with the actual URL

    // Open the URL in a new tab
    window.open(url, '_blank');
})

let submit_button=document.getElementById("submit-btn")

submit_button.addEventListener("click", ()=>{
   console.log("the submit btn is clicked")
})

let about_btn = document.getElementById("about-btn");

about_btn.addEventListener("click", () => {
    // Select the third section by its ID
    let thirdSection = document.querySelector(".thirdSection")

    // Scroll to the third section
    thirdSection.scrollIntoView({ behavior: "smooth" });
});

let project_btn=document.getElementById("projects-btn")

project_btn.addEventListener("click", () => {
    // Select the third section by its ID
    let secondSection = document.querySelector(".secondSection")

    // Scroll to the third section
    secondSection.scrollIntoView({ behavior: "smooth" });
});

let contact_btn=document.getElementById("contact-btn")

contact_btn.addEventListener("click", () => {
    // Select the third section by its ID
    let footer_class = document.querySelector(".footer-class")

    // Scroll to the third section
    footer_class.scrollIntoView({ behavior: "smooth" });
});

let home_btn=document.getElementById("home-btn")

home_btn.addEventListener("click", () => {
    // Select the third section by its ID
    let firstSection = document.querySelector(".firstSection")

    // Scroll to the third section
    firstSection.scrollIntoView({ behavior: "smooth" });
});

