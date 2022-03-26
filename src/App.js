import './App.css';
import Buttons from './components/Buttons/Buttons';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import Users from './components/Users/UsersComponent';

function App() {
    return (
        <div className="App">
            <ResponsiveAppBar />
            <section>
                <Users />
            </section>
        </div>
    );
}

export default App;
