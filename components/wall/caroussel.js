import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from "@/components/home/sectionTitle";

const Caroussel = (props) => {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className="p-1">
                <SectionTitle
                    id="wall"
                    pretitle="THE TEAM"
                    title="Meet our team">
                </SectionTitle>


                <div className="slider-container">

                    <Slider {...settings}>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/khoufid/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/D4E03AQF9itq175po9Q/profile-displayphoto-shrink_800_800/0/1667066373861?e=1717027200&v=beta&t=sMxDZpAkp2VN3y7RXQ4MZ30IQIU3qU_cPioq8cLPg7o" /></a>

                            <a href="https://www.linkedin.com/in/khoufid/" className="hover:text-indigo-500 text-gray-900 font-semibold">Marouane KHOUFID</a>
                            <p className="text-gray-500 text-sm">Chapo</p>
                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/camille-cabri-0515a019a/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/D4D35AQF6ib7Waa_5lw/profile-framedphoto-shrink_800_800/0/1709568980607?e=1717074000&v=beta&t=QiNw8NtqR8xjs1dXEqznV5M_Dk_PTXqMTEdPltg-eRc" /></a>

                            <a href="https://www.linkedin.com/in/camille-cabri-0515a019a/" className="hover:text-indigo-500 text-gray-900 font-semibold">Camille CABRI</a>
                            <p className="text-gray-500 text-sm">Responsable communication</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/gabriel-papalia-b1a3921b6/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="https://www.linkedin.com/in/gabriel-papalia-b1a3921b6/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr" className="hover:text-indigo-500 text-gray-900 font-semibold">Gabriel PAPALIA</a>
                            <p className="text-gray-500   text-sm">Manager du projet Catching Spirits</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/margaux-pierre-627353218/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/C4E03AQEEeaPPSlYavQ/profile-displayphoto-shrink_800_800/0/1633984880983?e=1717027200&v=beta&t=Ffh5Lz9yoORG1elAcnwfWxbmDgqtxkyL55JD1PdkJok" /></a>

                            <a href="https://www.linkedin.com/in/margaux-pierre-627353218/" className="hover:text-indigo-500 text-gray-900 font-semibold">Margaux PIERRE</a>
                            <p className="text-gray-500   text-sm">Manager du projet AEG</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/camille-mirio-80bb74257/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/D4E03AQEtWJhLMy3YGw/profile-displayphoto-shrink_800_800/0/1669031662356?e=1717027200&v=beta&t=42z_T77oEbdEaAPROX9Yqq27LAwcKdYTLMzWQeqxP9w"/></a>

                            <a href="https://www.linkedin.com/in/camille-mirio-80bb74257/" className="hover:text-indigo-500 text-gray-900 font-semibold">Camille MIRIO</a>
                            <p className="text-gray-500   text-sm">Manager du projet AEG</p>
                        </div>

                        <div className="text-center">
                            <a href="#"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">Phuong Mai NGUYEN</a>
                            <p className="text-gray-500   text-sm">Développeuse du projet Site Web</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/hind-naoui-6275aa21b/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/C4D03AQHnefZKgzTj4Q/profile-displayphoto-shrink_800_800/0/1636184960109?e=1717027200&v=beta&t=1ImBEsYggYm1qvpYwp8Z8U-AIRbX6UHwCgmVA6CnggQ" /></a>

                            <a href="https://www.linkedin.com/in/hind-naoui-6275aa21b/" className="hover:text-indigo-500 text-gray-900 font-semibold">Hind NAOUI</a>
                            <p className="text-gray-500   text-sm">Développeuse du projet AEG</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/diego-fieux-b666b2239/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/C4D03AQHHP__AHK0H3g/profile-displayphoto-shrink_800_800/0/1652477768544?e=1717027200&v=beta&t=OGBznlmA1Fo0Bf3NdO5DVnBs-Ak8lE4-tdC7ebHBs0A" /></a>

                            <a href="https://www.linkedin.com/in/diego-fieux-b666b2239/" className="hover:text-indigo-500 text-gray-900 font-semibold">Diego FIEUX</a>
                            <p className="text-gray-500   text-sm">Manager du projet Bien vivre, bien vieillir en Occitanie</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/mathieu-vassal/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/C4E03AQG9V-gFSdG-7g/profile-displayphoto-shrink_800_800/0/1651684223150?e=1717027200&v=beta&t=0FlShO6-NKZYBDKF4oIoTFxpuzMsKql7rD0nYU8K0hc" /></a>

                            <a href="https://www.linkedin.com/in/mathieu-vassal/" className="hover:text-indigo-500 text-gray-900 font-semibold">Mathieu VASSAL</a>
                            <p className="text-gray-500   text-sm">Manager du projet Site Web</p>
                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/tessa-roche-quarre-777880220/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/C4E03AQGaL8V8-sY-cg/profile-displayphoto-shrink_800_800/0/1640690203132?e=1717027200&v=beta&t=8iWI7FNNXKB4Lzz0mARAJApYQSBFhAZMXuJJ6XfHZ2A" /></a>

                            <a href="https://www.linkedin.com/in/tessa-roche-quarre-777880220/" className="hover:text-indigo-500 text-gray-900 font-semibold">Tessa ROCHÉ-QUARRÉ</a>
                            <p className="text-gray-500   text-sm">Manager du projet Site Web</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/%E5%B1%95%E8%B5%AB-%E5%BC%A0-76571422a/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/C4D03AQHcmfG9bVijiQ/profile-displayphoto-shrink_800_800/0/1641408231317?e=1717027200&v=beta&t=WGu4rBgL9BvBOoQ729AWpu6GUz_poKDYZDM1rB694MU" /></a>

                            <a href="https://www.linkedin.com/in/%E5%B1%95%E8%B5%AB-%E5%BC%A0-76571422a/" className="hover:text-indigo-500 text-gray-900 font-semibold">Zhanhe ZHANG</a>
                            <p className="text-gray-500   text-sm">Développeur du projet AEG</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/romaric-rebouys-20b1b4253/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/D4E03AQGZtpkKG_hqEw/profile-displayphoto-shrink_800_800/0/1705752611061?e=1717027200&v=beta&t=Ztp8frpVbuQ9IseQWftwmTX6XrmEtrBx6NSg7q7YGgE" /></a>

                            <a href="https://www.linkedin.com/in/romaric-rebouys-20b1b4253/" className="hover:text-indigo-500 text-gray-900 font-semibold">Romaric REBOUYS</a>
                            <p className="text-gray-500   text-sm">Développeur du projet Bien vivre, bien vieillir en Occitanie</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/arthurfrindel580515152/?originalSubdomain=fr"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/C5603AQFXgstbldU_Ww/profile-displayphoto-shrink_800_800/0/1636630852376?e=1717632000&v=beta&t=4eGp5ll18vMuc9Q3_h_hu3cIuRdtXEJjzTovXU2Z2tI" /></a>

                            <a href="https://www.linkedin.com/in/arthurfrindel580515152/?originalSubdomain=fr" className="hover:text-indigo-500 text-gray-900 font-semibold">Arthur FRINDEL</a>
                            <p className="text-gray-500   text-sm">Manager du projet Catching Spirits</p>
                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/kiady-rajoelisolo/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/D4E03AQFQ50tuXziguA/profile-displayphoto-shrink_800_800/0/1681851503259?e=1717027200&v=beta&t=7iyBkQ94W331R3kMkEeYDHM0-ziMRNKkM_xcxRSVut4" /></a>

                            <a href="https://www.linkedin.com/in/kiady-rajoelisolo/" className="hover:text-indigo-500 text-gray-900 font-semibold">Kiady RAJOELISO</a>
                            <p className="text-gray-500   text-sm">Manager du projet AEG</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/florian-bellus-b51255252/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/D4D03AQEfP10Ez3VdBA/profile-displayphoto-shrink_800_800/0/1683807342664?e=1717027200&v=beta&t=rsUcnUB0a7bJIn95du_GqvNU4miPnD4Ez3cQZF2p9fI" /></a>

                            <a href="https://www.linkedin.com/in/florian-bellus-b51255252/" className="hover:text-indigo-500 text-gray-900 font-semibold">Florian BELLUS</a>
                            <p className="text-gray-500   text-sm">Développeur du projet Site Web</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/hugo-boussard-a22621184/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/C4E03AQGfOHTZjCd6QA/profile-displayphoto-shrink_800_800/0/1622104508769?e=1721865600&v=beta&t=KYYMVZlN6JAsuJOAvkT2e55fYkuyYk0SIqaM5vSAhwA" /></a>

                            <a href="https://www.linkedin.com/in/hugo-boussard-a22621184/" className="hover:text-indigo-500 text-gray-900 font-semibold">Hugo BOUSSARD</a>
                            <p className="text-gray-500   text-sm">Développeur du projet Cancéropole</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/adrien-savoye/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/D5603AQHgQmvajMic3w/profile-displayphoto-shrink_800_800/0/1695393932917?e=1717027200&v=beta&t=_Q-TEGRWi_5D5jMCU8guRCAEmqLv0zz-qsnpHOaMnt0" /></a>

                            <a href="https://www.linkedin.com/in/adrien-savoye/" className="hover:text-indigo-500 text-gray-900 font-semibold">Adrien SAVOYE</a>
                            <p className="text-gray-500   text-sm">Développeur du projet Site Web</p>
                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/can-ciraci-85b206235/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/D4D03AQGYrF1qw3lKkA/profile-displayphoto-shrink_800_800/0/1711367103487?e=1717027200&v=beta&t=NXag3yk6PxRdTbHr2D-cc71jjH2GH-KGFpFLHEKjbzs" /></a>

                            <a href="https://www.linkedin.com/in/can-ciraci-85b206235/" className="hover:text-indigo-500 text-gray-900 font-semibold">Yucel Can CIRACI</a>
                            <p className="text-gray-500   text-sm">Développeur du projet Bien vivre, bien vieillir en Occitanie</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/r%C3%A9mi-garcia-31t12r/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/D4E03AQF_gAUkNLFTNg/profile-displayphoto-shrink_800_800/0/1706259324808?e=1717027200&v=beta&t=SjO_zBTsPiPJ9msVB367ws9S-dEaS5b6MH4o-nIzNH4" /></a>

                            <a href="https://www.linkedin.com/in/r%C3%A9mi-garcia-31t12r/" className="hover:text-indigo-500 text-gray-900 font-semibold">Rémi GARCIA</a>
                            <p className="text-gray-500   text-sm">Manager du projet Cancéropole</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/ibrahima-barry99/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/D4E35AQFGXWWfX8Z6PQ/profile-framedphoto-shrink_800_800/0/1697183221996?e=1717077600&v=beta&t=psuvtWYCcjugyQzFd4-2nyYnHHTjX_n5zcqwjcJljJY" /></a>

                            <a href="https://www.linkedin.com/in/ibrahima-barry99/" className="hover:text-indigo-500 text-gray-900 font-semibold">Ibrahima BARRY</a>
                            <p className="text-gray-500   text-sm">Manager du projet Cancéropole</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/gabriel-fedou-1253b4212/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="https://www.linkedin.com/in/gabriel-fedou-1253b4212/" className="hover:text-indigo-500 text-gray-900 font-semibold">Gabriel FEDOU</a>
                            <p className="text-gray-500   text-sm">Tech lead du projet Catching Spirits</p>
                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/augustin-laurent-204ab6196/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/D4E35AQHSlT977-FMvw/profile-framedphoto-shrink_800_800/0/1705091348034?e=1717077600&v=beta&t=f7SQP1UayypyJne_LzYbF3fqlMRTU3ObQfiI6fjdK8s" /></a>

                            <a href="https://www.linkedin.com/in/augustin-laurent-204ab6196/" className="hover:text-indigo-500 text-gray-900 font-semibold">Augustin LAURENT</a>
                            <p className="text-gray-500   text-sm">Support IT</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/gabriel-saunders-94982b18b/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://media.licdn.com/dms/image/D4E03AQHTCEdyLFZEfA/profile-displayphoto-shrink_800_800/0/1699634439086?e=1717632000&v=beta&t=w-drpkKQQVUd9XGzfXasVKxdkAeg7GHlXtkqotiWmyE" /></a>

                            <a href="https://www.linkedin.com/in/gabriel-saunders-94982b18b/" className="hover:text-indigo-500 text-gray-900 font-semibold">Gabriel SAUNDERS</a>
                            <p className="text-gray-500   text-sm">Développeur du projet Catching Spirits</p>

                        </div>

                        <div className="text-center">
                            <a href="https://www.linkedin.com/in/mohamed-m-bedjaoui-4b26b6253/"><img className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" /></a>

                            <a href="https://www.linkedin.com/in/mohamed-m-bedjaoui-4b26b6253/" className="hover:text-indigo-500 text-gray-900 font-semibold">Mohamed BEDJAOUI</a>
                            <p className="text-gray-500   text-sm">Responsable communication</p>

                        </div>

                    </Slider>


                </div>


            </div>
        </>
    );
}

export default Caroussel;