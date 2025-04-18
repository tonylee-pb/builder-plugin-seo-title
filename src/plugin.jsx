/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import { Builder } from '@builder.io/react';

function SeoTitleInput(props) {
  const [text, setText] = useState(props.value || '');

  const getStyleByLength = (length) => {
    if (length > 60) {
      return {
        color: "#f00000",
        backgroundColor: "#fca5a5",
      };
    } else if (length >= 50) {
      return {
        color: "#408500",
        backgroundColor: "#c2f28c",
      };
    } else {
      return {
        color: "#000C2C",
        backgroundColor: "#fafafb",
      };
    }
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setText(newValue);
    props.onChange?.(newValue);
  };

  const { color, backgroundColor } = getStyleByLength(text.length);

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        style={{
          width: "100%",
          height: "50px",
          fontSize: "16px",
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          backgroundColor,
          color,
        }}
        placeholder="Type here..."
      />
      <p style={{ paddingLeft: "10px", fontSize: "14px" }}>
        Your title length is <span style={{ color }}>{text.length}</span> characters.
      </p>
    </>
  );
}

Builder.registerEditor({
  name: 'SEO Title Field',
  component: SeoTitleInput
});
