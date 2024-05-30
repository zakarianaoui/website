import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from "@/components/home/sectionTitle";
import Mirio from "@/public/image/wall/camille-mirio.jpg";
import Pierre from "@/public/image/wall/margaux-pierre.jpg";
import Marouane from "@/components/wall/images/Marouane.jpeg";


const Caroussel = (props) => {
    const [teamMembers, setTeamMembers] = React.useState([
        {
            name: "Marouane KHOUFID",
            image: "@/components/wall/images/Marouane.jpeg",
            linkedin: "https://www.linkedin.com/in/khoufid/"
        },
        {
            name: "Camille CABRI",
            image: "/images/Camille_Cabri.jpeg",
            linkedin: "https://www.linkedin.com/in/camille-cabri-0515a019a/" 
        },
        {
            name: "Gabriel PAPALIA",
            image: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
            linkedin: "https://www.linkedin.com/in/gabriel-papalia-b1a3921b6/"
        },
        {
            name: "Margaux PIERRE",
            image: "/images/Margaux.jpeg",
            linkedin: "https://www.linkedin.com/in/margaux-pierre-627353218/"
        },
        {
            name: "Camille MIRIO",
            image: "/images/Camille_Mirio.jpeg",
            linkedin: "https://www.linkedin.com/in/camille-mirio-80bb74257/"
        },
        {
            name: "Phuong Mai NGUYEN",
            image: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
            linkedin: ""
        },
        {
            name: "Hind NAOUI",
            image: "/images/Hind.jpeg",
            linkedin: "https://www.linkedin.com/in/hind-naoui-6275aa21b/"
        },
        {
            name: "Diego FIEUX",
            image: "/images/Diego.jpeg",
            linkedin: "https://www.linkedin.com/in/diego-fieux-b666b2239/"            
        },
        {
            name: "Mathieu VASSAL",
            image: "/images/Mathieu.jpeg",
            linkedin: "https://www.linkedin.com/in/mathieu-vassal/"
        },
        {
            name: "Tessa ROCHÉ-QUARRÉ",
            image: "/images/Tessa.jpeg",
            linkedin: "https://www.linkedin.com/in/tessa-roche-quarre-777880220/"
        },
        {
            name: "Zhanhe ZHANG",
            image: "/images/Zhang.jpeg",
            linkedin: "https://www.linkedin.com/in/%E5%B1%95%E8%B5%AB-%E5%BC%A0-76571422a/"
        },
        {
            name: "Romaric REBOUYS",
            image: "/images/Romaric.jpeg",
            linkedin: "https://www.linkedin.com/in/romaric-rebouys-20b1b4253/"
        },
        {
            name: "Arthur FRINDEL",
            image: "/images/Arthur.jpeg",
            linkedin: "https://www.linkedin.com/in/arthurfrindel580515152/"
        },
        {
            name: "Kiady RAJOELISOLO",
            image: "/images/Kiady.jpeg",
            linkedin: "https://www.linkedin.com/in/kiady-rajoelisolo/"
        },
        {
            name: "Florian BELLUS",
            image: "/images/Florian.jpeg",
            linkedin: "https://www.linkedin.com/in/florian-bellus-b51255252/"
        },
        {
            name: "Adrien SAVOYE",
            image: "/images/Adrien.jpeg",
            linkedin: "https://www.linkedin.com/in/adrien-savoye/"
        },
        {
            name: "Yucel Can CIRACI",
            image: "/images/Can.jpeg",
            linkedin: "https://www.linkedin.com/in/can-ciraci-85b206235/"
        },
        {
            name: "Rémi GARCIA",
            image: "/images/Rémi.jpeg",
            linkedin: "https://www.linkedin.com/in/r%C3%A9mi-garcia-31t12r/"
        },
        {
            name: "Augustin LAURENT",
            image: "/images/Augustin.jpeg",
            linkedin: "https://www.linkedin.com/in/augustin-laurent-204ab6196/"
        },
        {
            name: "Hugo BOUSSARD",
            image: "/images/Hugo.jpeg",
            linkedin: "https://www.linkedin.com/in/hugo-boussard-a22621184/"
        },
        {
            name: "Gabriel SAUNDERS",
            image: "/images/Gabriel.jpeg",
            linkedin: "https://www.linkedin.com/in/gabriel-saunders-94982b18b/"
        },
        {
            name: "Mohamed BEDJAOUI",
            image: "/images/Mohamed.jpeg" ,
            linkedin: "https://www.linkedin.com/in/gabriel-saunders-94982b18b/"
        },
        {
            name: "Ibrahima BARRY",
            image: "/images/Ibrahima.jpeg",
            linkedin: "https://www.linkedin.com/in/ibrahima-barry99/"
        },
        {
            name: "Gabriel FEDOU",
            image: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
            linkedin: "https://www.linkedin.com/in/gabriel-fedou-1253b4212/"
        },
    ]);

    const shuffleTeamMembers = () => {
        const shuffledMembers = teamMembers.slice();
        for (let i = shuffledMembers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledMembers[i], shuffledMembers[j]] = [shuffledMembers[j], shuffledMembers[i]];
        }
        setTeamMembers(shuffledMembers);
    };

    React.useEffect(() => {
        shuffleTeamMembers();
    },[]);
    
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
            <div className="p-1">
                <SectionTitle
                    id="wall"
                    pretitle="THE TEAM"
                    title="Meet our team">
                </SectionTitle>
                <div className="slider-container">
                    <Slider {...settings} id="slider">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="text-center">
                                <a href={member.linkedin}>
                                    <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto mb-3 rounded-xl" />
                                </a>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-indigo-500">
                                    {member.name}
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
    );
}

export default Caroussel;