import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [value, setValue] = useState('');

    const navigate = useNavigate();

    // Handle Join Room Function 
    const handleJoinRoom = useCallback(() => {
        if(!value){
            return alert('Please Enter Room Id')
        }
        navigate(`/room/${value}`);
    })

    return (
        <>
            <div className='flex justify-center items-center h-screen bg-gray-900'>
                {/* Main Div  */}
                <div className="">                   
                    {/* Input And Button  */}
                    {/* <div className="input bg-gray-800 flex items-center gap-2 rounded-lg border
                 border-gray-600">

                    Input Tag 
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className='bg-transparent py-2 px-2 outline-none rounded-xl w-64 lg:w-96
                        text-lg text-white'
                        placeholder='Enter Room Code'
                    />

                    Button Tag 
                    <button
                        type='button'
                        onClick={handleJoinRoom}
                        className=' bg-gray-700 hover:bg-gray-600 border-l border-gray-600 text-white font-bold px-8 py-2.5 rounded-r-lg'
                    >
                        Join
                    </button>
                </div> */}

                    {/* Input And Button  */}
                    <div className="input bg-gray-950 px-5 py-6 rounded-xl border border-gray-600 shadow-md ">

                        <div className="flex justify-center mb-8">
                            <img className='w-20 border rounded-full border-gray-600' src="https://cdn-icons-png.flaticon.com/128/11104/11104179.png" alt="img" />
                        </div>

                        {/* Input Tag */}
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className='bg-gray-950  rounded-lg border
                            border-gray-600 py-2 px-2 outline-none w-80 lg:w-96 text-lg text-white mb-5'
                            placeholder='Enter Room Code'
                        />
                        <br />
                        {/* Button Tag */}
                        <button
                            type='button'
                            onClick={handleJoinRoom}
                            className=' bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-300 font-bold px-8 py-2 rounded-lg w-full'
                        >
                            Join Room
                        </button>

                        {/* <h1 className='text-gray-700 text-center'>Powered By Devknus</h1> */}
                    </div>

                </div>
            </div>
        </>

    )
}
