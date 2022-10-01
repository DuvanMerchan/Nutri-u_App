import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom"; 
import { getDetail } from "../../../redux/actions/ingredientactions";



const DetailIngredient = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const ingredient = useSelector((state) => state.ingredients.detail);

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    //Hay que terminar de definir bien que info vamos a traer de los ingredientes para renderizarla en el detalle

    return (        
    <div class="card" style="width: 18rem;">
        <img src={ingredient.image} class="card-img-top" alt="no image available"/>
        <div class="card-body">
            <h5 class="card-title">{ingredient.name}</h5>
            <>
            <ul class="list-group">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>
            </>
            <Link to="/home">
                <a href="#" class="btn btn-primary">🢀 Go Back</a>
            </Link>
        </div>
    </div>
    );
};

export default DetailIngredient;