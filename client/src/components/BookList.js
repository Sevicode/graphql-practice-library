import React, {useState} from "react";
import { useQuery } from "@apollo/client";
import {getBooksQuery} from "../queries/queries"
import BookDetails from "./BookDetails";



function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState(null);

  

  const displayBooks = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>oops! Something went wrong!</p>;
    } else {
      return data.books.map((book) => {
        return <li key={book.id} onClick={(e) => {setSelected(book.id)}}>{book.name}</li>;
      });
    }
  };

 

  return (
    <>
      <ul id="book-list">{displayBooks()}</ul>
      {selected ? <BookDetails bookId={selected} />:<div>No book selected</div>}
      
    </>
  );
}

export default BookList;
