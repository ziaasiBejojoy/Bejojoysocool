import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'Portrait Drawing Practice Certificate',
    issuer: 'Self Learning & Practice',
    date: '2025',
    credentialId: 'ART-PRT-001',
    image: '🎨',
    color: 'from-orange-500/20 to-yellow-500/20',
    link: '#',
  },
  {
    title: 'Art & Creativity Development',
    issuer: 'Online Learning Platforms',
    date: '2025',
    credentialId: 'ART-CRT-002',
    image: '🖌️',
    color: 'from-blue-500/20 to-cyan-500/20',
    link: '#',
  },
  {
    title: 'Social Science Exploration',
    issuer: 'Independent Study',
    date: '2024',
    credentialId: 'SOC-EXP-003',
    image: '🧠',
    color: 'from-blue-600/20 to-indigo-500/20',
    link: '#',
  },
  {
    title: 'Cultural Awareness Learning',
    issuer: 'Self Study & Observation',
    date: '2024',
    credentialId: 'CUL-AWR-004',
    image: '🌍',
    color: 'from-green-500/20 to-emerald-500/20',
    link: '#',
  },
  {
    title: 'Political Awareness & Global Issues',
    issuer: 'News & Independent Research',
    date: '2024',
    credentialId: 'POL-AWR-005',
    image: '📰',
    color: 'from-indigo-500/20 to-purple-500/20',
    link: '#',
  },
  {
    title: 'Continuous Learning Journey',
    issuer: 'Personal Development',
    date: '2023',
    credentialId: 'LRN-JNY-006',
    image: '📚',
    color: 'from-teal-500/20 to-cyan-500/20',
    link: '#',
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Achievements</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Learning & Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${cert.color}`}>
                  <span className="text-3xl">{cert.image}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground/70 font-mono">
                    ID: {cert.credentialId}
                  </p>
                  
                  <Button variant="outline" size="sm" className="rounded-full mt-2" asChild>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}