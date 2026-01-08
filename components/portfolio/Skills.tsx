'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Server,
  Brain,
  Database,
  Wrench,
  BookOpen,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-600 to-cyan-500',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Tailwind CSS',
        'Responsive Design',
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-cyan-600 to-blue-500',
      skills: ['Django', 'Flask', 'FastAPI', 'Node.js', 'REST APIs', 'Authentication'],
    },
    {
      title: 'ML & AI',
      icon: Brain,
      color: 'from-blue-500 to-cyan-600',
      skills: [
        'Python',
        'NumPy',
        'Pandas',
        'scikit-learn',
        'TensorFlow',
        'OpenCV',
        'NLP',
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-cyan-500 to-blue-600',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'from-blue-600 to-cyan-500',
      skills: ['Git', 'GitHub', 'VS Code', 'Firebase', 'Jupyter', 'Linux'],
    },
    {
      title: 'Core Competencies',
      icon: BookOpen,
      color: 'from-cyan-600 to-blue-500',
      skills: ['OOP', 'Data Structures', 'Algorithms', 'System Design', 'Security (CIA Triad)'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-t-4 border-t-transparent hover:border-t-blue-600">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-cyan-400 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
