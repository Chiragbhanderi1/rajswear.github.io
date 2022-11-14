import React from 'react'
import FullLayout from "../../src/layouts/FullLayout";
import theme from "../../src/theme/theme";
import Link from 'next/link';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {Grid} from "@mui/material";
import mongoose from 'mongoose';
import Product from '../../models/Product';
import BaseCard from '../../src/components/baseCard/BaseCard';
const Allproducts = ({products}) => {
  
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
      .navbar{
        display:none
       },
        footer{
          display:none
        },
        body{

        }
        `}</style>
      <FullLayout>
      <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
    <BaseCard title="All Products">
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Title
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="textSecondary" variant="h6">
                Edit
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Slug
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
              Size/Color
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                 Price
              </Typography>
            </TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.slug}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {product.title}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6"><Link href={'/admin/update?id='+product._id}><button className="bg-cyan-500 text-white px-4 py-2 rounded-lg">Edit</button></Link></Typography>
              </TableCell>
              <TableCell>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {product.slug}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    ></Typography>
                  </Box>
                </Box>
              </TableCell>
              
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {product.size}/{product.color}
                </Typography>
              </TableCell>
             
              <TableCell align="right">
                <Typography variant="h6">₹{product.price}</Typography>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BaseCard>
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