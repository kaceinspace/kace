import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skillZones = [
  {
    title: "Web Dev Zone",
    icon: "🧩",
    skills: [
      { name: "PHP", emoji: "🐘" },
      { name: "Laravel", emoji: "🛠️" },
      { name: "JavaScript", emoji: "✨" },
      { name: "Node.js", emoji: "🌳" },
      { name: "Express", emoji: "🚀" },
      { name: "React", emoji: "⚛️" },
    ],
  },
  {
    title: "Mobile Dev Zone",
    icon: "📱",
    skills: [
      { name: "Flutter", emoji: "🦋" },
      { name: "React Native", emoji: "📦" },
      { name: "Java", emoji: "☕" },
    ],
  },
];

// ✅ Perbaikan: Hapus anotasi tipe TypeScript agar valid di JavaScript
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 bg-gradient-to-br from-background to-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center tracking-tight">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
            Skills
          </span>
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {skillZones.map((zone, idx) => (
            <motion.div
              key={idx}
              className="bg-card border border-border rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{zone.icon}</span>
                <h3 className="text-2xl font-semibold text-primary">
                  {zone.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {zone.skills.map((skill, key) => (
                  <span
                    key={key}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-border shadow-sm bg-gradient-to-tr from-primary/10 to-background/60 hover:from-primary/30 hover:to-background text-primary transition-all duration-200"
                  >
                    {skill.emoji} {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
