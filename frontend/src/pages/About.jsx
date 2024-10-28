import { f_assets } from "../assets/frontend_assets/assets"
import Title from "../components/Title"
import Newsletter from "../components/Newsletter"

const About = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1={"About"} text2={"us"} />
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className="w-full md:max-w-[450px]" src={f_assets.about_img} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>
                        What day is it? Coronavirus pod herd immunity maskne. This claim is disputed contact tracing unprecedented Dr. Fauci antibodies vaccine wildfires. Zoom call kraken at least 6 feet frontline workers COVID-19.
                    </p>
                    <p>
                        The target audience is makes and famles aged zero and up give us a complimentary logo along with the website make it pop can you please send me the design specs again?, so can my website be in english?.
                    </p>
                    <b className="text-gray-800">our Mission</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed animi voluptatibus laborum, fugit velit quod assumenda iusto repudiandae amet asperiores temporibus, quo deleniti reiciendis, hic nesciunt. Aspernatur inventore consequuntur dicta?</p>
                </div>
            </div>
            <div className="text-2xl py-4">
                <Title text1={"why"} text2={"choose us"} />
            </div>
            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md;px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi laborum cum, maxime eum nesciunt deserunt perferendis accusantium tenetur praesentium officia cupiditate consequuntur ipsam ducimus iure facere recusandae ut illum.</p>
                </div>
                <div className="border px-10 md;px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenience</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi laborum cum, maxime eum nesciunt deserunt perferendis accusantium tenetur praesentium officia cupiditate consequuntur ipsam ducimus iure facere recusandae ut illum.</p>
                </div>
                <div className="border px-10 md;px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi laborum cum, maxime eum nesciunt deserunt perferendis accusantium tenetur praesentium officia cupiditate consequuntur ipsam ducimus iure facere recusandae ut illum.</p>
                </div>
            </div>
            <Newsletter />
        </div>
    )
}

export default About