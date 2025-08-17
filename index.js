let objArr = []

function renderPost() {
    let htmlEls = ""
         for(let posts of objArr) {
            htmlEls += `<h2>${posts.title}</h2>
                    <p>${posts.body}</p>
                    <hr/>`
         }  
         document.getElementById("blogs").innerHTML = htmlEls
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts",{method:"GET"})
    .then(res => res.json())
    .then(data =>
        {objArr = data.slice(0,5)
         renderPost()
        }
    )

const form = document.getElementById("form")
    
form.addEventListener("submit",function(event){
    event.preventDefault()
    let blogTitle = document.getElementById("postTitle").value
    let blogBody = document.getElementById("postBody").value
    let blog = {
        title : blogTitle,
        body: blogBody
    }

    
    fetch("https://apis.scrimba.com/jsonplaceholder/posts",{method:"POST",
     body : JSON.stringify(blog),
     headers : {
        "content-type": "application/json"
     }
    })
    .then(res => res.json())
    .then(data => console.log(data))
})    

