using {cap.bookshop.typescript as my} from '../db/schema';

service CatalogService { 

  @readonly
  entity Author as projection on my.Author

  @requires: 'authenticated-user'
  action likeAuthor(author : my.Author:ID);


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

/*
service demoService {

  entity Author as projection on my.Author excluding {
    createdBy,
    modifiedBy
  };

  @requires_ : 'authenticated-user'
  action likeAuthor(author : Author:ID);
}
*/