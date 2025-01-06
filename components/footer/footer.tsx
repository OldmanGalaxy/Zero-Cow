export default function Footer() {
    return (
        <>
            <div className='footer-container w-screen h-52 bg-dgreen flex'>
                <div className='footer-start h-full w-1/5'>
                </div>
                <div className='footer-middle h-full w-3/5 flex'>
                    <div className='links-container1 w-1/3 flex flex-col my-6 text-center'>
                        <div className='links-text text-cream text-4xl font-lilita'>
                            Links
                        </div>
                        <ul className='links1 text-cream text-2xl font-lilita'>
                            <li className='home-text text-cream text-21 font-lilita'>Home</li>
                            <li className='impact-text text-cream text-21 font-lilita'>Impact</li>
                            <li className='accomplishments-text text-cream text-21 font-lilita'>Accomplishments</li>
                        </ul>
                    </div>
                    <div className='links-container2 w-1/3 flex flex-col my-6 text-center'>
                        <div className='links-text text-cream text-4xl font-lilita'>
                            Links
                        </div>
                        <ul className='links2 text-cream text-2xl font-lilita'>
                            <li className='our-team-text text-cream text-21 font-lilita'>Our Team</li>
                            <li className='faq-text text-cream text-21 font-lilita'>FAQ</li>
                        </ul>
                    </div>
                    <div className='social-media-container w-1/3 flex flex-col my-6'>
                        <div className='social-media-text text-cream text-4xl text-center font-lilita'>
                            Social Media
                        </div>
                        <div className='footer-logo-container h-full w-full flex justify-center'>
                            <img src='/images/linkedin.png' alt='Linkedin' className='footer-logo-image object-fill w-32' />
                        </div>
                    </div>
                </div>
                <div className='footer-end h-full w-1/5 flex justify-end items-center mr-2'>
                    <img src='/images/logo.png' alt='logo' className='footer-logo-image object-fill w-32' />
                </div>
            </div>
        </>
    )
}