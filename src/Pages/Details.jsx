import React from "react";

const Details = () => {
  const array1 = [
    {
      name: "chapati",
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
    },
  ];
  return (
    <div id="detail">
      {array1.map((product, id) => (
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex w-full mb-20 flex-wrap">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                AAA Nutrifoods
              </h1>
              <p class="lg:pl-6 text-2xl lg:w-2/3 mx-auto leading-relaxed text-base">
                Life is uncertain. Eat chapati first.Nutritional products
                include products, which either supplement the nutrition or
                provide part or all of the daily nutritional requirements. They
                include intravenous or oral nutrition that can provide all the
                nutrition. Nutritional products also include supplements for
                example, iron and other vitamins, minerals and electrolytes. it
                is available in sachet, and packaging of sachet of 30g & bulk
                packaging of 240, 480 and 1000g with natural chocolate flavor.
              </p>
            </div>
            <div class="flex flex-wrap md:-m-2 -m-1">
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={product.front}
                  ></img>
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={product.back}
                  ></img>
                </div>
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block"
                    src={product.size}
                  ></img>
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block"
                    src={product.quality}
                  ></img>
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={product.category}
                  ></img>
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={product.materail}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Details;
