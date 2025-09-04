import AboutAchievements from "./AboutAchievements";
import AboutTags from "./AboutTags";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">Sobre Marisane Almeida</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sou terapeuta sistêmica com mais de 8 anos de experiência, especializada em constelação familiar e terapia de sistemas. Minha missão é criar um espaço seguro e acolhedor onde você
                possa explorar suas relações familiares, compreender padrões herdados e encontrar caminhos para a cura.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acredito que cada pessoa carrega em si a sabedoria necessária para sua transformação. Meu papel é facilitar esse processo, oferecendo ferramentas e insights que promovam o
                autoconhecimento e o crescimento pessoal.
              </p>
            </div>
            <AboutTags />
          </div>
          <AboutAchievements />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
