import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import arduino from "../public/arduino.png";
import jet from "../public/jet.png";
import cross from "../public/cross.jpeg";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.jpg";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>SiD Portfolio</title>
        <meta name="description" content="Sid's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbysid</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Sidhartha Raghaw
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              REG NO: RA2111033010001
            </h3>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Mail Id: sr8277@srmist.edu.in
            </h3>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Department: CINTEL
            </h3>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Specialization: Software
            </h3>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Semester: 3rd 
            </h3>
            
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Subject title: Data Structure and Algorithm</h3>
            <h3 className="text-3xl py-1 dark:text-white ">Handled By:</h3>
            <h3 className="text-3xl py-1 dark:text-white ">CrossWord Puzzle:</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              The best thing about this assignment is to Constructing and cluing my own crosswords made me even better at recognizing the patterns.
              It feels like I am doing a some sort of mental ability or something like that.The first thing you should do when creating a puzzle is decide on a theme and brainstorm theme words.
              Creating a good puzzle can be more challenging, and more fulfilling, than solving one.
            </p>
            <Image src={cross} width={500} height={500} />
            <h3 className="text-3xl py-1 dark:text-white ">Codechef Achievement:</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            <Image src={design} width={500} height={500} />
            <Image src={code} width={500} height={500} />
            </p>
            <h3 className="text-3xl py-1 dark:text-white ">About me:</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Computer Science Undergrad at SRM Institute of Science and Technology. IoT and Flutter app developer enthusiast. Can code in C++, C and learning Python. Currently
            exploring lots of fields like ML on IoT devices.
            
            </p>
          </div>
          <h3 className="text-3xl py-1 dark:text-white ">Worked With...</h3>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={jet} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                NVIDIA Jetson Nano
              </h3>
              <p className="py-2">
              Jetson Nano is a small, powerful computer for embedded applications and AI IoT that delivers the power of modern AI
              </p>
              <h4 className="py-4 text-teal-600">Tools I Use</h4>
              <p className="text-gray-800 py-1">Monitor</p>
              <p className="text-gray-800 py-1">SD Card</p>
              <p className="text-gray-800 py-1">Keyboard and Mouse</p>
              <p className="text-gray-800 py-1">Internet Connection</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={arduino} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Arduino UNO
              </h3>
              <p className="py-2">
                The Arduino Uno is an open-source microcontroller board based on the Microchip ATmega328P microcontroller and developed by Arduino.cc and initially released in 2010.
              </p>
              <h4 className="py-4 text-teal-600">Tools I Use</h4>
              <p className="text-gray-800 py-1">Power cable</p>
              <p className="text-gray-800 py-1">USB Cable</p>
              <p className="text-gray-800 py-1">ARDUINO IDE</p>
              <p className="text-gray-800 py-1">Jumper Wires</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Raspberry Pi</h3>
              <p className="py-2">
              Raspberry Pi is a series of small single-board computers developed in the United Kingdom by the Raspberry Pi Foundation in association with Broadcom. 
              </p>
              <h4 className="py-4 text-teal-600">Tools I Use</h4>
              <p className="text-gray-800 py-1">Monitor</p>
              <p className="text-gray-800 py-1">SD Card</p>
              <p className="text-gray-800 py-1">Keyboard and Mouse</p>
              <p className="text-gray-800 py-1">Jumper Wires</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <h3 className="text-3xl py-1 dark:text-white ">Project Images</h3>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            
          </div>
        </section>
      </main>
    </div>
  );
}
