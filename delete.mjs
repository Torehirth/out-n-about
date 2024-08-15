// import { allPostsURL } from "../data/constants.mjs";
// import { getQueryParameter } from "../helper/getQueryParameter.mjs";
// import { message } from "../components/message.mjs";

// const postWrapper = document.querySelector("#post-wrapper");

// export async function fetchPost(container) {
//   const id = getQueryParameter("id");
//   if (!id) {
//     // document.location.href= "/";
//   }

//   const postURL = `${allPostsURL}/${id}`;

//   try {
//     const response = await fetch(postURL);

//     if (!response.ok) {
//       throw new Error("There was an error fetching the post");
//     }
//     const post = await response.json();

//     return post;
//   } catch (error) {
//     console.error(error);
//     container.innerHTML = message("error", "Something went wrong displaying the post.. Try again shortly!");
//   }
// }

// postWrapper.innerHTML = "";

// function displayPost(post, container) {
//   console.log(post);

//   container.innerHTML += `
//                              <div>
//                                 <a href="#" class="card-container">
//                                  <img src="${post[0].yoast_head_json.og_image[0].url}" alt="" class="card-img" />
//                                   <div class="card-copy">]
//                                     <h3>${post[0].title.rendered}</h3>
//                                     <p>${post[0].excerpt.rendered}</p>
//                                   </div>
//                                 </a>
//                               </div>
//                             `;
// }

// async function handlePost(container) {
//   try {
//     const post = await fetchPost(container);
//     displayPost(post, container);
//   } catch (error) {
//     console.error(error);
//     container.innerHTML = message("error", "Something went wrong displaying the posts.. Try again shortly!");
//   }
// }

// handlePost(postWrapper);
