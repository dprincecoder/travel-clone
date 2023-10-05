import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Chip,
} from "@material-tailwind/react";
import { BiBus, BiRightArrowAlt } from 'react-icons/bi';
import { RiLuggageCartLine } from 'react-icons/ri';

const Recommended = () => {
    return (
        <main className='w-full'>
            <Card className="mt-6 w-full ring-1 ring-gray-200">
                <CardBody>
                    <Chip value="Recommended" variant='filled' className='bg-teal-800 w-max mb-3' size='sm' />
                    <div className='flex gap-10 items-center mb-3'>
                        <p className="flex items-center uppercase gap-1 font-bold text-black">
                            <BiBus color='red' />
                            Departure
                        </p>

                        <p className="text-black text-sm">Saturday 24 Jun</p>
                    </div>

                    <div className='details lg:flex justify-between gap-3 lg:items-center items-start grid grid-cols-2'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 border-2 border-red-200 rounded'></div>
                            <p className='font-bold text-black'>GIGM Motors</p>
                        </div>

                        <div className='flex flex-col lg:items-start items-end'>
                            <p className='text-xl text-black font-bold'>22:05</p>
                            <p className='text-sm'>Los Lagos</p>
                            <p className='text-sm'>Lagos</p>
                        </div>

                        <div className='flex flex-col items-start'>
                            <p className='text-black text-xs'>2hrs 40mins</p>
                            <BiRightArrowAlt />
                        </div>

                        <div className='flex lg:items-start justify-end gap-1'>
                            <RiLuggageCartLine size={20} />
                            <p className='text-black'>2 x 24kg</p>
                        </div>

                    </div>

                </CardBody>
                <CardFooter className="w-full flex items-center justify-end gap-6 bg-gray-100 h-20">
                    <div>
                        <p className='font-bold text-black text-lg lg:text-xl'>$60,000</p>
                        <p className='text-xs'>Price per adult</p>
                    </div>
                    <Button size='md' variant='gradient' color='green' className='rounded-full w-28'>Book</Button>
                </CardFooter>
            </Card>

            <Card className="mt-6 w-full ring-1 ring-gray-200">
                <CardBody>
                    <Chip value="Recommended" variant='filled' className='bg-teal-800 w-max mb-3' size='sm' />
                    <div className='flex gap-10 items-center mb-3'>
                        <p className="flex items-center uppercase gap-1 font-bold text-black">
                            <BiBus color='red' />
                            Departure
                        </p>

                        <p className="text-black text-sm">Saturday 24 Jun</p>
                    </div>

                    <div className='details lg:flex justify-between gap-3 lg:items-center items-start grid grid-cols-2'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 border-2 border-red-200 rounded'></div>
                            <p className='font-bold text-black'>GIGM Motors</p>
                        </div>

                        <div className='flex flex-col lg:items-start items-end'>
                            <p className='text-xl text-black font-bold'>22:05</p>
                            <p className='text-sm'>Los Lagos</p>
                            <p className='text-sm'>Lagos</p>
                        </div>

                        <div className='flex flex-col items-start'>
                            <p className='text-black text-xs'>2hrs 40mins</p>
                            <BiRightArrowAlt />
                        </div>

                        <div className='flex lg:items-start justify-end gap-1'>
                            <RiLuggageCartLine size={20} />
                            <p className='text-black'>2 x 24kg</p>
                        </div>

                    </div>

                </CardBody>
                <CardFooter className="w-full flex items-center justify-end gap-6 bg-gray-100 h-20">
                    <div>
                        <p className='font-bold text-black text-lg lg:text-xl'>$60,000</p>
                        <p className='text-xs'>Price per adult</p>
                    </div>
                    <Button size='md' variant='gradient' color='green' className='rounded-full w-28'>Book</Button>
                </CardFooter>
            </Card>

            <Card className="mt-6 w-full ring-1 ring-gray-200">
                <CardBody>
                    <Chip value="Recommended" variant='filled' className='bg-teal-800 w-max mb-3' size='sm' />
                    <div className='flex gap-10 items-center mb-3'>
                        <p className="flex items-center uppercase gap-1 font-bold text-black">
                            <BiBus color='red' />
                            Departure
                        </p>

                        <p className="text-black text-sm">Saturday 24 Jun</p>
                    </div>

                    <div className='details lg:flex justify-between gap-3 lg:items-center items-start grid grid-cols-2'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 border-2 border-red-200 rounded'></div>
                            <p className='font-bold text-black'>GIGM Motors</p>
                        </div>

                        <div className='flex flex-col lg:items-start items-end'>
                            <p className='text-xl text-black font-bold'>22:05</p>
                            <p className='text-sm'>Los Lagos</p>
                            <p className='text-sm'>Lagos</p>
                        </div>

                        <div className='flex flex-col items-start'>
                            <p className='text-black text-xs'>2hrs 40mins</p>
                            <BiRightArrowAlt />
                        </div>

                        <div className='flex lg:items-start justify-end gap-1'>
                            <RiLuggageCartLine size={20} />
                            <p className='text-black'>2 x 24kg</p>
                        </div>

                    </div>

                </CardBody>
                <CardFooter className="w-full flex items-center justify-end gap-6 bg-gray-100 h-20">
                    <div>
                        <p className='font-bold text-black text-lg lg:text-xl'>$60,000</p>
                        <p className='text-xs'>Price per adult</p>
                    </div>
                    <Button size='md' variant='gradient' color='green' className='rounded-full w-28'>Book</Button>
                </CardFooter>
            </Card>

            <Card className="mt-6 w-full ring-1 ring-gray-200">
                <CardBody>
                    <Chip value="Recommended" variant='filled' className='bg-teal-800 w-max mb-3' size='sm' />
                    <div className='flex gap-10 items-center mb-3'>
                        <p className="flex items-center uppercase gap-1 font-bold text-black">
                            <BiBus color='red' />
                            Departure
                        </p>

                        <p className="text-black text-sm">Saturday 24 Jun</p>
                    </div>

                    <div className='details lg:flex justify-between gap-3 lg:items-center items-start grid grid-cols-2'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 border-2 border-red-200 rounded'></div>
                            <p className='font-bold text-black'>GIGM Motors</p>
                        </div>

                        <div className='flex flex-col lg:items-start items-end'>
                            <p className='text-xl text-black font-bold'>22:05</p>
                            <p className='text-sm'>Los Lagos</p>
                            <p className='text-sm'>Lagos</p>
                        </div>

                        <div className='flex flex-col items-start'>
                            <p className='text-black text-xs'>2hrs 40mins</p>
                            <BiRightArrowAlt />
                        </div>

                        <div className='flex lg:items-start justify-end gap-1'>
                            <RiLuggageCartLine size={20} />
                            <p className='text-black'>2 x 24kg</p>
                        </div>

                    </div>

                </CardBody>
                <CardFooter className="w-full flex items-center justify-end gap-6 bg-gray-100 h-20">
                    <div>
                        <p className='font-bold text-black text-lg lg:text-xl'>$60,000</p>
                        <p className='text-xs'>Price per adult</p>
                    </div>
                    <Button size='md' variant='gradient' color='green' className='rounded-full w-28'>Book</Button>
                </CardFooter>
            </Card>

            <Card className="mt-6 w-full ring-1 ring-gray-200">
                <CardBody>
                    <Chip value="Recommended" variant='filled' className='bg-teal-800 w-max mb-3' size='sm' />
                    <div className='flex gap-10 items-center mb-3'>
                        <p className="flex items-center uppercase gap-1 font-bold text-black">
                            <BiBus color='red' />
                            Departure
                        </p>

                        <p className="text-black text-sm">Saturday 24 Jun</p>
                    </div>

                    <div className='details lg:flex justify-between gap-3 lg:items-center items-start grid grid-cols-2'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 border-2 border-red-200 rounded'></div>
                            <p className='font-bold text-black'>GIGM Motors</p>
                        </div>

                        <div className='flex flex-col lg:items-start items-end'>
                            <p className='text-xl text-black font-bold'>22:05</p>
                            <p className='text-sm'>Los Lagos</p>
                            <p className='text-sm'>Lagos</p>
                        </div>

                        <div className='flex flex-col items-start'>
                            <p className='text-black text-xs'>2hrs 40mins</p>
                            <BiRightArrowAlt />
                        </div>

                        <div className='flex lg:items-start justify-end gap-1'>
                            <RiLuggageCartLine size={20} />
                            <p className='text-black'>2 x 24kg</p>
                        </div>

                    </div>

                </CardBody>
                <CardFooter className="w-full flex items-center justify-end gap-6 bg-gray-100 h-20">
                    <div>
                        <p className='font-bold text-black text-lg lg:text-xl'>$60,000</p>
                        <p className='text-xs'>Price per adult</p>
                    </div>
                    <Button size='md' variant='gradient' color='green' className='rounded-full w-28'>Book</Button>
                </CardFooter>
            </Card>

            <Card className="mt-6 w-full ring-1 ring-gray-200">
                <CardBody>
                    <Chip value="Recommended" variant='filled' className='bg-teal-800 w-max mb-3' size='sm' />
                    <div className='flex gap-10 items-center mb-3'>
                        <p className="flex items-center uppercase gap-1 font-bold text-black">
                            <BiBus color='red' />
                            Departure
                        </p>

                        <p className="text-black text-sm">Saturday 24 Jun</p>
                    </div>

                    <div className='details lg:flex justify-between gap-3 lg:items-center items-start grid grid-cols-2'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 border-2 border-red-200 rounded'></div>
                            <p className='font-bold text-black'>GIGM Motors</p>
                        </div>

                        <div className='flex flex-col lg:items-start items-end'>
                            <p className='text-xl text-black font-bold'>22:05</p>
                            <p className='text-sm'>Los Lagos</p>
                            <p className='text-sm'>Lagos</p>
                        </div>

                        <div className='flex flex-col items-start'>
                            <p className='text-black text-xs'>2hrs 40mins</p>
                            <BiRightArrowAlt />
                        </div>

                        <div className='flex lg:items-start justify-end gap-1'>
                            <RiLuggageCartLine size={20} />
                            <p className='text-black'>2 x 24kg</p>
                        </div>

                    </div>

                </CardBody>
                <CardFooter className="w-full flex items-center justify-end gap-6 bg-gray-100 h-20">
                    <div>
                        <p className='font-bold text-black text-lg lg:text-xl'>$60,000</p>
                        <p className='text-xs'>Price per adult</p>
                    </div>
                    <Button size='md' variant='gradient' color='green' className='rounded-full w-28'>Book</Button>
                </CardFooter>
            </Card>

            <Card className="mt-6 w-full ring-1 ring-gray-200">
                <CardBody>
                    <Chip value="Recommended" variant='filled' className='bg-teal-800 w-max mb-3' size='sm' />
                    <div className='flex gap-10 items-center mb-3'>
                        <p className="flex items-center uppercase gap-1 font-bold text-black">
                            <BiBus color='red' />
                            Departure
                        </p>

                        <p className="text-black text-sm">Saturday 24 Jun</p>
                    </div>

                    <div className='details lg:flex justify-between gap-3 lg:items-center items-start grid grid-cols-2'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 border-2 border-red-200 rounded'></div>
                            <p className='font-bold text-black'>GIGM Motors</p>
                        </div>

                        <div className='flex flex-col lg:items-start items-end'>
                            <p className='text-xl text-black font-bold'>22:05</p>
                            <p className='text-sm'>Los Lagos</p>
                            <p className='text-sm'>Lagos</p>
                        </div>

                        <div className='flex flex-col items-start'>
                            <p className='text-black text-xs'>2hrs 40mins</p>
                            <BiRightArrowAlt />
                        </div>

                        <div className='flex lg:items-start justify-end gap-1'>
                            <RiLuggageCartLine size={20} />
                            <p className='text-black'>2 x 24kg</p>
                        </div>

                    </div>

                </CardBody>
                <CardFooter className="w-full flex items-center justify-end gap-6 bg-gray-100 h-20">
                    <div>
                        <p className='font-bold text-black text-lg lg:text-xl'>$60,000</p>
                        <p className='text-xs'>Price per adult</p>
                    </div>
                    <Button size='md' variant='gradient' color='green' className='rounded-full w-28'>Book</Button>
                </CardFooter>
            </Card>
        </main>
    )
}

export default Recommended