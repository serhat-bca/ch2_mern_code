import { useState } from "react";
import "./index.css";

const App = () => {
  const [newName, setNewName] = useState("");
  const [contacts, setContacts] = useState([
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Davis",
    "David Brown",
  ]);

  return (
    <div className="contacts-app">
      <h2>Add a New Contact</h2>
      <form>
        <input type="text" placeholder="Enter contact name" />
        <button type="submit">Add Contact</button>
      </form>
      <h2>Contact List</h2>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr className="green-row">
            <td>Sample Name</td>
          </tr>
          <tr className="green-row-dark">
            <td>Sample Name</td>
          </tr>
          <tr className="green-row">
            <td>Sample Name</td>
          </tr>
          <tr className="green-row-dark">
            <td>Sample Name</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
