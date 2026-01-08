'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-6xl font-bold">
                    KS
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Computer Science graduate with hands-on experience in{' '}
              <span className="font-semibold text-blue-600 dark:text-cyan-400">
                full-stack development
              </span>{' '}
              and{' '}
              <span className="font-semibold text-blue-600 dark:text-cyan-400">
                machine learning
              </span>
              . I build real-world applications ranging from responsive web platforms to real-time
              computer vision systems.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Focused on{' '}
              <span className="font-semibold text-blue-600 dark:text-cyan-400">
                clean architecture
              </span>
              ,{' '}
              <span className="font-semibold text-blue-600 dark:text-cyan-400">
                performance optimization
              </span>
              , and{' '}
              <span className="font-semibold text-blue-600 dark:text-cyan-400">
                secure system design
              </span>
              . I translate complex requirements into scalable, production-ready solutions.
            </p>

            <div className="grid gap-4 mt-8">
              <Card className="border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-blue-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Web Development & Data Science Intern
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Contriver, Bengaluru | Feb - May 2025
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-cyan-600 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Cyber Security Intern</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      IBM SkillsBuild | Oct - Nov 2023
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      B.E. Computer Science and Engineering
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Visvesvaraya Technological University | 2021 - 2025
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
