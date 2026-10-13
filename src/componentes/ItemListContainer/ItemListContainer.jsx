import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch("/data/products.json")
            .then((res) => {
                if(!res.ok) {
                    throw new Error("Error al cargar los productos");
                }
                return res.json();
            })
            .then((data) => {
                if(category){
                    const filteredProducts = data.filter(
                    (products) => products.category === category
                );
                setProducts(filteredProducts);
            } else {
                setProducts(data);
            }
        })
            .catch((error) => setErrors(error.message))
            .finally(() => setLoading(false));
    }, [category]);

    if(loading) return <p>Cargando...</p>;
    if(errors) return <p>{errors}</p>;

    return(
        <section>
            <h1>Dragones</h1>
            <ItemList products={products}/>
        </section>
    );
};