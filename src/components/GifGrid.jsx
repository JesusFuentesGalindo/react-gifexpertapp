import { /* useState,useEffect, */ Fragment } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";


const GifGrid=(props)=>{
    
    let img;
    const {data:images,loading}=useFetchGifs(props.categoria);
        
    return(
        <Fragment>
            <h3>{props.categoria}</h3>
            {loading&&<p>Cargando...</p>}
            <div className='card-grid'>
                <For each='img' index='i' of={images}>
                    <GifGridItem key={img.id} {...img} />
                </For>
            </div>
        </Fragment>
    );
}

export default GifGrid;