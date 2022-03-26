import './App.css';
import Buttons from './components/Buttons/Buttons';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import Register from './components/Auth/Register'
import Users from './components/Users/UsersComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route path="/" >
                            {/* <Route index element={<Register />} /> */}
                            <Route path="register" element={<Register />} />
                            <Route path="users" element={<Users />} />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
