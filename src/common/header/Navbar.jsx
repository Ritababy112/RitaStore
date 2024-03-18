import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import Categories from "../../components/MainPage/Categories";

const Navbar = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [show, set_show] = useState(false);
  // Handler function to update the selected value
  // const handleSelectChange = (event) => {
  //   setSelectedValue(event.target.value);
  //   };
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="header " style={{ zIndex: "1" }}>
        <div className="container d_flex Rt" style={{ position: "absolute"  }}>
          <div className="catgrories d_flex">
            <h4>
              {/* Dropdown using the select element */}
              {/* <select id="dropdown" value={selectedValue} onChange={handleSelectChange}>
        Options for the dropdown
        <option value="">Categories:</option>
        <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
      </select> */}
              <div style={{ position: "relative", paddingLeft:"10px",  overflow: "visible"}}>
                <button onClick={() => set_show(!show)}>Categories</button>
                 <div style={{position:'relative',top:'20px',left:'0'}} >{show?<Categories />:''}</div> 
              </div>

              {/* Displaying the selected value */}
              {selectedValue && <p>You selected: {selectedValue}</p>}
            </h4>
          </div>

          <div className="navlink" style={{ position: "relative", paddingRight: "10px" }}>
            <ul
              className={`link f_flex uppercase ${
                MobileMenu ? "nav-links-MobileMenu" : "nav-links"
              }`}
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/pages">pages</Link>
              </li>
              <li>
                <Link to="/user">user account</Link>
              </li>
              <li>
                <Link to="/vendor">vendor account</Link>
              </li>
              <li>
                <Link to="/track">track my order</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
            {MobileMenu && (
              <ul className="fa">
                <li className="fa1">
                  <Link to="/">home</Link>
                </li>
                <li className="fa1">
                  <Link to="/pages">pages</Link>
                </li>
                <li className="fa1">
                  <Link to="/user">user account</Link>
                </li>
                <li className="fa1">
                  <Link to="/vendor">vendor account</Link>
                </li>
                <li className="fa1">
                  <Link to="/track">track my order</Link>
                </li>
                <li className="fa1">
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
