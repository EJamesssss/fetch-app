import React, { useState } from "react";

const Form = ({ userId, editTitle, editBody }) => {
  const [title, setTitle] = useState(editTitle);
  const [body, setBody] = useState(editBody);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { userId, title, body };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
      alert("Form Submitted");
      return response.json();
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const endPoint = "https://jsonplaceholder.typicode.com/posts/" + userId;
    const data = { userId, title, body };

    fetch(endPoint, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      console.log(response);
      alert("Successfully updated!");
      return response.json();
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const endPoint = "https://jsonplaceholder.typicode.com/posts/" + userId;

    fetch(endPoint, {
      method: "DELETE",
    });
    alert("Successfully Deleted");
  };

  return (
    <div>
      <form>
        <h3>Create Post</h3>
        <div>userId {userId}</div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Input Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            onChange={(e) => setBody(e.target.value)}
            placeholder="Input Body"
            value={body}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
