
import cgr from "@/public/image/projects/cgr.png";
import tfc from "@/public/image/projects/tfc.png";
import fou from "@/public/image/projects/puy_du_fou.svg";
import aeg from "@/public/image/projects/aeg.svg";
import bot from "@/public/image/projects/discord-bot.png";
import spirits from "@/public/image/projects/catching-spirits.png";
import occ from "@/public/image/projects/occitanie.png";
import cancer from "@/public/image/projects/oncopole.png";
import idea from "@/public/image/projects/idea.png";


import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from "@/components/home/sectionTitle";
import Image from 'next/image'


const PrevArrow = ({ className, style, onClick }) => (
  <div
      className={className}
      style={{
          ...style,
          display: "block",
          // background: "rgba(0, 0, 0, 0.7)",
          color: "white",
          borderRadius: "50%",
          padding: "10px",
          border: "none",
          outline: "none",
          fontSize: "31px",
          zIndex: 2,
          left: "0px",
          // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"
      }}
      onClick={onClick}
  />
);

const NextArrow = ({ className, style, onClick }) => (
  <div
      className={className}
      style={{
          ...style,
          display: "block",
          // background: "rgba(0, 0, 0, 0.7)",
          color: "white",
          borderRadius: "50%",
          padding: "10px",
          border: "none",
          outline: "none",
          fontSize: "31px",
          zIndex: 2,
          right: "40px",
          // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"
      }}
      onClick={onClick}
  />
);

const Caroussel_projet = (props) => {
  const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: 'linear',
      nextArrow: <NextArrow className="slick-next" />,
      prevArrow: <PrevArrow className="slick-prev" />,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
              }
          }
      ]
  };

  return (
      <div className="container mx-auto p-8 xl:px-0">
          <Slider {...settings}>

              <div className="hover:-translate-y-1">
                  <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                      <p className="text-2xl leading-normal">
                        Analysis and improvement of customer data management for the company.
                      </p>
                      <Avatar
                          image={aeg}
                          name="AEG Power Solutions"
                          title="2024"
                      />
                  </div>
              </div>
              <div className="hover:-translate-y-1">
                  <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                      <p className="text-2xl leading-normal">
                        Development and implementation of a bot on our discord server.
                      </p>
                      <Avatar
                          image={bot}
                          name="Bot Discord"
                          title="2024"
                      />
                  </div>
              </div>
              <div className="hover:-translate-y-1">
                  <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                      <p className="text-2xl leading-normal">
                        Development of artificial intelligence for video games.
                      </p>
                      <Avatar
                          image={spirits}
                          name="Catching Spirits"
                          title="2024"
                      />
                  </div>
              </div>
              <div className="hover:-translate-y-1">
                  <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                      <p className="text-2xl leading-normal">
                        Analyze the quality of life of Occitanie's inhabitants and suggest ways to improve it.
                      </p>
                      <Avatar
                          image={occ}
                          name="Bien Vivre et Bien Vieillir en Occitanie"
                          title="2024"
                      />
                  </div>
              </div>
              <div className="hover:-translate-y-1">
                  <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                      <p className="text-2xl leading-normal">
                      Identifying endothelial cells in microscopic images of breast cancer.
                      </p>
                      <Avatar
                          image={cancer}
                          name="Détection du cancer du sein (IA)"
                          title="2024"
                      />
                  </div>
              </div>
              <div className="hover:-translate-y-1">
                  <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                      <p className="text-2xl leading-normal">
                        Develop and deploy a website to showcase IDEA.
                      </p>
                      <Avatar
                          image={idea}
                          name="Site Web Idea"
                          title="2024"
                      />
                  </div>
              </div>
              <div className="hover:-translate-y-1 lg:col-span-2 xl:col-auto">
                  <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                      <p className="text-2xl leading-normal">
                          Create a visualization tool of the data of the cinema but also of its competitors on a regular and automated basis.
                      </p>
                      <Avatar
                          image={cgr}
                          name="CGR"
                          title="2023"
                      />
                  </div>
              </div>
              <div className="hover:-translate-y-1">
                  <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                      <p className="text-2xl leading-normal">
                          Predict the number of visitor of the park by day or night.
                      </p>
                      <Avatar
                          image={fou}
                          name="Puy du Fou"
                          title="2023"
                      />
                  </div>
              </div>
              <div className="hover:-translate-y-1">
                  <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                      <p className="text-2xl leading-normal">
                          Processing and analysis of data concerning matches and subscriptions through dashboards,
                          and implementation of a customer typology.
                      </p>
                      <Avatar
                          image={tfc}
                          name="Toulouse Football Club"
                          title="2023"
                      />
                  </div>
              </div>
          </Slider>
      </div>
  );
}

function Avatar(props) {
  return (
      <div className="mt-8 flex items-center space-x-3">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl">
              <Image
                  src={props.image}
                  alt="Avatar"
              />
          </div>
          <div>
              <div className="text-lg font-medium">{props.name}</div>
              <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
          </div>
      </div>
  );
}

export default Caroussel_projet;