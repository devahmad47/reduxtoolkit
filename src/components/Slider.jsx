import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Slider = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item style={{ height: "100%" }}>
          <img
            className="slider d-block w-100"
            src="https://images.unsplash.com/photo-1548808957-e80207091212?ixlib=rb-4.0.3&ixid=MnwxMjA3
            fDB8MHxzZWFyY2h8MTcwfHxudXRyaXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            {/* <h5>Food THE BEST</h5> */}
            <p>Baked Well Eat Well Sleep Well</p>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ height: "100%" }}>
          <img
            className="slider d-block w-100"
            src="https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MH
            xzZWFyY2h8MTA3fHxudXRyaXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60"
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block">
            {/* <h5></h5> */}
            <p>Magic Powder Spice Food & Life</p>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ height: "100%" }}>
          <img
            className="slider d-block w-100"
            src="https://t4.ftcdn.net/jpg/03/20/46/13/240_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg"
            alt="Third slide"
          />
          <div class="carousel-caption d-none d-md-block">
            {/* <h5 >SHOP ONLINE</h5> */}
            <p >We Serve On Your DoorStep!</p>
          </div>
        </Carousel.Item>
      </Carousel>
      <br />
    </div>
  );
};

export default Slider;
