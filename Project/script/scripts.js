function toggleMod() {
    const html = document.documentElement
    html.classList.toggle("light")
    const img = document.querySelector(".logo")
    
    if (html.classList.contains("light")) {
        // se tiver dark mode, adicionar a imagem a logo escura
        img.setAttribute("src", "image/logoLight.png")
        
      } else {
        img.setAttribute("src", "image/logoDark.svg")
        
      }
}
const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()
    function executar(){
        const itensBar = document.getElementById("itensBar")
        const checkBox = document.createElement('input')
        checkBox.setAttribute("type", "checkbox")
        let new_element = document.createElement('div')
        const text = document.createElement('span')
        text.textContent = itensBar.value
        const trashImg = document.createElement('img')
        const buttonTrash = document.createElement('button')
        buttonTrash.appendChild(trashImg)
        const leftContent = document.createElement('div')
        leftContent.appendChild(checkBox)
        leftContent.appendChild(text)
        leftContent.className = "leftContent"
        new_element.className = "elementList"
        buttonTrash.className = "removeButton"
        new_element.appendChild(leftContent)
        new_element.appendChild(buttonTrash)        
        let element = document.querySelector('.contentBox')
        element.appendChild(new_element)
        console.log(new_element)
        console.log(trashImg)
        itensBar.value = ""
    }
    executar()
    const listItem = document.querySelectorAll(".elementList")
    
    listItem.forEach((item) => {
        const itemIsChecked = item.childNodes[0].childNodes[0]
        const contentSpan = item.childNodes[0].childNodes[1]
        itemIsChecked.addEventListener("change", (event) => {
            if(event.target.checked){
                contentSpan.classList.add("checkedItem")
                return
            }
            contentSpan.classList.remove("checkedItem")
        })
        
        const trashButton = item.childNodes[1]
        trashButton.addEventListener("click", (event) => {
            item.remove()
            const errorAlert = document.querySelector(".errorMessage")
            errorAlert.classList.add("active")
            setTimeout(() => {
                errorAlert.classList.remove("active")
            }, 3000)
                }
            )
        }
    )

}


