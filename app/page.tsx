"use client";

import Switch from "@/components/Switch";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import cubeImg from "@/public/assets/cube.png";
import infinity from "@/public/logos/Infinity.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";
import Lottie from "lottie-react";
import map from "@/public/assets/map.json";
import { RiTeamFill } from "react-icons/ri";
import { MdInsertChart } from "react-icons/md";
import { BsShieldFillCheck, BsFillBriefcaseFill } from "react-icons/bs";
import { PiLightbulbFill } from "react-icons/pi";
import { FaGlobeAmericas } from "react-icons/fa";
import { MouseParallax } from "react-just-parallax";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const title = new SplitType("#title");
    let tl = gsap.timeline();

    tl.fromTo(
      title.words,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
      }
    );

    tl.fromTo(
      ".switch",
      {
        x: -100,
        opacity: 0,
      },
      { x: 0, opacity: 1, ease: "power1.out" }
    );

    gsap.fromTo(
      "#map",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power1.out",
      }
    );

    gsap.fromTo(
      ".card",
      {
        padding: "20px 80px",
        opacity: 0,
      },
      {
        padding: "20px 40px",
        opacity: 1,
        scrollTrigger: {
          trigger: ".home-sec-three",
          //markers: true,
          start: "center bottom",
          end: "center center",
          scrub: 0.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="home-main">
      <div className="gradient gradientOne" />
      <div className="infinity-logo-container">
        <MouseParallax isAbsolutelyPositioned strength={0.1}>
          <Image sizes="100" src={infinity} alt="pricihat infinity logo" />
        </MouseParallax>
      </div>

      <div className="hero-container section">
        <div className="left">
          <h2 id="title">
            Delivering Sustainable Outcomes to Transform the Future
          </h2>
          <Switch title="Get a quote" link="/contact" />
        </div>
        <div className="right">
          <Lottie animationData={map}></Lottie>
        </div>
      </div>
      <div className="home-sec-two section">
        <div className="left">
          <h3 data-aos="fade-up" data-aos-easing="ease-in-out">
            Who we are?
          </h3>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            Experience that delivers Rapid Results. <br />
            Combining human-led and tech-powered innovations and experience to
            deliver faster, more sustainable, and meaningful outcomes. We offer
            mission-critical IT solutions to transform global businesses. We aim
            to deliver excellence for our customers and support communities
            around the world.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
          >
            <span>What sets us Apart?</span>
            <br />
            We strive to deliver quality through integrity, unwavering
            objectivity, and innovation. This results in creating an environment
            where agility, consistency, and insight, thrive. We believe in
            building a community where our people can deliver the excellence our
            clients expect, time and time again.
          </p>
        </div>
        <div className="right">
          <Image sizes="100" src={cubeImg} alt="Picture of a futurictic cube" />
        </div>
      </div>
      <div className="home-sec-three section">
        <h3 id="secThreeTitle">With ProCohat, you experience</h3>

        <div className="cards-grid">
          <div className="card">
            <BsShieldFillCheck size={70} />
            <p>A track record of scalable skills and experience</p>
          </div>
          <div className="card">
            <BsFillBriefcaseFill size={70} />
            <p>Industry-Leading Client Satisfaction</p>
          </div>

          <div className="card">
            <RiTeamFill size={70} />
            <p>
              A unique team of industry experts that work as an extension of
              your company
            </p>
          </div>
          <div className="card">
            <MdInsertChart size={70} />
            <p>Hyper Focused services to promote your growth</p>
          </div>

          <div className="card">
            <PiLightbulbFill size={70} />
            <p>Flexible and Sustainable solutions</p>
          </div>

          <div className="card">
            <FaGlobeAmericas size={70} />
            <p>Services that move the world</p>
          </div>
        </div>
      </div>
      <div className="home-sec-four section"></div>
    </div>
  );
}
