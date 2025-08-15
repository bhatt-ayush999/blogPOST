fetch("https://apis.scrimba.com/jsonplaceholder/posts",{method:"GET"})
    .then(res => res.json())
    .then(data =>
        {let objArr = data.slice(0,5)
         let htmlEls = ""
         for(let posts of objArr) {
            htmlEls += `<h2>${posts.title}</h2>
                    <p>${posts.body}</p>
                    <hr/>`
         }  
         document.getElementById("blogs").innerHTML = htmlEls
        }
    )