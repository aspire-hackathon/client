import {useEffect, useState} from 'react';
import { Avatar, MenuItem, getImageListItemBarUtilityClass,styled } from '@mui/material';
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

const Input = styled('input')({
    display: 'none',
  });

export default function CausesForm() {
    const [avatarPreview, setAvatarPreview] = useState();

    const getImage = (e) =>{
        const fileReader = new FileReader();
        fileReader.onload = () => {
            if (fileReader.readyState === 2) {
            setAvatarPreview(fileReader.result);
            }
        };
        fileReader.readAsDataURL(e.target.files[0]);
    }
    
    useEffect(()=>{
        formik.values.causeImg = avatarPreview;
    },[avatarPreview])

    const CausesSchema = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Title is Required'),
        aimDescription: Yup.string()
            .min(2, 'Too Short!')
            .max(200, 'Too Long!')
            .required('Aim Description is Required'),
        causeStatus: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!'),
        causeImg: Yup.mixed().required()   
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            aimDescription: '',
            causeStatus: '',
            causeImg:''
        },
        validationSchema: CausesSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Add Cause
                </Typography>


                <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="title"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                error={formik.touched.title && Boolean(formik.errors.title)}
                                helperText={formik.touched.title && formik.errors.title}
                                autoFocus
                                placeholder='Enter Title'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="aimDescription"
                                required
                                fullWidth
                                multiline
                                id="aimDescription"
                                label="Aim Description"
                                value={formik.values.aimDescription}
                                onChange={formik.handleChange}
                                error={formik.touched.aimDescription && Boolean(formik.errors.aimDescription)}
                                helperText={formik.touched.aimDescription && formik.errors.aimDescription}
                                autoFocus
                                placeholder='Enter Aim Description'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="causeStatus"
                                required
                                fullWidth
                                multiline
                                id="causeStatus"
                                label="Cause Status"
                                value={formik.values.causeStatus}
                                onChange={formik.handleChange}
                                error={formik.touched.causeStatus && Boolean(formik.errors.causeStatus)}
                                helperText={formik.touched.causeStatus && formik.errors.causeStatus}
                                autoFocus
                                placeholder='Enter Cause Status'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Avatar size='md' src={avatarPreview} />
                            
                            <label htmlFor="contained-button-file">
                                <Input accept="image/*"  id="contained-button-file" multiple type="file" onChange={(e)=>getImage(e)} />
                                <Button variant="contained" component="span">
                                    Upload
                                </Button>
                            </label>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            bgcolor: "#dd4343",
                            ":hover": {
                                bgcolor: "#ac3434",
                            },
                        }}
                    >
                        Add Cause
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}