fetch("https://apis.scrimba.com/jsonplaceholder/posts",{method:"GET"})
    .then(res => res.json())
    .then(data =>
        {let objArr = data.slice(0,5)
         console.log(objArr)   
        }
    )