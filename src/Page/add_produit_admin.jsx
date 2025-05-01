import axios from "axios";
import { useEffect, useState } from "react";



export default function AddProduct() {

    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [isadmin, setisadmin] = useState(false);
    const [stocks, setstocks] = useState([])
    const [addproduct, setaddproduct] = useState({
        image_src: 'Product Image - Variant 1.jpg',
        title: '',
        price: '',
        quantity: ''
    });


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/product_stocks')
            .then(response => {
                setstocks(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the dataaaa:", error);
            });
    }, []);



    //     try {
    //         const response = await axios.post('http://localhost:8000/api/AddProduct', { items: [productData] });
    //         alert('Products add successfully ');
    //         console.log(response.data)
    //     } catch (error) {
    //         console.error('Full Axios Error:', error);
    //         console.log('Response:', error.response);
    //         alert(error.response?.data?.message || 'There was an error adding the product. Please try again.');
    //     }
    //     console.log(productData)
    // };

    const handleDeleteProduct = async (ti) => {
        const title = ti;
        console.log(title)

        try {
            const response = await axios.delete(`http://localhost:8000/api/delete_product/${title}`);
            setstocks(prevStocks => prevStocks.filter(item => item.title !== title));
            alert(response.data, "product deleted successfully");

        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || 'Error deleting product');
        }
    };
    const updateProduct = async (pro) => {
        const newTitle = prompt("Enter new title:") || pro.title;
        const newPrice = prompt("Enter new price:") || pro.price;
        const newQuantity = prompt("Enter new quantity:") || pro.quantity;

        try {
            const response = await axios.put(`http://localhost:8000/api/update_product/${pro.id}`, {
                title: newTitle,
                price: newPrice,
                quantity: newQuantity,
            });

            setstocks(prevStocks =>
                prevStocks.map(p => p.id === pro.id
                    ? { ...p, title: newTitle, price: newPrice, quantity: newQuantity }
                    : p)
            );

            alert(response.data.message);
        } catch (error) {
            console.error("Update error:", error);
            alert(error.response?.data?.message || "Error updating product");
        }
    };

    const handelinfo = () => {
        pass === "1234" && email === "oublhoudaifa00@gmail.com" ? setisadmin(true) : alert("email or password is incorrect ");
        return;
    }
    const sendproduct = async () => {
        if (addproduct.title === "" && addproduct.price === "" && addproduct.quantity === "") {
            alert("all input is required");

        }
        try {
            const response = await axios.post("http://localhost:8000/api/AddProduct", { items: [addproduct] });
            alert('Products Added successfully ');
            console.log(response.data);
        } catch (error) {
            alert(error.response?.data?.message || 'There was an error with your purchase. Please try again.');
        }


    }
    return (<>
        {!isadmin
            ? <section className="vh-100" >
                <div className="container py-5 h-100 " >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 d-none d-md-block">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            alt="form"
                                            className="img-fluid"
                                            style={{ borderRadius: "1rem 0 0 1rem" }}
                                        />
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center" style={{ backgroundColor: "#4f3b2e47" }}>
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <form>
                                                <div className="mb-3">
                                                    <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                                                    <span className="h1 fw-bold mb-0">Coffee Gemahlen</span>
                                                </div>

                                                <h5 className="fw-normal mb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>
                                                <div>(oublhoudaifa00@gmail.com  ---- code : 1234  (for test))</div>
                                                <div></div>
                                                <div className="form-outline mb-4">
                                                    <input type="email" onChange={(e) => { setemail(e.target.value) }} id="email" className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="email">Email address</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="password" onChange={(e) => { setpass(e.target.value) }} className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                </div>

                                                <button onClick={handelinfo} className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
            : ""
        }
        {
            isadmin === true
                ? <>
                    <section className="section-stock mt-5 p-4" >
                        <div style={{ overflowX: 'auto' }}>
                            <table className="table-bordered table table-hover table-striped text-center align-middle">
                                <thead >
                                    <tr style={{ backgroundColor: "#4f3b2e47" }}>
                                        <th scope="col" style={{ backgroundColor: "#4f3b2e47" }} >Image</th>
                                        <th scope="col" style={{ backgroundColor: "#4f3b2e47" }} >Title</th>
                                        <th scope="col" style={{ backgroundColor: "#4f3b2e47" }} >Price</th>
                                        <th scope="col" style={{ backgroundColor: "#4f3b2e47" }} >Quantity</th>
                                        <th scope="col" style={{ backgroundColor: "#4f3b2e47" }} >Action</th>
                                    </tr>
                                </thead>
                                {stocks.map((pro) => {
                                    return (<tr>
                                        <td><img style={{ width: "40px", height: "40px" }} src={`${pro.image_src}`} alt="" /></td>
                                        <td>{pro.title}</td>
                                        <td>{pro.price}</td>
                                        <td>{pro.quantity}</td>
                                        <td>
                                            <button onClick={() => { updateProduct(pro) }} className="btn btn-primary btn-sm me-3 btn-block">Update</button>
                                            <button onClick={() => { handleDeleteProduct(pro.title) }} className="btn btn-danger btn-sm btn-block">Delete</button>

                                        </td>
                                    </tr>)
                                })}

                            </table>
                        </div>
                    </section>
                    <section className="d-flex flex-column position-relative p-5 align-items-center justify-content-center my-5">
                        <div className="row w-100">
                            <div className="col-12 col-sm-6">
                                <label htmlFor="">Title</label>
                                <input
                                    type="text"
                                    onChange={(e) => { setaddproduct(prev => ({ ...prev, title: e.target.value })) }}
                                    className="rounded m-1 w-100" />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label htmlFor="">Price</label>
                                <input
                                    type="text"
                                    onChange={(e) => { setaddproduct(prev => ({ ...prev, price: e.target.value })) }}
                                    className="rounded m-1 w-100" />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label htmlFor="">Quantity</label>
                                <input
                                    type="text"
                                    onChange={(e) => { setaddproduct(prev => ({ ...prev, quantity: e.target.value })) }}
                                    className="rounded m-1 w-100" />
                            </div>


                        </div>

                        <div className="w-100 text-center mt-3">
                            <button
                                className="btn btn-primary btn-sm me-3 btn-block"
                                onClick={sendproduct}>
                                Add
                            </button>
                        </div>
                    </section>

                </>
                : ""
        }

    </>);

}
