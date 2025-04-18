// contents of plugin.jsx
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Builder } from '@builder.io/react';

function SeoTitleInput(props) {
  const [text, setText] = useState("");

  const getStyleByLength = (length) => {
    if (length > 50) {
      return {
        color: "#f00000", // red-700
        backgroundColor: "#fca5a5", // red-200
      };
    } else if (length > 20) {
      return {
        color: "#408500", // green-700
        backgroundColor: "#c2f28c", // green-200
      };
    } else {
      return {
        color: "#000C2C", // text-primary
        backgroundColor: "#fafafb", // midnight-50
      };
    }
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  const { color, backgroundColor } = getStyleByLength(text.length);

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={onChange}
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

      <p style={{ paddingLeft: "10px" }}>
        Your text length is <span style={{ color }}>{text.length}</span>{" "}
        characters.
      </p>
    </>
  );
}

Builder.registerEditor({
    name: 'MyText',
    component: SeoTitleInput
});