import React from 'react'

const ApplyNow = () => {
    return (
        <div class="min-h-screen">
            <div className='mt-4 py-16 bg-gradient-to-r from-blue-50 to-indigo-100'>
                <div className="h-9 max-w-full">
                    <h1 className='text-3xl font-extrabold text-center max-w-screen-xl mx-auto'>Hello, we're eager to learn more about you.</h1>
                    <h1 className='p-2 text-xl font-bold text-center max-w-screen-xl mx-auto'>Unlock lucrative opportunities with leading companies.</h1>
                </div>

                <div className='mt-8 max-w-screen-xl mx-auto'>
                    <form onSubmit={(e) => e.preventDefault()} className=' px-4 md:px-8 lg:px-16 pt-8 md:pt-16 text-center md:text-left'>
                        <div>
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What role are you applying for?</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select</option>
                                <option value="Full Stack Developer">Full Stack Developer</option>
                                <option value="Web Developer">Web Developer</option>
                                <option value="Backend Developer">Backend Developer</option>
                                <option value="Android Developer">Android Developer</option>
                                <option value="iOS Developer">iOS Developer</option>
                                <option value="React Native Developer">React Native Developer</option>
                                <option value="Flutter Developer">Flutter Developer</option>
                                <option value="React.js Developer">React.js Developer</option>
                                <option value="Node.js Developer">Node.js Developer</option>
                                <option value="Python Developer">Python Developer</option>
                                <option value="Java Developer">Java Developer</option>
                                <option value="Angular Developer">Angular Developer</option>
                                <option value=".Net Developer">.Net Developer</option>
                                <option value="Software Architect">Software Architect</option>
                                <option value="DevOps Engineer">DevOps Engineer</option>
                                <option value="Database Administrator">Database Administrator</option>
                                <option value="Data Engineer">Data Engineer</option>
                                <option value="Data Scientist">Data Scientist</option>
                                <option value="Software Development Manager">Software Development Manager</option>
                                <option value="SQA Engineer">SQA Engineer</option>
                                <option value="Test Automation Engineer">Test Automation Engineer</option>
                                <option value="Test Architect">Test Architect</option>
                                <option value="SQA Manager">SQA Manager</option>
                                <option value="Engineering Manager">Engineering Manager</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="Network Engineer">Network Engineer</option>
                                <option value="Information Security Specialist">Information Security Specialist</option>
                                <option value="Ethical Hacker">Ethical Hacker</option>
                                <option value="Network Security Engineer">Network Security Engineer</option>
                                <option value="IT Engineer">IT Engineer</option>
                                <option value="Product Manager">Product Manager</option>
                                <option value="Product Designer">Product Designer</option>
                                <option value="UI/UX Designer">UI/UX Designer</option>
                                <option value="Technical Recruiter">Technical Recruiter</option>
                                <option value="Credit Analyst">Credit Analyst</option>
                                <option value="Risk Analyst">Risk Analyst</option>
                                <option value="System Integration Expert">System Integration Expert</option>
                                <option value="Technical Support">Technical Support</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>


                        <div class="grid gap-6 mb-6 md:grid-cols-2 mt-8">
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                            </div>
                            <div>
                                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                            </div>
                            <div>
                                <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required />
                            </div>
                            <div>
                                <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required />
                            </div>
                            <div>
                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                                <input type="email" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
                            </div>
                            <div>
                                <label for="experience" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How many years of full-time work experience do you have?</label>
                                <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                            </div>
                        </div>

                        <div>
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How’s your English?</label>

                            <div class="flex items-center mb-4">
                                <input checked id="Basic" type="radio" value="" name="default-radio" class="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300" />
                                <label for="Basic" class="ms-2 text-2xl font-bold text-gray-900 dark:text-gray-300">Basic</label>
                            </div>
                            <p class="p-4 ms-2 text-lg font-medium text-gray-900 dark:text-gray-300 mb-4">
                                I can only communicate in written form over email or Slack effectively. Verbal communication in English with a U.S. engineering manager would be slow and impractical.
                            </p>

                            <div class="flex items-center mb-4">
                                <input id="Average" type="radio" value="" name="default-radio" class="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300" />
                                <label for="Average" class="ms-2 text-2xl font-bold text-gray-900 dark:text-gray-300">Average</label>
                            </div>
                            <p class="p-4 ms-2 text-lg font-medium text-gray-900 dark:text-gray-300 mb-4">
                                I can communicate with a U.S. engineering manager if we both speak slowly and occasionally repeat sentences that the other person didn't understand.
                            </p>

                            <div class="flex items-center mb-4">
                                <input id="Great" type="radio" value="" name="default-radio" class="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300" /> 
                                <label for="Great" class="ms-2 text-2xl font-bold text-gray-900 dark:text-gray-300">Great</label>
                            </div>
                            <p class="p-4 ms-2 text-lg font-medium text-gray-900 dark:text-gray-300 mb-4">
                                Both U.S. engineering managers and I can easily understand each other without having to repeat much.
                            </p>

                        </div>

                        <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ApplyNow