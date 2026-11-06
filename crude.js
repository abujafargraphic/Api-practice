

async function getUser(){
    try{ 
        const response = await fetch("https://dummyjson.com/users/1")

    if(!response.ok){
        throw new Error("something went to wrong")
    }

    const data = await  response.json();
    console.log(data)

    }  catch(error){
      console.log(error)
    }
}
getUser()

async function createPosts(){
  try{const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers:{"content-Type": "application/json"},
        body: JSON.stringify({
    title: "Learning JavaScript APIs",
    body: "I am practising POST requests.",
    userId: 1
     })
    }) ; if(!response.ok){
        throw new Error ("something went to wrong")
    } 
    const data = await response.json()
    console.log(data)
} catch(error){
    console.log(error)
}

}
createPosts()

async function updatePosts(){
  try{const response = await fetch("https://dummyjson.com/posts/1", {
        method: "PUT",
        headers:{"content-Type": "application/json"},
        body: JSON.stringify({
    title: "Mastering JavaScript APIs",
    body: "I am becoming a better developer.",
    userId: 1
})
    }) ; if(!response.ok){
        throw new Error ("something went to wrong")
    } 
    const data = await response.json()
    console.log(data)
} catch(error){
    console.log(error)
}

}
updatePosts()
async function deletePosts(){
   try{  const response = await fetch("https://dummyjson.com/posts/1", { 
           method: "DELETE"
        }
    );
    if(!response.ok){
        throw new Error ("something went to wrong")
    }
    const data = await response.json()
    console.log(data)
} catch(error){
    console.log(error)
}
}
deletePosts()