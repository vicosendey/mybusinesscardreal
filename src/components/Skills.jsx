import { motion } from 'framer-motion';
import { Code2, Palette, Database, Smartphone } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Code2 size={40} />,
      title: 'Frontend Development',
      description: 'React, Vue.js, Next.js, TypeScript',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Database size={40} />,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, MongoDB',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Tailwind CSS',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Development',
      description: 'React Native, Flutter, Progressive Web Apps',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          What I Do
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          I bring ideas to life with modern web technologies and creative solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-4`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;