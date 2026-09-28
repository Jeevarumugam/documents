import React, { useEffect, useState } from "react";
import "./Document.css";

function Document() {
  const [documentName, setDocumentName] = useState("");
  const [documents, setDocuments] = useState([]);

  // Get documents
  const fetchDocuments = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users/documents");

      const data = await response.json();

      if (response.ok) {
        setDocuments(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Fetch documents error:", error);
      alert("Cannot connect to server");
    }
  };

  // Load documents when page opens
  useEffect(() => {
    fetchDocuments();
  }, []);

  // Add document
  const handleAddDocument = async () => {
    if (documentName.trim() === "") {
      alert("Please enter document name");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          documentName: documentName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Document added successfully");

        setDocumentName("");

        fetchDocuments();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Add document error:", error);
      alert("Cannot connect to server");
    }
  };

  // Delete document
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/documents/${id}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (response.ok) {
        alert("Document deleted successfully");

        fetchDocuments();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Delete document error:", error);
      alert("Cannot connect to server");
    }
  };

  return (
    <div className="document-page">
      <h1>Document Management</h1>

      <div className="document-form">
        <input
          type="text"
          placeholder="Enter document name"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
        />

        <button onClick={handleAddDocument}>Add Document</button>
      </div>

      <div className="document-list">
        <h2>Documents</h2>

        {documents.length === 0 ? (
          <p>No documents added yet.</p>
        ) : (
          documents.map((document) => (
            <div className="document-item" key={document._id}>
              <span>{document.documentName}</span>

              <button onClick={() => handleDelete(document._id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Document;
