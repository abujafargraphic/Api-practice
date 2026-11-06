 const postsContainer = document.querySelector('.posts-container');
const postForm = document.querySelector('.post-form');
const postTitle = document.querySelector('.post-title');
const postBody = document.querySelector('.post-body');
  

  postForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    try{
   const postData = {
    title: postTitle.value,
    body: postBody.value,
    userId: 1
};
 const newPost = await createPost(postData)
 const newPostHtml = `
    <article>
        <p>${newPost.title}</p>
        <p>${newPost.body}</p>
        <button class="delete-btn" data-id="${newPost.id}">Delete</button>
    </article>
`;

postsContainer.insertAdjacentHTML('afterbegin', newPostHtml);
postTitle.value = "";
postBody.value = "";
  }  catch (error) {
        console.log("Error:", error.message);
    }
});

async function createPost(postData) {
    const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    });
     if (!response.ok) {
    throw new Error("Failed to create post");
}
    const data = await response.json();
    console.log(data);
    return data;
}

  async function getPost(){
   try{  const response = await fetch("https://dummyjson.com/posts")
    if(!response.ok){
        throw new Error("something went to wrong")
     }
     const data = await response.json();
     console.log(data)
     const posts = data.posts
     console.log(posts)
     const postsHtml = posts.map(item => {
         return    `   <article>
                    <p>${item.title}</p>
                    <p>${item.body}</p>
                    <button class="delete-btn" data-id="${item.id}">Delete</button>

                </article>
                `
});
   postsContainer.innerHTML = postsHtml.join("")
 

   
} catch(error){
    console.log("Error", error.message)
}

  }
  getPost()


   postsContainer.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const button = event.target;
        const postId = button.dataset.id;

        try {
            await deletePost(postId);
            button.parentElement.remove();
        } catch (error) {
            console.log("Error:", error.message);
        }
    }
});

  async function deletePost(postId) {
    const response = await fetch(
        `https://dummyjson.com/posts/${postId}`,
        {
            method: "DELETE"
        }
    );

    if (!response.ok) {
        throw new Error("Failed to delete post");
    }

    const data = await response.json();
    return data;
}
 const profession = {
  profession: "Data Analyst"
}
async function patchProfession(){
    const response = await fetch("https://dummyjson.com/users/1", {
        method: "PATCH",
        headers: {
         "content-Type": "application/json"
        },
        body: JSON.stringify({
            company: {
                title: "Data Analyst"
            }
            })
    }); if(!response.ok){
        throw new Error ("result is not working")
    }
    const data = await response.json();
    console.log(data)

}
patchProfession()