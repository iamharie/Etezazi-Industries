import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-gray"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
          <div className="space-y-6">
            <p className="text-lg">
              Founded with a vision to revolutionize industrial manufacturing,
              Etezazi Industries has been at the forefront of innovation since
              its inception.
            </p>
            <p className="text-lg">
              Our commitment to excellence and cutting-edge technology has made
              us a leader in the industry, serving clients worldwide with
              state-of-the-art solutions.
            </p>

            <p className="text-lg">
              How does a company increase its client base and most of such
              customers continue through the years as highly-loyal clients? In
              the case of Etezazi Industries, Inc., the process can be easily
              identified.
            </p>
            <div className="bg-secondary p-6 rounded-lg mt-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p>
                Etezazi Industries, Inc., constantly pursues excellence by:
                adherence to its AS9100D processes and procedures; continually
                upgrading and reinvesting in equipment and facilities; and
                paying special attention to a balanced combination of seasoned
                professionals and degreed engineers to bring cutting edge
                knowledge and technology to the delivery of its products.
                <br />
                <br /> Clients partnering with the Etezazi Industries, Inc.,
                team find themselves working with a sound group of professionals
                to discuss challenges and find solutions to a rapidly-changing
                and highly technical industry.
                <br />
                <br /> As a diverse manufacturing company we have the ability to
                use various types of manufacturing equipment such as: CNC Mills;
                Lathes; Mill-Turns; and Mechanical Brakes to manufacture complex
                multi-axis parts, as well as sheet metal parts for our clients.
                We offer advanced capabilities for client care by adopting the
                6S Philosophy.
                <br />
                <br /> Etezazi Industries, Inc., focuses on effective work place
                organization and standardized work procedures. The 6S philosophy
                simplifies our work environment, reduces waste and non-value
                added activity while improving quality, efficiency and safety to
                help create a lean, effective company.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
