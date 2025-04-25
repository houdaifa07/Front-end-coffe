

export function Details() {


    return (
        <>
            <div className="bg-white">
                <h1 className="text-center fst-italic mx-3 my-3" style={{ color: 'rgb(79 59 46 / 97%)' }}>GEMAHLEN COFFEE</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-3">
                <img src="/Gemahlen Logo.svg" alt="Gemahlen Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
                <h3 className="text-center fst-italic ms-3" style={{ color: 'rgb(79 59 46 / 97%)' }}>Product Design Page</h3>
            </div>

            <section className="container p-3 bg-white">
                <div className="row d-flex text-start">
                    <div className="col-12 col-md-6 mb-3">
                        <img src="/Product Image - Variant 1.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-6 pt-5 ps-4 text-start lh-lg border-start border-dark">
                        <h4 className="fst-italic mb-1" style={{ color: 'rgb(79 59 46 / 97%)' }}>Product Overview</h4>
                        <p className="w-100 text-start">
                            Gemahlen Coffee offers a rich, full-bodied taste that will elevate your daily coffee experience. This premium ground coffee blend is expertly crafted from the finest Arabica beans, ensuring a smooth and aromatic flavor profile. Perfect for brewing in your favorite coffee machine, French press, or even as a classic espresso shot.
                        </p>
                        <h4 className="mt-3 fst-italic mb-1" style={{ color: 'rgb(79 59 46 / 97%)' }}>Design Elements</h4>
                        <div>
                            <span className="fst-italic me-3" style={{ color: '#a54d10c7' }}> • Premium Arabica Beans :</span> Sourced from the best coffee-growing regions for superior quality.<br />
                            <span className="fst-italic me-3" style={{ color: '#a54d10c7' }}> • Freshly Ground :</span> Delivered as finely ground coffee for the perfect brewing consistency.<br />
                            <span className="fst-italic me-3" style={{ color: '#a54d10c7' }}> • Rich Flavor Profile :</span> Smooth, aromatic, and balanced with a slight hint of nuttiness.<br />
                            <span className="fst-italic me-3" style={{ color: '#a54d10c7' }}> • Versatile Brewing Options :</span> Ideal for espresso, drip, French press, and pour-over brewing methods.<br />
                        </div>
                        <h4 className="mt-3 fst-italic mb-1" style={{ color: 'rgb(79 59 46 / 97%)' }}>Brewing Recommendations</h4>
                        <div>
                            <span className="fst-italic me-3" style={{ color: '#a54d10c7' }}> • Espresso :</span> Use 18-20 grams of ground coffee for a rich and full-bodied shot.<br />
                            <span className="fst-italic me-3" style={{ color: '#a54d10c7' }}> • French Press :</span> Use 1-2 tablespoons per cup for a full flavor.<br />
                            <span className="fst-italic me-3" style={{ color: '#a54d10c7' }}> • Drip Coffee Maker :</span> Use 2 tablespoons of coffee per 6 ounces of water for a smooth, robust flavor.<br />
                            <span className="fst-italic me-3" style={{ color: '#a54d10c7' }}> • Versatile Brewing Options :</span> Add 1 to 1.5 tablespoons of coffee per cup for a balanced brew.<br />
                            <p><span className="fst-italic me-3" style={{ color: '#a54d10c7' }}>  • Customer Reviews:</span> ⭐️⭐️⭐️⭐️⭐️ (4.8/5)</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex p-1 ms-5 fst-italic text-start" style={{ width: "fit-content" }}>
                    <div>
                        <h4 className="fst-italic mb-1 text-start" style={{ color: 'rgb(79 59 46 / 97%)', width: "fit-content" }}>Dimensions & Specifications</h4>
                        <span className="fst-italic me-3" style={{ color: '#a54d10c7' }}>Bag Height :</span> 25 cm<br />
                        <span className="fst-italic me-3" style={{ color: '#a54d10c7' }}>Bag Width :</span> 12 cm<br />
                        <span className="fst-italic me-3" style={{ color: '#a54d10c7' }}>Depth (gusset) :</span> 7 cm<br />
                        <span className="fst-italic me-3" style={{ color: '#a54d10c7' }}>Capacity :</span> 250g / 500g / selectable options<br />
                    </div>
                </div>
            </section>
        </>
    );
}