import React from 'react';

const ImpactComponent = () => {
  return (
    // Main container with background color
    <div className="relative min-h-screen w-full">
      {/* Background color layer */}
      <div className="absolute inset-0 bg-ygreen z-[-99]" />

      {/* Background Images Container */}
      <div className="absolute max-h-screen inset-0 z-[-2]">
        {/* First background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rotate-90 mix-blend-multiply"
          style={{ backgroundImage: "url('/images/milk3.png')" }}
        />
        {/* Second background image */}
        <div 
          className="absolute top-12 right-60 w-[330px] h-[265px] bg-contain rotate-90 bg-no-repeat"
          style={{ backgroundImage: "url('/images/bubbles.png')" }}
        />
      </div>

      {/* Impact Items Container */}
      <div className="relative z-[2] flex flex-col items-center justify-center min-h-screen gap-12 px-[100px] py-[80px]">
        {[
          { image: '/images/burger.png', alt: 'Burger', angle: -23.55, bgColor: '#5DB996' },
          { image: '/images/leaf.png', alt: 'Leaf', angle: -27.25, bgColor: '#5DB996' },
          { image: '/images/flask.png', alt: 'Flask', angle: 40.93, bgColor: '#5DB996' },
          { image: '/images/tree.png', alt: 'Tree', angle: -30, bgColor: '#5DB996' }
        ].map((item, index) => (
          <div key={index} className="relative flex items-center justify-center w-full">
            <div 
              className={`relative w-[600px] h-[200px] rounded-[20px] shadow-lg
                         ${index % 2 === 0 ? 'mr-auto ml-20' : 'ml-auto mr-20'}`}
              style={{ 
                backgroundColor: item.bgColor,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="absolute w-[200px] h-[200px]"
                style={{
                  transform: `rotate(${item.angle}deg)`,
                  [index % 2 === 0 ? 'left' : 'right']: '-60px',
                  top: '10px'
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className='bg-ygreen relative flex w-full overflow-hidden'>
        {/* <img src="images/footer_milk.png" className='h-[500px]' alt="" />
        <img src="images/footer_milk.png" className='h-[500px] absolute bottom-[30px] left-[49.92%]' alt="" /> */}
      </div>
    </div>
  );
};

export default ImpactComponent;

