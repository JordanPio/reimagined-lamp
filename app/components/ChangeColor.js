import React, { useEffect, useState } from "react";

function ChangeColor() {
  const [color, setColor] = useState("Black");
  const [text, setText] = useState("");
  return (
    <div className="input-group">
      <h3 className="mb-5" style={{color}}>Please Change my Color =D, actual = {color}</h3>
      <input placeholder="Type a Color" type="text" value={text} onChange={e => setText(e.target.value)} className="input "></input>
      <button className="btn btn-primary ml-3" onClick={()=> setColor(text)}>change</button>

    </div>
  );
}

export default ChangeColor;
