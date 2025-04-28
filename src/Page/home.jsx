import product1 from '../Images/Product Image - Variant 1.jpg';
import product2 from '../Images/Product Image - Variant 2.jpg';
import right1 from '../Images/Graphic Element 01.png';
import left1 from '../Images/Graphic Element 02.png';
import right2 from '../Images/Graphic Element 04.png';
import left2 from '../Images/Graphic Element 03.png';
import review from '../Images/Reviewer Profile Picture.png';
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from 'react';



export default function Home() {
    const handleClick = () => {
        window.scrollTo({
            top: 1693,
            behavior: 'smooth'
        });
    }



    const [open, setopen] = useState(false);
    const opencard = () => {
        setopen(prevState => !prevState);
    }
    useEffect(() => {
        const handelscroll = () => {
            setopen(false);
        }

        window.addEventListener('scroll', handelscroll);
    }, [])


    const detaillecoffe = [
        {
            title: 'Gemahlen coffe -Macchiato',
            src: product1,
            Paragraph: 30.03

        },
        {
            title: 'Gemahlen coffe -Espresso',
            src: product1,
            Paragraph: 44.01
        },
        {
            title: 'Gemahlen coffe- Cappuccino',
            src: product2,
            Paragraph: 30.03
        }
    ];
    const reviews = [
        {
            name: "Ahmed Mamas",
            title: "Peace Of Mind In A Jar",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non, fuga inventore facere, architecto totam perspiciatis aliquam tenetur id sit numquam voluptatibus culpa exercitationem corporis perferendis ad voluptate nobis ullam.",
            image: review
        },
        {
            name: "zakaria",
            title: "Peace Of Mind In A Jar",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non, fuga inventore facere, architecto totam perspiciatis aliquam tenetur id sit numquam voluptatibus culpa exercitationem corporis perferendis ad voluptate nobis ullam.",
            image: review
        },
        {
            name: "saad mamou",
            title: "Peace Of Mind In A Jar",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non, fuga inventore facere, architecto totam perspiciatis aliquam tenetur id sit numquam voluptatibus culpa exercitationem corporis perferendis ad voluptate nobis ullam.",
            image: review
        }
    ];

    return (<>

        <section className="sectionL relative " >
            <div className="info px-6">
                <h1 className="samall-title text-4xl font-bold">Yhe Perfect Gift   </h1>
                <h1 className="samall-title text-4xl font-bold"> For Coffe Lovers  </h1>
                <p className="got  ">Giv them Something they'll Love </p>
                <button className="btn-shop" onClick={handleClick}> Shop coffe</button>
            </div>
        </section>
        <img src={right1} alt="right" className="position-absolute end-0" />
        <section className="container my-5">
            <div className="allbox1 row d-flex flex-wrap">
                {detaillecoffe.map((ele) => {
                    return <>
                        <div className="box col text-center position-relative ">
                            <h5>{ele.title}</h5>
                            <img src={ele.src} alt="7df" />
                            <p className='fw-bold'>{ele.Paragraph}</p>
                            <a className="btn-shop px-5" href="./detaillCoffe" style={{ textDecoration: 'none' }} > Details</a>
                        </div>
                    </>
                })}
            </div>
            <img src={left1} alt="left" className="position-absolute start-0 mb-6" style={{ bottom: '-28%' }} />
        </section>
        {
            open === true
                ?
                <div className="overflow">

                    <div className="cardshop block mx-auto p-2 position-relative text-center ">
                        <h3 className='p-3 fst-italic  ' style={{ color: '#7b4312', borderBottom: 'solid 2px' }}> Gemahlen coffe 75g</h3>
                        <img className='imgcofe' src={product1} alt="7df" />
                        <img src={right1} alt="left" className="position-absolute end-0" style={{ width: '100px' }} />
                        <img src={left1} alt="left" className="position-absolute start-0" style={{ width: '80px' }} />
                        <p className='p-2 fst-italic text-start'>Indulge in the rich aroma and full-bodied flavor of our Premium Ground Coffee. Sourced from the finest coffee beans, this 75g pack is perfect for those who appreciate quality in every cup.  </p>
                        <p className='text-start fst-italic fw-bold p-2 mb-5 ' style={{ color: '#7b4312' }}>Price :  <span className='fw-sm'>110 dh</span></p>
                        <div className="d-flex justify-content-around mb-4 ">
                            {/* <button className='btn-shop mr-6' onClick={opencard}>Add to card </button> */}
                            <button className='btn-shop' onClick={opencard}>close </button>
                        </div>
                    </div>
                </div >
                : ""
        }
        <section className='section2 position-relative text-md-start'>
            <div className="info position-absolute  ">
                <h4 className='mb-4'>Sinply dummy text of the printing </h4>

                <p className='fst-italic'> But Also The Leep into Electronic Typesetting ,
                    Remaining Essaintially Unchanged.it Was Popularised in The 1960s Whith The Release Of Letrase Sheets Containing Lorem lpsum passages
                </p>
                <button onClick={handleClick} type='button' className="btn-shop fst-italic"> Shop coffe</button>

            </div>
        </section>
        <div className="subtitle container text-center position-relative p-6 mt-3 " style={{ color: '  #6f4e37' }}>
            <h1 className='mt-5 text-coffe'>From the Gemahlen Family</h1>
            <p className='fst-italic'>The Reviews Are in! Parents and banies Are Loving Gemahlen</p>
        </div >
        <section className='container mb-5 mt-3'>
            <div className="allreview position-relative py-2" style={{ overflowX: 'auto' }}>
                <div style={{ display: 'inline-flex' }}>
                    {
                        reviews.map((ele) => {
                            return <>
                                <div className="review">
                                    <div className="persen d-flex">
                                        <img src={ele.image} alt="err" />
                                        <div className='px-4'>
                                            <div className="allicon text-warning">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <div className='fst-italic'>{ele.name}</div>
                                        </div>
                                    </div>
                                    <div className="infopersone">
                                        <div className='py-2  fw-bold'>{ele.title}</div>
                                        <div className='fs-6 text-start'>
                                            {ele.description}
                                        </div>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </section>
        <div className="subtitle container text-center position-relative p-6 mt-3 " style={{ color: '  #6f4e37' }}>
            <h1 className='mt-5 text-coffe'>Get your Coffee</h1>
            <p className='fst-italic'>Hot , Cold Sweet Or Straitght Up We've Got the Brew For You </p>
        </div >
        <section className=" position-relative">
            <img src={right2} alt="right" className="position-absolute end-0 bottom-0" />
            <div className='container position-relative'>
                <div className="allbox1 row d-flex flex-wrap">
                    {detaillecoffe.map((ele) => {
                        return <>
                            <div className="box col text-center position-relative ">
                                <h5>{ele.title}</h5>
                                <img src={ele.src} alt="7df" />
                                <p className='fw-bold'>{ele.Paragraph}</p>
                                <a className="btn-shop px-5" href="./shop" style={{ textDecoration: 'none' }} > Shop now</a>

                            </div>
                        </>
                    })}
                </div>
            </div>
            <img src={left2} alt="left" className="position-absolute start-0 mb-6 top-0" />
        </section>
    </>);
}
