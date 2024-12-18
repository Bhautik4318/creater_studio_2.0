// components/NewSection.js
import React from 'react';
import Image from 'next/image';
import myImage from '../components/chatgpt-container-logo.jpg';

const NewSection = () => {
    return (
        <section className="py-16 px-20 bg-gray-200  flex justify-evenly w-full">
            <Image className="rounded-3xl" src={myImage} alt="Description of the image" width={600}
                height={400} />


            <div className="  flex flex-col items-center justify-center " >


                <div className=' flex flex-col mb-3 justify-center'>
                    <div className = 'mb-2'>
                    <h1 className="text-black  font-bold text-3xl mr-3">Support customers</h1>
                    <h1 className="text-black  font-bold text-3xl mr-3">on multiple channels</h1>
                    </div>

                    <div className='mb-4'>                
                        <p className='text-black  text-lg mr-1'>an AI chatbot to LiveChat, Messenger, or </p>
                        <p className='text-black  text-lg mr-1'>Slack to handle all support cases automatically, 24/7.</p>
                    </div>
                </div>

                <a href="/" className=" text-white bg-black ease-in duration-75 text-center px-3 py-3 font-500 inline-block text-black  border-2 rounded-full border-black " >Sign up free</a>

            </div>

        </section>
    );
};

export default NewSection;
