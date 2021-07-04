import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs=(categoria)=>{

    const [img_data,setImgData] = useState({

        data:[],
        loading:true
    });

    useEffect(() => {

        getGifs(categoria).then(imgs=>setImgData({
            data:imgs,
            loading:false
        }));
    },[categoria]);

    return img_data;
};