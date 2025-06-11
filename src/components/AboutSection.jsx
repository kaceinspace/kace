import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center tracking-tight">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Web & Mobile Developer
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              With over 5 years of experience, I build responsive, performant
              web apps using modern tech. I love solving real problems with
              elegant code and pixel-perfect designs.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Always learning, always evolving — I thrive in fast-paced
              environments where innovation meets execution.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:brightness-110"
              >
                ✉️ Get In Touch
              </a>

              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                ⬇️ Download CV
              </a>
            </div>
          </motion.div>

          {/* Cards Section */}
          <div className="grid gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development",
                desc: "Responsive websites and scalable applications with modern frameworks.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "Mobile Development",
                desc: "Building fast, user-friendly mobile apps with seamless performance across iOS and Android.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
