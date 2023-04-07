import { useEffect, useState } from 'react';
import './App.css';
import {Card, CardActionArea, CardContent, Typography} from "@mui/material"
import axios from "axios"

function App() {
  const [products, setProducts] = useState([])

  
  useEffect(()=> {
    
    getproducts()
    
      
      
    });

  const getproducts = async() => {
    const res = await axios.get(`http://localhost:3001/api/product/getProduct`);
     setProducts(res.data)
   }

  return (
  <>
  <h1>Products</h1>
  <div className='container'>
                <div className="row">
  {products.map((product) => {
    return (
    <Card key={product.id} className='card col-7 col-sm-4 col-md-4 col-lg-4 bg-primary my-1 py-1 mx-1 ' >
    <CardActionArea>
          <img src={`http://localhost:3001/${product.image}`}/> 
         <CardContent>
         <Typography gutterBottom variant="h5" component="div" className='title'>
            {product.title.toUpperCase()}
         </Typography>
         <Typography variant='body2'> RS {product.price}</Typography>        
      </CardContent>
      </CardActionArea>
   </Card>
    )
  })}
  </div>
  </div>
  </>
  );
}

export default App;
