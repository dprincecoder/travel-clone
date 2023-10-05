import React from 'react'

const Payment = () => {
  return (
    <div className='border-t-2'>
        {/* <hr className="bor"/>  */}
        <div className="flex justify-center gap-8 mx-60 my-5 items-center">
            <div onClick={() => {}} className="flex items-center gap-2">
                <p className="rounded-full w-10 h-10  flex items-center justify-center bg-green-600">1</p>
                <p>Flight Selected</p>
            </div>
            <div onClick={() => {}} className="flex items-center gap-2">
                <p className="rounded-full w-10 h-10  flex items-center justify-center bg-green-600">2</p>
                <p>Additional information</p>
            </div>
            <div onClick={() => {}} className="flex items-center gap-2">
                <p className="rounded-full w-10 h-10  flex items-center justify-center bg-green-600">3</p>
                <p>Payment methods</p>
            </div>
            <div onClick={() => {}} className="flex items-center gap-2">
                <p className="rounded-full w-10 h-10  flex items-center justify-center bg-green-600">4</p>
                <p>Confirmation of Bookings</p>
            </div>
        </div>
    </div>
  )
}

export default Payment