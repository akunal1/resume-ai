import React from "react";

const FullPageIframe = () => {
  // Inline styles
  const fullStyle = {
    height: "100vh", // Use the viewport height to ensure full screen height
    width: "100vw", // Use the viewport width to ensure full screen width
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
  };

  const iframeStyle = {
    flexGrow: 1, // Make iframe grow to fill available space
    border: "none", // No border
  };

  return (
    <div style={fullStyle}>
      <iframe
        src="https://embedstreams.me/ipl/rajasthan-royals-vs-mumbai-indians-stream-2"
        style={iframeStyle}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        referrerPolicy="unsafe-url"
      ></iframe>
    </div>
  );
};

export default FullPageIframe;
