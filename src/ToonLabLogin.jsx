import { useEffect, useState } from 'react'
import bgspace from './img/bg-slide-space.jpg'
import bgfox from './img/bg-slide-fox.jpg'
import bghdvd from './videos/fishbg-vd.mp4'


function ToonLabLogin (){


    const slides = [

        {id:1,  imgUrl: bgspace, title: "SpaceBoy"},
        {id:2,  imgUrl: bgfox,   title: "CoolFox"}
    ]

    const [slide, setSlide] = useState(0)

    useEffect(() =>{
        const interval = setInterval(() =>{

            setSlide(prev => (prev + 1 ) % slides.length)

        }, 1000)
        
        return (() => clearInterval(interval))
    },[])



    return(

        <>

            <div id="form-div" className="w-[100%] h-[100vh] flex flex-col justify-around items-center " >
                {
                <div key={slides.id} className="border w-[250px] h-[20vh] ">
                    <img className='w-full h-full object-cover' src={slides[slide].imgUrl} alt={slides[slide].title} />
                </div>
                }
                <form className="bg-[url(./img/bglgpg.jpg)] bg-cover bg-center bg-fixed bg-no-repeat flex flex-col justify-center items-center p-6 rounded-xl rounded-tr-none rounded-bl-none shadow-black shadow-2xl">

                    
                    <label htmlFor="email" className="text-white font-bold">Email:</label>
                    <input type="email" id="email" name="email" className="p-2 rounded-md" />
                    
                    <label htmlFor="email" className="text-white font-bold">Password:</label>
                    <input type="password" id="password" name="password" className="p-2 rounded-md" />


                    <button className="text-white p-2 pl-4 pr-4 mt-3 border-[3px] border-white rounded-xl font-bold hover:bg-gray-50 hover:text-black">
                        Login
                    </button>
                    <p className="text-white mt-2 font-bold">New Here ? <a className="overline text-blue-500" href="">Sign Up</a></p>

                </form>
                
                <div className="w-[250px] h-[20vh] rounded-full">
                    <video className='rounded-full' loop muted autoPlay src={bghdvd}>
                
                    </video>
                </div>
            </div>
        </>

    )

}

export default ToonLabLogin