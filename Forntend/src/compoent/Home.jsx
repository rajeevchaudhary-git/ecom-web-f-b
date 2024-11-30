import React, { useState,useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addToCart,removeFromCart } from '../Redux/cartSlice';
import axios from 'axios';

function Home() {
    const url = 'http://localhost:3000/api/v1/get-products';
    const base_url = `http://localhost:3000/uploads/`;
    const [products, setProducts] = useState(['']);
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    
    const handlecart = (product)=>{
        dispatch(addToCart(product));
        // console.log(product);
    }
    


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/fetchallcat');
                setCategories(response.data.data); // Assuming the API response is an array of categories
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(url);
                console.log(res.data);
                setProducts(res.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/fetchallcat');
                setCategories(response.data.data); // Assuming the API response is an array of categories
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
        fetchProducts();
    }, []);

   
  return (
    <>
      <div
        className="modal fade custom-modal"
        id="quickViewModal"
        tabIndex="-1"
        aria-labelledby="quickViewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                  <div className="detail-gallery">
                    <span className="zoom-icon">
                      <i className="fi-rs-search"></i>
                    </span>
                    {/* MAIN SLIDES */}
                    <div className="product-image-slider">
                      <figure className="border-radius-10">
                        <img
                          src="/imgs/shop/product-16-2.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="/imgs/shop/product-16-1.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="/imgs/shop/product-16-3.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="/imgs/shop/product-16-4.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="/imgs/shop/product-16-5.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="/imgs/shop/product-16-6.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="/imgs/shop/product-16-7.jpg"
                          alt="product image"
                        />
                      </figure>
                    </div>
                    {/* THUMBNAILS */}
                    <div className="slider-nav-thumbnails">
                      <div>
                        <img
                          src="/imgs/shop/thumbnail-3.jpg"
                          alt="product image"
                        />
                      </div>
                      <div>
                        <img
                          src="/imgs/shop/thumbnail-4.jpg"
                          alt="product image"
                        />
                      </div>
                      <div>
                        <img
                          src="/imgs/shop/thumbnail-5.jpg"
                          alt="product image"
                        />
                      </div>
                      <div>
                        <img
                          src="/imgs/shop/thumbnail-6.jpg"
                          alt="product image"
                        />
                      </div>
                      <div>
                        <img
                          src="/imgs/shop/thumbnail-7.jpg"
                          alt="product image"
                        />
                      </div>
                      <div>
                        <img
                          src="/imgs/shop/thumbnail-8.jpg"
                          alt="product image"
                        />
                      </div>
                      <div>
                        <img
                          src="/imgs/shop/thumbnail-9.jpg"
                          alt="product image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Gallery */}
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="detail-info pr-30 pl-30">
                    <span className="stock-status out-stock"> Sale Off </span>
                    <h3 className="title-detail">
                      <a
                        href="shop-product-right.html"
                        className="text-heading"
                      >
                        Seeds of Change Organic Quinoa, Brown
                      </a>
                    </h3>
                    <div className="product-detail-rating">
                      <div className="product-rate-cover text-end">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: '90%' }}
                          ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {' '}
                          (32 reviews)
                        </span>
                      </div>
                    </div>
                    <div className="clearfix product-price-cover">
                      <div className="product-price primary-color float-left">
                        <span className="current-price text-brand">$38</span>
                        <span>
                          <span className="save-price font-md color3 ml-15">
                            26% Off
                          </span>
                          <span className="old-price font-md ml-15">$52</span>
                        </span>
                      </div>
                    </div>
                    <div className="detail-extralink mb-30">
                      <div className="detail-qty border radius">
                        <a href="#" className="qty-down">
                          <i className="fi-rs-angle-small-down"></i>
                        </a>
                        <span className="qty-val">1</span>
                        <a href="#" className="qty-up">
                          <i className="fi-rs-angle-small-up"></i>
                        </a>
                      </div>
                      <div className="product-extra-link2">
                        <button
                          type="submit"
                          className="button button-add-to-cart"
                        >
                          <i className="fi-rs-shopping-cart"></i>Add to cart
                        </button>
                      </div>
                    </div>
                    <div className="font-xs">
                      <ul>
                        <li className="mb-5">
                          Vendor: <span className="text-brand">Nest</span>
                        </li>
                        <li className="mb-5">
                          MFG:<span className="text-brand"> Jun 4.2022</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Detail Info */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* //header  */}


      <header class="header-area header-style-1 header-height-2">
        <div class="mobile-promotion">
            <span>Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left</span>
        </div>
        <div class="header-top header-top-ptb-1 d-none d-lg-block">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-3 col-lg-4">
                        <div class="header-info">
                            <ul>
                                <li><a href="page-about.html">About Us</a></li>
                                <li><a href="page-account.html">My Account</a></li>
                                <li><a href="shop-wishlist.html">Wishlist</a></li>
                                <li><a href="shop-order.html">Order Tracking</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-4">
                        <div class="text-center">
                            <div id="news-flash" class="d-inline-block">
                                <ul>
                                    <li>100% Secure delivery without contacting the courier</li>
                                    <li>Supper Value Deals - Save more with coupons</li>
                                    <li>Trendy 25silver jewelry, save up 35% off today</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4">
                        <div class="header-info header-info-right">
                            <ul>
                                <li>Need help? Call Us: <strong class="text-brand"> + 1800 900</strong></li>
                                <li>
                                    <a class="language-dropdown-active" href="#">English <i class="fi-rs-angle-small-down"></i></a>
                                    <ul class="language-dropdown">
                                        <li>
                                            <a href="#"><img src="/imgs/theme/flag-fr.png" alt="" />Français</a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="/imgs/theme/flag-dt.png" alt="" />Deutsch</a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="/imgs/theme/flag-ru.png" alt="" />Pусский</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a class="language-dropdown-active" href="#">USD <i class="fi-rs-angle-small-down"></i></a>
                                    <ul class="language-dropdown">
                                        <li>
                                            <a href="#"><img src="/imgs/theme/flag-fr.png" alt="" />INR</a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="/imgs/theme/flag-dt.png" alt="" />MBP</a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="/imgs/theme/flag-ru.png" alt="" />EU</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-middle header-middle-ptb-1 d-none d-lg-block">
            <div class="container">
                <div class="header-wrap">
                    <div class="logo logo-width-1">
                        <a href="index.html"><img src="/imgs/theme/logo.svg" alt="logo" /></a>
                    </div>
                    <div class="header-right">
                        <div class="search-style-2">
                            <form action="#">
                                <select class="select-active">
                                    <option>All Categories</option>
                                    <option>Milks and Dairies</option>
                                    <option>Wines & Alcohol</option>
                                    <option>Clothing & Beauty</option>
                                    <option>Pet Foods & Toy</option>
                                    <option>Fast food</option>
                                    <option>Baking material</option>
                                    <option>Vegetables</option>
                                    <option>Fresh Seafood</option>
                                    <option>Noodles & Rice</option>
                                    <option>Ice cream</option>
                                </select>
                                <input type="text" placeholder="Search for items..." />
                            </form>
                        </div>
                        <div class="header-action-right">
                            <div class="header-action-2">
                                <div class="search-location">
                                    <form action="#">
                                        <select class="select-active">
                                            <option>Your Location</option>
                                            <option>Alabama</option>
                                            <option>Alaska</option>
                                            <option>Arizona</option>
                                            <option>Delaware</option>
                                            <option>Florida</option>
                                            <option>Georgia</option>
                                            <option>Hawaii</option>
                                            <option>Indiana</option>
                                            <option>Maryland</option>
                                            <option>Nevada</option>
                                            <option>New Jersey</option>
                                            <option>New Mexico</option>
                                            <option>New York</option>
                                        </select>
                                    </form>
                                </div>
                                <div class="header-action-icon-2">
                                    <a href="shop-compare.html">
                                        <img class="svgInject" alt="Nest" src="/imgs/theme/icons/icon-compare.svg" />
                                        <span class="pro-count blue">3</span>
                                    </a>
                                    <a href="shop-compare.html"><span class="lable ml-0">Compare</span></a>
                                </div>
                                <div class="header-action-icon-2">
                                    <a href="shop-wishlist.html">
                                        <img class="svgInject" alt="Nest" src="/imgs/theme/icons/icon-heart.svg" />
                                        <span class="pro-count blue">6</span>
                                    </a>
                                    <a href="shop-wishlist.html"><span class="lable">Wishlist</span></a>
                                </div>
                                <div class="header-action-icon-2">
                                    <a class="mini-cart-icon" href="shop-cart.html">
                                        <img alt="Nest" src="/imgs/theme/icons/icon-cart.svg" />
                                        <span class="pro-count blue">2</span>
                                    </a>
                                    <a href="shop-cart.html"><span class="lable">Cart</span></a>
                                    <div class="cart-dropdown-wrap cart-dropdown-hm2">
                                        <ul>
                                            <li>
                                                <div class="shopping-cart-img">
                                                    <a href="shop-product-right.html"><img alt="Nest" src="/imgs/shop/thumbnail-3.jpg" /></a>
                                                </div>
                                                <div class="shopping-cart-title">
                                                    <h4><a href="shop-product-right.html">Daisy Casual Bag</a></h4>
                                                    <h4><span>1 × </span>$800.00</h4>
                                                </div>
                                                <div class="shopping-cart-delete">
                                                    <a href="#"><i class="fi-rs-cross-small"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="shopping-cart-img">
                                                    <a href="shop-product-right.html"><img alt="Nest" src="/imgs/shop/thumbnail-2.jpg" /></a>
                                                </div>
                                                <div class="shopping-cart-title">
                                                    <h4><a href="shop-product-right.html">Corduroy Shirts</a></h4>
                                                    <h4><span>1 × </span>$3200.00</h4>
                                                </div>
                                                <div class="shopping-cart-delete">
                                                    <a href="#"><i class="fi-rs-cross-small"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="shopping-cart-footer">
                                            <div class="shopping-cart-total">
                                                <h4>Total <span>$4000.00</span></h4>
                                            </div>
                                            <div class="shopping-cart-button">
                                                <a href="shop-cart.html" class="outline">View cart</a>
                                                <a href="shop-checkout.html">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="header-action-icon-2">
                                    <a href="page-account.html">
                                        <img class="svgInject" alt="Nest" src="/imgs/theme/icons/icon-user.svg" />
                                    </a>
                                    <a href="page-account.html"><span class="lable ml-0">Account</span></a>
                                    <div class="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                        <ul>
                                            <li><a href="page-account.html"><i class="fi fi-rs-user mr-10"></i>My Account</a></li>
                                            <li><a href="page-account.html"><i class="fi fi-rs-location-alt mr-10"></i>Order Tracking</a></li>
                                            <li><a href="page-account.html"><i class="fi fi-rs-label mr-10"></i>My Voucher</a></li>
                                            <li><a href="shop-wishlist.html"><i class="fi fi-rs-heart mr-10"></i>My Wishlist</a></li>
                                            <li><a href="page-account.html"><i class="fi fi-rs-settings-sliders mr-10"></i>Setting</a></li>
                                            <li><a href="page-login.html"><i class="fi fi-rs-sign-out mr-10"></i>Sign out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bottom header-bottom-bg-color sticky-bar">
            <div class="container">
                <div class="header-wrap header-space-between position-relative">
                    <div class="logo logo-width-1 d-block d-lg-none">
                        <a href="index.html"><img src="/imgs/theme/logo.svg" alt="logo" /></a>
                    </div>
                    <div class="header-nav d-none d-lg-flex">
                        <div class="main-categori-wrap d-none d-lg-block">
                            <a class="categories-button-active" href="#">
                                <span class="fi-rs-apps"></span> <span class="et">Browse</span> All Categories
                                <i class="fi-rs-angle-down"></i>
                            </a>
                            <div class="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                                <div class="d-flex categori-dropdown-inner">
                                    <ul>
                                        <li>
                                            <a href="shop-grid-right.html"> <img src="/imgs/theme/icons/category-1.svg" alt="" />Milks and Dairies</a>
                                        </li>
                                        <li>
                                            <a href="shop-grid-right.html"> <img src="/imgs/theme/icons/category-2.svg" alt="" />Clothing & beauty</a>
                                        </li>
                                        <li>
                                            <a href="shop-grid-right.html"> <img src="/imgs/theme/icons/category-3.svg" alt="" />Pet Foods & Toy</a>
                                        </li>
                                        <li>
                                            <a href="shop-grid-right.html"> <img src="/imgs/theme/icons/category-4.svg" alt="" />Baking material</a>
                                        </li>
                                        <li>
                                            <a href="shop-grid-right.html"> <img src="/imgs/theme/icons/category-5.svg" alt="" />Fresh Fruit</a>
                                        </li>
                                    </ul>
                                    <ul class="end">
                                        <li>
                                            <a href="shop-grid-right.html"> <img src="/imgs/theme/icons/category-6.svg" alt="" />Wines & Drinks</a>
                                        </li>
                                        <li>
                                            <a href="shop-grid-right.html"> <img src="/imgs/theme/icons/category-7.svg" alt="" />Fresh Seafood</a>
                                        </li>
                                        <li>
                                            <a href="shop-grid-right.html"> <img src="/imgs/theme/icons/category-8.svg" alt="" />Fast food</a>
                                        </li>
                                        <li>
                                            <a href="shop-grid-right.html"> <img src="/imgs/theme/icons/category-9.svg" alt="" />Vegetables</a>
                                        </li>
                                        <li>
                                            <a href="shop-grid-right.html"> <img src="/imgs/theme/icons/category-10.svg" alt="" />Bread and Juice</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="more_slide_open" style={{ display:'none' }}>
                                    <div class="d-flex categori-dropdown-inner">
                                        <ul>
                                            <li>
                                                <a href="shop-grid-right.html"> <img src="/imgs/theme/icons/icon-1.svg" alt="" />Milks and Dairies</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html"> <img src="/imgs/theme/icons/icon-2.svg" alt="" />Clothing & beauty</a>
                                            </li>
                                        </ul>
                                        <ul class="end">
                                            <li>
                                                <a href="shop-grid-right.html"> <img src="/imgs/theme/icons/icon-3.svg" alt="" />Wines & Drinks</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html"> <img src="/imgs/theme/icons/icon-4.svg" alt="" />Fresh Seafood</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="more_categories"><span class="icon"></span> <span class="heading-sm-1">Show more...</span></div>
                            </div>
                        </div>
                        <div class="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                            <nav>
                                <ul>
                                    <li class="hot-deals"><img src="/imgs/theme/icons/icon-hot.svg" alt="hot deals" /><a href="shop-grid-right.html">Deals</a></li>
                                    <li>
                                        <a class="active" href="index.html">Home <i class="fi-rs-angle-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="index.html">Home 1</a></li>
                                            <li><a href="index-2.html">Home 2</a></li>
                                            <li><a href="index-3.html">Home 3</a></li>
                                            <li><a href="index-4.html">Home 4</a></li>
                                            <li><a href="index-5.html">Home 5</a></li>
                                            <li><a href="index-6.html">Home 6</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="page-about-2.html">About</a>
                                    </li>
                                    <li>
                                        <a href="shop-grid-right.html">Shop <i class="fi-rs-angle-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="shop-grid-right.html">Shop Grid – Right Sidebar</a></li>
                                            <li><a href="shop-grid-left.html">Shop Grid – Left Sidebar</a></li>
                                            <li><a href="shop-list-right.html">Shop List – Right Sidebar</a></li>
                                            <li><a href="shop-list-left.html">Shop List – Left Sidebar</a></li>
                                            <li><a href="shop-fullwidth.html">Shop - Wide</a></li>
                                            <li>
                                                <a href="#">Single Product <i class="fi-rs-angle-right"></i></a>
                                                <ul class="level-menu">
                                                    <li><a href="shop-product-right.html">Product – Right Sidebar</a></li>
                                                    <li><a href="shop-product-left.html">Product – Left Sidebar</a></li>
                                                    <li><a href="shop-product-full.html">Product – No sidebar</a></li>
                                                    <li><a href="shop-product-vendor.html">Product – Vendor Infor</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="shop-filter.html">Shop – Filter</a></li>
                                            <li><a href="shop-wishlist.html">Shop – Wishlist</a></li>
                                            <li><a href="shop-cart.html">Shop – Cart</a></li>
                                            <li><a href="shop-checkout.html">Shop – Checkout</a></li>
                                            <li><a href="shop-compare.html">Shop – Compare</a></li>
                                            <li>
                                                <a href="#">Shop Invoice<i class="fi-rs-angle-right"></i></a>
                                                <ul class="level-menu">
                                                    <li><a href="shop-invoice-1.html">Shop Invoice 1</a></li>
                                                    <li><a href="shop-invoice-2.html">Shop Invoice 2</a></li>
                                                    <li><a href="shop-invoice-3.html">Shop Invoice 3</a></li>
                                                    <li><a href="shop-invoice-4.html">Shop Invoice 4</a></li>
                                                    <li><a href="shop-invoice-5.html">Shop Invoice 5</a></li>
                                                    <li><a href="shop-invoice-6.html">Shop Invoice 6</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Vendors <i class="fi-rs-angle-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="vendors-grid.html">Vendors Grid</a></li>
                                            <li><a href="vendors-list.html">Vendors List</a></li>
                                            <li><a href="vendor-details-1.html">Vendor Details 01</a></li>
                                            <li><a href="vendor-details-2.html">Vendor Details 02</a></li>
                                            <li><a href="vendor-dashboard.html">Vendor Dashboard</a></li>
                                            <li><a href="vendor-guide.html">Vendor Guide</a></li>
                                        </ul>
                                    </li>
                                    <li class="position-static">
                                        <a href="#">Mega menu <i class="fi-rs-angle-down"></i></a>
                                        <ul class="mega-menu">
                                            <li class="sub-mega-menu sub-mega-menu-width-22">
                                                <a class="menu-title" href="#">Fruit & Vegetables</a>
                                                <ul>
                                                    <li><a href="shop-product-right.html">Meat & Poultry</a></li>
                                                    <li><a href="shop-product-right.html">Fresh Vegetables</a></li>
                                                    <li><a href="shop-product-right.html">Herbs & Seasonings</a></li>
                                                    <li><a href="shop-product-right.html">Cuts & Sprouts</a></li>
                                                    <li><a href="shop-product-right.html">Exotic Fruits & Veggies</a></li>
                                                    <li><a href="shop-product-right.html">Packaged Produce</a></li>
                                                </ul>
                                            </li>
                                            <li class="sub-mega-menu sub-mega-menu-width-22">
                                                <a class="menu-title" href="#">Breakfast & Dairy</a>
                                                <ul>
                                                    <li><a href="shop-product-right.html">Milk & Flavoured Milk</a></li>
                                                    <li><a href="shop-product-right.html">Butter and Margarine</a></li>
                                                    <li><a href="shop-product-right.html">Eggs Substitutes</a></li>
                                                    <li><a href="shop-product-right.html">Marmalades</a></li>
                                                    <li><a href="shop-product-right.html">Sour Cream</a></li>
                                                    <li><a href="shop-product-right.html">Cheese</a></li>
                                                </ul>
                                            </li>
                                            <li class="sub-mega-menu sub-mega-menu-width-22">
                                                <a class="menu-title" href="#">Meat & Seafood</a>
                                                <ul>
                                                    <li><a href="shop-product-right.html">Breakfast Sausage</a></li>
                                                    <li><a href="shop-product-right.html">Dinner Sausage</a></li>
                                                    <li><a href="shop-product-right.html">Chicken</a></li>
                                                    <li><a href="shop-product-right.html">Sliced Deli Meat</a></li>
                                                    <li><a href="shop-product-right.html">Wild Caught Fillets</a></li>
                                                    <li><a href="shop-product-right.html">Crab and Shellfish</a></li>
                                                </ul>
                                            </li>
                                            <li class="sub-mega-menu sub-mega-menu-width-34">
                                                <div class="menu-banner-wrap">
                                                    <a href="shop-product-right.html"><img src="/imgs/banner/banner-menu.png" alt="Nest" /></a>
                                                    <div class="menu-banner-content">
                                                        <h4>Hot deals</h4>
                                                        <h3>
                                                            Don't miss<br />
                                                            Trending
                                                        </h3>
                                                        <div class="menu-banner-price">
                                                            <span class="new-price text-success">Save to 50%</span>
                                                        </div>
                                                        <div class="menu-banner-btn">
                                                            <a href="shop-product-right.html">Shop now</a>
                                                        </div>
                                                    </div>
                                                    <div class="menu-banner-discount">
                                                        <h3>
                                                            <span>25%</span>
                                                            off
                                                        </h3>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="blog-category-grid.html">Blog <i class="fi-rs-angle-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-category-grid.html">Blog Category Grid</a></li>
                                            <li><a href="blog-category-list.html">Blog Category List</a></li>
                                            <li><a href="blog-category-big.html">Blog Category Big</a></li>
                                            <li><a href="blog-category-fullwidth.html">Blog Category Wide</a></li>
                                            <li>
                                                <a href="#">Single Post <i class="fi-rs-angle-right"></i></a>
                                                <ul class="level-menu level-menu-modify">
                                                    <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                                    <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                                    <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Pages <i class="fi-rs-angle-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="page-about-2.html">About Us</a></li>
                                            <li><a href="page-contact.html">Contact</a></li>
                                            <li><a href="page-account.html">My Account</a></li>
                                            <li><a href="page-login.html">Login</a></li>
                                            <li><a href="page-register.html">Register</a></li>
                                            <li><a href="page-forgot-password.html">Forgot password</a></li>
                                            <li><a href="page-reset-password.html">Reset password</a></li>
                                            <li><a href="page-purchase-guide.html">Purchase Guide</a></li>
                                            <li><a href="page-privacy-policy.html">Privacy Policy</a></li>
                                            <li><a href="page-terms.html">Terms of Service</a></li>
                                            <li><a href="page-404.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="page-contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="hotline d-none d-lg-flex">
                        <img src="/imgs/theme/icons/icon-headphone.svg" alt="hotline" />
                        <p>1900 - 888<span>24/7 Support Center</span></p>
                    </div>
                    <div class="header-action-icon-2 d-block d-lg-none">
                        <div class="burger-icon burger-icon-white">
                            <span class="burger-icon-top"></span>
                            <span class="burger-icon-mid"></span>
                            <span class="burger-icon-bottom"></span>
                        </div>
                    </div>
                    <div class="header-action-right d-block d-lg-none">
                        <div class="header-action-2">
                            <div class="header-action-icon-2">
                                <a href="shop-wishlist.html">
                                    <img alt="Nest" src="/imgs/theme/icons/icon-heart.svg" />
                                    <span class="pro-count white">4</span>
                                </a>
                            </div>
                            <div class="header-action-icon-2">
                                <a class="mini-cart-icon" href="shop-cart.html">
                                    <img alt="Nest" src="/imgs/theme/icons/icon-cart.svg" />
                                    <span class="pro-count white">2</span>
                                </a>
                                <div class="cart-dropdown-wrap cart-dropdown-hm2">
                                    <ul>
                                        <li>
                                            <div class="shopping-cart-img">
                                                <a href="shop-product-right.html"><img alt="Nest" src="/imgs/shop/thumbnail-3.jpg" /></a>
                                            </div>
                                            <div class="shopping-cart-title">
                                                <h4><a href="shop-product-right.html">Plain Striola Shirts</a></h4>
                                                <h3><span>1 × </span>$800.00</h3>
                                            </div>
                                            <div class="shopping-cart-delete">
                                                <a href="#"><i class="fi-rs-cross-small"></i></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="shopping-cart-img">
                                                <a href="shop-product-right.html"><img alt="Nest" src="/imgs/shop/thumbnail-4.jpg" /></a>
                                            </div>
                                            <div class="shopping-cart-title">
                                                <h4><a href="shop-product-right.html">Macbook Pro 2022</a></h4>
                                                <h3><span>1 × </span>$3500.00</h3>
                                            </div>
                                            <div class="shopping-cart-delete">
                                                <a href="#"><i class="fi-rs-cross-small"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="shopping-cart-footer">
                                        <div class="shopping-cart-total">
                                            <h4>Total <span>$383.00</span></h4>
                                        </div>
                                        <div class="shopping-cart-button">
                                            <a href="shop-cart.html">View cart</a>
                                            <a href="shop-checkout.html">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <div className="mobile-header-active mobile-header-wrapper-style">
    <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-top">
            <div className="mobile-header-logo">
                <a href="index.html"><img src="/imgs/theme/logo.svg" alt="logo" /></a>
            </div>
            <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                <button className="close-style search-close">
                    <i className="icon-top"></i>
                    <i className="icon-bottom"></i>
                </button>
            </div>
        </div>
        <div className="mobile-header-content-area">
            <div className="mobile-search search-style-3 mobile-header-border">
                <form action="#">
                    <input type="text" placeholder="Search for items…" />
                    <button type="submit"><i className="fi-rs-search"></i></button>
                </form>
            </div>
            <div className="mobile-menu-wrap mobile-header-border">
                {/* mobile menu start */}
                <nav>
                    <ul className="mobile-menu font-heading">
                        <li className="menu-item-has-children">
                            <a href="index.html">Home</a>
                            <ul className="dropdown">
                                <li><a href="index.html">Home 1</a></li>
                                <li><a href="index-2.html">Home 2</a></li>
                                <li><a href="index-3.html">Home 3</a></li>
                                <li><a href="index-4.html">Home 4</a></li>
                                <li><a href="index-5.html">Home 5</a></li>
                                <li><a href="index-6.html">Home 6</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="shop-grid-right.html">shop</a>
                            <ul className="dropdown">
                                <li><a href="shop-grid-right.html">Shop Grid – Right Sidebar</a></li>
                                <li><a href="shop-grid-left.html">Shop Grid – Left Sidebar</a></li>
                                <li><a href="shop-list-right.html">Shop List – Right Sidebar</a></li>
                                <li><a href="shop-list-left.html">Shop List – Left Sidebar</a></li>
                                <li><a href="shop-fullwidth.html">Shop - Wide</a></li>
                                <li className="menu-item-has-children">
                                    <a href="#">Single Product</a>
                                    <ul className="dropdown">
                                        <li><a href="shop-product-right.html">Product – Right Sidebar</a></li>
                                        <li><a href="shop-product-left.html">Product – Left Sidebar</a></li>
                                        <li><a href="shop-product-full.html">Product – No sidebar</a></li>
                                        <li><a href="shop-product-vendor.html">Product – Vendor Infor</a></li>
                                    </ul>
                                </li>
                                <li><a href="shop-filter.html">Shop – Filter</a></li>
                                <li><a href="shop-wishlist.html">Shop – Wishlist</a></li>
                                <li><a href="shop-cart.html">Shop – Cart</a></li>
                                <li><a href="shop-checkout.html">Shop – Checkout</a></li>
                                <li><a href="shop-compare.html">Shop – Compare</a></li>
                                <li className="menu-item-has-children">
                                    <a href="#">Shop Invoice</a>
                                    <ul className="dropdown">
                                        <li><a href="shop-invoice-1.html">Shop Invoice 1</a></li>
                                        <li><a href="shop-invoice-2.html">Shop Invoice 2</a></li>
                                        <li><a href="shop-invoice-3.html">Shop Invoice 3</a></li>
                                        <li><a href="shop-invoice-4.html">Shop Invoice 4</a></li>
                                        <li><a href="shop-invoice-5.html">Shop Invoice 5</a></li>
                                        <li><a href="shop-invoice-6.html">Shop Invoice 6</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#">Vendors</a>
                            <ul className="dropdown">
                                <li><a href="vendors-grid.html">Vendors Grid</a></li>
                                <li><a href="vendors-list.html">Vendors List</a></li>
                                <li><a href="vendor-details-1.html">Vendor Details 01</a></li>
                                <li><a href="vendor-details-2.html">Vendor Details 02</a></li>
                                <li><a href="vendor-dashboard.html">Vendor Dashboard</a></li>
                                <li><a href="vendor-guide.html">Vendor Guide</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#">Mega menu</a>
                            <ul className="dropdown">
                                <li className="menu-item-has-children">
                                    <a href="#">Women's Fashion</a>
                                    <ul className="dropdown">
                                        <li><a href="shop-product-right.html">Dresses</a></li>
                                        <li><a href="shop-product-right.html">Blouses & Shirts</a></li>
                                        <li><a href="shop-product-right.html">Hoodies & Sweatshirts</a></li>
                                        <li><a href="shop-product-right.html">Women's Sets</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">Men's Fashion</a>
                                    <ul className="dropdown">
                                        <li><a href="shop-product-right.html">Jackets</a></li>
                                        <li><a href="shop-product-right.html">Casual Faux Leather</a></li>
                                        <li><a href="shop-product-right.html">Genuine Leather</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">Technology</a>
                                    <ul className="dropdown">
                                        <li><a href="shop-product-right.html">Gaming Laptops</a></li>
                                        <li><a href="shop-product-right.html">Ultraslim Laptops</a></li>
                                        <li><a href="shop-product-right.html">Tablets</a></li>
                                        <li><a href="shop-product-right.html">Laptop Accessories</a></li>
                                        <li><a href="shop-product-right.html">Tablet Accessories</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="blog-category-fullwidth.html">Blog</a>
                            <ul className="dropdown">
                                <li><a href="blog-category-grid.html">Blog Category Grid</a></li>
                                <li><a href="blog-category-list.html">Blog Category List</a></li>
                                <li><a href="blog-category-big.html">Blog Category Big</a></li>
                                <li><a href="blog-category-fullwidth.html">Blog Category Wide</a></li>
                                <li className="menu-item-has-children">
                                    <a href="#">Single Product Layout</a>
                                    <ul className="dropdown">
                                        <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                        <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                        <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#">Pages</a>
                            <ul className="dropdown">
                                <li><a href="page-about-2.html">About Us</a></li>
                                <li><a href="page-contact.html">Contact</a></li>
                                <li><a href="page-account.html">My Account</a></li>
                                <li><a href="page-login.html">Login</a></li>
                                <li><a href="page-register.html">Register</a></li>
                                <li><a href="page-forgot-password.html">Forgot password</a></li>
                                <li><a href="page-reset-password.html">Reset password</a></li>
                                <li><a href="page-purchase-guide.html">Purchase Guide</a></li>
                                <li><a href="page-privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="page-terms.html">Terms of Service</a></li>
                                <li><a href="page-404.html">404 Page</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#">Language</a>
                            <ul className="dropdown">
                                <li><a href="#">English</a></li>
                                <li><a href="#">French</a></li>
                                <li><a href="#">German</a></li>
                                <li><a href="#">Russian</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* mobile menu end */}
            </div>
        </div>
    </div>
