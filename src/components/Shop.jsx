import React, { useEffect, useState } from "react";

export default function Shop() {
  const [products, setProducts] = useState();
  const [show, setShow] = useState(false);
  const [inp, setInp]= useState('')
  
  // https://fakestoreapi.com/products
  useEffect(() => {
    fetch(inp)
    .then((res) => res.json())
    .then((data) => setProducts(data));
    setShow(true);
  });

  const items = products?.map((e, index) => (
    <div class="card col-4 card-css" key={index}>
      <img class="card-img-top img-css" src={e.image} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{e.title.slice(0, 20)}...</h5>
        <p class="card-text">{e.description.slice(0, 30)}...</p>
      </div>
    </div>
  ));

  return (
    <>
        <div className="inp">
        <label>enter your URL: </label>
        <input type="text"  onChange={(e)=>setInp(e.target.value)}/>
        </div>
      <div className="container row">
        {show == true ? items : "your url is wrong"}
      </div>
    </>
  );
}
