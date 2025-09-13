let downloadResume=document.getElementById("but2");
downloadResume.addEventListener("click",resume);
function resume(){
    let link=document.createElement('a');
    link.href="../assets/ResumeforZiya.pdf"
    link.download="Ziyavudeen_A";
    link.click()
};
// let hireMe=document.getElementById('but1');
// hireMe.addEventListener('click',)