"use client";

import Switch from "@/components/Switch";
import Image from "next/image";
import globeImg from "@/public/assets/globe.png";
import cubeImg from "@/public/assets/cube.png";
import infinity from "@/public/logos/Infinity.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";
import map from "@/public/assets/world-map.svg";

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
  }, []);

  return (
    <div className="home-main">
      <div className="gradient gradientOne" />
      <div className="gradient gradientTwo" />
      <div className="infinity-logo-container">
        <Image sizes="100" src={infinity} alt="pricihat infinity logo" />
      </div>
      <div className="hero-container">
        <div className="left">
          <h2 id="title">
            Delivering Sustainable Outcomes to Transform the Future
          </h2>
          <Switch title="Get a quote" link="/contact" />
        </div>
        <div className="right">
          <Image
            sizes="100"
            src={map}
            alt="Picture of a futurictic globe"
            id="map"
          />
        </div>
      </div>
      <div className="home-sec-two">
        <div className="left">
          <h3>Who we are?</h3>
          <p>
            Experience that delivers Rapid Results. <br />
            Combining human-led and tech-powered innovations and experience to
            deliver faster, more sustainable, and meaningful outcomes. We offer
            mission-critical IT solutions to transform global businesses. We aim
            to deliver excellence for our customers and support communities
            around the world.
          </p>
          <p>
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
    </div>
  );
}
