import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-slate-800 to-slate-900 text-white px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-5xl font-bold">
                JD
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            John Doe
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Full Stack Developer & UI/UX Designer
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
            <MapPin size={20} />
            <span>San Francisco, CA</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-10">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#3B82F6" }}
              className="hover:text-primary transition"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#3B82F6" }}
              className="hover:text-primary transition"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.2, color: "#3B82F6" }}
              className="hover:text-primary transition"
            >
              <Mail size={28} />
            </motion.a>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full transition shadow-lg shadow-blue-500/50"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;