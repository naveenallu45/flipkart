import { products } from "./data.js";
import product from "./productshema.js";


const DefaultData = async () =>{
    try {
        await product.insertMany(products);
       
         console.log(`data imported`);
    }catch(error) {
    console.log(`error while fetching data`,error.message);
    }
}

export default DefaultData;