</div>;


<main class="main">
        <div class="container mb-30">
            <div class="row flex-row-reverse">
                <div class="col-lg-4-5">
                    <section class="home-slider position-relative mb-30">
                        <div class="home-slide-cover mt-30">
                            <div class="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                           
                                <div 
    className="single-hero-slider single-animation-wrap" 
    style={{ backgroundImage: "url(/imgs/slider/slider-2.png)" }}
>

                                    <div class="slider-content">
                                        <h1 class="display-2 mb-40">
                                            Fresh Vegetables<br />
                                            Big discount
                                        </h1>
                                        <p class="mb-65">Save up to 50% off on your first order</p>
                                        <form class="form-subcriber d-flex">
                                            <input type="email" placeholder="Your emaill address" />
                                            <button class="btn" type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="slider-arrow hero-slider-1-arrow"></div>
                        </div>
                    </section>
                    <section class="product-tabs section-padding position-relative">
                        <div class="section-title style-2">
                            <h3>Popular Products</h3>
                            <ul class="nav nav-tabs links" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="nav-tab-one" data-bs-toggle="tab" data-bs-target="#tab-one" type="button" role="tab" aria-controls="tab-one" aria-selected="true">All</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="nav-tab-two" data-bs-toggle="tab" data-bs-target="#tab-two" type="button" role="tab" aria-controls="tab-two" aria-selected="false">Milks & Dairies</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="nav-tab-three" data-bs-toggle="tab" data-bs-target="#tab-three" type="button" role="tab" aria-controls="tab-three" aria-selected="false">Coffes & Teas</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="nav-tab-four" data-bs-toggle="tab" data-bs-target="#tab-four" type="button" role="tab" aria-controls="tab-four" aria-selected="false">Pet Foods</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="nav-tab-five" data-bs-toggle="tab" data-bs-target="#tab-five" type="button" role="tab" aria-controls="tab-five" aria-selected="false">Meats</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="nav-tab-six" data-bs-toggle="tab" data-bs-target="#tab-six" type="button" role="tab" aria-controls="tab-six" aria-selected="false">Vegetables</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="nav-tab-seven" data-bs-toggle="tab" data-bs-target="#tab-seven" type="button" role="tab" aria-controls="tab-seven" aria-selected="false">Fruits</button>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                            <div className="row product-grid-4">
      {products.map((product) => (
        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6" key={product.id}>
          <div className="product-cart-wrap mb-30">
            <div className="product-img-action-wrap">
              <div className="product-img product-img-zoom">
                <a href="shop-product-right.html">
                  <img
                    className="default-img"
                    src={base_url + product.more_img}
                    alt={product.title}
                  />
                  <img
                    className="hover-img"
                    src={base_url + product.more_img}
                    alt={product.title}
                  />
                </a>
              </div>
              <div className="product-action-1">
                <a
                  aria-label="Add To Wishlist"
                  className="action-btn"
                  href="shop-wishlist.html"
                >
                  <i className="fi-rs-heart"></i>
                </a>
                <a
                  aria-label="Compare"
                  className="action-btn"
                  href="shop-compare.html"
                >
                  <i className="fi-rs-shuffle"></i>
                </a>
                <a
                  aria-label="Quick view"
                  className="action-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#quickViewModal"
                >
                  <i className="fi-rs-eye"></i>
                </a>
              </div>
              <div className="product-badges product-badges-position product-badges-mrg">
                <span className="hot">{product.badge}</span>
              </div>
            </div>
            <div className="product-content-wrap">
              <div className="product-category">
                <a href="shop-grid-right.html">{product.category}</a>
              </div>
              <h2>
                <a href="shop-product-right.html">{product.title}</a>
              </h2>
              <div className="product-rate-cover">
                <div className="product-rate d-inline-block">
                  <div
                    className="product-rating"
                    style={{ width: `${product.rating * 20}%` }}
                  ></div>
                </div>
                <span className="font-small ml-5 text-muted">
                  ({product.rating})
                </span>
              </div>
              <div>
                <span className="font-small text-muted">
                  By <a href="vendor-details-1.html">{product.vendor}</a>
                </span>
              </div>
              <div className="product-card-bottom">
                <div className="product-price">
                  <span>${product.price}</span>
                  <span className="old-price">${product.oldPrice}</span>
                </div>
                <div className="add-cart">
                  <button
                    className="add"
                    onClick={() => handlecart(product)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    <i className="fi-rs-shopping-cart mr-5"></i>Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
                            </div>

                            {/* <!--En tab seven--> */}
                        </div>
                        {/* <!--End tab-content--> */}
                    </section>
                    {/* <!--Products Tabs--> */}
                    <section class="section-padding pb-5">
                        <div class="section-title">
                            <h3 class="">Deals Of The Day</h3>
                            <a class="show-all" href="shop-grid-right.html">
                                All Deals
                                <i class="fi-rs-angle-right"></i>
                            </a>
                        </div>
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="product-cart-wrap style-2">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img">
                                            <a href="shop-product-right.html">
                                                <img src="/imgs/banner/banner-5.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="deals-countdown-wrap">
                                            <div class="deals-countdown" data-countdown="2025/03/25 00:00:00"></div>
                                        </div>
                                        <div class="deals-content">
                                            <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown</a></h2>
                                            <div class="product-rate-cover">
                                                <div class="product-rate d-inline-block">
                                                    <div class="product-rating" style={{ width: "90%" }}></div>
                                                </div>
                                                <span class="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div>
                                                <span class="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                                            </div>
                                            <div class="product-card-bottom">
                                                <div class="product-price">
                                                    <span>$32.85</span>
                                                    <span class="old-price">$33.8</span>
                                                </div>
                                                <div class="add-cart">
                                                    <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="product-cart-wrap style-2">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img">
                                            <a href="shop-product-right.html">
                                                <img src="/imgs/banner/banner-6.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="deals-countdown-wrap">
                                            <div class="deals-countdown" data-countdown="2026/04/25 00:00:00"></div>
                                        </div>
                                        <div class="deals-content">
                                            <h2><a href="shop-product-right.html">Perdue Simply Smart Organics Gluten</a></h2>
                                            <div class="product-rate-cover">
                                                <div class="product-rate d-inline-block">
                                                    <div class="product-rating" style={{ width: "90%" }}></div>
                                                </div>
                                                <span class="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div>
                                                <span class="font-small text-muted">By <a href="vendor-details-1.html">Old El Paso</a></span>
                                            </div>
                                            <div class="product-card-bottom">
                                                <div class="product-price">
                                                    <span>$24.85</span>
                                                    <span class="old-price">$26.8</span>
                                                </div>
                                                <div class="add-cart">
                                                    <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 d-none d-lg-block">
                                <div class="product-cart-wrap style-2">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img">
                                            <a href="shop-product-right.html">
                                                <img src="/imgs/banner/banner-7.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="deals-countdown-wrap">
                                            <div class="deals-countdown" data-countdown="2027/03/25 00:00:00"></div>
                                        </div>
                                        <div class="deals-content">
                                            <h2><a href="shop-product-right.html">Signature Wood-Fired Mushroom</a></h2>
                                            <div class="product-rate-cover">
                                                <div class="product-rate d-inline-block">
                                                    <div class="product-rating" style={{ width: "80%" }}></div>
                                                </div>
                                                <span class="font-small ml-5 text-muted"> (3.0)</span>
                                            </div>
                                            <div>
                                                <span class="font-small text-muted">By <a href="vendor-details-1.html">Progresso</a></span>
                                            </div>
                                            <div class="product-card-bottom">
                                                <div class="product-price">
                                                    <span>$12.85</span>
                                                    <span class="old-price">$13.8</span>
                                                </div>
                                                <div class="add-cart">
                                                    <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 d-none d-xl-block">
                                <div class="product-cart-wrap style-2">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img">
                                            <a href="shop-product-right.html">
                                                <img src="/imgs/banner/banner-8.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="deals-countdown-wrap">
                                            <div class="deals-countdown" data-countdown="2025/02/25 00:00:00"></div>
                                        </div>
                                        <div class="deals-content">
                                            <h2><a href="shop-product-right.html">Simply Lemonade with Raspberry Juice</a></h2>
                                            <div class="product-rate-cover">
                                                <div class="product-rate d-inline-block">
                                                    <div class="product-rating" style={{ width: "80%" }}></div>
                                                </div>
                                                <span class="font-small ml-5 text-muted"> (3.0)</span>
                                            </div>
                                            <div>
                                                <span class="font-small text-muted">By <a href="vendor-details-1.html">Yoplait</a></span>
                                            </div>
                                            <div class="product-card-bottom">
                                                <div class="product-price">
                                                    <span>$15.85</span>
                                                    <span class="old-price">$16.8</span>
                                                </div>
                                                <div class="add-cart">
                                                    <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section class="banners">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="banner-img">
                                    <img src="/imgs/banner/banner-1.png" alt="" />
                                    <div class="banner-text">
                                        <h4>
                                            Everyday Fresh & <br />Clean with Our<br />
                                            Products
                                        </h4>
                                        <a href="shop-grid-right.html" class="btn btn-xs">Shop Now <i class="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="banner-img">
                                    <img src="/imgs/banner/banner-2.png" alt="" />
                                    <div class="banner-text">
                                        <h4>
                                            Make your Breakfast<br />
                                            Healthy and Easy
                                        </h4>
                                        <a href="shop-grid-right.html" class="btn btn-xs">Shop Now <i class="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 d-md-none d-lg-flex">
                                <div class="banner-img mb-sm-0">
                                    <img src="/imgs/banner/banner-3.png" alt="" />
                                    <div class="banner-text">
                                        <h4>The best Organic <br />Products Online</h4>
                                        <a href="shop-grid-right.html" class="btn btn-xs">Shop Now <i class="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    
                </div>
                <div class="col-lg-1-5 primary-sidebar sticky-sidebar pt-30">
                <div className="sidebar-widget widget-category-2 mb-30">
            <h5 className="section-title style-1 mb-30">Category</h5>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <a href="shop-grid-right.html">
                            <img src={'imgs/theme/icons/category-2.svg'} alt={category.name} />
                            {category.category_name}
                        </a>
                        <span className="count">{category.count || 0}</span>
                    </li>
                ))}
            </ul>
        </div>
                   
                    <div class="sidebar-widget price_range range mb-30">
                        <h5 class="section-title style-1 mb-30">Fill by price</h5>
                        <div class="price-filter">
                            <div class="price-filter-inner">
                                <div id="slider-range" class="mb-20"></div>
                                <div class="d-flex justify-content-between">
                                    <div class="caption">From: <strong id="slider-range-value1" class="text-brand"></strong></div>
                                    <div class="caption">To: <strong id="slider-range-value2" class="text-brand"></strong></div>
                                </div>
                            </div>
                        </div>
                        <div class="list-group">
                            <div class="list-group-item mb-10 mt-10">
                                <label class="fw-900">Color</label>
                                <div class="custome-checkbox">
                                    <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                    <label class="form-check-label" for="exampleCheckbox1"><span>Red (56)</span></label>
                                    <br />
                                    <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox2" value="" />
                                    <label class="form-check-label" for="exampleCheckbox2"><span>Green (78)</span></label>
                                    <br />
                                    <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox3" value="" />
                                    <label class="form-check-label" for="exampleCheckbox3"><span>Blue (54)</span></label>
                                </div>
                                <label class="fw-900 mt-15">Item Condition</label>
                                <div class="custome-checkbox">
                                    <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value="" />
                                    <label class="form-check-label" for="exampleCheckbox11"><span>New (1506)</span></label>
                                    <br />
                                    <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox21" value="" />
                                    <label class="form-check-label" for="exampleCheckbox21"><span>Refurbished (27)</span></label>
                                    <br />
                                    <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox31" value="" />
                                    <label class="form-check-label" for="exampleCheckbox31"><span>Used (45)</span></label>
                                </div>
                            </div>
                        </div>
                        <a href="shop-grid-right.html" class="btn btn-sm btn-default"><i class="fi-rs-filter mr-5"></i> Fillter</a>
                    </div>
                   
                    <div class="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                        <h5 class="section-title style-1 mb-30">New products</h5>
                        <div class="single-post clearfix">
                            <div class="image">
                                <img src="/imgs/shop/thumbnail-3.jpg" alt="#" />
                            </div>
                            <div class="content pt-10">
                                <h5><a href="shop-product-detail.html">Chen Cardigan</a></h5>
                                <p class="price mb-0 mt-5">$99.50</p>
                                <div class="product-rate">
                                    <div class="product-rating" style={{ width: "90%" }}></div>
                                </div>
                            </div>
                        </div>
                        <div class="single-post clearfix">
                            <div class="image">
                                <img src="/imgs/shop/thumbnail-4.jpg" alt="#" />
                            </div>
                            <div class="content pt-10">
                                <h6><a href="shop-product-detail.html">Chen Sweater</a></h6>
                                <p class="price mb-0 mt-5">$89.50</p>
                                <div class="product-rate">
                                    <div class="product-rating" style={{ width: "80%" }}></div>
                                </div>
                            </div>
                        </div>
                        <div class="single-post clearfix">
                            <div class="image">
                                <img src="/imgs/shop/thumbnail-5.jpg" alt="#" />
                            </div>
                            <div class="content pt-10">
                                <h6><a href="shop-product-detail.html">Colorful Jacket</a></h6>
                                <p class="price mb-0 mt-5">$25</p>
                                <div class="product-rate">
                                    <div class="product-rating" style={{ width: "60%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                        <img src="/imgs/banner/banner-11.png" alt="" />
                        <div class="banner-text">
                            <span>Oganic</span>
                            <h4>
                                Save 17% <br />
                                on <span class="text-brand">Oganic</span><br />
                                Juice
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        {/* <!--End category slider--> */}
        <section class="section-padding mb-30">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0">
                        <h4 class="section-title style-1 mb-30 animated animated">Top Selling</h4>
                        <div class="product-list-small animated animated">
                            <article class="row align-items-center hover-up">
                                <figure class="col-md-4 mb-0">
                                    <a href="shop-product-right.html"><img src="/imgs/shop/thumbnail-1.jpg" alt="" /></a>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <a href="shop-product-right.html">Nestle Original Coffee-Mate Coffee Creamer</a>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" style={{ width: "90%" }}></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div class="product-price">
                                        <span>$32.85</span>
                                        <span class="old-price">$33.8</span>
                                    </div>
                                </div>
                            </article>
                            <article class="row align-items-center hover-up">
                                <figure class="col-md-4 mb-0">
                                    <a href="shop-product-right.html"><img src="/imgs/shop/thumbnail-2.jpg" alt="" /></a>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <a href="shop-product-right.html">Nestle Original Coffee-Mate Coffee Creamer</a>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" style={{ width: "90%" }}></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div class="product-price">
                                        <span>$32.85</span>
                                        <span class="old-price">$33.8</span>
                                    </div>
                                </div>
                            </article>
                            <article class="row align-items-center hover-up">
                                <figure class="col-md-4 mb-0">
                                    <a href="shop-product-right.html"><img src="/imgs/shop/thumbnail-3.jpg" alt="" /></a>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <a href="shop-product-right.html">Nestle Original Coffee-Mate Coffee Creamer</a>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" style={{ width: "90%" }}></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div class="product-price">
                                        <span>$32.85</span>
                                        <span class="old-price">$33.8</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 mb-md-0">
                        <h4 class="section-title style-1 mb-30 animated animated">Trending Products</h4>
                        <div class="product-list-small animated animated">
                            <article class="row align-items-center hover-up">
                                <figure class="col-md-4 mb-0">
                                    <a href="shop-product-right.html"><img src="/imgs/shop/thumbnail-4.jpg" alt="" /></a>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <a href="shop-product-right.html">Organic Cage-Free Grade A Large Brown Eggs</a>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" style={{ width: "90%" }}></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div class="product-price">
                                        <span>$32.85</span>
                                        <span class="old-price">$33.8</span>
                                    </div>
                                </div>
                            </article>
                            <article class="row align-items-center hover-up">
                                <figure class="col-md-4 mb-0">
                                    <a href="shop-product-right.html"><img src="/imgs/shop/thumbnail-5.jpg" alt="" /></a>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, & Red Rice</a>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" style={{ width: "90%" }}></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div class="product-price">
                                        <span>$32.85</span>
                                        <span class="old-price">$33.8</span>
                                    </div>
                                </div>
                            </article>
                            <article class="row align-items-center hover-up">
                                <figure class="col-md-4 mb-0">
                                    <a href="shop-product-right.html"><img src="/imgs/shop/thumbnail-6.jpg" alt="" /></a>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <a href="shop-product-right.html">Naturally Flavored Cinnamon Vanilla Light Roast Coffee</a>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" style={{ width: "90%" }}></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div class="product-price">
                                        <span>$32.85</span>
                                        <span class="old-price">$33.8</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block">
                        <h4 class="section-title style-1 mb-30 animated animated">Recently added</h4>
                        <div class="product-list-small animated animated">
                            <article class="row align-items-center hover-up">
                                <figure class="col-md-4 mb-0">
                                    <a href="shop-product-right.html"><img src="/imgs/shop/thumbnail-7.jpg" alt="" /></a>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <a href="shop-product-right.html">Pepperidge Farm Farmhouse Hearty White Bread</a>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" style={{ width: "90%" }}></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div class="product-price">
                                        <span>$32.85</span>
                                        <span class="old-price">$33.8</span>
                                    </div>
                                </div>
                            </article>
                            <article class="row align-items-center hover-up">
                                <figure class="col-md-4 mb-0">
                                    <a href="shop-product-right.html"><img src="/imgs/shop/thumbnail-8.jpg" alt="" /></a>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <a href="shop-product-right.html">Organic Frozen Triple Berry Blend</a>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" style={{ width: "90%" }}></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div class="product-price">
                                        <span>$32.85</span>
                                        <span class="old-price">$33.8</span>
                                    </div>
                                </div>
                            </article>
                            <article class="row align-items-center hover-up">
                                <figure class="col-md-4 mb-0">
                                    <a href="shop-product-right.html"><img src="/imgs/shop/thumbnail-9.jpg" alt="" /></a>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <a href="shop-product-right.html">Oroweat Country Buttermilk Bread</a>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" style={{ width: "90%" }}></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div class="product-price">
                                        <span>$32.85</span>
                                        <span class="old-price">$33.8</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block">
                        <h4 class="section-title style-1 mb-30 animated animated">Top Rated</h4>
                        <div class="product-list-small animated animated">
                            <article class="row align-items-center hover-up">
                                <figure class="col-md-4 mb-0">
                                    <a href="shop-product-right.html"><img src="/imgs/shop/thumbnail-10.jpg" alt="" /></a>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <a href="shop-product-right.html">Foster Farms Takeout Crispy Classic Buffalo Wings</a>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" style={{ width: "90%" }}></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div class="product-price">
                                        <span>$32.85</span>
                                        <span class="old-price">$33.8</span>
                                    </div>
                                </div>
                            </article>
                            <article class="row align-items-center hover-up">
                                <figure class="col-md-4 mb-0">
                                    <a href="shop-product-right.html"><img src="/imgs/shop/thumbnail-11.jpg" alt="" /></a>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle Corn</a>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" style={{ width: "90%" }}></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div class="product-price">
                                        <span>$32.85</span>
                                        <span class="old-price">$33.8</span>
                                    </div>
                                </div>
                            </article>
                            <article class="row align-items-center hover-up">
                                <figure class="col-md-4 mb-0">
                                    <a href="shop-product-right.html"><img src="/imgs/shop/thumbnail-12.jpg" alt="" /></a>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" style={{ width: "90%" }}></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                    <div class="product-price">
                                        <span>$32.85</span>
                                        <span class="old-price">$33.8</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </main>

    <footer class="main">
        <section class="newsletter mb-15">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="position-relative newsletter-inner">
                            <div class="newsletter-content">
                                <h2 class="mb-20">
                                    Stay home & get your daily <br />
                                    needs from our shop
                                </h2>
                                <p class="mb-45">Start You'r Daily Shopping with <span class="text-brand">Niraag India</span></p>
                                <form class="form-subcriber d-flex">
                                    <input type="email" placeholder="Your emaill address" />
                                    <button class="btn" type="submit">Subscribe</button>
                                </form>
                            </div>
                            <img src="/imgs/banner/banner-9.png" alt="newsletter" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="featured section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                        <div class="banner-left-icon d-flex align-items-center wow fadeIn animated">
                            <div class="banner-icon">
                                <img src="/imgs/theme/icons/icon-1.svg" alt="" />
                            </div>
                            <div class="banner-text">
                                <h3 class="icon-box-title">Best prices & offers</h3>
                                <p>Orders $50 or more</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div class="banner-left-icon d-flex align-items-center wow fadeIn animated">
                            <div class="banner-icon">
                                <img src="/imgs/theme/icons/icon-2.svg" alt="" />
                            </div>
                            <div class="banner-text">
                                <h3 class="icon-box-title">Free delivery</h3>
                                <p>24/7 amazing services</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div class="banner-left-icon d-flex align-items-center wow fadeIn animated">
                            <div class="banner-icon">
                                <img src="/imgs/theme/icons/icon-3.svg" alt="" />
                            </div>
                            <div class="banner-text">
                                <h3 class="icon-box-title">Great daily deal</h3>
                                <p>When you sign up</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div class="banner-left-icon d-flex align-items-center wow fadeIn animated">
                            <div class="banner-icon">
                                <img src="/imgs/theme/icons/icon-4.svg" alt="" />
                            </div>
                            <div class="banner-text">
                                <h3 class="icon-box-title">Wide assortment</h3>
                                <p>Mega Discounts</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div class="banner-left-icon d-flex align-items-center wow fadeIn animated">
                            <div class="banner-icon">
                                <img src="/imgs/theme/icons/icon-5.svg" alt="" />
                            </div>
                            <div class="banner-text">
                                <h3 class="icon-box-title">Easy returns</h3>
                                <p>Within 30 days</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                        <div class="banner-left-icon d-flex align-items-center wow fadeIn animated">
                            <div class="banner-icon">
                                <img src="/imgs/theme/icons/icon-6.svg" alt="" />
                            </div>
                            <div class="banner-text">
                                <h3 class="icon-box-title">Safe delivery</h3>
                                <p>Within 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-padding footer-mid">
            <div class="container pt-15 pb-20">
                <div class="row">
                    <div class="col">
                        <div class="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0">
                            <div class="logo mb-30">
                                <a href="index.html" class="mb-15"><img src="/imgs/theme/logo.svg" alt="logo" /></a>
                                <p class="font-lg text-heading">Awesome grocery store website template</p>
                            </div>
                            <ul class="contact-infor">
                                <li><img src="/imgs/theme/icons/icon-location.svg" alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                <li><img src="/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                <li><img src="/imgs/theme/icons/icon-email-2.svg" alt="" /><strong>Email:</strong><span>sale@Nest.com</span></li>
                                <li><img src="/imgs/theme/icons/icon-clock.svg" alt="" /><strong>Hours:</strong><span>10:00 - 18:00, Mon - Sat</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-link-widget col">
                        <h4 class="widget-title">Company</h4>
                        <ul class="footer-list mb-sm-5 mb-md-0">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Delivery Information</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms &amp; Conditions</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Support Center</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="footer-link-widget col">
                        <h4 class="widget-title">Account</h4>
                        <ul class="footer-list mb-sm-5 mb-md-0">
                            <li><a href="#">Sign In</a></li>
                            <li><a href="#">View Cart</a></li>
                            <li><a href="#">My Wishlist</a></li>
                            <li><a href="#">Track My Order</a></li>
                            <li><a href="#">Help Ticket</a></li>
                            <li><a href="#">Shipping Details</a></li>
                            <li><a href="#">Compare products</a></li>
                        </ul>
                    </div>
                    <div class="footer-link-widget col">
                        <h4 class="widget-title">Corporate</h4>
                        <ul class="footer-list mb-sm-5 mb-md-0">
                            <li><a href="#">Become a Vendor</a></li>
                            <li><a href="#">Affiliate Program</a></li>
                            <li><a href="#">Farm Business</a></li>
                            <li><a href="#">Farm Careers</a></li>
                            <li><a href="#">Our Suppliers</a></li>
                            <li><a href="#">Accessibility</a></li>
                            <li><a href="#">Promotions</a></li>
                        </ul>
                    </div>
                    <div class="footer-link-widget col">
                        <h4 class="widget-title">Popular</h4>
                        <ul class="footer-list mb-sm-5 mb-md-0">
                            <li><a href="#">Milk & Flavoured Milk</a></li>
                            <li><a href="#">Butter and Margarine</a></li>
                            <li><a href="#">Eggs Substitutes</a></li>
                            <li><a href="#">Marmalades</a></li>
                            <li><a href="#">Sour Cream and Dips</a></li>
                            <li><a href="#">Tea & Kombucha</a></li>
                            <li><a href="#">Cheese</a></li>
                        </ul>
                    </div>
                    <div class="footer-link-widget widget-install-app col">
                        <h4 class="widget-title">Install App</h4>
                        <p class="wow fadeIn animated">From App Store or Google Play</p>
                        <div class="download-app">
                            <a href="#" class="hover-up mb-sm-2 mb-lg-0"><img class="active" src="/imgs/theme/app-store.jpg" alt="" /></a>
                            <a href="#" class="hover-up mb-sm-2"><img src="/imgs/theme/google-play.jpg" alt="" /></a>
                        </div>
                        <p class="mb-20">Secured Payment Gateways</p>
                        <img class="wow fadeIn animated" src="/imgs/theme/payment-method.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <div class="container pb-30">
            <div class="row align-items-center">
                <div class="col-12 mb-30">
                    <div class="footer-bottom"></div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <p class="font-sm mb-0">&copy; 2022, <strong class="text-brand">Nest</strong> - HTML Ecommerce Template <br />All rights reserved</p>
                </div>
                <div class="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                    <div class="hotline d-lg-inline-flex mr-30">
                        <img src="/imgs/theme/icons/phone-call.svg" alt="hotline" />
                        <p>1900 - 6666<span>Working 8:00 - 22:00</span></p>
                    </div>
                    <div class="hotline d-lg-inline-flex">
                        <img src="/imgs/theme/icons/phone-call.svg" alt="hotline" />
                        <p>1900 - 8888<span>24/7 Support Center</span></p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                    <div class="mobile-social-icon">
                        <h6>Follow Us</h6>
                        <a href="#"><img src="/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                        <a href="#"><img src="/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                        <a href="#"><img src="/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                        <a href="#"><img src="/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                        <a href="#"><img src="/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
                    </div>
                    <p class="font-sm">Up to 15% discount on your first subscribe</p>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Preloader Start --> */}
    <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="text-center">
                    <img src="/imgs/theme/loading.gif" alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Home;
