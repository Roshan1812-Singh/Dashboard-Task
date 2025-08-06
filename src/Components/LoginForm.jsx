import { Box, Button, Link, TextField, Typography } from "@mui/material"
import {  useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    // const handleChange = (e) => {
    //     setCredentials({ ...credentials, [e.target.name]: e.target.value });
    // }

    const isFormValid = email.trim() !== '' && password.trim() !== '';

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <form>
            <Box sx={{
                textAlign: "center", fontFamily: "Times New Roman",
                background: "linear-gradient(100deg, #000011, #D1D0D0, #b4b4b4ff, #5C4E4E)",
                m: "auto", mt: 12, ml: 12, p: 2, width: 300,
                justifyContent: "center", alignItems: "center", boxShadow: 2, gap: 3, borderRadius: 10
            }}
            >
                <Typography variant="h4" sx={{ m: 1, fontWeight: 'bold' }}>Login</Typography>
                <TextField
                    label="E-mail"
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ m: 1, borderRadius: 5 }}
                />
                <TextField
                    label="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ m: 1, borderRadius: 5 }}
                    required />
                <Button
                    disabled={!isFormValid}
                    variant="contained"
                    type="submit"
                    sx={{ m: 1, borderRadius: 3 }}
                    onClick={handleSubmit}
                >
                    Login
                </Button>
                <Typography sx={{ m: 1 }}>
                    <b>Don't have an account ? </b><br /> <Link href='/create' sx={{ m: 1 }}><b>Create Account</b></Link>
                </Typography>
            </Box>
        </form>
    );
}

export default LoginForm;




