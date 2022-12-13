import React from 'react';

//import images
import Headset1 from '../assets/img/headset-1.png';
import Headset2 from '../assets/img/headset-2.png';
import Headset3 from '../assets/img/headset-3.png';
import Headset4 from '../assets/img/headset-4.png';



const Headsets = () => {
  return (
    <section className='py-12 lg:py-24'>
      <div className='container mx-auto'>
        {/*title*/}
        <h2 className='text-3xl font-bold mb-6'
        data-aos='fade-down'
        data-aos-offset='300'
        >Mixed Reality Headsets</h2>
        {/*grid*/}
        <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'
          >
          {/*item */}
          <div className='relative'
          data-aos='zoom-in'
          data-aos-offset='300' 
          data-aos-delay='1000'>
            <img src={Headset1} alt='' />
            <div className='absolute bottom-0 bg-white/20
            backdrop-blur-md max-w-[300px] min-h-[150px]
            p-6'>
               <h4 className='font-semibold text-xl mb-2'>Metaverse</h4>
               <p> In science fiction, the "metaverse" is a hypothetical iteration of the Internet as a single, universal, and immersive virtual world that is facilitated by the use of virtual reality and augmented reality headsets. 

               </p>
            </div>
          </div>
          {/*item */}
          <div className='relative'
          data-aos='zoom-in'
          data-aos-offset='300' 
          data-aos-delay='1300'>
            <img src={Headset2} alt='' />
            <div className='absolute bottom-0 bg-white/20
            backdrop-blur-md max-w-[300px] min-h-[150px]
            p-6'>
               <h4 className='font-semibold text-xl mb-2'>AIoT</h4>
               <p> Artificial intelligence of things (AIoT) is the combination of artificial intelligence (AI) technologies and the internet of things (IoT) infrastructure. AIoT's goal is to create more efficient IoT operations, improve human-machine interactions and enhance data management and analytics. 

               </p>
            </div>
          </div>
          {/*item */}
          <div className='relative'
          data-aos='zoom-in'
          data-aos-offset='300' 
          data-aos-delay='1600'>
            <img src={Headset3} alt='' />
            <div className='absolute bottom-0 bg-white/20
            backdrop-blur-md max-w-[300px] min-h-[150px]
            p-6'>
               <h4 className='font-semibold text-xl mb-2'>HoloLens</h4>
               <p> HoloLens is an augmented reality (AR)/mixed reality (MR) headset developed and manufactured by Microsoft. HoloLens runs the Windows Mixed Reality platform under the Windows 10 operating system. 

               </p>
            </div>
          </div>
          {/*item */}
          <div className='relative'
          data-aos='zoom-in'
          data-aos-offset='300' 
          data-aos-delay='1900'>
            <img src={Headset4} alt='' />
            <div className='absolute bottom-0 bg-white/20
            backdrop-blur-md max-w-[300px] min-h-[140px]
            p-6'>
               <h4 className='font-semibold text-xl mb-2'>TPCASTT</h4>
               <p> Virtual reality sickness (VR motion sickness) is the physical discomfort that occurs when an end user's brain receives conflicting signals about self-movement in a digital environment.

               </p>
            </div>
          </div>
        </div>
      </div>
    </section>);
};

export default Headsets;
