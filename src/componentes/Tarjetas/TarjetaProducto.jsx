export const TarjetaProducto = ({imagen, nombre, precio}) => {
    return(
        <article>
            <img src={imagen} alt={nombre} className="" />
            <div className="">
                <h2>{nombre}</h2>
                <p className="">${precio}</p>
            </div>
        </article>
    );
};

export default TarjetaProducto;