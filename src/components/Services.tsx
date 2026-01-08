
import { Card } from "@/components/ui/card";
import { BarChart3, Database, TrendingUp, Settings } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Interactive Dashboards",
      description: "Creating compelling and interactive dashboards that transform complex data into actionable insights using Power BI and advanced visualization techniques.",
      icon: <BarChart3 className="text-blue-400" size={40} />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Business Data Analysis",
      description: "Analyzing business data to identify patterns, trends, and opportunities that drive strategic decision-making and operational efficiency.",
      icon: <Database className="text-green-400" size={40} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Strategic Insights",
      description: "Supporting strategic decisions with actionable insights derived from comprehensive data analysis and statistical modeling.",
      icon: <TrendingUp className="text-purple-400" size={40} />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Management",
      description: "Implementing efficient data cleaning, transformation, and management processes to ensure data quality and accessibility.",
      icon: <Settings className="text-orange-400" size={40} />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-blue-400">Services</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            I specialize in creating interactive dashboards, analyzing business data, and supporting strategic decisions with actionable insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 p-8 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:border-blue-400/50 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} p-0.5 flex-shrink-0`}>
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
