import React from 'react';
import resumePdf from '../assets/resume.pdf'
import FileSaveIcon from '../assets/file-save.svg'

const DownloadButton = () => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = `${resumePdf}`; // Path to the PDF in the static folder
    link.download = 'PritishVaidyaResume.pdf'; // Specify the name for the downloaded file
    document.body.appendChild(link);
    link.click(); // Trigger the download
    link.remove(); // Clean up
  };

  return (
    <button
      onClick={downloadPDF}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <FileSaveIcon className="download-icon" />
    </button>
  );
};

export default DownloadButton;
