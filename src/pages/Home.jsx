import Head from "../components/Head"
import Navbar from "../components/Navbar"

const Home=()=>{
    return(
        <div className='flex flex-col space-y-36'>
        <Navbar />
        <Head />
        </div>
    )
}

export default Home