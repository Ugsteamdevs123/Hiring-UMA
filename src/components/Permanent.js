import React from 'react'
import HireCycle from '../../public/HireCycle.jpg'


const Permanent = () => {
    return (
        <div>
            <section className="mt-4">
                <div className="bg-img bg-center bg-no-repeat bg-cover max-w-full h-96" style={{ backgroundImage: `url(https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg)` }}></div>
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
                <h1 className='text-3xl font-semibold text-start max-w-screen-xl items-center justify-center mx-auto underline'>PERMANENT STAFFING</h1>

                <div className='pt-2 m-2 max-w-screen-xl flex flex-col-reverse items-center justify-center mx-auto relative z-10'>
                    <div className='flex flex-col items-center justify-center w-full md:flex-row'>
                        <p className='flex w-full md:w-8/12 mt-10 text-center md:text-left'>
                            The RightHire team sends fully screened & qualified candidate profiles to clients and ensures to make a close match with the requirements received from the client. We match the profiles based on skills with experience, salary expectations, location criterias, communication & other skills to ensure quality of hire. Our team will support an end to end recruitment life cycle.
                            <br></br>
                            <br></br>
                            Our comprehensive sourcing and headhunting methodologies address complex full-time hiring challenges that organizations face today. We work closely with hiring managers and HR to ensure candidates are the right fit for the job role. Our team has placed many candidates across levels in different technologies.
                            <br></br>
                            <br></br>
                            Our team has placed full time resources across various domains in IT, IT Sales, Finance, Digital Marketing and HR.
                        </p>
                        <div className='flex justify-center items-center w-full md:w-4/12 m-10'>
                            <img src='https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg' alt='permanent' className='w-full h-auto' />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='pt-2 m-2 mt-10 max-w-screen-xl flex items-center justify-center mx-auto relative z-10'>
                    <img src={HireCycle} alt='HireCycle' className='w-3/4 h-auto' />
                </div>
            </section>
        </div>
    )
}

export default Permanent