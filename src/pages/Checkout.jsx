import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Button,
    Chip,
    Input,
    Alert,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Select,
    Option,
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import { BiEditAlt, BiSolidPlane, BiTransferAlt } from 'react-icons/bi';
import { FiAirplay, FiInfo, FiX } from 'react-icons/fi';

const Checkout = () => {
    const { countries } = useCountries();
    const [country, setCountry] = React.useState(0);
    const { name, flags, countryCallingCode } = countries[country];

    return (
        <main className='w-full mt-5'>
            <section className='bg-green-600 flex w-full lg:gap-10 px-5 lg:px-28 text-xs md:text-sm lg:divide-x-2 py-4 items-center text-white justify-between'>
                <div className='md:flex gap-3 items-center hidden'>
                    <h4>Departure Terminal</h4>
                    <BiTransferAlt size={20} />
                    <h4>Arrival Terminal</h4>
                </div>

                <div className='flex gap-3 items-center lg:pl-28'>
                    <h4>20 May, 2023 - 21 May, 2023</h4>
                </div>

                <div className='flex gap-3 items-center lg:pl-28'>
                    <h4>1 Adult, Economy</h4>
                </div>

                <div className='flex items-center lg:pl-28'>
                    <Button className="flex items-center" variant='outlined' color="white">
                        <BiEditAlt size={18} />
                        Edit
                    </Button>
                </div>
            </section>

            <section className="flex flex-col lg:flex-row gap-10 px-5 lg:px-28 mt-16 items-start">
                <div className='w-full'>
                    <Card className="w-full ring-1 ring-gray-200 mb-12">
                        <CardHeader className='p-4 ring-1 ring-gray-200'>
                            <h1 className='text-black uppercase font-bold'>Where should we send confirmation</h1>
                        </CardHeader>
                        <CardBody>
                            <h3 className='text-black'>Passenger (1 Adult)</h3>

                            <form className='mt-5 flex flex-col md:flex-row items-center gap-6 w-full'>
                                <div className='form-group flex flex-col gap-3 w-full'>
                                    <label htmlFor='email'>Email</label>
                                    <Input size="lg" label="Email" id='email' />
                                </div>

                                <div className="form-group flex flex-col gap-3 w-full">
                                    <label htmlFor='phone'>Phone Number</label>
                                    <div className="relative flex w-full">
                                        <Menu placement="bottom-start">
                                            <MenuHandler>
                                                <Button
                                                    ripple={false}
                                                    variant="text"
                                                    color="blue-gray"
                                                    className="flex h-11 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                                                >
                                                    <img
                                                        src={flags.svg}
                                                        alt={name}
                                                        className="h-4 w-4 rounded-full object-cover"
                                                    />
                                                    {countryCallingCode}
                                                </Button>
                                            </MenuHandler>
                                            <MenuList className="max-h-[20rem] max-w-[18rem]">
                                                {countries.map(({ name, flags, countryCallingCode }, index) => {
                                                    return (
                                                        <MenuItem
                                                            key={name}
                                                            value={name}
                                                            className="flex items-center gap-2"
                                                            onClick={() => setCountry(index)}
                                                        >
                                                            <img
                                                                src={flags.svg}
                                                                alt={name}
                                                                className="h-5 w-5 rounded-full object-cover"
                                                            />
                                                            {name} <span className="ml-auto">{countryCallingCode}</span>
                                                        </MenuItem>
                                                    );
                                                })}
                                            </MenuList>
                                        </Menu>
                                        <Input
                                            type="tel"
                                            size='lg'
                                            placeholder="Mobile Number"
                                            className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                            containerProps={{
                                                className: "min-w-0",
                                            }}
                                        />
                                    </div>
                                </div>
                            </form>
                        </CardBody>
                    </Card>

                    <Card className="w-full ring-1 ring-gray-200 mb-10">
                        <CardHeader className='p-4 ring-1 ring-gray-200 flex justify-between items-center'>
                            <h1 className='text-black uppercase font-bold'>Who’s Travelling</h1>
                            <p className='text-sm'>Your personal data are protected</p>
                        </CardHeader>
                        <div className="info px-5 my-5">
                            <Alert icon={<FiInfo size={22} />} color='cyan' variant='gradient'>Use all given names and surnames exactly as they appear on your passport/ID to avoid complications.</Alert>
                        </div>

                        <CardBody>
                            <form className='gap-6 w-full'>
                                <div className="form-group flex flex-col gap-3 w-full">
                                    <label htmlFor='title'>Title</label>
                                    <Input size="lg" label="title" id='title' />
                                </div>

                                <div className='group flex flex-col md:flex-row items-center gap-5 mt-5'>
                                    <div className='form-group flex flex-col gap-3 w-full'>
                                        <label htmlFor='fullname'>First & Middle Name</label>
                                        <Input size="lg" label="First & Middle Name" id='fullname' />
                                    </div>

                                    <div className="form-group flex flex-col gap-3 w-full">
                                        <label htmlFor='surname'>Surname</label>
                                        <Input size="lg" type='text' label="Surname" id='surname' />
                                    </div>
                                </div>

                                <h1 className='font-bold text-black mt-10'>Passport Details</h1>

                                <div className='group flex flex-col md:flex-row items-center gap-5 mt-5'>
                                    <div className='form-group flex flex-col gap-3 w-full'>
                                        <label htmlFor='passportNum'>Passport Number*</label>
                                        <Input size="lg" label="Passport Number" id='passportNum' />
                                    </div>

                                    <div className="form-group flex flex-col gap-3 w-full">
                                        <label htmlFor='PassportExp'>Passport Expiry Date*</label>
                                        <Input size="lg" type='text' label="Enter Expiry Date" id='PassportE xp' />
                                    </div>

                                    <div className="form-group flex flex-col gap-3 w-full">
                                        <label htmlFor='PassportExp'>Passport Issuing Authority</label>
                                        <Select label='Select' size='lg'>
                                            <Option>Authority 1</Option>
                                            <Option>Authority 2</Option>
                                            <Option>Authority 3</Option>
                                            <Option>Authority 4</Option>
                                            <Option>Authority 5</Option>
                                        </Select>
                                    </div>
                                </div>

                            </form>
                        </CardBody>
                    </Card>
                </div>

                {/* SECOND SPACE */}
                <Card className="w-full lg:w-[45rem] ring-1 ring-gray-200 mb-5">
                    <CardHeader className='p-4 ring-1 ring-gray-200'>
                        <h1 className='text-black uppercase font-bold'>Your Order</h1>
                    </CardHeader>
                    <CardBody>
                        <div className="group flex justify-between items-center">
                            <div className='text-sm'>
                                <h2 className='font-bold text-black'>Departure</h2>
                                <p>Mon 26 Jun 25, 2023</p>
                                <p className='flex items-center gap-2 font-bold text-black'>22 : 05 - 20 : 05  (2hr 40min) <BiSolidPlane /> 1</p>
                                <p>LOS Lagos - LHR London</p>
                            </div>
                            <div className='w-10 h-10 border-2 border-red-200 rounded'></div>
                        </div>

                        <div className="group flex justify-between items-center  mt-7 mb-5">
                            <div className='text-sm'>
                                <h2 className='font-bold text-black'>Return</h2>
                                <p>Mon 26 Jun 25, 2023</p>
                                <p className='flex items-center gap-2 font-bold text-black'>22 : 05 - 20 : 05  (2hr 40min) <BiSolidPlane /> 1</p>
                                <p>LOS Lagos - LHR London</p>
                            </div>
                            <div className='w-10 h-10 border-2 border-red-200 rounded'></div>
                        </div>

                        <hr />

                        <div className="group text-sm mt-5">
                            <h2 className='font-bold text-black mb-1'>Flight Base Fare</h2>
                            <p className='flex items-center gap-1'>Adult <FiX /> 1 </p>

                            <div className='w-full flex justify-between items-center mt-2'>
                                <p>Base Fare</p>
                                <p>$1,200,000</p>
                            </div>

                            <div className='w-full flex justify-between items-center mt-1'>
                                <p>Discount</p>
                                <p>$40,000</p>
                            </div>

                            <div className='w-full flex justify-between items-center mt-1'>
                                <p>Total Fare</p>
                                <p>$1,240,000</p>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="w-full flex items-center justify-between gap-6 bg-gray-100">
                        <p className='font-bold text-black text-lg'>Total</p>
                        <h3 className='font-bold text-xl text-black'>$1,240,000</h3>
                    </CardFooter>
                </Card>
            </section>
        </main>
    )
}

export default Checkout