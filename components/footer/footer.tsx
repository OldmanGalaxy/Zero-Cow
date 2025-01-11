
export default function Footer() {
    return (
        <>
            <div className='footer-container w-full min-h-[13rem] bg-dgreen flex flex-col md:flex-row'>
                <div className='footer-start hidden md:block md:w-1/5'>
                </div>
                <div className='footer-mobile w-full flex flex-row md:hidden'>
                    <div className='social-media-container w-1/3 flex flex-col my-8 pt-2'>
                        <div className='social-media-text text-cream text-2xl text-center font-lilita'>
                            Social
                        </div>
                        <div className='footer-logo-container h-full w-full flex justify-center '>
                            <img src='/images/linkedin.png' alt='Linkedin' className='footer-logo-image h-20 w-20 hover:opacity-80 cursor-pointer' />
                        </div>
                        <div className='text-cream text-2xl text-center font-lilita '>
                            Media
                        </div>

                    </div>

                    <div className='links-container w-1/3 flex flex-col my-4 ml-3 mr-2 pl-1 text-center'>
                        <div className='links-text text-cream text-2xl font-lilita'>
                            Links
                        </div>
                        <ul className='links text-cream text-base font-lilita space-y-1 mt-2'>
                            <li className='home-text hover:opacity-80 cursor-pointer'>Home</li>
                            <li className='our-team-text hover:opacity-80 cursor-pointer'>Our Team</li>
                            <li className='impact-text hover:opacity-80 cursor-pointer'>Impact</li>
                            <li className='accomplishments-text hover:opacity-80 cursor-pointer'>Accomplishments</li>
                            <li className='faq-text hover:opacity-80 cursor-pointer'>FAQ</li>
                        </ul>
                    </div>

                    <div className='logo-container w-1/3 flex justify-center items-start pl-4 mt-16'>
                        <img src='/images/logo.png' alt='logo' className='footer-logo-image w-16' />
                    </div>
                </div>

                <div className='footer-middle w-full md:w-3/5 hidden md:flex flex-col md:flex-row px-4 md:px-0 mr-14'>
                    <div className='links-container1 w-full md:w-1/3 flex flex-col my-4 md:my-6 text-center'>
                        <div className='links-text text-cream text-3xl md:text-4xl font-lilita'>
                            Links
                        </div>
                        <ul className='links1 text-cream text-xl md:text-2xl font-lilita space-y-2 md:space-y-3 mt-2'>
                            <li className='home-text hover:opacity-80 cursor-pointer'>Home</li>
                            <li className='impact-text hover:opacity-80 cursor-pointer'>Impact</li>
                            <li className='accomplishments-text hover:opacity-80 cursor-pointer'>Accomplishments</li>
                        </ul>
                    </div>
                    <div className='links-container2 w-full md:w-1/3 flex flex-col my-4 md:my-6 text-center'>
                        <div className='links-text text-cream text-3xl md:text-4xl font-lilita'>
                            Links
                        </div>
                        <ul className='links2 text-cream text-xl md:text-2xl font-lilita space-y-2 md:space-y-3 mt-2'>
                            <li className='our-team-text hover:opacity-80 cursor-pointer'>Our Team</li>
                            <li className='faq-text hover:opacity-80 cursor-pointer'>FAQ</li>
                        </ul>
                    </div>
                    <div className='social-media-container w-full md:w-1/3 flex flex-col my-4 md:my-6'>
                        <div className='social-media-text text-cream text-3xl md:text-4xl text-center font-lilita'>
                            Social Media
                        </div>
                        <div className='footer-logo-container h-full w-full flex justify-center mt-2'>
                            <img src='/images/linkedin.png' alt='Linkedin' className='footer-logo-image w-24 md:w-32 hover:opacity-80 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className=' footer-end hidden md:flex h-full md:w-1/5 md:justify-end items-center md:mr-2 ' >
                    <img src='/images/logo.png' alt='logo' className='footer-logo-image w-24 md:w-32 mt-14 mr-20' />
                </div>
            </div>
            
            <div className='bg-dgreen w-full pb-4'>
                <div className='md:hidden text-center'>
                    <div className='w-full flex justify-center'>
                        <div className='w-2/3 h-[3px] bg-cream mt-5 mb-2'></div>
                    </div>
                    <p className='text-cream font-lilita'>Website by Purv Kabaria</p>
                </div>

                <div className='hidden md:block text-center'>
                    <div className='w-full flex justify-center'>
                        <div className='w-2/3 h-[4px] bg-cream mt-6 mb-3'></div>
                    </div>
                    <p className='text-cream font-lilita'>©2025 All rights reserved. Website by Purv Kabaria</p>
                </div>
            </div>

        </>
    )
}