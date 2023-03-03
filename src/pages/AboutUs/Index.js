import React from 'react'
import img from '../../assets/images/bgleaderone.png'
import HeadingWithPera from '../../components/HeadingWithPera';
import Leader from './Components/Leader';

const Index = () => {
  const leaderArr = [
    {
      name: "Vijay Kumar",
      image: img,
      position: "Founder of second brain",
      description: "Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum."
    },
    {
      name: "Vijay Kumar",
      image: img,
      position: "Founder of second brain",
      description: "Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum."
    },
  ]
  return (
    <div className=''>
      <div className="flex-shrink-0">
        <img className="h-[400px] w-full object-cover" src="../assets/images/web/bg.png" alt="Logo" />
      </div>

      <div className='md:ml-4 xl:ml-4 2xl:ml-8 p-2 h-auto w-auto  lg:h-96 lg:w-96 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96 md:flex md:justify-center md:items-center'>
        <div className="w-289 h-144 text-black text-sm md:text-2xl leading-2 2xl:text-2xl">
          <HeadingWithPera 
          heading="Our mission" 
          description="Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum."            
          />
        </div>
      </div>

      <div className='md:ml-4 xl:ml-4 2xl:ml-8 p-2 h-auto w-auto  lg:h-96 lg:w-96 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96 md:flex md:justify-center md:items-center'>
        <div className="w-289 h-144 text-black text-sm md:text-2xl leading-2 2xl:text-2xl">
          <HeadingWithPera 
          heading="Our story" 
          description="Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum. Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum. Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum. Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum."            
          />
        </div>
      </div>

      <div className="w-289 md:ml-4 xl:ml-4 2xl:ml-8 h-144 font-semibold text-black text-2xl md:text-2xl leading-8 mt-4 2xl:text-2xl flex items-center mb-4">
        <div className='bg-blue-400 w-2 h-8'></div>
        <p className='text-center md:text-start xl:text-start 2xl:text-start ml-2'>Meet our leaders</p>
      </div>

      {leaderArr.map((data, index) => {
        return <Leader key={index} name={data.name} image={data.image} position={data.position} description={data.description} />
      })}

    </div>
  )
}

export default Index