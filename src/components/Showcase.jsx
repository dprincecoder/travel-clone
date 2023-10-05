import React from "react";
import logo1 from '../assets/logo1.png'

const Showcase = () => {
  return (
    <>
      <section className="lg:flex items-center justify-between px-28 hidden ">
        <div>
          <div className="flex flex-col  gap-2">
            <h2 className="font-semibold">Nigeria no 1</h2>
            <p>
              Travul9ja is African leading travel
              <br /> company
            </p>
          </div>
        </div>

        <div className="py-10">
        <div className="flex flex-col gap-2" >
          <h2 className="font-semibold">We are here for you</h2>
          <p> Reach us 24-7(Monday to <br/>Sunday)</p>
        </div>
        </div>

        <div>
        <div className="flex flex-col gap-2 ">
          <h2 className="font-semibold">You are safe with us</h2>
          <p>
            Travul9ja is African leading travel
            <br /> company
          </p>
          </div>
        </div>
      </section>

      {/* Mobile view */}

      <section className="block m-14 lg:hidden">
        <div>
          <div className="flex flex-col  gap-2">
            <h2 className="font-semibold">Nigeria no 1</h2>
            <p>
              Travul9ja is African leading travel company
            </p>
          </div>
        </div>

        <div className="py-10">
        <div className="flex flex-col gap-2" >
          <h2 className="font-semibold">We are here for you</h2>
          <p> Reach us 24-7(Monday to Sunday)</p>
        </div>
        </div>

        <div>
        <div className="flex flex-col gap-2 ">
          <h2 className="font-semibold">You are safe with us</h2>
          <p className="text-sm">
            Travul9ja is African leading travel company
          </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
