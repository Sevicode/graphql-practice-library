import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getAuthorsQuery } from "../queries/queries";

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [name, setName] = useState("")
  const [genre, setGenre]=useState("")
  const [authorId, setAuthorId] = useState("")


  const submitForm=(e)=>{
    e.preventDefault()
    console.log(name, genre, authorId)
  }

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

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" name="genre" value={genre} onChange={e => setGenre(e.target.value)} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select name="authorId" value={authorId} onChange={e => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>Add Book</button>
    </form>
  );
}

export default AddBook;
