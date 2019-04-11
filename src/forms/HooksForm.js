import React, { useState } from 'react';

const HooksForm = () => {
const [text1, setText1] = useState()  
const [text2, setText2] = useState()
  return (
    <>
      <form>
        <input type="text" onChange={(event) => setText1(event.target.value)} placeholder="Text 1"/>
        <input type="text" onChange={(event) => setText2(event.target.value)} placeholder="Text 2"/>
      </form>
    </>
  );
}
export default HooksForm