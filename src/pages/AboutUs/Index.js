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
  ];

  const missionAndStory = [
    {
      heading: "Our mission",
      description: "Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum."
    },
    {
      heading: "Our story",
      description: "Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum. Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum. Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum. Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum."
    }
  ];

  return (
    <div className=''>
      <div className="flex-shrink-0">
        <img className="h-[400px] w-full object-cover" src="../assets/images/web/bg.png" alt="Logo" />
      </div>
      <div className="md:flex md:justify-center md:items-center md:flex-col">
        <div className='md:ml-4 xl:ml-4 2xl:ml-8 p-2 md:w-[700px] lg:w-[800px] md:flex md:justify-center md:items-center'>
          <div className="text-black text-sm md:text-2xl leading-2 2xl:text-2xl">
            {
              missionAndStory.map((data, index) => {
                return (
                  <HeadingWithPera
                    heading={data.heading}
                    description={data.description}
                    index={index}
                  />
                )
              })
            }
          </div>
        </div>
      </div>



      <div className="md:flex md:justify-center md:items-center md:flex-col">

        {leaderArr.map((data, index) => {
          return <Leader key={index} name={data.name} image={data.image} position={data.position} description={data.description} />
        })}
      </div>

    </div>
  )
}

export default Index