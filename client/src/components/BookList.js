import React from "react";
import { gql, useQuery } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const displayBook = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>oops! Something went wrong!</p>;
    } else {
      return data.books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  };

  return (
    <>
      <ul>{displayBook()}</ul>
    </>
  );
}

export default BookList;
