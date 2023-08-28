import React from "react";
import dynamic from "next/dynamic";

export default function Reqeditor() {
  const QuillNoSSRWrapper = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });
  return (
    <div>
      <h5>Responsibilities:</h5>
      <QuillNoSSRWrapper theme="snow" style={{height:'150px'}}/>
      
    </div>
  );
}
