import './App.css';
import logo from './logo.jpeg'
import user from './Userpic.jpg'

function App() {
  return (
    <div className="App">
        <div className="row no-gutters main">
            <div className="col-md-1">
                <div className="sidebar">
                    <div className=" d-flex justify-content-center">
                        <div className="d-flex iconbox justify-content-center align-items-center mt-4" style={{height:"60px",width:" 60px"}}>
                            <i className="bi bi-house-door" style={{fontSize:"30px"}}></i>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-center">
                        <div className="d-flex iconbox justify-content-center align-items-center mt-4" style={{height:"60px",width:" 60px"}}>
                            <i className="bi bi-people" style={{fontSize:"30px"}}></i>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-center">
                        <div className="d-flex iconbox justify-content-center align-items-center mt-4" style={{height:"60px",width:" 60px"}}>
                            <i className="bi bi-file-earmark-plus" style={{fontSize:"30px"}}></i>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-center">
                        <div className="d-flex iconbox justify-content-center align-items-center mt-4" style={{height:"60px",width:" 60px"}}>
                            <i className="bi bi-gear" style={{fontSize:"30px"}}></i>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-center">
                        <div className="d-flex iconbox justify-content-center align-items-center mt-4" style={{height:"60px",width:" 60px"}}>
                            <i className="bi bi-people"style={{fontSize:"30px"}}></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-11">
                <div className="d-flex justify-content-between bg-white px-2" style={{height: "38px",paddingRight:"45px !important"}}>
                    <div className="d-flex flex-row">
                        <div className="input-group input-group-sm mt-1">
                            <input type="text" className="form-control" placeholder="Search for anything" style={{height: "25px"}}></input>
                            <div className="input-group-append" style={{height: "25px"}}>
                                <span className="input-group-text bg-white" id="basic-addon2"><i className=" text-secondary fas fa-search"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <p className="text-pri name mt-2 ">NARESH KUMAR</p>
                        <img src={user} alt="image" className="img-fluid mt-1 pic mr-5"></img>
                        <i className="bi bi-bell mr-5 mt-1" style={{fontSize:"25px"}}></i>
                    </div>
                </div>
                <div className="row text-secondary ml-2">
                    <div className="col-md-9">
                        <div className="row bg-white border mt-1">
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <button type="button" className="btn button btn-sm btn-outline-secondary mx-3">All</button>
                                <p className="text-secondary mt-2">Sort by</p>
                                <select className="form-select mx-2 text-secondary" aria-label="Default select example">
                                    <option defaultValue="">Name</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div className="d-flex align-items-center">
                                    <a href="#"><i className="bi bi-download ml-4" style={{fontSize:"22px"}}></i></a>
                                    <a href="#"><i className="bi bi-file-earmark-plus ml-4" style={{fontSize:"22px"}}></i></a>
                                    <a href="#"><i className="bi bi-pencil-square ml-4" style={{fontSize:"22px"}}></i></a>
                                    <a href="#"><i className="bi bi-gear ml-4" style={{fontSize:"22px"}}></i></a>
                                </div>
                                <button className="btn button btn-sm btn-outline-secondary mx-4"><i className="bi bi-funnel"></i>Filter</button>
                            </div>
                            <div className="ml-auto d-flex align-items-center">
                                <ul className="nav nav-tabs ">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Tab 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Tab 2</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex align-items-center accordion pr-3">

                                <i className="bi bi-chevron-down" data-toggle="collapse" href="#collapseExample"></i>
                            </div>
                        </div>
                        <div className="collapse m-0" id="collapseExample">
                            <div className="row bg-white border p-1">
                                <div className="form-group row mb-0 pl-3">
                                    <label htmlFor="exampleFormControlInput1" className="col-md-6 nameselect">Email address</label>
                                    <input type="email" className="form-control col-md-6 nameselect" id="exampleFormControlInput1" placeholder="Select"></input>
                                    <label htmlFor="exampleFormControlInput1" className="col-md-6 mt-1 nameselect ">Email
                                        address</label>
                                    <input type="email" className="form-control col-md-6 mt-1 nameselect" id="exampleFormControlInput1" placeholder="Select"></input>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <div className="form-check ml-5">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div className="form-check ml-5">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div className="form-check ml-5">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Default checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 offset-md-2 p-0 pl-1">
                            <div className="row bg-white border mt-1">
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <button type="button" className="btn button btn-sm btn-outline-secondary mx-3">All</button>
                                    <p className="text-secondary mt-2">Sort by</p>
                                    <select className="form-select mx-2 text-secondary" aria-label="Default select example">
                                        <option defaultValue="">Name</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="ml-auto d-flex align-items-center">
                                    <ul className="nav nav-tabs ">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">Tab 1</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Tab 2</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="verticalbar" className="row">
                            <div className="col-md-2 p-0">
                                <nav className="nav flex-column">
                                    <a href="#" style={{height: "95px"}} className="box  d-flex bg-white text-secondary justify-content-center border align-items-center">COMPANY</a>
                                    <a href="#" style={{height: "95px"}} className="box  d-flex justify-content-center border align-items-center">Plant</a>
                                    <a href="#" style={{height: "95px"}} className="box  d-flex justify-content-center border align-items-center">WAREHOUSE</a>
                                    <a href="#" style={{height: "95px"}} className="box  d-flex justify-content-center border align-items-center">FLOOR</a>
                                    <a href="#" style={{height: "95px"}} className="box  d-flex justify-content-center border align-items-center">STORAGE
                                        SECTION</a>

                                </nav>
                            </div>
                            <div className="col-md-10 p-0 bg-white">
                                <div section="tabbar" className="bg-white pad">
                                    <p className="my-1 pl-2">Genral Data</p>
                                    <form className="p-1 border">
                                        <div className="form-row justify-content-between mb-1">
                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Company Code <span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-select text-secondary field">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Company Name<span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-select text-secondary field float-right">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row justify-content-between mb-1">
                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Industry Vertical<span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-select text-secondary field">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Currency<span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-select text-secondary field float-right">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row justify-content-between mb-0">
                                            <div className="col-sm-3 label">
                                                <label htmlFor="">warehouse destruction</label>
                                            </div>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control field" placeholder="Enter"></input>
                                            </div>

                                            <div className="col-sm-3 label">
                                                <label htmlFor="">warehouse destruction</label>
                                            </div>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control field float-right " placeholder="Enter"></input>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div section="tabbar" className="bg-white pad">
                                    <p className="my-1 pl-2">Genral Data</p>
                                    <form className="p-1 border">
                                        <div className="form-row justify-content-between mb-1">
                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Company Code <span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3 ">
                                                <select className="form-select text-secondary field">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Company Name<span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-select text-secondary field float-right">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row justify-content-between mb-1">
                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Industry Vertical<span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-select text-secondary field">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Currency<span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-select text-secondary field float-right">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row justify-content-between mb-0">
                                            <div className="col-sm-3 label">
                                                <label htmlFor="">warehouse destruction</label>
                                            </div>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control field" placeholder="Enter"></input>
                                            </div>

                                            <div className="col-sm-3 label">
                                                <label htmlFor="">warehouse destruction</label>
                                            </div>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control field float-right " placeholder="Enter"></input>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div section="tabbar" className="bg-white pad">
                                    <p className=" mt-0 mb-1 pl-2">Genral Data</p>
                                    <form className="p-1 border">
                                        <div className="form-row justify-content-between mb-1">
                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Company Code <span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3 ">
                                                <select className="form-select text-secondary field">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Company Name<span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3 ">
                                                <select className="form-select text-secondary field float-right">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row justify-content-between mb-1">
                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Industry Vertical<span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-select text-secondary field">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Currency<span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-select text-secondary field float-right">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row justify-content-between mb-0">
                                            <div className="col-sm-3 label">
                                                <label htmlFor="">warehouse destruction</label>
                                            </div>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control field" placeholder="Enter"></input>
                                            </div>

                                            <div className="col-sm-3 label">
                                                <label htmlFor="">warehouse destruction</label>
                                            </div>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control field float-right " placeholder="Enter"></input>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div section="tabbar" className="bg-white pad">
                                    <p className=" mt-0 mb-1 pl-2">Genral Data</p>
                                    <form className="p-1 border">
                                        <div className="form-row justify-content-between mb-1">
                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Company Code <span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-select text-secondary field">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Company Name<span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-select text-secondary field float-right">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row justify-content-between mb-1">
                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Industry Vertical<span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-select text-secondary field">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-3 label">
                                                <label htmlFor="">Currency<span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-select text-secondary field float-right">
                                                    <option defaultValue="">Select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row justify-content-between mb-0">
                                            <div className="col-sm-3 label">
                                                <label htmlFor="">warehouse destruction</label>
                                            </div>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control field" placeholder="Enter"></input>
                                            </div>

                                            <div className="col-sm-3 label">
                                                <label htmlFor="">warehouse destruction</label>
                                            </div>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control field float-right " placeholder="Enter"></input>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 pl-2 mt-1">
                        <div className="bg-white" style={{height: "100%"}}>
                            <div className="logo text-center mb-2">
                                <img src={logo} alt="" className="img-fluid" style={{height: "46px",width: "247px"}}></img>
                            </div>
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header bg-white" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="acc btn btn-outline-secondary btn-sm btn-block rounded-0" data-toggle="collapse" data-target="#collapseOne"><i className="bi bi-arrow-left text-white arrow float-left"></i>
                                                INBOUND
                                            </button>

                                        </h5>
                                    </div>

                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card text-center">
                                            <h5 className="card-header">Featured</h5>
                                            <div className="card-body">
                                                <h5 className="card-title">Special title treatment</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to
                                                    additional content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="accordion">
                                <div className="card  mt-1">
                                    <div className="card-header bg-white" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="acc btn btn-outline-secondary btn-sm btn-block rounded-0" data-toggle="collapse" data-target="#collapseOne1"><i className="bi bi-arrow-left text-white arrow float-left"></i>
                                                MAKE AND CHANGE
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne1" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card text-center">
                                            <h5 className="card-header">Featured</h5>
                                            <div className="card-body">
                                                <h5 className="card-title">Special title treatment</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to
                                                    additional content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="accordion">
                                <div className="card  mt-1">
                                    <div className="card-header   bg-white" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="acc btn btn-outline-secondary btn-sm btn-block rounded-0" data-toggle="collapse" data-target="#collapseOne3"><i className="bi text-white bi-arrow-left arrow float-left"></i>
                                                OUTBOUND
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne3" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card text-center">
                                            <h5 className="card-header">Featured</h5>
                                            <div className="card-body">
                                                <h5 className="card-title">Special title treatment</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to
                                                    additional content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="accordion">
                                <div className="card  mt-1">
                                    <div className="card-header bg-white" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="acc btn btn-outline-secondary btn-sm btn-block rounded-0" data-toggle="collapse" data-target="#collapseOne4"><i className="bi bi-arrow-left text-white arrow float-left"></i>
                                                DASHBOARD
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne4" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card text-center">
                                            <h5 className="card-header">Featured</h5>
                                            <div className="card-body">
                                                <h5 className="card-title">Special title treatment</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to
                                                    additional content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="row p-0 m-0 bg-white">
                    <div className="col-md-4  px-2  mt-1">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination ">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-5 offset-md-3 mt-1" style={{paddingLeft:"64px"}}>
                        <button className="btn btn-sm btn-outline-secondary "><span><i className="bi bi-arrow-left"></i>
                            </span>Back</button>
                        <a href="plant.html" className="btn btn-sm btn-outline-secondary ml-3">Next <span><i className="bi bi-arrow-right"></i></span></a>
                    </div>
                </div>
      </div>
    </div>
    </div>
  );
}

export default App;
