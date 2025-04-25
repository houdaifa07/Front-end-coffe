import left1 from '../Images/Graphic Element 01.png';
import left2 from '../Images/Graphic Element 04.png';
// import product1 from '../Images/Product Image - Variant 1.jpg';
import right1 from '../Images/Graphic Element 02.png'
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { AddToCart } from '../reduxe/action';
import { useEffect } from 'react';
import axios from 'axios';


export default function Shop({ searchTerm }) {

    const [detaillecoffeshop, setdetaillecoffeshop] = useState([])
    detaillecoffeshop.quantity = 1;
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/product_stocks')
            .then(response => {
                setdetaillecoffeshop(response.data);
                // document.write("Donne nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn ")
            })
            .catch(error => {
                console.error("There was an error fetching the dataaaa:", error);
                // setLoading(false);
            });
    }, []);

    const filteredProducts = detaillecoffeshop.filter(product =>
        product.title.toLowerCase().includes((searchTerm || "").toLowerCase()));


    const dispatch = useDispatch();
    const [shakingId, setShakingId] = useState(null);

    const handeldata = (ele) => {
        ele.quantity = 1;
        dispatch(AddToCart(ele))
        handleRotate(ele.id)
    }

    const handleRotate = (id) => {
        setShakingId(id);
        setTimeout(() => {
            setShakingId(null);
        }, 300);
    };

    return (
        <section className="shop-section m-auto mt-5">
            <img src={left1} className='position-absolute end-0' alt="left1" />
            <img src={left2} className='position-absolute end-0 bottom-0' alt="left2" />
            <div className="container allbox1 row m-auto justify-content-center">
                {filteredProducts.length > 0 ?
                    filteredProducts.map((ele) => (
                        <div key={ele.id} className="box col-12 col-sm-6 col-md-4 col-lg-3 bg-light text-center position-relative mb-4">
                            <h5 className='fst-italic'>G.Coffee 75g - {ele.title}</h5>
                            <img src={`/${ele.image_src}`} alt={ele.title} className="img-fluid" />
                            <p className='fw-bold'>{ele.price}</p>
                            <button
                                type='button'
                                className={`btn-shop ${shakingId === ele.id ? 'shake' : ''}`}
                                onClick={() => handeldata(ele)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                    : <div className='text-center fs-1 fst-italic text-decoration-underline text-gray'>Landing...</div>
                }
            </div>
            <img src={right1} className='position-absolute start-0 top-100' alt="right1" />
            <img src={right1} className='position-absolute start-0 top-0' alt="right1" />
        </section>
    );
}