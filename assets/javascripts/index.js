const tabBtns = document.querySelectorAll(".btn")
const tabContainer = document.querySelector(".tab-container")
const tabContents = document.querySelectorAll(".tab-content .content")


tabContainer.addEventListener("click", (e)=>{
    const id = e.target.dataset.id
    if(id){
        // remove active from other buttons
        tabBtns.forEach((tabBtn)=>{
            tabBtn.classList.remove("active")
            e.target.classList.add("active")
        })

        //hide other content
        tabContents.forEach((tabContent)=>{
            tabContent.classList.remove("active")
        })
        const element = document.getElementById(id)
        element.classList.add("active")
    }
})