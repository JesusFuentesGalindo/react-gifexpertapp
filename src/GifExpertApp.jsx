import React, {Fragment,useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp=()=>{

    const [categorias,setCategorias]=useState(['One Punch Man']);
    let categoria;

    return(

        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategoryes={setCategorias}/>
            <hr />

            <ol>
                <For each="categoria" index='i' of={categorias}>
                    <GifGrid key={categoria} categoria={categoria} />
                </For>
            </ol>
        </Fragment>
    );
};

export default GifExpertApp;