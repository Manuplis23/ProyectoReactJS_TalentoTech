import './App.css';
import { Route, Routes } from "react-router-dom";
import { Footer } from "./componentes/Footer/Footer";
import { Header } from "./componentes/Header/Header";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';


function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/cart" element={<h1>Carrito</h1>}/>
                    <Route path="/product/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/category/:category" element={<ItemListContainer/>}/>
                </Routes>
            </main>
            <Footer />
        </>
    );
};
export default App;
