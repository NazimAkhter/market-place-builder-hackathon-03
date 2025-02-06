"use client";
import React from 'react'
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProduct } from "@/sanity/lib/queries";
import { IProducts } from "@/types/productTypes";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaCartShopping } from 'react-icons/fa6';
import SearchAndFilter from "./SearchAndFilter";
import Pagination from "./Pagination";
import { addToCart } from '../action/actions';
import Swal from 'sweetalert2';


export default function ProductComponents() {
  const [product, setProduct] = useState<IProducts[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);
  const [categoryName, setCategoryName] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;


  useEffect(() => {
    async function fetchProduct() {
      const fetchedData: IProducts[] = await client.fetch(allProduct)
      setProduct(fetchedData)
      setFilteredProducts(fetchedData);

      const uniqueCategories = Array.from(
        new Set(fetchedData.map((product) => product.categoryName)));
      setCategoryName(uniqueCategories);

    }
    fetchProduct()
  }, []);

  // Search Functionality
  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const results = product.filter((val) =>
      val.name.toLowerCase().includes(lowerQuery)
    );
    setFilteredProducts(results);
    setCurrentPage(1);
  };

  // Filter by Category
  const handleFilter = (category: string) => {
    if (!category) {
      setFilteredProducts(product);
    } else {
      const results = product.filter((val) => val.categoryName === category);
      setFilteredProducts(results);
    }
    setCurrentPage(1);
  };

  // Filter by Price
  const handlePriceRangeFilter = ([minPrice, maxPrice]: [number, number]) => {
    const filtered = product.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    );
    setFilteredProducts(filtered);
  };

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);


  // Add to Cart Functionality

  const handleAddToCart = (e: React.MouseEvent, product: IProducts) => {
    e.preventDefault()
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000
    })
    addToCart(product)
  }


  return (
    <div className="w-[92%] mx-auto">
      <SearchAndFilter
        onSearch={handleSearch}
        onFilter={handleFilter}
        onPriceRangeFilter={handlePriceRangeFilter}
        categoryName={categoryName}
      />
      <div className="font-montserrat px-4 sm:px-0 sm:mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 md:mt-20 mb-20">


        {currentProducts.map((product) => (

          <div key={product._id} className='py-4 px-4 bg-borderGray rounded-xl'>
            <Link href={`/category/${product._id}`}>

              {/* image */}
              <div className="overflow-hidden rounded-xl h-96">

                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover duration-500 transform hover:scale-125 rounded-xl"
                />

              </div>

              {/* product name */}
              <h2 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight text-darkPrimary mt-2">
                {product.name}
              </h2>

              {/* price */}
              <p className="scroll-m-20 text-lg font-medium tracking-tight text-darkPrimary mt-1">
                &#36;{product.price}
              </p>

            </Link>

          <div className='mt-2'>
              <Button onClick={(e) => handleAddToCart(e, product)}
              className='bg-darkPrimary w-full py-4 text-myWhite rounded hover:bg-myPrimary focus:bg-black'>
              <FaCartShopping className='text-myWhite hover:text-darkPrimary' />
              Add to Cart
            </Button>
          </div>


          </div>
        )
        )}


      </div >
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

