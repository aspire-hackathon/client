import * as React from "react";
import { Avatar, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../redux/actions/users";
import { useSelector, useDispatch } from "react-redux";
import { usePlacesWidget } from "react-google-autocomplete";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from "../UI/Modal/Modal";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const roles = [
  { label: "Organisation", name: "organisation" },
  { label: "Volunteer", name: "volunteer" },
  { label: "Admin", name: "admin" },
];

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(state => state.users.loading);
  const reqStatus = useSelector(state => state.users.status);
  const [error,setError] = useState(false);

  const [addressObject, setAddressObject] = React.useState({});

  React.useEffect(()=>{
      console.log(error)
    if(reqStatus && reqStatus.code) {
        if(reqStatus.code.toString().startsWith('2')){
            navigate("/login", { replace: true });
          } else {
            setError(true);
        }
    }
  },[reqStatus])

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is Required"),
    userName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Username is Required"),
    role: Yup.string().required("Role is Required"),
    contact: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Contact is Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "",
      role: "",
      contact: "",
      email: "",
      password: "",
      address:""
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
        const user = {
            name: values.name,
            username: values.userName,
            password: values.password,
            role:  values.role,
            contactNo: values.contact,
            email: values.email,
            address: addressObject,
          };
          dispatch(registerUser(user));
    },
  });

    const getAddressComponent = (place, componentName, property) => {
        var comps = place.address_components.filter(function (component) {
            return component.types.indexOf(componentName) !== -1;
        });

        if (comps && comps.length && comps[0] && comps[0][property]) {
            return comps[0][property];
        } else {
            return null;
        }
    };

    const updateAddressObject = (place) => {

        const address = {
            district: getAddressComponent(place, 'administrative_area_level_2', 'long_name'),
            state: getAddressComponent(place, 'administrative_area_level_1', 'long_name'),
            pincode: "123456",
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
        };

        setAddressObject(address);
    };

    const { ref } = usePlacesWidget({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        onPlaceSelected: (place) => {
            updateAddressObject(place);
            formik.setFieldValue("address", place.formatted_address);
        },
    });

    const errorHandler = () => {
        setError(false);
    }  

  return (
    <Container component='main' maxWidth='xs'>
        <div>Error {error}</div>
      {error && <Modal
          title={reqStatus.code}
          message={reqStatus.statusText}
          onConfirm={errorHandler}
        />}
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
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
                              name="name"
                              required
                              fullWidth
                              id="name"
                              label="Name"
                              value={formik.values.name}
                              onChange={formik.handleChange}
                              error={
                                  formik.touched.name &&
                                  Boolean(formik.errors.name)
                              }
                              helperText={
                                  formik.touched.name && formik.errors.name
                              }
                              autoFocus
                              placeholder="Enter Full Name"
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextField
                              name="userName"
                              required
                              fullWidth
                              id="userName"
                              label="User Name"
                              value={formik.values.userName}
                              onChange={formik.handleChange}
                              error={
                                  formik.touched.userName &&
                                  Boolean(formik.errors.userName)
                              }
                              helperText={
                                  formik.touched.userName &&
                                  formik.errors.userName
                              }
                              placeholder="Enter User Name"
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextField
                              name="role"
                              required
                              fullWidth
                              select
                              id="role"
                              label="Role"
                              value={formik.values.role}
                              onChange={formik.handleChange}
                              error={
                                  formik.touched.role &&
                                  Boolean(formik.errors.role)
                              }
                              helperText={
                                  formik.touched.role && formik.errors.role
                              }
                              placeholder="Select Role"
                          >
                              {roles.map((role) => (
                                  <MenuItem key={role.name} value={role.name}>
                                      {role.label}
                                  </MenuItem>
                              ))}
                          </TextField>
                      </Grid>
                      <Grid item xs={12}>
                          <TextField
                              required
                              fullWidth
                              id="address"
                              label="Address"
                              name="address"
                              value={formik.values.address}
                              onChange={formik.handleChange}
                              inputRef={ref}
                              error={
                                  formik.touched.address &&
                                  Boolean(formik.errors.address)
                              }
                              helperText={
                                  formik.touched.address &&
                                  formik.errors.address
                              }
                              placeholder="Enter Address"
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextField
                              required
                              fullWidth
                              id="contact"
                              label="Contact Number"
                              name="contact"
                              value={formik.values.contact}
                              onChange={formik.handleChange}
                              error={
                                  formik.touched.contact &&
                                  Boolean(formik.errors.contact)
                              }
                              helperText={
                                  formik.touched.contact &&
                                  formik.errors.contact
                              }
                              placeholder="Enter Contact Number"
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextField
                              required
                              fullWidth
                              id="email"
                              name="email"
                              label="Email"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              error={
                                  formik.touched.email &&
                                  Boolean(formik.errors.email)
                              }
                              helperText={
                                  formik.touched.email && formik.errors.email
                              }
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
                          bgcolor: "#dd4343",
                          ":hover": {
                              bgcolor: "#ac3434",
                          },
                      }}
                  >
                      Sign Up
                  </Button>
                  <Button
                      type="button"
                      href="/login"
                      fullWidth
                      variant="outlined"
                      sx={{ mt: 3, mb: 2, textTransform: "none" }}
                  >
                      Already Registered, Log In
                  </Button>
              </Box>
          </Box>
      </Container>
  );
}
