// Putting the "books" data in the IIFE makes sense but this is neater
var books = {
  "book1" : {
    "title": "Object-Oriented Javascript",
    "author": "Stoyan Stefanov",
    "image": "images/ooj.jpg",
    "amazonPage": "http://www.amazon.com/gp/product/1849693129/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1849693129&linkCode=as2&tag=kaidez-20&linkId=CK7X5SMYEHL3BMEQ"
  },
  "book2" : {
    "title": "Effective Javascript",
    "author": "David Herman",
    "image": "images/effectivejs.jpg",
    "amazonPage": "http://www.amazon.com/gp/product/0321812182/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0321812182&linkCode=as2&tag=kaidez-20&linkId=KC4WGKUBOQWXNFBA"
  },
  "book3" : {
    "title": "JavaScript: The Good Parts",
    "author": "Douglas Crockford",
    "image": "images/goodparts.jpg",
    "amazonPage": "http://www.amazon.com/gp/product/0596517742/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0596517742&linkCode=as2&tag=kaidez-20&linkId=DMIEK65EIJ33NXHM"
  },
  "book4" : {
    "title": "Eloquent Javascript",
    "author": "Marijn Haverbeke",
    "image": "images/eloquentjavascript.jpg",
    "amazonPage": "http://www.amazon.com/gp/product/1593275846/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1593275846&linkCode=as2&tag=kaidez-20&linkId=3EF3Y6ZCF3VNMI2N"
  }
};

(function(){

  var template = document.querySelector('#singleBook'),
    templateContent = template.content,
    host = document.querySelector("#allBooks"),
    root = host.createShadowRoot();

  for (key in books) {
    var title = books[key].title,
      author = books[key].author,
      image = books[key].image,
      amazonPage = books[key].amazonPage;

    // Add the image to the src in <img> tag in <template>
    templateContent.querySelector('img').src = image;

    templateContent.querySelector('img').alt 
    = templateContent.querySelector('#bookTitle').innerHTML
    = title;

    templateContent.querySelector('#bookAuthor').innerHTML = author;
    templateContent.querySelector('#btnPurchase').href = amazonPage;
    root.appendChild(document.importNode(templateContent, true));
  }

})();