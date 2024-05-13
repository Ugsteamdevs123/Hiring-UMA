import React from 'react';
import logo from '../../public/logo.png';
import aboutHome from '../../public/about-home-.jpg';
import homeBanner from '../../public/home-banner.jpg';
import HrAdmin from '../../public/hr_and_admin.png'
import AccountFinance from '../../public/accounts_finance.png'
import ItTech from '../../public/it_and_tech.png'
import SalesMarketing from '../../public/sales_and marketing.png'
import MarketingBaner from '../../public/marketingBaner.jpg'
import AccountsFinanceBaner from '../../public/AccountsFinanceBaner.jpg'
import ItTechBaner from '../../public/ItTechBaner.jpeg'
import HrAdminBaner from '../../public/HrAdminBaner.jpeg'
import HrAdminBaner from '../../public/HrAdminBaner.jpeg'
import StepsBaner from '../../public/stepsbaner.jpg'
import Baner from '../../public/baner.jpg'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <section className="mt-4">
                <div className="bg-img bg-center bg-no-repeat bg-cover max-w-full h-96" style={{ backgroundImage: `url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg)` }}></div>
            </section>

            <section className="relative bg-black justify-center">
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
                    <div className="mb-36">
                        <h1 className="text-white text-5xl font-bold">GLOBAL STAFFING <br /> SOLUTIONS</h1>
                        <div className="line w-12/12 h-1.5 bg-[#0B5ED7] mt-1"></div>
                    </div>
                </div>
            </section>

            <main className='bg-gray-200 pt-10'>
                <section className='py-16 m-2 max-w-screen-xl flex items-center justify-between mx-auto p-4'>

                    <div className='w-5/12'>
                        <h2 className='mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>
                            Hire Top Talent Faster – Elevate Your Recruitment with Our Streamlined Screening Process
                        </h2>
                        <p className='text-xl'>
                            GRR ensures the presentation of the most fitting candidates, guaranteeing a heightened success rate in your hiring endeavors through our superior screening process.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded inline-flex items-center text-lg my-6">
                            <Link to="/reach-us">Reach Us</Link>
                        </button>
                        <div className='text-xl'>
                            <p>Looking for a job? <span>
                            <Link to="/apply-for-job" className="py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 font-bold" aria-current="page">Apply here.</Link>
                            </span></p>
                        </div>
                    </div>
                    <div className='w-5/12'>
                        <img src={Baner} className="rounded-lg inline-flex" alt="Hiring UMA Logo" />
                    </div>
                </section>


                <section className='pt-10 relative'>
                    <h1 className='text-3xl font-semibold text-start max-w-screen-xl items-center justify-center mx-auto'>AREA OF EXPERTISE</h1>
                    <div className='pt-2 m-2 max-w-screen-xl flex items-center justify-center mx-auto relative z-10'>
                        <div className="absolute top-2 left-0 right-0 h-6 bg-blue-500"></div>
                        <div className='flex flex-wrap justify-between items-center mx-auto'>
                            <div className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                                <div className="block max-w-sm pt-6 justify-center items-center bg-white border border-gray-200 rounded-sm shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
                                    <div className="flex justify-center items-center mb-4">
                                        <img src={HrAdmin} className="h-24 w-auto" alt="HR and Admin" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-center">HR and Admin</h4>
                                    <img src={HrAdminBaner} className="h-56 w-full object-cover bg-cover" alt="HrAdmin Banner" />
                                </div>
                            </div>

                            <div className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                                <div className="block max-w-sm pt-6 justify-center items-center bg-white border border-gray-200 rounded-sm shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
                                    <div className="flex justify-center items-center mb-4">
                                        <img src={AccountFinance} className="h-24 w-auto" alt="Accounts and Finance" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-center">Accounts and Finance</h4>
                                    <img src={AccountsFinanceBaner} className="h-56 w-full object-cover bg-cover" alt="Accounts and Finance Banner" />
                                </div>
                            </div>

                            <div className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                                <div className="block max-w-sm pt-6 justify-center items-center bg-white border border-gray-200 rounded-sm shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
                                    <div className="flex justify-center items-center mb-4">
                                        <img src={ItTech} className="h-24 w-auto" alt="IT and Tech" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-center">IT and Tech</h4>
                                    <img src={ItTechBaner} className="h-56 w-full bg-cover object-cover" alt="IT and Tech Banner" />
                                </div>
                            </div>

                            <div className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                                <div className="block max-w-sm pt-6 justify-center items-center bg-white border border-gray-200 rounded-sm shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
                                    <div className="flex justify-center items-center mb-4">
                                        <img src={SalesMarketing} className="h-24 w-auto" alt="Sales and Marketing" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-center">Sales and Marketing</h4>
                                    <img src={MarketingBaner} className="h-56 w-full bg-cover object-cover" alt="Marketing Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='pt-10 relative'>
                    <h1 className='text-3xl font-semibold text-start max-w-screen-xl items-center justify-center mx-auto'>SERVICES OFFERED</h1>
                    <div className='pt-2 m-2 max-w-screen-xl flex items-center justify-center mx-auto relative z-10'>
                        <div className="absolute top-2 left-0 right-0 h-6 bg-blue-500"></div>
                        <div className='flex flex-wrap justify-between items-center mx-auto'>
                            <Link to="/contract-staffing" className='w-full sm:w-4/12 p-2 relative cursor-pointer'>
                                <div className=''>
                                    <img src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg" alt="Banner" className='bg-cover' />
                                    <div className="absolute bottom-0 right-0 bg-blue-500 text-white px-6 py-2 font-semibold text-xl">Contract Staffing</div>
                                </div>
                            </Link>

                            <Link to="/contract-to-hire-staffing" className='w-full sm:w-4/12 p-2 relative cursor-pointer'>
                            <div className=''>
                                <img src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg" alt="Banner" className='bg-cover' />
                                <div className="absolute bottom-0 right-0 bg-blue-500 text-white px-6 py-2 font-semibold text-xl">Contract to Hire</div>
                            </div>
                            </Link>

                            <Link to="/permanent-staffing" className='w-full sm:w-4/12 p-2 relative cursor-pointer'> 
                            <div className=''>
                                <img src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg" alt="Banner" className='bg-cover' />
                                <div className="absolute bottom-0 right-0 bg-blue-500 text-white px-6 py-2 font-semibold text-xl">Permanent Staffing</div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className='py-10 my-10 relative'>
                    <div className='py-3 max-w-screen-xl items-center justify-center mx-auto'>
                        <h1 className='text-3xl font-semibold text-start m-4'>GRR'S RECRUITMENT SOLUTIONSE</h1>
                    </div>
                    <div className='py-4 max-w-screen-xl flex items-center justify-center mx-auto p-4 '>
                        <img src={StepsBaner} className="w-full bg-cover object-cover" alt="Marketing Banner" />
                    </div>
                </section>



            </main>




            {/* <main className="bg-gray-200 py-10">
                <section className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="w-1/2">
                            <h3 className="text-2xl font-bold mb-4">ABOUT RIGHTHIRE</h3>
                            <p className="text-sm text-gray-800 leading-relaxed">
                                We provide recruitment services with customized hiring solutions for brands, businesses, and organizations.
                                Started in the year 2017, we are a B2B staffing service company helping businesses hire talents in a seamless manner.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <img src={aboutHome} alt="About" className="w-full" />
                        </div>
                    </div>
                </section>

                <section className="container mx-auto mt-10">
                    <h3 className="text-2xl font-bold mb-4">AREA OF EXPERTISE</h3>
                    <div className="flex justify-between items-center">
                        <div className="w-1/4">
                            <img src="assests/AI.png" alt="AI" className="w-20 h-20" />
                        </div>
                        <div className="w-1/4">
                            <img src="assests/DEVLOP.png" alt="Development" className="w-20 h-20" />
                        </div>
                        <div className="w-1/4">
                            <img src="assests/CLOUD.png" alt="Cloud" className="w-20 h-20" />
                        </div>
                        <div className="w-1/4">
                            <img src="assests/ANALYTIC.png" alt="Analytics" className="w-20 h-20" />
                        </div>
                    </div>
                </section>

                <section className="container mx-auto mt-10">
                    <h2 className="text-3xl font-bold mb-6">SERVICES OFFERED</h2>
                    <div className="flex justify-between items-center">
                        <div className="w-1/3">
                            <img src="assests/CONTRACT-STAFFING.jpg" alt="Contract Staffing" className="w-full" />
                        </div>
                        <div className="w-1/3">
                            <img src="assests/CONTRACT-HIRE.jpg" alt="Contract Hire" className="w-full" />
                        </div>
                        <div className="w-1/3">
                            <img src="assests/PERMINTA-STAFF.jpg" alt="Permanent Staffing" className="w-full" />
                        </div>
                    </div>
                </section>

                <section className="container mx-auto mt-10 text-center">
                    <h5 className="text-lg font-bold mb-4">RIGHTHIRE'S AI-POWERED RECRUITMENT SOLUTIONS</h5>
                    <img src="assests/AI-power-1080x400.jpg" alt="AI Powered Recruitment Solutions" className="w-3/4 mx-auto" />
                </section>
            </main> */}
        </div >
    );
}

export default Home;
