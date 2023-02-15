import React from 'react'
import { useState, useEffect } from "react";
// import reducer add action to add data in store using reducer "add fun" by clicking on add to cart button in handleAdd function
import { add } from "../store/cartSlice";
// hook to dispatch this action " reducers:{ add(state, action)}"
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
const ProDetails = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(fetchProducts());}, []);
        const handleAdd = (product) => {
            dispatch(add(products));
            alert("Product Added Successfully!");
          };
          if (status === STATUSES.LOADING) {
            return <h2>Loading...</h2>;
          }
          if (status === STATUSES.ERROR) {
            return <h2>Error Reported</h2>;
          }
          const array2 = [
            {
              name: "Chapati",
              front_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58N00nYCuhoU_342YdN9NRf4_lYry2HnMzA&usqp=CAU",
              price: "$0.5",
              front:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumYiv2bnrNq15dcdEmVEMyDbytBdU4ynLzA&usqp=CAU",
              back: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kC2dKWlzqY0VP1HjTHKlLc9QCBp1bFP_wn_gVEifLoYrdrrPzOz4Ayt85m3bQtRzEso&usqp=CAU",
              size: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxWZVKM82142On3i87In4L3hqRwO5Q8usJQ&usqp=CAU",
              quality:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabD1LsB9dwGlODbc3tTmxYKQ7lgbtd_GqMw&usqp=CAU",
              category:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8xl5zwtjeK-MDgl4hojjUNIF6Tcawv2Ze0sDn1yPXqORLJqE1py2GvujuDXOqqN4xzE&usqp=CAU",
              materail:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT965HGvv32I6jsKVlV6A0lBmQjgDcHXG2teQ&usqp=CAU",
            }
          ];
  return (
    <div>
        <h1 className="carousel-captions p-4">Products</h1>
         <section class="text-gray-600 body-font">
        {array2.map((product) => (
        
             <div class="container2 px-5 py-24 mx-auto ">
             <div class="flex flex-wrap -m-4">
               <div class="lg:w-1/4 md:w-1/2 p-4 w-full container1">
                 <a class="block relative h-70 rounded overflow-hidden">
                   <img
                     alt="ecommerce"
                     class="object-cover object-center w-full h-full block"
                     src={product.front_image}
                   ></img>
                 </a>
                 <div class="mt-4">
                   <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                     CATEGORY
                   </h3>
                   <hr />
                   <h2 class="text-gray-900 title-font text-lg font-medium">
                     {product.name}
                   </h2>
                   <p class="mt-1">Net Weight 16OZ (454
Gram) 78-82 <br /><b>{product.price}</b></p>
                   <button
                     type="button"
                     class="btn btn-default btn-sm"
                     onClick={() =>handleAdd(product)}
                     className="btn"
                   >
                     <span class="glyphicon glyphicon-shopping-cart"></span>{" "}
                     <b>
                       <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                     </b>
                   </button><br /><hr /><br />
                   <a
                     href="/detail"
                     class="text-yellow-500 inline-flex items-center"
                   >
                     Learn More
                     <svg
                       fill="none"
                       stroke="currentColor"
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       stroke-width="2"
                       class="w-4 h-4 ml-2"
                       viewBox="0 0 24 24"
                     >
                       <path d="M5 12h14M12 5l7 7-7 7"></path>
                     </svg>
                   </a>
                  
                 
                 </div>
               </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full container1">
                <a class="block relative h-70 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQju77nFpM_fS-Of_RgXciGNgbYslATOyZOHg&usqp=CAU" ></img>
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <hr />
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    Chakki ATTA
                  </h2>
                  <p class="mt-1">Net Weight 16OZ (454
Gram) 78-82 <br /> <b> $16.00</b> </p>
<button
                    type="button"
                    class="btn btn-default btn-sm"
                    onClick={() => handleAdd(product)}
                    className="btn"
                  >
                    <span class="glyphicon glyphicon-shopping-cart"></span>{" "}
                    <b>
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    </b>
                  </button><br /><hr /><br />
                  <a
                    href="/detail"
                    class="text-yellow-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>{" "}
                 
                </div>
              </div> 
               <div class="lg:w-1/4 md:w-1/2 p-4 w-full container1">
                <a class="block relative h-70 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="data:image/jpeg;base64,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"
                  ></img>
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3><hr />
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    Nutrients
                  </h2>
                  <p class="mt-1">Net Weight 16OZ (454 Gram) 78-82<b>$21.15</b> </p>
                  <button
                    type="button"
                    class="btn btn-default btn-sm"
                    onClick={() => handleAdd(product)}
                    className="btn"
                  >
                    <span class="glyphicon glyphicon-shopping-cart"></span>{" "}
                    <b>
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    </b>
                  </button><br /><hr /><br />
                  <a
                    href="/detail"
                    class="text-yellow-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                 
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full container1">
                <a class="block relative h-70 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="data:image/jpeg;base64,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"
                  ></img>
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <hr />
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    Corn Floor
                  </h2>
                  <p class="mt-1">Net Weight 16OZ (454 Gram) 78-82 <br /> <b>$12.00</b></p>
                  <button
                    type="button"
                    class="btn btn-default btn-sm"
                    onClick={() => handleAdd(product)}
                    className="btn"
                  >
                    <span class="glyphicon glyphicon-shopping-cart"></span>{" "}
                    <b>
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    </b>
                  </button><br /><hr/><br />
                  <a
                    href="/detail"
                    class="text-yellow-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>{" "}
                 
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full container1">
                <a class="block relative h-70 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="data:image/jpeg;base64,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
                    wCjPk5JJRIDneGf+bzXeU06SiHsZe1EU0klsIIYiGJJIAcqymkkgAhquppJKgLWq5qZJAxynakkj0MkkkkkB//Z"
                  ></img>
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3><hr />
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    Maze Chapati
                  </h2>
                  <p class="mt-1">Net Weight 16OZ (454 Gram) 78-82 <br />$18.40</p>
                  <button
                    type="button"
                    class="btn btn-default btn-sm"
                    onClick={() => handleAdd(product)}
                    className="btn"
                  >
                    <span class="glyphicon glyphicon-shopping-cart"></span>{" "}
                    <b>
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    </b>
                  </button><br /><hr /><br />
                
                  <a
                    href="/detail"
                    class="text-yellow-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>{" "}
                 
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full container1">
                <a class="block relative h-70 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="data:image/jpeg;base64,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
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q=="
                  ></img>
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3><hr />
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                   Rice Porridge
                  </h2>
                  <p class="mt-1">Net Weight 16OZ (454 Gram) 78-82 <br />$8.40</p>
                  <button
                    type="button"
                    class="btn btn-default btn-sm"
                    onClick={() => handleAdd(product)}
                    className="btn"
                  >
                    <span class="glyphicon glyphicon-shopping-cart"></span>{" "}
                    <b>
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    </b>
                  </button><br /><hr /><br />
                  <a
                    href="/detail"
                    class="text-yellow-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>{" "}
                 
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full container1">
                <a class="block relative h-70 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzEpPDE1cUiWS8oQgJSv8SWoX-5eLRh0xeek27-NIfU_UBQEF8eGDQaEIBcZ6qTEE47T4&usqp=CAU"
                  ></img>
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3><hr />
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                 Cumin Seeds
                  </h2>
                  <p class="mt-1">Net Weight 16OZ (454 Gram) 78-82 <br />$8.40</p>
                  <button
                    type="button"
                    class="btn btn-default btn-sm"
                    onClick={() => handleAdd(product)}
                    className="btn"
                  >
                    <span class="glyphicon glyphicon-shopping-cart"></span>{" "}
                    <b>
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    </b>
                  </button><br /><hr /><br />
                  <a
                    href="/detail"
                    class="text-yellow-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>{" "}
                 
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full container1">
                <a class="block relative h-70 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkqBCxxzkScU0FkUM3P--_XVmWWgXVMYDZg&usqp=CAU"
                  ></img>
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3><hr />
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                  Peanut Butter
                  </h2>
                  <p class="mt-1">Net Weight 16OZ (454 Gram) 78-82 <br />$8.40</p>
                  <button
                    type="button"
                    class="btn btn-default btn-sm"
                    onClick={() => handleAdd(product)}
                    className="btn"
                  >
                    <span class="glyphicon glyphicon-shopping-cart"></span>{" "}
                    <b>
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    </b>
                  </button><br /><hr /><br />
                  <a
                    href="/detail"
                    class="text-yellow-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>{" "}
                 
                </div>
             </div>
          </div>
          </div>
        ))} 
        
        </section>  
    </div>
    
  )
}

export default ProDetails
