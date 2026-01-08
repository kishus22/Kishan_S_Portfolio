'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Experience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    {
      type: 'work',
      title: 'Web Development & Data Science Intern',
      organization: 'Contriver',
      location: 'Bengaluru, India',
      period: 'February 2025 – May 2025',
      description: [
        'Developed responsive web applications using React and modern frontend technologies',
        'Implemented data analysis pipelines for business intelligence',
        'Collaborated with cross-functional teams on full-stack projects',
        'Optimized application performance and user experience',
      ],
      icon: Briefcase,
      color: 'from-blue-600 to-cyan-500',
    },
    {
      type: 'work',
      title: 'Cyber Security Intern',
      organization: 'IBM SkillsBuild',
      location: 'Remote',
      period: 'October 2023 – November 2023',
      description: [
        'Applied cybersecurity principles and secure system practices',
        'Worked with security tools, threat analysis, and risk mitigation',
        'Implemented steganography-based data protection techniques',
        'Completed IBM Cyber Security internship program',
      ],
      icon: Briefcase,
      color: 'from-cyan-600 to-blue-500',
    },
    {
      type: 'education',
      title: 'Bachelor of Engineering',
      organization: 'Computer Science and Engineering',
      location: 'Visvesvaraya Technological University',
      period: '2021 – 2025',
      description: [
        'Specialized in full-stack development and machine learning',
        'Built projects in computer vision, web development, and data science',
        'Strong foundation in data structures, algorithms, and system design',
      ],
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0
                      ? 'md:justify-start'
                      : 'md:flex-row-reverse md:justify-start'
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color}
                      flex items-center justify-center shadow-lg
                      ring-4 ring-white dark:ring-gray-900`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="w-full md:w-5/12 pl-20 md:pl-0">
                    <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600">
                      <CardHeader>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>{item.period}</span>
                        </div>

                        <CardTitle className="text-xl mb-2">
                          {item.title}
                        </CardTitle>

                        <div className="space-y-1">
                          <p className="text-base font-semibold text-blue-600 dark:text-cyan-400">
                            {item.organization}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {item.location}
                          </p>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <ul className="space-y-2">
                          {item.description.map((desc, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1 flex-shrink-0">
                                •
                              </span>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {desc}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
