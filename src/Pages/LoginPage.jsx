import { Grid } from "@mui/material";
import CorouselComponent from "../Components/CorouselComponent/Corousel";
import LoginForm from "../Components/LoginForm";
 
const LoginPage = () => {
    return (
        <Grid container sx={{height: "100vh"}}>
            <Grid item xs={12} md={6}><CorouselComponent /></Grid>
            <Grid item xs={12} md={6} sx={{p: 5}}><LoginForm /></Grid>
        </Grid>
    );
};
 
export default LoginPage;