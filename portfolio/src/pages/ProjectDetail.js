import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, User, Clock, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const currentProjectIndex = projects.findIndex(p => p.id === project.id);
  const nextProject = projects[currentProjectIndex + 1];
  const prevProject = projects[currentProjectIndex - 1];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-primary-600 font-medium mb-4">{project.category}</div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {project.longDescription}
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <User size={16} />
                    <span className="text-sm">Client</span>
                  </div>
                  <div className="font-semibold text-gray-900">{project.client}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <Clock size={16} />
                    <span className="text-sm">Duration</span>
                  </div>
                  <div className="font-semibold text-gray-900">{project.duration}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <Calendar size={16} />
                    <span className="text-sm">Year</span>
                  </div>
                  <div className="font-semibold text-gray-900">{project.year}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </>
                )}
              </div>
              {project.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-primary-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">The Solution</h3>
                  <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Results</h3>
                  <p className="text-gray-600 leading-relaxed">{project.results}</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="card p-8 sticky top-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Info</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Category</div>
                    <div className="font-medium text-gray-900">{project.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Client</div>
                    <div className="font-medium text-gray-900">{project.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Duration</div>
                    <div className="font-medium text-gray-900">{project.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Year</div>
                    <div className="font-medium text-gray-900">{project.year}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Technologies</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="section-padding bg-white border-t">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              {prevProject && (
                <Link
                  to={`/project/${prevProject.id}`}
                  className="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft size={24} className="text-gray-400 group-hover:text-primary-600 transition-colors" />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Previous Project</div>
                    <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {prevProject.title}
                    </div>
                  </div>
                </Link>
              )}
            </div>
            
            <div className="flex-shrink-0 mx-8">
              <Link
                to="/portfolio"
                className="btn-secondary"
              >
                All Projects
              </Link>
            </div>
            
            <div className="flex-1 flex justify-end">
              {nextProject && (
                <Link
                  to={`/project/${nextProject.id}`}
                  className="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Next Project</div>
                    <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {nextProject.title}
                    </div>
                  </div>
                  <ArrowRight size={24} className="text-gray-400 group-hover:text-primary-600 transition-colors" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'd love to help bring your next project to life. Let's discuss how we can 
            create something amazing together.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Conversation
            <ExternalLink size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;