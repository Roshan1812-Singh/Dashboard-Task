import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import UserCard from "../Components/UserCard";
import FoodCard from "../Components/FoodCard";
 
const HomePage = () => (
  <>
    <AppBar sx={{background: "linear-gradient(100deg, #496580, #57B9FF, #77B1D4, #517891)"}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        <Typography>About</Typography>
        <Typography sx={{ ml: 2 }}>Contact Us</Typography>
      </Toolbar>
    </AppBar>
 
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2}>
 
        <Grid item xs={12} md={3}>
          <UserCard />
        </Grid>
        <Grid item xs={12} md={9}>
 
          <Grid container spacing={2}>
 
            <Grid item xs={12}>
              <FoodCard />
            </Grid>
 
            <Grid item xs={12}>
              <FoodCard />
            </Grid>
 
            <Grid item xs={12}>
              <FoodCard />
            </Grid>
 
            <Grid item xs={12}>
              <FoodCard />
            </Grid>    
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </>
);
 
export default HomePage;