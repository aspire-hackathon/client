import './App.css';
// import Buttons from './components/Buttons/Buttons';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Users from './components/Users/UsersComponent';
import Causes from './components/Causes/Causes';
import CausesForm from './components/Causes/Cause/CausesForm';
import ViewCause from './components/Causes/ViewCause/ViewCause';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const ProtectedRoute  = (Component) =>{
    return (
        <Route path="causes"
          element={localStorage.getItem('ACCESS_TOKEN') ?
              <Component /> :
              <Navigate to='/login' />
            } 
        />
    )
}

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ResponsiveAppBar />
                <main>
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route path="/" exact element={<>Welcome!</>}/>
                            <Route path="register" element={<Register />} />
                            <Route path="login" element={<Login />} />
                            <Route path="users" element={<Users />} />
                            {ProtectedRoute(Causes)}
                            {/* <Route path="causes" element={<Causes /> } /> */}
                            <Route exact path="causes/:id" element={<ViewCause/>}  />
                            <Route path="causes-form" element={<CausesForm />} />
                    </Routes>
                </ThemeProvider>
                </main>
                <footer className='footer'>
                    <span>&copy; Created by Team Oranga</span>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
