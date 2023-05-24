import React, { useEffect, useRef, useState } from 'react'
import "./AllProducts.css";
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product';
import Divider from './Divider';
import { BsArrowLeft } from 'react-icons/bs';
import { Tabs } from 'flowbite-react';
import notFoundImage from "../assets/images/productNoResult.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'
import { addCategories, addProducts } from '../features/products/products';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';




const AllProducts = () => {

    const dispatch = useDispatch();


    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    const handleClick = (index) => {
        let temp = [];

        if (categories[index].name === "All") {
            temp = allProducts;
        } else {
            allProducts.forEach(product => {
                if (product.category === categories[index]._id) {
                    temp.push(product);
                }
            });
        }

        setData(temp);

        setActiveIndex(index);
    };


    const handleItemClick = (id) => {

        const itemElement = document.getElementById(id);
        if (itemElement) {
            itemElement.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }

        handleClick(id);

    };



    const itemsPerPage = 8;

    // Calculate the index of the first and last item of the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Get the current page's items from the data array
    const products = data.slice(indexOfFirstItem, indexOfLastItem);

    // Handle next page button click
    const nextPage = () => {
        window.scrollTo(0, 0);
        if (currentPage < Math.ceil(data.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Handle previous page button click
    const prevPage = () => {
        window.scrollTo(0, 0);
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    // Calculate the range of entries currently being shown
    const firstEntryIndex = indexOfFirstItem + 1;
    const lastEntryIndex = Math.min(indexOfLastItem, data.length);


    const [activeIndex, setActiveIndex] = useState(0);

    

    const isActive = (index) => {
        return index === activeIndex ? 'bg-main text-white rounded-md' : '';
    };



    const isActiveMenu = (index) => {
        return index === activeIndex ? 'bg-main text-white' : '';
    };

    
    const getCategoryName = (id) => {
        categories.forEach(cat => {
            if(cat._id === id){
                return cat.name
            }
        })
        return id;
    }



    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categoriesResponse, productsResponse] = await Promise.all([
                    axios.get('https://partytorten-backend.vercel.app/category'),
                    axios.get('https://partytorten-backend.vercel.app/products')
                ]);

                let cat = categoriesResponse.data.unshift({
                    name: "All",
                    image: "https://cdn.shopify.com/s/files/1/1734/9571/collections/Screenshot20180710-154626Chrome_1024x1024.jpg?v=1557860801"
                })
                setCategories(categoriesResponse.data);
                setAllProducts(productsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (categories.length > 0 && allProducts.length > 0) {
            setData(allProducts);
            setLoading(false);
        }
    }, [categories, allProducts]);





    return (
        <>
            {
                loading ? (
                    <div className="w-full h-96 z-50 overflow-hidden flex flex-col items-center justify-center">
                        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                        <h2 className="text-center text-xl font-semibold">Loading...</h2>
                    </div>
                ) : (

                    <div className='-10'>
                        <Divider />
                        <div className="block md:hidden">
                            <ScrollMenu scrollContainerClassName="h-20" wrapperClassName="py-5 w-11/12 mx-auto container-snap">
                                {/* {categories.map((item, id) => ( */}
                                {categories.map((item, id) => (
                                    <div
                                        onClick={() => handleItemClick(id)}
                                        id={id}
                                        className={`mr-4 px-3 py-1 text-sm border border-main rounded-full mb-2 ${isActiveMenu(id)}`}
                                    >
                                        <p>{item.name}</p>
                                    </div>
                                ))}
                            </ScrollMenu>

                            <div className="products__main flex justify-between w-full md:w-10/12 mx-auto my-8">
                                <div className="products__left hidden md:flex flex-col items-start p-5 border border-black w-2/12 h-max">
                                    <p className='font-bold text-lg'><span className='border-b-2 pb-1 border-b-main'>Categor</span>ies</p>
                                    <ul className='flex flex-col items-start my-10 w-full'>

                                        {categories.map((item, index) => (
                                            <li
                                                key={index}
                                                className={`w-full transition-all duration-100 ease-linear text-left mb-3 px-3 py-1 cursor-pointer font-medium ${isActive(index)}`}
                                                onClick={() => handleClick(index)}
                                            >
                                                {item.name}
                                            </li>
                                        ))}

                                        {/* <li onClick={() => handleItemClick('item className='w-full text-left mb-3 px-2 py-1 cursor-pointer font-medium bg-black text-white rounded-md'>All</li>
                        <li onClick={() => handleItemClick('item1')} className='w-full text-left mb-3 px-2 py-1 cursor-pointer font-medium'>Cakes</li>
                        <li onClick={() => handleItemClick('item1')} className='w-full text-left mb-3 px-2 py-1 cursor-pointer font-medium'>Pastry</li>
                        <li onClick={() => handleItemClick('item1')} className='w-full text-left mb-3 px-2 py-1 cursor-pointer font-medium'>Sweets</li> */}
                                    </ul>
                                </div>
                                <div className="products__right w-full md:w-9/12">
                                    <div className="products flex items-center justify-center md:justify-start flex-wrap w-full">
                                        {
                                            products.map((product) => (
                                                <div className='mb-8'>
                                                    <Product name={product.name} description={product.description} image={product.image} category={getCategoryName(product.category)} price={product.price} id={product._id} key={product._id} />
                                                </div>
                                            ))
                                        }
                                    </div>


                                    <div className="flex flex-col-reverse md:flex-row space-y-4 md:space-y-0 items-center justify-between">
                                        <span className="text-sm mt-4 text-gray-700 dark:text-gray-400">
                                            Showing{" "}
                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                {firstEntryIndex}
                                            </span>{" "}
                                            to{" "}
                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                {lastEntryIndex}
                                            </span>{" "}
                                            of{" "}
                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                {data.length}
                                            </span>{" "}
                                            Products
                                        </span>
                                        <div className="inline-flex xs:mt-0">
                                            <button
                                                onClick={prevPage} disabled={currentPage === 1}
                                                className="disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 mr-2"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                                Previous
                                            </button>
                                            <button
                                                onClick={nextPage}
                                                disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
                                                className="disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                            >
                                                Next
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 ml-2"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="products__main hidden md:flex justify-between w-full md:w-10/12 mx-auto my-8">
                            <div className="products__left hidden md:flex flex-col items-start p-5 border border-black w-2/12 h-max">
                                <p className='font-bold text-lg'><span className='border-b-2 pb-1 border-b-main'>Categor</span>ies</p>
                                <ul className='flex flex-col items-start my-10 w-full'>

                                    {categories.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`w-full transition-all duration-100 ease-linear text-left mb-3 px-3 py-1 cursor-pointer font-medium ${isActive(index)}`}
                                            onClick={() => handleClick(index)}
                                        >
                                            {item.name}
                                        </li>
                                    ))}

                                    {/* <li onClick={() => handleItemClick('item className='w-full text-left mb-3 px-2 py-1 cursor-pointer font-medium bg-black text-white rounded-md'>All</li>
                        <li onClick={() => handleItemClick('item1')} className='w-full text-left mb-3 px-2 py-1 cursor-pointer font-medium'>Cakes</li>
                        <li onClick={() => handleItemClick('item1')} className='w-full text-left mb-3 px-2 py-1 cursor-pointer font-medium'>Pastry</li>
                        <li onClick={() => handleItemClick('item1')} className='w-full text-left mb-3 px-2 py-1 cursor-pointer font-medium'>Sweets</li> */}
                                </ul>
                            </div>
                            <div className="products__right w-full md:w-9/12">
                                <div className="products flex items-center justify-center md:justify-start flex-wrap w-full">
                                    {
                                        products.map((product) => (
                                            <div className='mb-8'>
                                                <Product name={product.name} description={product.description} image={product.image} category={getCategoryName(product.category)} price={product.price} id={product._id} key={product._id} />
                                            </div>
                                        ))
                                    }
                                </div>


                                <div className="flex flex-col-reverse md:flex-row space-y-4 md:space-y-0 items-center justify-between">
                                    <span className="text-sm mt-4 text-gray-700 dark:text-gray-400">
                                        Showing{" "}
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            {firstEntryIndex}
                                        </span>{" "}
                                        to{" "}
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            {lastEntryIndex}
                                        </span>{" "}
                                        of{" "}
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            {data.length}
                                        </span>{" "}
                                        Products
                                    </span>
                                    <div className="inline-flex xs:mt-0">
                                        <button
                                            onClick={prevPage} disabled={currentPage === 1}
                                            className="disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 mr-2"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            Previous
                                        </button>
                                        <button
                                            onClick={nextPage}
                                            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
                                            className="disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            Next
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 ml-2"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}


export default AllProducts