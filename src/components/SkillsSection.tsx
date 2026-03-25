import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'Portrait Drawing', level: 90 },
    { name: 'Sketching', level: 85 },
    { name: 'Digital Art Basics', level: 75 },
    { name: 'Creativity', level: 92 },
    { name: 'Visual Observation', level: 88 },
  ],
  backend: [
    { name: 'Social Science Understanding', level: 85 },
    { name: 'Cultural Awareness', level: 88 },
    { name: 'Critical Thinking', level: 82 },
    { name: 'Analytical Thinking', level: 80 },
    { name: 'Political Awareness', level: 78 },
  ],
  tools: [
    { name: 'Pencil & Traditional Tools', level: 95 },
    { name: 'Sketchbook Practice', level: 90 },
    { name: 'Reference Study', level: 85 },
    { name: 'Online Learning', level: 88 },
    { name: 'Time Management', level: 80 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">My Skills</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Skills & Interests
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Creative Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-display text-xl font-bold">Creative Skills</h3>
            </div>
            <div className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Knowledge & Thinking */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-display text-xl font-bold">Knowledge & Thinking</h3>
            </div>
            <div className="space-y-4">
              {skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Tools & Habits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="font-display text-xl font-bold">Tools & Habits</h3>
            </div>
            <div className="space-y-4">
              {skills.tools.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}