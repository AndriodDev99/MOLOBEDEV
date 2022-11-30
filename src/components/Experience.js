import React from 'react';

import { style } from '@material-ui/system';

const Experience = () => {

    const techs=[
        {
            id:1,
            title:'Technical Training Consultant',
            style:'shadow-orange-500'
        },
        {
            id:2,
            title:'Learning & Org Development Specialist',
            style:'shadow-blue-500'
        },
        {
            id:3,
            title:'Head Of Training',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            title:'National Training & OD Manager',
            style:'shadow-green-500'
        },
        {
            id:5,
            title:'National Training and Transformation Manager',
            style:'shadow-purple-500'
        },

    ]
    return (
        <div  id='Experience' name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>This is my experience</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        techs.map(({id,src,title,style})=>(
                            <div key={id}className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt='' className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                        ))
                    }
                   
                </div>
            </div>

        </div>


    )
}

export default Experience