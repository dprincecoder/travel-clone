import React from 'react'
import Car from '../assets/Car.png'

const Homeimg = () => {
  return (
    <>
    <div className="lg:flex justify-around hidden">
        <div className="h-25 pt-10">
            <img src={Car}/>
        </div>
        <div className="txt-contents"> 
            <h1 className="mt-7 mr-0 text-2xl font-bold  font-Rubik">Lets Find an Idea Car
                <br/>
                or you
                </h1>
                <br/>
                <p>
                Enhance your driving experience with the right<br/>
                 rental to suit your transportation needs. With a <br/>
                 wide range of vehicle models and sizes. All our<br/> 
                 vehicles are reliable and in perfect conditions
                </p>

            <div className="flex justify-between m-2">
            <div></div>
            <div>
            <button className='bg-[#006B58] w-32 h-10 rounded-full text-white'>Hire a Car</button>
            </div>
        </div>

        </div>

        
        
    </div>

    {/* {Mobile view} */}
<div className="block items-center lg:hidden">

<div className="h-25 pt-10">
   <img src={Car}/>
        </div>

        <div className="txt-contents p-10">
        <h1 className="mt-7 mr-0 text-2xl font-bold  font-Rubik">Lets Find an Idea Car
                <br/>
                or you
                </h1>
                <br/>
                <p>
                Enhance your driving experience with the right<br/>
                 rental to suit your transportation needs. With a <br/>
                 wide range of vehicle models and sizes. All our<br/> 
                 vehicles are reliable and in perfect conditions
                </p>

            <div className="flex justify-between m-3">
            
            <div>
            <button className='bg-[#006B58] w-32 h-10 rounded-full text-white'>Hire a Car</button>
            </div>
        </div>
        </div>

</div>

    </>
  )
}

export default Homeimg