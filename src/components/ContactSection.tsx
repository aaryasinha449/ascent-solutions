import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    subvalue: "+91 22 1234 5678",
    link: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@eletechtrading.in",
    subvalue: "sales@eletechtrading.in",
    link: "mailto:info@eletechtrading.in",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "Plot No. 42, MIDC Industrial Area",
    subvalue: "Andheri East, Mumbai – 400093, Maharashtra",
    link: "https://maps.google.com/?q=Andheri+East+Mumbai",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 6:00 PM",
    subvalue: "Emergency: 24/7 Support",
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <span className="red-line" />
          </div>
          <h2 className="section-heading mb-4">
            Contact <span className="text-primary">Eletech</span>
          </h2>
          <p className="section-subheading">
            Ready to elevate your building? Reach out to us for a free consultation, 
            product demo, or site survey.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, subvalue, link }, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 bg-section-alt rounded-2xl border border-border card-hover"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-button">
                  <Icon className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-foreground mb-0.5">{label}</p>
                  {link ? (
                    <a href={link} className="font-body text-sm text-foreground hover:text-primary transition-colors">{value}</a>
                  ) : (
                    <p className="font-body text-sm text-foreground">{value}</p>
                  )}
                  <p className="font-body text-xs text-muted-foreground">{subvalue}</p>
                </div>
              </div>
            ))}

            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-border h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60296.55505855427!2d72.8082866!3d19.1075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b888ae67fd%3A0x99f154024cfc5fc1!2sAndheri+East%2C+Mumbai!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eletech Office Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8 shadow-card">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="text-green-600" size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">Message Sent!</h3>
                  <p className="font-body text-muted-foreground">
                    Thank you for contacting Eletech. Our team will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-gradient-primary text-primary-foreground shadow-button"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-6">Request a Free Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                        <Input
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="font-body"
                        />
                      </div>
                      <div>
                        <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
                        <Input
                          required
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="font-body"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email Address *</label>
                      <Input
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="font-body"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Service Required</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service...</option>
                        <option>New Elevator Installation</option>
                        <option>Elevator Modernization</option>
                        <option>Annual Maintenance Contract</option>
                        <option>Spare Parts Supply</option>
                        <option>Technical Consultation</option>
                        <option>Emergency Repair</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Your Message</label>
                      <Textarea
                        rows={4}
                        placeholder="Describe your requirement, building type, number of floors, location..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="font-body resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary text-primary-foreground shadow-button hover:opacity-90 font-heading font-bold h-11 transition-all duration-200 hover:scale-[1.02]"
                    >
                      <Send size={16} className="mr-2" />
                      Send My Request
                    </Button>
                    <p className="font-body text-xs text-muted-foreground text-center">
                      We typically respond within 2-4 business hours
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
