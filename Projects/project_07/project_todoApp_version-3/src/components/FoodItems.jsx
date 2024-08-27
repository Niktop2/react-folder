import { useState } from "react";
import Item from "./Item";


const FoodItems = ({foodItems}) => {

 let [activeItems, setActiveitems] = useState([]); 

 let onBuyButton = (item, event) => {
   let newItems = [...activeItems, item];
   setActiveitems(newItems);
 }

 return (

    <ul className="list-group">

       {foodItems.map(item => (

        <Item 
        key={item} 
        items={item}
        bought={activeItems.includes(item)}
        handleByButton={(event) => onBuyButton(item, event)}
        />

       ))}

    </ul>
  )
}

export default FoodItems;