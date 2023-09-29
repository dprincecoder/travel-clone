import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Button
} from "@material-tailwind/react";
import { BiEditAlt, BiSlider, BiStar, BiTransferAlt, BiWallet, BiWalletAlt } from 'react-icons/bi'
import { FiRewind, FiStar } from 'react-icons/fi';
import { GiSpeedometer } from 'react-icons/gi'
import Recommended from '../components/Recommended';

const Search = () => {
    const [activeTab, setActiveTab] = React.useState("recommended");
    const data = [
        {
            label: "Recommended",
            value: "recommended",
            icon: <BiStar />,
            desc: <Recommended />
        },
        {
            label: "Cheapest",
            value: "cheapest",
            icon: <BiWallet />,
            desc: <Recommended />
        },
        {
            label: "Fastest",
            value: "fastest",
            icon: <GiSpeedometer />,
            desc: <Recommended />
        },
    ];
    return (
        <>
            <main>
                <section className='bg-green-600 flex lg:gap-10 text-xs md:text-sm lg:divide-x-2 py-4 px-5 lg:px-28 items-center text-white justify-between'>
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

                {/* FILTER SECTION */}

                <section className='flex gap-10 px-5 py-5 lg:px-28 items-center text-black bg-gray-100 justify-between'>
                    <div className='flex gap-3 items-center'>
                        <h4><b>Filter:</b>192 Flights</h4>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <h4>Filter</h4>
                        <BiSlider size={20} />
                    </div>
                </section>

                <section className='w-full mt-6 px-5 lg:px-28'>
                    <Tabs value={activeTab}>
                        <TabsHeader
                            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                            indicatorProps={{
                                className:
                                    "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                            }}
                        >
                            {data.map(({ label, value, icon }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => setActiveTab(value)}
                                    className={activeTab === value ? "text-gray-900" : ""}
                                >
                                    <div className="flex items-center gap-2">
                                        {icon}
                                        {label}
                                    </div>
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {data.map(({ value, desc }) => (
                                <TabPanel key={value} value={value}>
                                    {desc}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </section>
            </main>
        </>
    )
}

export default Search   