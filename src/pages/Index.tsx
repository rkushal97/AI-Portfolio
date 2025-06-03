
import React from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import { FileText, User, Mail, TrendingUp, Search } from 'lucide-react';

const Index = () => {
  const features = [
    {
      id: 'portfolio',
      title: 'AI Portfolio Builder',
      description: 'Upload your resume or paste your LinkedIn URL. Our AI creates a stunning, personalized portfolio webpage that showcases your unique strengths.',
      icon: User,
      placeholder: 'Paste your LinkedIn URL or tell us about your background...',
      buttonText: 'Build My Portfolio',
      acceptedFiles: '.pdf,.doc,.docx',
      gradientColors: 'from-sky-400 to-sky-600'
    },
    {
      id: 'cv',
      title: 'AI CV Generator',
      description: 'Simply describe your experience and goals. Get a clean, Harvard-style resume that hiring managers love to read.',
      icon: FileText,
      placeholder: 'Tell us about your education, experience, and target role...',
      buttonText: 'Generate My CV',
      acceptedFiles: '',
      gradientColors: 'from-sage-400 to-sage-600'
    },
    {
      id: 'cover-letter',
      title: 'AI Cover Letter Writer',
      description: 'Upload your resume and job description. We\'ll craft a warm, compelling cover letter that gets you noticed.',
      icon: Mail,
      placeholder: 'Paste the job description you\'re applying for...',
      buttonText: 'Write Cover Letter',
      acceptedFiles: '.pdf,.doc,.docx',
      gradientColors: 'from-warm-400 to-warm-600'
    },
    {
      id: 'optimizer',
      title: 'Resume Optimizer',
      description: 'Get personalized improvement suggestions and a step-by-step upskilling plan to reach your career goals.',
      icon: TrendingUp,
      placeholder: 'What\'s your career goal? Which role are you targeting?',
      buttonText: 'Optimize Resume',
      acceptedFiles: '.pdf,.doc,.docx',
      gradientColors: 'from-purple-400 to-purple-600'
    },
    {
      id: 'job-alerts',
      title: 'Job Opening Alert Engine',
      description: 'Tell us your preferences and location. Discover live job openings that perfectly match your profile.',
      icon: Search,
      placeholder: 'What type of role are you looking for? Where do you want to work?',
      buttonText: 'Find Job Openings',
      acceptedFiles: '',
      gradientColors: 'from-emerald-400 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen gradient-warm">
      <Hero />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Five AI-Powered Tools to <span className="text-gradient">Launch Your Career</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From portfolio creation to job discovery, we've got everything you need to stand out and succeed.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white/50 backdrop-blur-sm border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Launch Your Career?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of graduates who've already landed their dream jobs with CareerBoost AI. 
            Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get Started Free
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
