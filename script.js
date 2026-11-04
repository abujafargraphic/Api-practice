 const postsContainer = document.querySelector('.posts-container');
const postForm = document.querySelector('.post-form');
const postTitle = document.querySelector('.post-title');
const postBody = document.querySelector('.post-body');

  postForm.addEventListener('submit', async (event) => {
   event.preventDefault();
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
    </article>
`;

postsContainer.insertAdjacentHTML('afterbegin', newPostHtml);
postTitle.value = "";
postBody.value = "";
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
    const response = await fetch("https://dummyjson.com/posts")
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

                </article>
                `
});
   postsContainer.innerHTML = postsHtml.join("")
   console.log(postsContainer)
  }
  getPost()