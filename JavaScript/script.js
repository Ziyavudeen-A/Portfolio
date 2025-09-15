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



// let a=document.getElementById("form");
// a.addEventListener("submit",fromContact);

// fromContact(){

// }

// emailjs.send("service_32or4cj","template_43pdmhh",this,"8QcjdBao9kzL3QL7D")
// .then(()=>{
//     alert("Succesfull");
// })
// .catch(()=>{
//     error("Not succesfull");
// })
