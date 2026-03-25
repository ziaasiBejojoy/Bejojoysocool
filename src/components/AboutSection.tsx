import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const stats = [
    { icon: Code2, value: '30+', label: 'Portrait Drawings' },
    { icon: Video, value: '50+', label: 'Art & Learning Sessions' },
    { icon: Coffee, value: '100+', label: 'Hours of Practice' },
    { icon: Rocket, value: '2+', label: 'Years of Exploration' },
  ];

  const accordionData = [
    {
      title: 'Who Am I?',
      content:
        'I am a high school student with a strong passion for art, especially portrait drawing. I enjoy expressing emotions and stories through my artwork.',
    },
    {
      title: 'What Are My Interests?',
      content:
        'I am deeply interested in social sciences, culture, and understanding human behavior. I also like to stay updated with current political situations and global issues.',
    },
    {
      title: 'What Is My Goal?',
      content:
        'I want to keep learning, growing, and developing both my artistic skills and my knowledge, so I can contribute meaningful ideas and perspectives in the future.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">About Me</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Get to Know Me Better
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="aspect-square rounded-2xl overflow-hidden glass shadow-card"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <motion.span
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-8xl"
                  >
                    🎨
                  </motion.span>
                </div>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card"
              >
                <p className="font-display font-bold text-2xl text-gradient">Student</p>
                <p className="text-sm text-muted-foreground">High School</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Creative Artist & Curious Learner
            </h3>

            {/* Accordion */}
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <div key={index} className="border rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-4 text-left font-semibold"
                  >
                    {item.title}
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                    >
                      <ChevronDown />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4 text-muted-foreground"
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 glass rounded-xl text-center hover:shadow-card-hover transition-shadow"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}