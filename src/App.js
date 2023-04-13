import {BrowserRouter, Routes, Route} from 'react-router-dom';
import OLCHA from './pages/olcha';
import NOTE from './pages/notefound';
import main from './pages/main';
import Maxsulothaqida from "./pages/maxsulothaqida";
import Max from "./pages/maxsulothaqida";
import Pro from "./pages/getproduct";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={<SecondMenyu/>} /> */}
                <Route path='/olcha' element={<OLCHA/>}/>
                <Route path='/olcha/maxsulot/:id' element={<Max/>}/>
                <Route path='/olcha/product/:id' element={<Pro/>}/>
                <Route path='/*' element={<NOTE/>}/>
                <Route path='/salom' element={<main/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
