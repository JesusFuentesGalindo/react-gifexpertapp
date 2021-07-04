import 'animate.css';

const GifGridItem=({url_img,title,id})=>{

    return (
        <div className='card animate__animated animate__fadeIn animate__delay-1s'>
            <img src={url_img} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem;