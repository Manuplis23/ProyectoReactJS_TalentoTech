import TarjetaProducto from "./TarjetaProducto";

function TarjetaProductoContainer(){
    const productos = [{imagen: "", nombre: "Muñeco dragón", precio: "$100.000"}, {imagen: "", nombre: "Muñeco héroe", precio: "$80.000"}, {imagen: "", nombre: "Muñeco hechicero", precio: "$120.000"}];
    return(
        <div>
            {productos.map((producto) => (
                <TarjetaProducto
                    key={productos.nombre}
                    imagen={productos.imagen}
                    precio={productos.precio}
                />

            ))}
        </div>
    );
}

export default TarjetaProductoContainer;