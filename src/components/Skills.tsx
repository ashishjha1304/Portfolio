
import { Card } from "@/components/ui/card";
import { Database, BarChart3, Cloud, Calculator, Code, Cog } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis & Tools",
      icon: <Database className="text-blue-400" size={32} />,
      skills: ["Power BI", "Excel", "SQL", "Python"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Visualization & Dashboards",
      icon: <BarChart3 className="text-green-400" size={32} />,
      skills: ["DAX", "Report Design", "Dashboard Design"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud & Systems",
      icon: <Cloud className="text-purple-400" size={32} />,
      skills: ["VMware Workstation", "Windows Server", "Domain Management"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Advanced Excel",
      icon: <Calculator className="text-orange-400" size={32} />,
      skills: ["Pivot Tables", "VBA", "Macros"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Programming",
      icon: <Code className="text-yellow-400" size={32} />,
      skills: ["Python", "SQL", "Data Modeling"],
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Other Skills",
      icon: <Cog className="text-indigo-400" size={32} />,
      skills: ["Data Cleaning", "ELT", "Networking", "Problem Solving"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and insights generation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 p-6 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:border-blue-400/50"
            >
              <div className="text-center mb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} p-0.5 mb-4`}>
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-700/50 rounded-lg px-3 py-2 text-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
