 import { useState } from "react"
 export default function Container() {
  const [s1, sets1] = useState(0)
  console.log(s1);


  if (s1 < 1) {
    const [s2, sets2] = useState(1)
    console.log(s2);
  }
  const [s3, sets3] = useState(2)
  console.log(s3);


    return(
      <div>
        <h1>La règle des hooks</h1>
        <button onClick={() => sets1(1) }>Change state</button>
      </div>
    )
  }
