function toggleVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }
  
document.addEventListener("keydown", function(event){
    if(event.ctrlKey && event.key === "b") {
        window.location.href = "https://www.netflix.com/br/";
    }
    if (event.ctrlKey && event.key === "i") {
        window.open("https://ic.pics.livejournal.com/ameithyst/77051052/2090/2090_original.jpg");
    }
    if (event.ctrlKey && event.key === "m") {
        document.getElementById("message").focus();
    }
});