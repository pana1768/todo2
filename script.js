let input = document.querySelector("input")
let ul = document.querySelector("ul")
let cross = document.querySelector("img")

input.addEventListener("keypress", function(event){
    if(event.key=="Enter"){
        let text = this.value
        if (text.length < 1){
            alert("Введите название дела, длинной более одного символа")
        }
        else{
            let li = document.createElement("li")
            let div = document.createElement("div")
            let div2 = document.createElement("div")
            let div3 = document.createElement("div")
            let h4 = document.createElement("h4")
            let p = document.createElement("p")
            let cross = document.createElement("img")

            cross.setAttribute("src", "close.png")

            p.innerText = "Задачи"
            h4.innerText = text

            div.classList.add("todo-item")
            div2.classList.add("todo-detail")
            div3.classList.add("todo-delete")

            div2.appendChild (h4)
            div2.appendChild(p)
            div3.appendChild(cross)
            div.appendChild(div2)
            div.appendChild(div3)
            li.appendChild(div)


            document.querySelector("ul").appendChild(li)
        }
    }
})

ul.addEventListener("click", function(event){
    if(event.target.tagName == "DIV"){
        event.target.parentElement.parentElement.classList.toggle("checked")
    }
})

ul.addEventListener("click", function(event){
    if(event.target.tagName == "IMG"){
        event.target.parentElement.parentElement.remove()
    }
})