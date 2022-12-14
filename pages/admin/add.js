import React, { useState } from 'react'
import { Grid,Stack,TextField,Button, } from "@mui/material";
import BaseCard from '../../src/components/baseCard/BaseCard';
import FullLayout from "../../src/layouts/FullLayout";
import theme from "../../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const [img, setImg] = useState('');
  const[title,setTitle]=useState('');
  const[slug,setSlug]=useState('')
  const[desc,setDesc]=useState('')
  const[price,setPrice]=useState('')
  const[size,setSize]=useState('')
  const[color,setColor]=useState('')
  const[availableQty,setAvailableQty]=useState('')
  const[category,setCategory]=useState('')


  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const data = {title,slug,desc,img,category,size,color,price,availableQty}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    if(res.success){
      toast.success("Product added succefully", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      
    }
    else{
      toast.error(res.error, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  const onChange = (e)=>{
    if (e.target.name == "title") {
      setTitle(e.target.value);
    }else if (e.target.name == "price") {
      setPrice(e.target.value);
    }else if (e.target.name == "size") {
      setSize(e.target.value);
    }else if (e.target.name == "email") {
      setEmail(e.target.value);
    }else if (e.target.name == "availableQty") {
      setAvailableQty(e.target.value);
    }else if (e.target.name == "color") {
      setColor(e.target.value);
    }else if (e.target.name == "slug") {
      setSlug(e.target.value);
    }else if (e.target.name == "desc") {
      setDesc(e.target.value);
    }else if (e.target.name == "category") {
      setCategory(e.target.value);
    }else if (e.target.name == "img") {
      setImg(e.target.value);
    }
    
  }
  
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        .navbar{
          display:none
        },
        `}</style>
      <FullLayout>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Add Product">
          <Stack spacing={3}>
            <TextField onChange={onChange} id='title' value={title?title:''} name="title" label="Title" variant="outlined"/>
            <TextField onChange={onChange} id='category' value={category?category:''} name="category" label="Category" variant="outlined" />
            <TextField onChange={onChange} id='color' value={color? color:''} name="color" label="Color" variant="outlined" />
            <TextField onChange={onChange} id='size' value={size? size:''} name="size" label="Size" variant="outlined" />
            <TextField onChange={onChange} id='slug' value={slug? slug:''} name="slug" label="Slug" variant="outlined" />
            <TextField onChange={onChange} id='price' value={price? price:''} name="price" label="Price" variant="outlined" />
            <TextField onChange={onChange} id='img' value={img? img:''} name="img" label="Image" variant="outlined" />
            <TextField onChange={onChange} id='availableQty' value={availableQty? availableQty:''} name="availableQty" label="Available Qty" variant="outlined" />
            
            <TextField
              name="desc"
              label="Description" 
              onChange={onChange} id='desc'
              value={desc?desc:''}
              multiline
              rows={4}
            />
             
            
          </Stack>
          <br />
          <Button onClick={handleSubmit} variant="outlined" className='text-white bg-cyan-500 hover:text-cyan-500' mt={2}>
            Submit
          </Button>
        </BaseCard>
      </Grid>

      
    </Grid>
      </FullLayout>
    </ThemeProvider>
  );
}

export default Add
