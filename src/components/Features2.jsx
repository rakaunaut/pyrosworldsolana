import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section className="w-full bg-bgDark2 mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
        <div className=" p-4">
    <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <div className="flex md:contents flex-row-reverse">
            <div
                className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 className="text-lg font-semibold lg:text-xl">New Event 1</h3>
                <p className="mt-2 leading-6">Description of the first event.</p>
                <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 1</span>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
        </div>

        <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 className="text-lg font-semibold lg:text-xl">New Event 2</h3>
                <p className="mt-2 leading-6">Description of the second event.</p>
                <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span>
            </div>
        </div>

        <div className="flex md:contents flex-row-reverse">
            <div
                className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 className="text-lg font-semibold lg:text-xl">New Event 3</h3>
                <p className="mt-2 leading-6">Description of the first event.</p>
                <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 3</span>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
        </div>

        <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 className="text-lg font-semibold lg:text-xl">New Event 4</h3>
                <p className="mt-2 leading-6">Description of the second event.</p>
                <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 4</span>
            </div>
        </div>

    </div>
</div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="block-subtitle">Roadmap</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
            Ready for the ultimate Play-2-Earn experience?
            </h2>
            <p className="mb-3 font-bold text-primaryText leading-loose">
            PRE-SALE
            Take part in the PYRO token Pre-Sale now. 10% of the total supply will be distributed among pre-sale participants. Join the party - and be well prepared for Pyros World.
            </p>
            <p className="mb-12 text-secondaryText leading-loose">
            PRE-SALE
            Pyros World is Radix’s first Battle Royale Game - a rewarding Play-2-Earn universe that utilizes in-house 3D NFTs. Prove yourself on various maps to dominate Pyros World. Whether in single or in multi-player mode, the fastest play-through puts surviving players on top of the leaderboard earns them rewards. PYRO and FYRE tokens guarantee long-term benefits which players can use to buy upgrade packages offered at the Pyro Shop. Each of the 10,000 Pyro NFTs is unique, comes fully rigged (manipulable skeletal structure), and is capable of being used in-game.            </p>
            {/* <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Collaborative environment</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Smart issue categorization</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Customizable notifications</span>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
