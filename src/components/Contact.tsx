import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { sendEmail } from "@/services/emailService";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactInfo = [{
    icon: <Mail className="text-blue-400" size={24} />,
    label: "Email",
    value: "ashishjha1304@outlook.com",
    link: "mailto:ashishjha1304@outlook.com"
  }, {
    icon: <Phone className="text-green-400" size={24} />,
    label: "Phone",
    value: "+91 8591852039",
    link: "tel:+918591852039"
  }, {
    icon: <MapPin className="text-red-400" size={24} />,
    label: "Location",
    value: "Mumbai, India",
    link: "#"
  }];
  const socialLinks = [{
    icon: <Linkedin className="text-blue-500" size={24} />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ashishjha1304/"
  }, {
    icon: <Github className="text-gray-400" size={24} />,
    label: "GitHub",
    link: "https://github.com/ashishjha1304"
  }];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendEmail(formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform your data into insights? Let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => <Card key={index} className="bg-gray-700/50 border-gray-600 p-4">
                    <a href={info.link} className="flex items-center space-x-4 hover:text-blue-400 transition-colors duration-300">
                      <div className="bg-gray-600 p-3 rounded-full">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{info.label}</div>
                        <div className="text-white font-medium">{info.value}</div>
                      </div>
                    </a>
                  </Card>)}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
                    {social.icon}
                  </a>)}
              </div>
            </div>

            {/* Download Resume */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-none p-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-white mb-2">Get my CV here</h4>
                <p className="text-blue-100 mb-4">Get a detailed overview of my skills and experience</p>
                <a href="https://docs.google.com/document/d/12euOt5aQZsQTxRtXmTMC8KI5AzLfUVTgG9ksrrbgbQo/edit?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={() => toast({
                title: "Opening CV",
                description: "Your CV is opening in a new tab"
              })}>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    <Download size={16} className="mr-2" />
                    Download CV
                  </Button>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-700/50 border-gray-600 p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required disabled={isSubmitting} className="bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-blue-400" />
              </div>
              <div>
                <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required disabled={isSubmitting} className="bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-blue-400" />
              </div>
              <div>
                <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required disabled={isSubmitting} rows={5} className="bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-blue-400 resize-none" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">© 2026 Ashish Jha. All rights reserved. Built with passion for data analytics.</p>
        </div>
      </div>
    </section>;
};