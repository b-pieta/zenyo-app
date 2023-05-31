import { SelectedPage, ClassType } from "@/shared/types";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

interface Pose {
  english_name: string;
  pose_benefits: string;
  url_png: string;
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  const [classes, setClasses] = useState<Array<ClassType>>([]);

  useEffect(() => {
    axios
      .get("https://yoga-api-nzy4.onrender.com/v1/poses")
      .then((response) => {
        const classesData = response.data.map((pose: Pose) => {
          return {
            name: pose.english_name,
            description: pose.pose_benefits,
            image: pose.url_png, // or pose.url_svg if you want SVG images
          };
        });
        setClasses(classesData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <section id="ourclasses" className="w-full bg-secondary-300 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText><span className="text-3xl text-primary-500">Our classes</span></HText>
            <p className="py-5 text-sm leading-loose">
            Immerse yourself in our Yoga classes designed to improve your flexibility, strength, and balance. Guided by our experienced instructors, you will move through a series of postures that stretch, unwind, and realign your body.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
