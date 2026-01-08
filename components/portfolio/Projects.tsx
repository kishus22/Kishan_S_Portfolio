'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Project {
  title: string;
  description: string;
  problem: string;
  impact: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Real-Time Face Swap Using Deepfake',
      description:
        'Real-time face swapping system with low latency using advanced deep learning models.',
      problem:
        'Traditional face swap systems suffered from high latency and poor real-time performance, making them unsuitable for live applications.',
      impact: 'Achieved 30+ FPS with sub-100ms latency for seamless real-time face swapping.',
      features: [
        'Real-time facial landmark detection and tracking',
        'Advanced face alignment and morphing algorithms',
        'GPU-accelerated processing for low latency',
        'High-quality seamless blending techniques',
        'Multi-face detection and swapping support',
      ],
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'Dlib', 'InsightFace', 'CUDA'],
      imageUrl: '/projects/face-swap.jpg',
    },
    {
      title: 'Fraud Detection in UPI Transactions',
      description:
        'Machine learning system for real-time fraud detection in UPI payment transactions.',
      problem:
        'Rising financial fraud in digital payments required an intelligent system to detect suspicious transactions in real-time.',
      impact:
        'Achieved 90%+ accuracy in fraud detection with real-time processing capabilities.',
      features: [
        'Real-time transaction analysis and scoring',
        'Multi-model ensemble approach for high accuracy',
        'Anomaly detection using unsupervised learning',
        'Feature engineering for payment patterns',
        'RESTful API for easy integration',
        'Dashboard for fraud monitoring and alerts',
      ],
      techStack: ['Python', 'scikit-learn', 'Pandas', 'Flask', 'SQL', 'XGBoost'],
      imageUrl: '/projects/fraud-detection.jpg',
    },
    {
      title: 'Criminal Face Detection System',
      description:
        'Automated criminal identification system using facial recognition against database records.',
      problem:
        'Manual criminal identification was time-consuming and error-prone, requiring automation for law enforcement efficiency.',
      impact:
        'Automated matching against criminal database with high accuracy and instant results.',
      features: [
        'High-accuracy face recognition and matching',
        'Large-scale database search capabilities',
        'Real-time video surveillance integration',
        'Confidence scoring for match results',
        'Alert system for positive matches',
        'Comprehensive logging and audit trail',
      ],
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'face_recognition', 'MySQL', 'Flask'],
      imageUrl: '/projects/criminal-detection.jpg',
    },
    {
      title: 'Real-Time Face Detection System',
      description: 'High-performance face detection system optimized for real-time processing.',
      problem:
        'Existing face detection solutions were either too slow or inaccurate for real-time applications.',
      impact: 'Achieved 60+ FPS efficient detection with minimal resource usage.',
      features: [
        'Optimized Haar Cascade implementation',
        'Multi-scale face detection',
        'Real-time video stream processing',
        'Low CPU and memory footprint',
        'Bounding box visualization',
        'Configurable detection parameters',
      ],
      techStack: ['Python', 'OpenCV', 'Haar Cascades', 'NumPy'],
      imageUrl: '/projects/face-detection.jpg',
    },
    {
      title: 'Online Birth Certificate Database System',
      description:
        'Secure web application for managing birth certificate records with full CRUD operations.',
      problem:
        'Manual birth certificate management was inefficient and lacked proper security measures.',
      impact:
        'Digitized birth certificate management with role-based access control and secure authentication.',
      features: [
        'Secure user authentication and authorization',
        'Complete CRUD operations for certificates',
        'Role-based access control (Admin/User)',
        'Search and filter functionality',
        'PDF generation for certificates',
        'Audit logging for all operations',
        'Responsive design for all devices',
      ],
      techStack: ['Python', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      imageUrl: '/projects/birth-certificate.jpg',
    },
    {
      title: 'Import-Export Business Website',
      description:
        'Modern, responsive business website for import-export company with inquiry management.',
      problem:
        'Client needed a professional online presence to showcase services and capture business inquiries.',
      impact:
        'Increased business inquiries by 150% with modern design and improved user experience.',
      features: [
        'Modern, responsive design',
        'Product catalog with filtering',
        'Contact form with email integration',
        'Real-time inquiry management',
        'SEO optimization',
        'Fast page load times (<2s)',
        'Multi-language support',
      ],
      techStack: ['React', 'Tailwind CSS', 'Node.js', 'Firebase', 'Vercel'],
      githubUrl: 'https://kishus22.github.io/import-export-website/',
      liveUrl: 'https://daynit-import-export-website.web.app',
      imageUrl: '/projects/import-export.jpg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world applications demonstrating full-stack development, machine learning, and
            computer vision expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300 group overflow-hidden border-t-4 border-t-transparent hover:border-t-blue-600 cursor-pointer">
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                      💻
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">Featured</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-start gap-2 text-sm mb-2">
                      <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-semibold text-green-600 dark:text-green-400">
                          Impact:
                        </span>{' '}
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-cyan-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.techStack.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="mt-auto flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </Button>
                    {project.githubUrl && (
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription>{selectedProject?.description}</DialogDescription>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  Problem Solved
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{selectedProject.problem}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Impact & Results
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{selectedProject.impact}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                {selectedProject.githubUrl && (
                  <Button className="flex-1" asChild>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                )}
                {selectedProject.liveUrl && (
                  <Button className="flex-1" variant="outline" asChild>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
