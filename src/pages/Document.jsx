import React, { useState } from "react";
import "./Document.css";

function Document() {
  const [documentName, setDocumentName] = useState("");
  const [documents, setDocuments] = useState([]);

  const handleAddDocument = () => {
    if (documentName.trim() === "") {
      alert("Please enter document name");
      return;
    }

    setDocuments([...documents, documentName]);
    setDocumentName("");
  };

  const handleDelete = (index) => {
    const updatedDocuments = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocuments);
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
          documents.map((document, index) => (
            <div className="document-item" key={index}>
              <span>{document}</span>

              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Document;
