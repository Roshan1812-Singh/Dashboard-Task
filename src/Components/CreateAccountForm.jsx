import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "../Hooks/UseParamsHook";

const CreateAccount = () => {
    const { saveParams } = useParams();
    const [formData, setFormData] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate({username: "" , email: "" , password: "", confirmPassword: ""});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const isFormValid = username.trim() !== '' && email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '';

    const handleSubmit = (e) => {
        e.preventDefault();
        saveParams(formData);
        navigate('/')
    }
 
    return (
        <form>
            <Box sx={{
                background: "linear-gradient(100deg, #000011, #D1D0D0, #b4b4b4ff, #5C4E4E)",
                textAlign: "center", fontFamily: "Times New Roman", backgroundColor: "aliceblue",
                m: "auto", mt: 10, p: 2, width: 300,
                justifyContent: "center", alignItems: "center", boxShadow: 2, borderRadius: 10
            }}
                onChange={handleChange}
            >
                <Typography variant="h4" sx={{ m: 1 }} >
                    <b>Create Account</b>
                </Typography>
                <TextField label="Username" sx={{ m: 1 }} onChange={(e) => setUsername(e.target.value)}/>
                <TextField label="E-mail" sx={{ m: 1 }} onChange={(e) => setEmail(e.target.value)}/>
                <TextField label="Password" sx={{ m: 1 }} onChange={(e) => setPassword(e.target.value)}/>
                <TextField label="Confirm Password" sx={{ m: 1 }} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Button 
                sx={{ m: 1, borderRadius: 3 }} 
                variant="contained" 
                type="submit" 
                onClick={handleSubmit}
                disabled={!isFormValid}
                > Create</Button>
                <Typography sx={{ m: 1 }}>
                    <b>Already have an account ? </b><br /> <Link href='/' sx={{ m: 1 }}><b>Login</b></Link>
                </Typography>
            </Box>
        </form>
    );
};

export default CreateAccount;