import { useState } from "react";

function ChildProductInfo(props){
  
  const [name, setname] = useState(props.name)
  const [price, setPrice] = useState(props.price)
  const [quantity, setQuantity] = useState(props.quantity)

  console.log(props)
  return <div>
      <div style={{border: '1px solid black'}}>
        {name} {price} {quantity}
      </div>
    </div>


}

export default ChildProductInfo