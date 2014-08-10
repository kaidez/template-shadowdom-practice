var template = document.querySelector('#singleBook'), // Get <template>
    content = template.content, // Shorthand name for template content
    section = document.querySelector("#allBooks");

function buildBook(img, copy) {
  
  var clone;

  // Add the image to the src in <img> tag in <template>
  content.querySelector('img').src = img;
  content.querySelector('img').alt = copy;
  content.querySelector('#bookTitle').innerHTML = copy;
  clone = document.importNode(content, true);
  section.appendChild(clone);
}



buildBook("images/ooj.jpg", "Object-Oriented Javascript");
buildBook("images/ooj.jpg", "Object-Oriented Javascript");