import React from "react";
import { useQuery } from "@apollo/client";
import {getBookQuery} from "../queries/queries"



function BookDetails({ bookId }) {
const {loading, error, data} = useQuery(getBookQuery, {
    variables: { id: bookId }
    });
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>
    const {book} = data;

  return (
    <>
    <div id="book">
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All books by this author:</p>
        <ul>
            {book.author.books.map(book => <li key={book.id}>{book.name}</li>)}
        </ul>
        
    </div>
     
      
    </>
  );
}

export default BookDetails;
