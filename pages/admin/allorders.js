import React from 'react'
import FullLayout from "../../src/layouts/FullLayout";
import theme from "../../src/theme/theme";
import {Grid} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
const Allorders = () => {
  
  
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
      </Grid>
    </Grid>
      </FullLayout>
    </ThemeProvider>
  );
}

export default Allorders

