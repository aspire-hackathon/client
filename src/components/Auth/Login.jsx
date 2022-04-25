import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Avatar, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from "../../redux/actions/users";

export default function Login() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const LoginSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is Required'),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    });
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            console.log('values------', values);
            // alert(JSON.stringify(values, null, 2));
            dispatch(login(values, navigate));
        },
    });

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, color:"#444", bgcolor: "#a8dadc" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log In
                </Typography>

                <Box
                    component="form"
                    noValidate
                    onSubmit={formik.handleSubmit}
                    sx={{ mt: 3 }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="username"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.username &&
                                    Boolean(formik.errors.username)
                                }
                                helperText={
                                    formik.touched.username &&
                                    formik.errors.username
                                }
                                autoFocus
                                placeholder="Enter User Name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.password &&
                                    Boolean(formik.errors.password)
                                }
                                helperText={
                                    formik.touched.password &&
                                    formik.errors.password
                                }
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            color: "#444",
                            bgcolor: "#a8dadc",
                            ":hover": {
                                bgcolor: "#219ebc",
                                color: "#FFF",
                                transition: "all 0.5s"
                            },
                        }}
                    >
                        LogIn
                    </Button>
                    <Button
                        type="button"
                        href='/register'
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 3, mb: 2, textTransform: "none" }}
                    >
                        New here, Register
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}