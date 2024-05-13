import React from 'react'
import HrAdmin from '../../public/hr_and_admin.png'
import AccountFinance from '../../public/accounts_finance.png'
import ItTech from '../../public/it_and_tech.png'
import SalesMarketing from '../../public/sales_and marketing.png'
import MarketingBaner from '../../public/marketingBaner.jpg'
import AccountsFinanceBaner from '../../public/AccountsFinanceBaner.jpg'
import ItTechBaner from '../../public/ItTechBaner.jpeg'
import HrAdminBaner from '../../public/HrAdminBaner.jpeg'
import StepsBaner from '../../public/stepsbaner.jpg'
import Services from './Services'


// from footer
import React, { useState } from 'react';
import logo from '../../public/logo.png'
import baner from '../../public/baner.jpg'

import React, { useState } from 'react';
import { FcIdea } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";
import Body from './Body';
import Footer from './Footer';


function Body() {
    return (
        <div>
            <div className='py-3 max-w-screen-xl items-center justify-center mx-auto'>
                <h1 className='text-3xl font-semibold text-start m-4'>AREA OF EXPERTISE</h1>
            </div>

            <section className='py-16 m-2 max-w-screen-xl flex items-center justify-between mx-auto p-4'>

                <div className='w-5/12'>
                    <h2 className='mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>
                        Hire Top Talent Faster – Elevate Your Recruitment with Our Streamlined Screening Process
                    </h2>

                    <p className='text-xl'>
                        GRR ensures the presentation of the most fitting candidates, guaranteeing a heightened success rate in your hiring endeavors through our superior screening process.
                    </p>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded inline-flex items-center text-lg my-6">
                        Contact us
                    </button>

                    <div className='text-xl'>
                        <p>Looking for a job? <span>
                            <a href="#" className="py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 font-bold" aria-current="page">Apply here.</a>
                        </span></p>
                    </div>


                </div>

                <div className='w-5/12'>
                    <img src={baner} className="rounded-lg inline-flex" alt="Hiring UMA Logo" />
                </div>
            </section>


            <section className='py-16 m-2 max-w-screen-xl block items-center justify-between mx-auto p-4'>
                <h1 className='text-2xl font-bold text-center m-4'>About GlobalRemoteRecruit</h1>
                <blockquote className="relative">
                    <svg className="absolute -top-6 -start-8 size-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
                    </svg>

                    <div className="relative z-10">
                        <p className="text-gray-800 sm:text-xl dark:text-white"><em>
                            At GlobalRemoteRecruit, we specialize in delivering tailored recruitment solutions to cater to the unique hiring needs of brands, businesses, and organizations.
                            Established in 2021, we are a B2B staffing service provider dedicated to facilitating seamless talent acquisition for businesses. Our clientele spans across various tech organizations, ranging from dynamic startups to multinational corporations. Our primary goal is to enhance and add value to every aspect of the recruitment life cycle.
                        </em></p>
                    </div>
                </blockquote>
            </section>

            {/* cards */}
            <div className='py-4 m-2 max-w-screen-xl flex items-center justify-center mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                <div className='flex flex-wrap p-2 m-2 justify-between items-center mx-auto'>

                    <div className="" style={{ width: 'calc(25% - 2rem)' }}>
                        {/* Adjusted width to fit four cards on the same line */}
                        <div className="block max-w-sm pt-6 justify-center items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex justify-center items-center mb-4">
                                <img src={HrAdmin} className="h-24 w-auto" alt="HR and Admin" />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-center">HR and Admin</h4>
                            <img src={HrAdminBaner} className="h-56 w-full object-cover bg-cover" alt="HrAdmin Banner" />
                        </div>
                    </div>

                    <div className="" style={{ width: 'calc(25% - 2rem)' }}>
                        <div className="block max-w-sm pt-6 justify-center items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex justify-center items-center mb-4">
                                <img src={AccountFinance} className="h-24 w-auto" alt="Accounts and Finance" />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-center">Accounts and Finance</h4>
                            <img src={AccountsFinanceBaner} className="h-56 w-full object-cover bg-cover" alt="Accounts and Finance Banner" />
                        </div>
                    </div>

                    <div className="" style={{ width: 'calc(25% - 2rem)' }}>
                        <div className="block max-w-sm pt-6 justify-center items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex justify-center items-center mb-4">
                                <img src={ItTech} className="h-24 w-auto" alt="IT and Tech" />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-center">IT and Tech</h4>
                            <img src={ItTechBaner} className="h-56 w-full bg-cover object-cover" alt="IT and Tech Banner" />
                        </div>
                    </div>

                    <div className="" style={{ width: 'calc(25% - 2rem)' }}>
                        <div className="block max-w-sm pt-6 justify-center items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex justify-center items-center mb-4">
                                <img src={SalesMarketing} className="h-24 w-auto" alt="Sales and Marketing" />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-center">Sales and Marketing</h4>
                            <img src={MarketingBaner} className="h-56 w-full bg-cover object-cover" alt="Marketing Banner" />
                        </div>
                    </div>

                </div>
            </div>

            <Services />

            <div className='py-3 max-w-screen-xl items-center justify-center mx-auto'>
                <h1 className='text-3xl font-semibold text-start m-4'>GRR'S RECRUITMENT SOLUTIONSE</h1>
            </div>
            <div className='py-4 m-2 max-w-screen-xl flex items-center justify-center mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow'>
                <img src={StepsBaner} className="w-full bg-cover object-cover" alt="Marketing Banner" />
            </div>


            <section className='py-16 m-10 p-10 max-w-screen-xl flex flex-col items-center justify-center mx-auto bg-sky-100'>

                <h2 className='text-4xl font-bold text-center mb-6'>
                    How it works
                </h2>

                <div className='flex items-center justify-between w-full mt-24'>

                    <div className='w-3/12'>
                        <FcIdea className='h-28 w-auto py-2' />
                        <p className='text-blue-500 font-bold text-xl'>Step 1</p>
                        <h4 className='text-xl font-bold'>Discover Talent</h4>
                        <p>Uncover a world of potential candidates effortlessly. Browse through our extensive talent pool, where qualified individuals are showcased based on your specific requirements.</p>
                    </div>

                    <div className='w-3/12'>
                        <FcDocument className='h-28 w-auto py-2' />
                        <p className='text-blue-500 font-bold text-xl'>Step 2</p>
                        <h4 className='text-xl font-bold'>Efficient Screening Process</h4>
                        <p>Experience a seamless and superior screening process designed to identify the most suitable candidates for your needs, ensuring precision and saving you valuable time in the recruitment process.</p>
                    </div>

                    <div className='w-3/12'>
                        <FcManager className='h-28 w-auto py-2' />
                        <p className='text-blue-500 font-bold text-xl'>Step 3</p>
                        <h4 className='text-xl font-bold'>Streamlined Hiring</h4>
                        <p>Simplify your hiring journey with our streamlined process. From shortlisting to onboarding, we provide support at every step, empowering you to make confident decisions and build a strong, remote workforce.</p>
                    </div>

                </div>

                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded inline-flex items-center justify-center text-lg my-6 mt-24">
                    Hire faster
                </button>

            </section>

            <section className='py-16 m-10 p-10 max-w-screen-xl flex flex-col items-center justify-center mx-auto'>

                <h2 className='text-4xl font-bold text-center mb-6'>
                    Why Choose Us
                </h2>

                <div className='flex items-center justify-between w-full mt-24'>

                    <div className='w-3/12'>
                        <FcConferenceCall className='h-28 w-auto py-2' />
                        <h4 className='text-xl font-bold mb-2'>Expertise in Remote Talent Acquisition</h4>
                        <p>Harness our in-depth industry knowledge and proven track record in remote talent acquisition. Benefit from our expertise in identifying and securing top-tier professionals for your unique business needs.</p>
                    </div>

                    <div className='w-3/12'>
                        <FcClock className='h-28 w-auto py-2' />
                        <h4 className='text-xl font-bold mb-2'>Efficiency Redefined</h4>
                        <p>Experience a streamlined and efficient hiring process that minimizes time-to-fill positions. Our commitment to precision and speed ensures you access the right talent swiftly, giving your business a competitive edge.</p>
                    </div>

                    <div className='w-3/12 p-2 m-2'>
                        <FcPositiveDynamic className='h-28 w-auto py-2' />
                        <h4 className='text-xl font-bold mb-2'>Tailored Solutions for Your Business</h4>
                        <p>Enjoy customized hiring solutions crafted to align seamlessly with your company's goals. From specialized skill requirements to cultural fit, we tailor our services to ensure the perfect match, promoting long-term success for both employers and candidates.</p>
                    </div>

                </div>

                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded inline-flex items-center justify-center text-lg my-6 mt-24">
                    Hire faster
                </button>

            </section>



        </div>

    )
}

export default Body;