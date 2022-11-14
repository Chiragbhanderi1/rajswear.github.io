import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Router, { useRouter } from "next/router";
import BlogCard from "../../src/components/dashboard/BlogCard";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import FullLayout from "../../src/layouts/FullLayout";
import theme from "../../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";

export default function Index() {
  const router =useRouter()
  useEffect(()=>{
    if(!localStorage.getItem('admin')){
      router.push('/admin/login')
    }
  },[])
  return (
    
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        .navbar{
          display:none
        },
        footer{
          display:none
        }
        `}</style>
      <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>
      </Grid>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
    </Grid>
      </FullLayout>
    </ThemeProvider>
  );
}
