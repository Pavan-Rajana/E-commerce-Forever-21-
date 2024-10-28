import { f_assets } from "../assets/frontend_assets/assets"
import Title from "../components/Title"
import Newsletter from "../components/Newsletter"

const Contact = () => {
    return (
        <div>
            <div className="text-center text-2xl pt-10 border-t">
                <Title text1={"contact"} text2={"us"} />
            </div>
            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
                <img className="w-full md:max-w-[480px]" src={f_assets.contact_img} alt="" />
                <div className="flex flex-col justify-center items-start gap-6">
                    <p className="font-semibold text-xl text-gray-700">Our Store</p>
                    <p className="text-gray-500">54709 Williams Station, <br />Suite 350, Washington, USA </p>
                    <p className="text-gray-500">Contact: +(123) 666-000 <br />Email:admin@forever21.com </p>
                    <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
                    <p className="text-gray-500">Learn more about teams and job Openings</p>
                    <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 shadow-blue-300">Explore Jobs</button>
                    <p></p>
                </div>
            </div>
            <Newsletter />
        </div>
    )
}

export default Contact