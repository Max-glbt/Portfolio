import Navigation from '../components/Navigation';
import Image from 'next/image';

export default function Projet() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <div className="mt-20 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Projets
          </h1>
        </div>

        {/* Project Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Project Description */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong>Chom'up</strong> est un site web permettant de lister et consulter des offres d'emploi. Développé avec HTML, CSS, JavaScript et le framework Angular, ce projet met en place une interface claire et dynamique pour faciliter la recherche d'opportunités professionnelles. L'objectif est de renforcer mes compétences en développement front-end en concevant des interfaces web réactives et en maîtrisant les langages client.
            </p>
            
            <div className="flex items-center space-x-2 text-blue-400">
              <span>Lundi 20 octobre</span>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative">
            <div className="bg-slate-800 rounded-lg p-4 shadow-xl">
              <div className="bg-slate-700 rounded-lg p-6 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-lg"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Projects Section - You can add more projects here */}
        <div className="mt-32">
          <h2 className="text-2xl font-semibold text-center mb-16">Autres Projets</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card Template */}
            <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Projet à venir</h3>
              <p className="text-gray-300 text-sm mb-4">
                Description du projet en cours de développement...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 text-sm">En développement</span>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                  Voir plus →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="fixed bottom-8 right-8">
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              github
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              linkedin
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}