import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-secondary">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                I'm a passionate developer with <strong>5+ years of experience</strong> building 
                web applications that solve real-world problems. I specialize in creating 
                seamless user experiences with modern technologies.
              </p>
              <p>
                My expertise spans across the full stack, from crafting pixel-perfect 
                interfaces to architecting scalable backend systems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="font-semibold text-2xl text-secondary mb-2">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <h3 className="font-semibold text-2xl text-secondary mb-2">30+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="font-semibold text-2xl text-secondary mb-2">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;