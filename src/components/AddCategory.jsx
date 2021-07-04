import {useState} from "react";
import PropTypes from 'prop-types';

const AddCategory=(props)=>{

    //Estado
    const [inputValue, setinputValue] = useState('');

    const handleInputChange=(e)=>{

        setinputValue(e.target.value);
    };

    const handleSubmit=(e)=>{

        e.preventDefault();

        if(inputValue.trim().length>2){
            
            props.setCategoryes(estado=>[inputValue,...estado]);
            setinputValue('');
        }
    };

    return(

        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Indica una categoría" />
        </form>
    );
};

AddCategory.propTypes={

    setCategoryes:PropTypes.func.isRequired
};

export default AddCategory;