import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Coffee, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'Figma', level: 90 },
    { name: 'Adobe Creative Suite', level: 85 },
    { name: 'Prototyping', level: 90 },
    { name: 'User Research', level: 80 },
    { name: 'Design Systems', level: 85 },
    { name: 'HTML/CSS', level: 75 },
    { name: 'React', level: 70 },
  ];

  const experience = [
    {
      title: 'Senior UI/UX Designer',
      company: 'TechCorp Inc.',
      period: '2021 - Present',
      description: 'Leading design initiatives for multiple product lines, managing a team of 3 designers, and establishing design systems across the organization.'
    },
    {
      title: 'UI/UX Designer',
      company: 'StartupHub',
      period: '2019 - 2021',
      description: 'Designed user interfaces for early-stage startups, conducted user research, and collaborated with development teams to implement designs.'
    },
    {
      title: 'Junior Designer',
      company: 'Creative Agency',
      period: '2018 - 2019',
      description: 'Created visual designs for web and mobile applications, worked on branding projects, and assisted senior designers with complex projects.'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'User-Centered',
      description: 'Every design decision is made with the user in mind, ensuring optimal experience and usability.'
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'I bring enthusiasm and dedication to every project, treating each challenge as an opportunity to create something amazing.'
    },
    {
      icon: Award,
      title: 'Quality-Focused',
      description: 'Attention to detail and commitment to excellence in every aspect of the design process.'
    },
    {
      icon: Coffee,
      title: 'Collaborative',
      description: 'I believe the best designs come from great teamwork and open communication with clients and colleagues.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I'm a passionate UI/UX designer with over 5 years of experience creating 
                digital experiences that users love. My journey in design started with a 
                fascination for how people interact with technology, and it has evolved 
                into a career dedicated to solving complex problems through thoughtful design.
              </p>
              <Link to="/contact" className="btn-primary">
                Let's Work Together
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Sarah working"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">My Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                My design journey began during my college years when I discovered the perfect 
                intersection of creativity and problem-solving. What started as a curiosity about 
                how apps and websites work turned into a deep passion for understanding user behavior 
                and creating interfaces that feel intuitive and delightful.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                After graduating with a degree in Design, I dove headfirst into the world of 
                digital design. I've had the privilege of working with startups, established 
                companies, and everything in between. Each project has taught me something new 
                about users, technology, and the art of balancing business goals with user needs.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not designing, you can find me exploring new coffee shops, hiking local 
                trails, or experimenting with the latest design tools. I believe that inspiration 
                comes from everywhere, and I'm always looking for new ways to bring fresh 
                perspectives to my work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide every project I work on and every design decision I make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Skills & Expertise</h2>
              <p className="text-lg text-gray-600 mb-8">
                I've developed expertise across various design tools and methodologies, 
                always staying current with industry trends and best practices.
              </p>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Experience</h2>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <div className="text-primary-600 font-medium">{exp.company}</div>
                      <div className="text-sm text-gray-500">{exp.period}</div>
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fun Facts About Me</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A few things that make me who I am beyond design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="font-semibold text-gray-900 mb-2">Coffee Enthusiast</h3>
              <p className="text-gray-600">I've tried over 200 different coffee shops and counting!</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🥾</div>
              <h3 className="font-semibold text-gray-900 mb-2">Hiking Lover</h3>
              <p className="text-gray-600">Completed 15 major hiking trails across California.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-semibold text-gray-900 mb-2">Bookworm</h3>
              <p className="text-gray-600">Reading 24 books per year, mostly design and psychology.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Art Collector</h3>
              <p className="text-gray-600">Supporting local artists with a growing collection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and help bring ideas to life. 
            Whether you're a startup or an established company, let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get In Touch
              <ArrowRight size={20} />
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;