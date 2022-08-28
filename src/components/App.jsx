import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleChange(event) {
    const { value, name } = event.target;
    setContact(function (previousValue) {
      if (name === "fName") {
        return {
          fName: value,
          lName: previousValue.lName,
          email: previousValue.email
        };
      } else if (name === "lName") {
        return {
          fName: previousValue.fName,
          lName: value,
          email: previousValue.email
        };
      } else {
        return {
          fName: previousValue.fName,
          lName: previousValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
