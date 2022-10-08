const sectionone=document.querySelector(".sectionone")
const nav=document.querySelector(".nav")
const logo=document.querySelector(".logo")
const introText=document.querySelector(".introText")
const picture=document.querySelector(".picture")
const sections=document.querySelectorAll(".section")
const homebutton=document.getElementById("homebutton")
const skillbutton=document.getElementById("skillsbutton")
const projectsbutton=document.getElementById("projectsbutton")
const contactbutton=document.getElementById("contactbutton")
const skillcards=document.querySelectorAll(".skillcard")
const about=document.querySelector(".coloredcontainer")
const options={
    threshold:1,
    root:null,
    rootMargin:"0px "
}

const observeSectionOne=new IntersectionObserver(function (entry) {
    entry.forEach(entry => {
        if (!entry.isIntersecting) {
           nav.classList.add("changeNav")
        }
        else{
           nav.classList.remove("changeNav")


        }

    });
},options)
observeSectionOne.observe(sectionone)

//logo intersection observer
// const logooptions={
//     threshold:0,
//     root:null,
//     rootMargin:"-223px"
// }
// const introTextObserver=new IntersectionObserver(function (entry) {
//     entry.forEach(entry => {
//         if (!entry.isIntersecting) {
//            logo.classList.add("hideLogo")
//            console.log(entry)
//         }
//         else{
//             logo.classList.remove("hideLogo")
//             console.log(entry)


//         }
//     });
// },logooptions)

// introTextObserver.observe(introText)
//observer section three
// const options3={
//     threshold:1,
//     root:null,

// }
// const observeSections=new IntersectionObserver((entry)=>{
//     entry.forEach((entry) => {
//         if (entry.isIntersecting) {
//            if (entry.target.id=="sectionone") {
//             homebutton.classList.add("active")
            
//         }else{
//             homebutton.classList.remove("active")

//         }
//         if (entry.target.id=="sectiontwo") {
//             skillbutton.classList.add("active")
//         }else{
//             skillbutton.classList.remove("active")


//         }
//         if (entry.target.id=="sectionthree") {
//             projectsbutton.classList.add("active")
//          }else{
//             projectsbutton.classList.remove("active")

//         }
//         if (entry.target.id=="sectionfour") {
//             contactbutton.classList.add("active")
//         }else{
//             contactbutton.classList.remove("active")

//         }
        
//     }
       
//     });
// },options3)

// sections.forEach((section)=>{
//     observeSections.observe(section)
// })

const cardOptions={
    threshold:0.6,
    rootMargin:"0px",
    root:null,
}

const cardObserver=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add("showskillcard")
        }
    })
        

} ,cardOptions)



skillcards.forEach(
    (skillcard)=>{
        cardObserver.observe(skillcard)
    })

//about intersetion observer

const aboutOptions={
    threshold:0.4,
    rootMargin:"0px",
    root:null,
}

const aboutObserver=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add("about")
        }
    })
        

} ,aboutOptions)




aboutObserver.observe(about)
   