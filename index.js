function createPost() {
  let author = document.getElementById('postAuthor').value;
  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;

  let postTemplate = document.getElementById('post-template').innerHTML;
  let pageTemplate = document.getElementById('page-template').innerHTML;

  let postTemplateFn = _.template(postTemplate);
  let pageTemplateFn = _.template(pageTemplate);
}

function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;

  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
  //let commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  let commentsTemplate = document.getElementById('comments-template').innerHTML;
  let commentTemplate = document.getElementById('comment-template').innerHTML;

  //create template function
  let templateFn = _.template(commentsTemplate);

  let commentsDiv = document.getElementById('comments');

  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ comment: comment, commenter: commenter });

  //append rather than replace!
  

}

// describe('templates', () => {
//   it('has a comments template', () => {
//     var commentsTemplate = document.getElementById("comments-template");
//     expect(commentsTemplate).toExist("Must have a lodash template with an id of 'comments-template'");
//     expect(commentsTemplate.type).toBe("text/x-lodash-template", "Must be of type text/x-lodash-template");
//     expect(commentsTemplate.innerHTML).toMatch(/div id="comments"/, "Template must have a div with an id of 'comments'");
//     expect(commentsTemplate.innerHTML).toMatch(/form onsubmit="postComment()/, "Template must include a form to post comments");
//   })
//   it('has a comment template', () => {
//     var commentTemplate = document.getElementById("comment-template");
//     expect(commentTemplate).toExist("Must have a lodash template with an id of 'comment-template'");
//     expect(commentTemplate.type).toBe("text/x-lodash-template", "Must be of type text/x-lodash-template");
//     expect(commentTemplate.innerHTML).toMatch(/footer/, "Template must have a <footer> element");
//   })
//   it('has a page template', () => {
//     var pageTemplate = document.getElementById("page-template");
//     expect(pageTemplate).toExist("Must have a lodash template with an id of 'page-template'");
//     expect(pageTemplate.type).toBe("text/x-lodash-template", "Must be of type text/x-lodash-template");
//     expect(pageTemplate.innerHTML).toMatch(/div id="sidebar"/, "Template must have a div with an id of 'sidebar'");
//     expect(pageTemplate.innerHTML).toMatch(/div id="post"/, "Template must have a div with an id of 'post'");
//   })
//   it('has a post template', () => {
//     var postTemplate = document.getElementById("post-template");
//     expect(postTemplate).toExist("Must have a lodash template with an id of 'post-template'");
//     expect(postTemplate.type).toBe("text/x-lodash-template", "Must be of type text/x-lodash-template");
//     expect(postTemplate.innerHTML).toMatch(/footer/, "Template must have a <footer> element");
//     expect(postTemplate.innerHTML).toMatch(/header/, "Template must have a <header> element");
//     expect(postTemplate.innerHTML).toMatch(/article/, "Template must have an <article> element");
//   })
// })
// })
