import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import FloatingInput from "@/components/ui/floating-input";
import emailjs from "emailjs-com";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      const serviceID = "service_rjmbi7f";
      const templateID = "template_on6pc38";
      const userID = "XrMyBXRk4GNShC1iq";
      await emailjs.send(serviceID, templateID, {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      }, userID);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sarmadaslammemon@gmail.com",
      color: "text-android-blue bg-android-blue/20",
      onClick: () => {
        window.location.href =
          'mailto:sarmadaslammemon@gmail.com?subject=Hello%20Sarmad!&body=Hi%20Sarmad%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.';
      }
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 3042064868",
      color: "text-android-green bg-android-green/20",
      onClick: () => {
        window.open(
          'https://wa.me/923042064868?text=Hi%20Sarmad%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!',
          '_blank'
        );
      }
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi Sindh",
      color: "text-purple-400 bg-purple-500/20",
      onClick: () => {
        window.open(
          'https://www.google.com/maps/search/?api=1&query=Karachi%2C%20Sindh',
          '_blank'
        );
      }
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/sarmad-aslam-memon-8673a9235", color: "bg-android-blue hover:bg-blue-600" },
    { icon: Github, href: "https://github.com/SarmadAslamMemon", color: "bg-gray-700 hover:bg-gray-600" }
  ];

  return (
    <section id="contact" className="py-20 bg-amoled" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-android-blue">
              Let's Build Something Amazing
            </h3>
            
            <p className="text-secondary mb-8 text-lg">
              Ready to bring your mobile app ideas to life? I'm always excited to work on innovative projects that push the boundaries of mobile technology.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-center space-x-4 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  onClick={info.onClick}
                  tabIndex={0}
                  role="button"
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') info.onClick(); }}
                >
                  <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{info.label}</p>
                    <p className="text-secondary underline underline-offset-2">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="flex space-x-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white transition-all`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingInput 
                          placeholder="Your Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingInput 
                          type="email"
                          placeholder="Email Address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingInput 
                          placeholder="Subject"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingInput 
                          as="textarea"
                          rows={5}
                          placeholder="Your Message"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full py-4 bg-gradient-to-r from-android-blue to-android-green rounded-xl font-semibold glow-effect"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
