import React from 'react'
// import HireTriangle from '../../public/HireTriangle.jpg'
import HireCycle from '../../public/HireTriangle.jpg'


const Contract = () => {
    return (
        <div>
            <div>
                <section className="mt-4">
                    <div className="bg-img bg-center bg-no-repeat bg-cover max-w-full h-96" style={{ backgroundImage: `url(https://images.pexels.com/photos/7964417/pexels-photo-7964417.jpeg)` }}></div>
                </section>

                <section className="relative bg-black justify-center">
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
                        <div className="mb-36">
                            <h1 className="text-white text-5xl font-bold">SERVICES OFFERED</h1>
                            <div className="line w-12/12 h-1.5 bg-[#0B5ED7] mt-1"></div>
                        </div>
                    </div>
                </section>

                <div className="line w-12/12 h-1.5 bg-[#0B5ED7] mt-1"></div>


                <section className='pt-10 relative'>
                    {/* <h1 className='text-3xl font-semibold text-center max-w-screen-xl mx-auto underline'>PERMANENT STAFFING</h1> */}
                    <h1 className='text-3xl font-semibold text-start max-w-screen-xl items-center justify-center mx-auto underline'>CONTRACT STAFFING</h1>

                    <div className='pt-2 m-2 max-w-screen-xl flex flex-col-reverse items-center justify-center mx-auto relative z-10'>
                        <div className='flex flex-col items-center justify-center w-full md:flex-row'>
                            <p className='w-full md:w-8/12 mt-10 text-center md:text-left'>
                                Contract employment is rising at a faster rate than ever all across the globe. As it has become very challenging to find good candidates on a permanent basis. Contract staffing opens up a wealth of great resources that will be available on a temporary basis. We can provide quality resources on different many terms as briefly mentioned below:
                                <br /> <br />
                                <span className='font-bold'>Fixed-term Contract</span>
                                <br />
                                Fixed-term contracts are those which are bound by requirements. These contracts are generally made against a single project and when the requirements of that project are met, the contract gets terminated.
                                <br /> <br />
                                <span className='font-bold'>Agency Staff</span>
                                <br />
                                In these contracts, the employees are fully hired by the agency but work for other companies.
                                <br /> <br />
                                <span className='font-bold'>Freelancing</span>
                                <br />
                                This is when an individual has an in-demand skill set, so he/she applies to one or more organizations that hire this employee on a contractual basis to deliver the needs of the company.
                                <br /> <br />
                                <span className='font-bold'>Zero-hour Contract</span>
                                <br />
                                This is a kind of contract where no specific time or hours of work is mentioned. These staff are “on-call” when there is a specific need.
                                <br />
                                Our domain expertise currently is in HR and Admin, Accounts and Finance, IT and Tech and Sales and Marketing.
                                <br /> <br />
                            </p>

                            <div className='flex justify-center items-center w-full md:w-4/12 m-10'>
                                <img src='https://images.pexels.com/photos/1647919/pexels-photo-1647919.jpeg' alt='permanent' className='w-full h-auto' />
                            </div>
                        </div>
                    </div>
                </section>



                <section>
                    <div className='pt-2 m-2 mt-10 max-w-screen-xl flex items-center justify-center mx-auto relative z-10'>
                        <img src={HireCycle} alt='HireTriangle' className='w-3/4 h-auto' />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contract