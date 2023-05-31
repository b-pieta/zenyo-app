import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-5 w-5" />,
    title: "Facilities",
    description:
      "With spacious and well-equipped studios, expert instructors, and a variety of classes, we provide the perfect space for individuals to enhance their physical and mental well-being through the practice of meditation.",
  },
  {
    icon: <UserGroupIcon className="h-5 w-5" />,
    title: "Classes",
    description:
      "Unwind, rejuvenate, and discover the transformative benefits of yoga in a supportive community. Join us on the mat and embark on a journey of self-discovery and holistic wellness.",
  },
  {
    icon: <AcademicCapIcon className="h-5 w-5" />,
    title: "Expert and Pro Trainers",
    description:
      " Our company is a trusted provider of meditation expertise, dedicated to guiding individuals towards inner peace and mental clarity. With a team of experienced meditation experts you achieve your goals.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 border-t border-gray-200">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

          <HText> <span className="text-secondary-400">Nourish your spirit, meditate with grace</span></HText>
          <p className="mt-8 text-sm leading-loose">
          Step into a world of tranquility and nourish your spirit. Experience the power of meditation with grace, as you embark on a journey of self-discovery and inner peace. Let go of the noise and embrace serenity, as you unlock the true potential of your mind and soul. Elevate your well-being and find harmony within. Start your meditation practice today with our classes.
          </p>

        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-8 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
            style={{ width: "600px", height: "auto" }}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText> <span className="text-secondary-400">
                    Find inner peace{" "}</span>
                  </HText>
                </motion.div>
             
            </div>

            {/* DESCRIPT */}
            <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ delay: 0.2, duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }}
>
  <p className="my-5 text-sm leading-loose">  {/* Adjust the size here */}
  At Zenyo, we understand the importance of cultivating a calm and centered mind amidst the chaos of daily life. Through our expertly crafted meditation programs, we guide you on a transformative journey, helping you unlock the deep reservoirs of serenity within yourself. With a team of dedicated instructors and a serene environment, Zenyo is your partner in discovering the profound benefits of meditation, fostering inner harmony, and embracing a life of peace and fulfillment.

  </p>

</motion.div>

            {/* BUTTON */}
            <div className="relative mt-16 flex justify-center items-center">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
          
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
