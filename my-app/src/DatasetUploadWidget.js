import React, { useState } from "react";

function DatasetUploadWidget({ onDatasetUpload }) {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    setUploadedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (uploadedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileContents = event.target.result;
        const rows = fileContents.split("\n");

        const data = rows.map((row) => {
          const [x, y] = row.split(",");
          return { x: parseFloat(x), y: parseFloat(y) };
        });

        onDatasetUpload(data);
      };

      reader.readAsText(uploadedFile);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload Dataset:
        <input type="file" accept=".csv" onChange={handleFileUpload} />
      </label>
      <button type="submit">Upload</button>
    </form>
  );
}

export default DatasetUploadWidget;