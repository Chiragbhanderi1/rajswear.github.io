import React from 'react'
import FullLayout from "../../src/layouts/FullLayout";
import theme from "../../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import {Grid} from "@mui/material";
import AllProducts from '../../src/components/dashboard/AllProduct';
import mongoose from 'mongoose';
import Product from '../../models/Product';
const Allproducts = ({products}) => {
  
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        footer{
          display:none
        }
        `}</style>
      <FullLayout>
      <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <AllProducts products={products}  />
      </Grid>
    </Grid>
      </FullLayout>
    </ThemeProvider>
  );
}

export default Allproducts
export async function getServerSideProps(context){
  let error=null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find();
  return {props:{products:JSON.parse(JSON.stringify(products))}}
}