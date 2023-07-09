using {cap.bookshop.typescript as my} from '../db/schema';

service CatalogService @(path:'/odata') { 

  @readonly
  entity Book as projection on my.Book {
    * , author.name as author
  } excluding {
    createdBy,
    modifiedBy
  };

  @requires: 'authenticated-user'
  action submitOrder(book : Book:ID, amount : Integer);
}

service demoService @(path:'/demo') {

  entity Author as projection on my.Author;

  @requires: 'authenticated-user'
  action likeAuthor(author : Author:ID);
}