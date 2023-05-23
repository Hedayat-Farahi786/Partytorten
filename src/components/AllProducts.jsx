import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';
import Divider from './Divider';
import { BsArrowLeft } from 'react-icons/bs';
import { Tabs } from 'flowbite-react';
import notFoundImage from "../assets/images/productNoResult.png"

const AllProducts = () => {

    // const products = useSelector(state => state.products.products);


    const data = [
        {
            name: 'Product 1',
            description: "good",
            image: "https://th.bing.com/th/id/OIP.Kc9JYi9mFe2EzerX85ij5gHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
            category: "cakes",
            price: 23,
            id: "3434asdfasc2323"
        },
        {
            name: 'Product 1',
            description: "good",
            image: "https://th.bing.com/th/id/OIP.Kc9JYi9mFe2EzerX85ij5gHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
            category: "cakes",
            price: 23,
            id: "3434asdfasc2323"
        },
        {
            name: 'Product 1',
            description: "good",
            image: "https://th.bing.com/th/id/OIP.Kc9JYi9mFe2EzerX85ij5gHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
            category: "cakes",
            price: 23,
            id: "3434asdfasc2323"
        },
        {
            name: 'Product 1',
            description: "good",
            image: "https://th.bing.com/th/id/OIP.Kc9JYi9mFe2EzerX85ij5gHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
            category: "cakes",
            price: 23,
            id: "3434asdfasc2323"
        },
        {
            name: 'Product 1',
            description: "good",
            image: "https://th.bing.com/th/id/OIP.Kc9JYi9mFe2EzerX85ij5gHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
            category: "cakes",
            price: 23,
            id: "3434asdfasc2323"
        },
        {
            name: 'Product 1',
            description: "good",
            image: "https://th.bing.com/th/id/OIP.Kc9JYi9mFe2EzerX85ij5gHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
            category: "cakes",
            price: 23,
            id: "3434asdfasc2323"
        },
        {
            name: 'Product 1',
            description: "good",
            image: "https://th.bing.com/th/id/OIP.Kc9JYi9mFe2EzerX85ij5gHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
            category: "cakes",
            price: 23,
            id: "3434asdfasc2323"
        },
        {
            name: 'Product 1',
            description: "good",
            image: "https://th.bing.com/th/id/OIP.Kc9JYi9mFe2EzerX85ij5gHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
            category: "cakes",
            price: 23,
            id: "3434asdfasc2323"
        },
        {
            name: 'Product 1',
            description: "good",
            image: "https://th.bing.com/th/id/OIP.Kc9JYi9mFe2EzerX85ij5gHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
            category: "cakes",
            price: 23,
            id: "3434asdfasc2323"
        },
        {
            name: 'Product 1',
            description: "good",
            image: "https://th.bing.com/th/id/OIP.Kc9JYi9mFe2EzerX85ij5gHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
            category: "cakes",
            price: 23,
            id: "3434asdfasc2323"
        },
        {
            name: 'Product 1',
            description: "good",
            image: "https://th.bing.com/th/id/OIP.Kc9JYi9mFe2EzerX85ij5gHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
            category: "cakes",
            price: 23,
            id: "3434asdfasc2323"
        },

    ]

    const [currentPage, setCurrentPage] = useState(1);
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

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const isActive = (index) => {
        return index === activeIndex ? 'bg-black text-white rounded-md' : '';
    };

    const myListItems = ['All', 'Cakes', 'Pastry', 'Sweets'];



    return (
        <div className='-10'>
            <Divider />
          <div className="block md:hidden">
          <Tabs.Group
                aria-label="Tabs with underline"
                style="underline"
            >
                <Tabs.Item active={true} title="All">
                    <div className="products__main flex justify-between w-full md:w-10/12 mx-auto my-8">
                        <div className="products__left hidden md:flex flex-col items-start p-5 border border-black w-2/12 h-max">
                            <p className='font-bold text-lg'><span className='border-b-2 pb-1 border-b-main'>Categor</span>ies</p>
                            <ul className='flex flex-col items-start my-10 w-full'>

                                {myListItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`w-full transition-all duration-100 ease-linear text-left mb-3 px-3 py-1 cursor-pointer font-medium ${isActive(index)}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        {item}
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
                                            <Product name={product.name} description={product.description} image={product.image} category={product.category} price={product.price} id={product._id} key={product._id} />
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
                </Tabs.Item>
                <Tabs.Item

                    title="Cakes"
                >
                    <div className='w-full flex flex-col items-center justify-center space-y-5 my-10'>
                        <img src={notFoundImage} alt="Not Found Image" />
                        <p className='font-semibold text-lg text-gray-600'>No Products Found!</p>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Pastry">
                    <div className='w-full flex flex-col items-center justify-center space-y-5 my-10'>
                        <img src={notFoundImage} alt="Not Found Image" />
                        <p className='font-semibold text-lg text-gray-600'>No Products Found!</p>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Sweets">
                    <div className='w-full flex flex-col items-center justify-center space-y-5 my-10'>
                        <img src={notFoundImage} alt="Not Found Image" />
                        <p className='font-semibold text-lg text-gray-600'>No Products Found!</p>
                    </div>
                </Tabs.Item>
            </Tabs.Group>
          </div>
          <div className="products__main hidden md:flex justify-between w-full md:w-10/12 mx-auto my-8">
                        <div className="products__left hidden md:flex flex-col items-start p-5 border border-black w-2/12 h-max">
                            <p className='font-bold text-lg'><span className='border-b-2 pb-1 border-b-main'>Categor</span>ies</p>
                            <ul className='flex flex-col items-start my-10 w-full'>

                                {myListItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`w-full transition-all duration-100 ease-linear text-left mb-3 px-3 py-1 cursor-pointer font-medium ${isActive(index)}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        {item}
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
                                            <Product name={product.name} description={product.description} image={product.image} category={product.category} price={product.price} id={product._id} key={product._id} />
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

export default AllProducts