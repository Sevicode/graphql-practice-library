import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBookMut] = useMutation(addBookMutation);
  const [newBook, setNewBook] = useState({
    name: "",
    genre: "",
    authorId: ""
  });

  const handleChange = e => { 
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

const displayAuthors = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>oops! something went wrong!</p>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const submitForm=(e)=>{
    e.preventDefault()
    console.log(newBook)
    addBookMut({
      variables: newBook 
    })
  }

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" name="genre" onChange={handleChange} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select name="authorId" onChange={handleChange}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>Add Book</button>
    </form>
  );
}

export default AddBook;
