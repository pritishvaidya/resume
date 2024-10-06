import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import Document from './document'; // Make sure the path is correct

const App = () => {
  const handleDownload = () => {
    ReactPDF.pdf(<Document />).toBlob().then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'document.pdf';
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div>
      <h1>Download PDF Example</h1>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default App;
