export const getGifs=async(categoria)=>{

    const api_key='3G42F4ap7oC8soAm9SMUvNP9gfAjJ9XL';
    const api_url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=${api_key}`;

    const resp=await fetch(api_url);

    const {data}=await resp.json();

    const gifs=data.map(img=>{
        return({
            id:img.id,
            title:img.title,
            url_img:img.images.downsized_large.url
        });
    });
    
    return (gifs);
};