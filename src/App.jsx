import { useState } from "react"
function App() {
  const [counter,setCounter]=useState(0);
 const [show,setShow]=useState(false);
 const {name,price,description}={name:'iphone 14',price:1200,description:'iphone 14 product'};
  return (
    <div className="w-50 m-auto">
     <h2>My counter:<span>{counter}</span></h2>
     <button className="btn btn-primary mt-2 d-block" onClick={()=>setCounter(counter+1)}>Increment</button>
     <button className='btn btn-danger my-2' onClick={()=>setShow(!show)}>show Product</button>
     <div style={{display:show==false?'none':'block'}}>
      <h2>Product Details</h2>
      <p><b>Name:</b>{name}</p>
      <p><b>Price:</b>${price}</p>
      <p><b>Description:</b>{description}</p>
     </div>
    </div>
  )
}

export default App
