
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image with circular mask */}
          <div className="text-center">
            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-2xl shadow-blue-500/20">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-700">
                <img 
                  src="https://i.postimg.cc/XYpLyQZr/1745218842895.jpg" 
                  alt="Ashish Jha - Profile Picture"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-initials');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="fallback-initials w-full h-full hidden items-center justify-center text-6xl font-bold text-blue-400">
                  AJ
                </div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div className="text-lg text-gray-300 leading-relaxed space-y-4">
              <p>
                I am a third-year student of BSc IT at K.M. Agarwal College and have a keen passion for data analysis and technology. I hold certifications in Power BI, Excel, and Google Analytics, which have made me proficient in data visualization and data management.
              </p>
              <p>
                I've completed an internship in cloud computing that provided hands-on exposure to cloud technologies. I am dedicated to continuous learning and currently enhancing my skills in machine learning and data analysis.
              </p>
              <p>
                In my free time, I enjoy researching new technologies and staying updated with the latest trends in data analytics.
              </p>
            </div>

            {/* Education */}
            <Card className="bg-gray-700/50 border-gray-600 p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">BSc IT</h3>
                  <p className="text-gray-300">K.M. Agarwal College</p>
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Calendar size={16} />
                    <span>Graduating in 2026</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
