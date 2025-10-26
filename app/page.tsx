import Navigation from './components/Navigation';
import SocialLinks from './components/SocialLinks';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative">
      <Navigation />
      
      {/* Section Home */}
      <section id="home" className="min-h-screen flex items-center px-6 py-16 ml-12 md:ml-24 lg:ml-32">
        <div className="mt-20 mb-32">
          <p className="text-blue-400 text-lg mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Maxence Guilbot.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
            "Our greatest glory is not in never falling, but in rising every time we fall."
          </p>
          
          <div className="max-w-2xl">
            <p className="text-gray-300 text-lg leading-relaxed">
              Étudiant en troisième année du programme{' '}
              <span className="text-blue-400 hover:text-blue-300 transition-colors">
                pré-Master à Epitech
              </span>{' '}
              Bordeaux, passionné par le développement web et la cybersécurité, je conçois des projets alliant créativité, rigueur et innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Section Projet */}
      <section id="projet" className="min-h-screen px-6 py-16 ml-12 md:ml-24 lg:ml-32">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Projets</h2>
        </div>

        {/* Project Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl">
          {/* Project Description */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">JobBoard</strong> est un site web permettant de lister et consulter des offres d'emploi. Développé avec HTML, CSS, JavaScript et le framework Angular, ce projet met en place une interface claire et dynamique pour faciliter la recherche d'opportunités professionnelles. L'objectif est de renforcer mes compétences en développement front-end en concevant des interfaces web réactives et en maîtrisant les langages client.
            </p>
            
            <div className="flex items-center space-x-2 text-blue-400">
              <span>Lundi 20 octobre</span>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative">
            <a 
              href="https://github.com/EthanLedouble/Jobboarding.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-slate-800 rounded-lg p-4 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image 
                    src="/chomup.png" 
                    alt="Screenshot du projet JobBoard"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Additional Projects */}
        <div className="mt-32 max-w-5xl">
          <h3 className="text-2xl font-semibold mb-16">Autres Projets</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
              <h4 className="text-xl font-semibold mb-3">Projet à venir</h4>
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
      </section>

      {/* Section Skills */}
      <section id="skills" className="min-h-screen px-6 py-16 ml-12 md:ml-24 lg:ml-32">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Skills</h2>
        </div>

        <div className="max-w-4xl space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Langages & Frameworks</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-800/70 transition-colors">
                <p className="text-lg">HTML/CSS</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-800/70 transition-colors">
                <p className="text-lg">JavaScript</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-800/70 transition-colors">
                <p className="text-lg">Angular</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-800/70 transition-colors">
                <p className="text-lg">React/Next.js</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-800/70 transition-colors">
                <p className="text-lg">C++</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-800/70 transition-colors">
                <p className="text-lg">Java / OOP</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-800/70 transition-colors">
                <p className="text-lg">Symfony</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Compétences</h3>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-lg mb-2">Développement Web</p>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-lg mb-2">Cybersécurité</p>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{width: '25%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Experience */}
      <section id="experience" className="min-h-screen px-6 py-16 ml-12 md:ml-24 lg:ml-32">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Experience</h2>
        </div>

        <div className="max-w-4xl space-y-8">
          <div className="border-l-2 border-blue-400 pl-6">
            <h3 className="text-2xl font-semibold mb-2">Étudiant - Epitech Bordeaux</h3>
            <p className="text-blue-400 mb-4">2025 - 2028</p>
            <p className="text-gray-300 leading-relaxed">
              Formation en développement web et cybersécurité avec des projets pratiques et une approche par la pratique.
            </p>
          </div>

          <div className="border-l-2 border-blue-400 pl-6">
            <h3 className="text-2xl font-semibold mb-2">Chef de Partie Cuisine - The Famous Pub</h3>
            <p className="text-blue-400 mb-4">2025 - 2025 | La Rochelle</p>
            <p className="text-gray-300 leading-relaxed">
              CDD - 6 mois - Préparation et dressage des entrées froides, utilisation de matériel professionnel.
            </p>
          </div>

          <div className="border-l-2 border-blue-400 pl-6">
            <h3 className="text-2xl font-semibold mb-2">Équipier Polyvalent - Burger King</h3>
            <p className="text-blue-400 mb-4">2022 - 2025 | La Rochelle</p>
            <p className="text-gray-300 leading-relaxed">
              Contrat étudiant - Relation clientèle et rigueur sur la gestion des produits.
            </p>
          </div>

          <div className="border-l-2 border-blue-400 pl-6">
            <h3 className="text-2xl font-semibold mb-2">Primeur - Leclerc</h3>
            <p className="text-blue-400 mb-4">2021 - 2021 | Parthenay</p>
            <p className="text-gray-300 leading-relaxed">
              CDI - 7 mois - Communication et gestion et répartition des tâches.
            </p>
          </div>

          <div className="border-l-2 border-blue-400 pl-6">
            <h3 className="text-2xl font-semibold mb-2">Assistant Technicien</h3>
            <p className="text-blue-400 mb-4">2015 - 2015 | 2018 - 2018</p>
            <p className="text-gray-300 leading-relaxed">
              Stage 3ème et Stage de Première - Maintenance du matériel et logiciel informatique.
            </p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <SocialLinks />
      
      <footer className="bg-slate-800/50 p-6 mt-16">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-300 text-center md:text-left">
                  &copy; {new Date().getFullYear()} Maxence Guilbot. Tous droits réservés.
                </p>
                <div className="flex space-x-6">
                  <a 
                    href="https://github.com/Max-glbt" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/maxence-guilbot-00450b250" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </footer>
    </div>
  );
}
