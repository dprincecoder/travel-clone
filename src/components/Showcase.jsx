import React from "react";
import logo1  from '../assets/logo1.png'
import logo2  from '../assets/logo2.png'
import logo3  from '../assets/logo3.png'

const Showcase = () => {
  return (
    <>
      <section className="lg:flex items-center justify-between px-28  mr-8 hidden ">
        <div className="flex  mr-20 ">
          <div className="mr-3 mt-3">
          <img src = {logo1} size={23}/>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-#191C1B">Nigeria no 1</h2>
            <p>
          Travul9ja is African leading travel
              <br /> company
            </p>
          </div>
        </div>

        <div className="py-10">
        <div className="flex" >

        <div className="mr-3 mt-3">
          <img src = {logo2} size={23}/>
          </div>
          <div>
        <h2 className="font-semibold">We are here for you</h2>
      
          <p> Reach us 24-7(Monday to <br/>Sunday)</p>
          </div>
        </div>
        </div>

        <div>
        <div className="flex">
          <div className="mr-3 mt-2">
           <img src={logo3}/>
          </div>
          <div>
          <h2 className="font-semibold">You are safe with us</h2>
          <p>
            Travul9ja is African leading travel
            <br /> company
          </p>
          </div>
          </div>
        </div>
      </section>

      {/* Mobile view */}

      <section className="block m-14 lg:hidden">
        <div>
          <div className="flex">

          <div className="mr-3 mt-3">
          <img src = {logo1} size={23}/>
          </div>
          <div>
            <h2 className="font-semibold">Nigeria no 1</h2>
            <p>
              Travul9ja is African leading travel company
            </p>
            </div>
          </div>
        </div>

        <div className="py-10">
        <div className="flex " >
        

        <div className="w-10 mt-3">
          <img src = {logo2} size={23}/>
          </div>

          <div>
          <h2 className="font-semibold ">We are here for you</h2>
          <p> Reach us 24-7(Monday to Sunday)</p>
          </div>
        </div>
        </div>

        <div>
        <div className="flex">

        <div className="mr-2 mt-2">
           <img src={logo3}/>
          </div>
          <div>
          <h2 className="font-semibold">You are safe with us</h2>
          <p className="text-sm">
            Travul9ja is African leading travel company
          </p>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
