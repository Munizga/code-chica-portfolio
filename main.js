document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    var nameParagraph = document.getElementById("name");
    if (nameParagraph.innerHTML === "") {
        nameParagraph.innerHTML = "Gabrielle Muniz";
    } else {
        nameParagraph.innerHTML = "";
    }
    
}

function mySchool() {
    var schoolParagraph = document.getElementById("school");
    if (schoolParagraph.innerHTML === "") {
        schoolParagraph.innerHTML = "St. Dominic Savio Catholic High School, transferred into Smithville High School.";
    } else {
        schoolParagraph.innerHTML = "";
    }
    
}

function myCareer() {
    var careerParagraph = document.getElementById("career");
    if (careerParagraph.innerHTML === "") {
        careerParagraph.innerHTML = "Currently looking to go into computer engineering and attend college at UT.";
    } else {
        careerParagraph.innerHTML = "";
    }
    
}
function myHobbies() {
    var hobbiesParagraph = document.getElementById("hobbies");
    if (hobbiesParagraph.innerHTML === "") {
        hobbiesParagraph.innerHTML = "Reading, Making Costumes, Singing, Dancing, and Watching Anime.";
    } else {
        hobbiesParagraph.innerHTML = "";
    }
    
}