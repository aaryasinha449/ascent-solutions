import { useState } from "react";
import { Mail, MapPin, Send, Clock, CheckCircle2, ArrowRight, MessageCircle, Building2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInView } from "@/hooks/use-in-view";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 77220 91584",
    subvalue: "Mon – Sat: 9:00 AM – 6:00 PM",
    link: "tel:+917722091584",
    iconBg: "bg-blue-500",
    bg: "bg-blue-50/70 border-blue-200/80",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "Sales@eletechtradingcorp.com",
    subvalue: "We respond within 2–4 hours",
    link: "mailto:Sales@eletechtradingcorp.com",
    iconBg: "bg-primary",
    bg: "bg-red-50/70 border-red-200/80",
  },
  {
    icon: Building2,
    label: "Corporate Office",
    value: "Office No. 12, 4th Floor, Vishnupriya Apartment",
    subvalue: "Sinhagad Road, Dattawadi, Pune – 411030",
    link: "https://maps.google.com/?q=Vishnupriya+Apartment+Sinhagad+Road+Dattawadi+Pune",
    iconBg: "bg-green-600",
    bg: "bg-green-50/70 border-green-200/80",
  },
  {
    icon: MapPin,
    label: "Gujarat Office / Warehouse",
    value: "27 & 28, Fortune Industrial Park",
    subvalue: "Odhav Industrial Estate, Ahmedabad – 382430",
    link: "https://maps.google.com/?q=Fortune+Industrial+Park+Odhav+Ahmedabad",
    iconBg: "bg-amber-500",
    bg: "bg-amber-50/70 border-amber-200/80",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 6:00 PM",
    subvalue: "Emergency Support: 24/7",
    link: null,
    iconBg: "bg-purple-500",
    bg: "bg-purple-50/70 border-purple-200/80",
  },
];

const serviceOptions = [
  "Elevator Components Supply",
  "Customized Elevator Solutions",
  "Technical Consultation & Expertise",
  "Authorized Distribution",
  "Safety & Compliance Assurance",
  "Fast & Reliable Delivery",
  "Cost-Effective Solutions",
  "After-Sales Support",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState("");
  const [loading, setLoading]     = useState(false);
  const [form, setForm]           = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const { ref, inView }           = useInView(0.08);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/mzdjoewd", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: "New Quote Request - Eletech Website",
          "Full Name":       form.name,
          "Phone Number":    form.phone,
          "Email Address":   form.email,
          "Service Required": form.service,
          "Message":         form.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-section-alt relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/3 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-primary mb-4">Get In Touch</span>
          <h2 className="section-heading mb-4">
            Contact <span className="gradient-text">Eletech</span>
          </h2>
          <p className="section-subheading">
            Ready to elevate your building? Reach out for a free consultation, product demo, or site survey.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Left column ── */}
          <div className="lg:col-span-2 space-y-4">

            {/* Contact info cards */}
            {contactInfo.map(({ icon: Icon, label, value, subvalue, link, iconBg, bg }, i) => (
              <div
                key={i}
                className={`group flex gap-4 p-4 rounded-2xl border ${bg} hover:-translate-y-0.5 transition-all duration-200 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]`}
              >
                <div className={`w-11 h-11 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="text-white" size={17} />
                </div>
                <div className="min-w-0">
                  <p className="font-body text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
                  {link ? (
                    <a
                      href={link}
                      target={link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-heading font-bold text-sm text-foreground hover:text-primary transition-colors block leading-tight"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-heading font-bold text-sm text-foreground leading-tight">{value}</p>
                  )}
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{subvalue}</p>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border-2 border-border shadow-[var(--shadow-card)]" style={{ height: "200px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9!2d73.8319!3d18.4760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2955b13451a4b%3A0x9ffd4f96e5ba1e2d!2sVishnupriya+Apartment%2C+Sinhagad+Rd%2C+Dattawadi%2C+Pune%2C+Maharashtra+411030!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eletech Corporate Office – Pune"
              />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917722091584?text=Hi%2C%20I%20need%20elevator%20services%20from%20Eletech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 rounded-xl py-3.5 px-4 font-heading font-bold text-sm text-white transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.01]"
            >
              <MessageCircle size={15} /> WhatsApp Us — Quick Response
            </a>
          </div>

          {/* ── Right column: Form ── */}
          <div className="lg:col-span-3">
            <div className="bg-background border border-border rounded-3xl overflow-hidden shadow-[var(--shadow-card-hover)]">

              {/* Form header */}
              <div className="relative bg-gradient-primary px-7 py-6 overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern-dark opacity-25" />
                <div className="relative z-10">
                  <h3 className="font-heading font-bold text-2xl text-white">Request a Free Quote</h3>
                  <p className="font-body text-white/70 text-sm mt-1">
                    Fill in your details — our team responds within 2–4 hours
                  </p>
                </div>
              </div>

              <div className="p-7 md:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-green-200 shadow-sm">
                      <CheckCircle2 className="text-green-600" size={36} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Request Submitted!</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                      Your request has been submitted successfully. Our team will get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="bg-gradient-primary text-primary-foreground shadow-[var(--shadow-button)] rounded-xl px-8"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <Input
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="font-body h-11 rounded-xl border-border focus:border-primary focus-visible:ring-primary/30 transition-shadow"
                        />
                      </div>
                      <div>
                        <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">
                          Phone Number <span className="text-primary">*</span>
                        </label>
                        <Input
                          required
                          placeholder="+91 77220 91584"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="font-body h-11 rounded-xl border-border focus:border-primary focus-visible:ring-primary/30 transition-shadow"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="font-body h-11 rounded-xl border-border focus:border-primary focus-visible:ring-primary/30 transition-shadow"
                      />
                    </div>

                    {/* Service Required — styled select */}
                    <div>
                      <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">
                        Service Required
                      </label>
                      <div className="relative">
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full h-11 pl-4 pr-10 rounded-xl border border-input bg-background font-body text-sm text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 hover:border-primary/50"
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        {/* Custom chevron */}
                        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                            <path d="m6 9 6 6 6-6"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">Your Message</label>
                      <Textarea
                        rows={4}
                        placeholder="Describe your requirement — building type, number of floors, location, budget..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="font-body resize-none rounded-xl border-border focus:border-primary focus-visible:ring-primary/30 transition-shadow"
                      />
                    </div>

                    {error && (
                      <p className="font-body text-sm text-destructive text-center">{error}</p>
                    )}

                    {/* Submit button */}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-primary text-primary-foreground shadow-[var(--shadow-button)] hover:opacity-90 hover:scale-[1.01] font-heading font-bold rounded-xl transition-all duration-200 text-base disabled:opacity-70"
                      style={{ height: "52px" }}
                    >
                      <Send size={16} className="mr-2" />
                      {loading ? "Sending..." : "Send My Request"}
                      {!loading && <ArrowRight size={16} className="ml-2" />}
                    </Button>

                    <p className="font-body text-xs text-muted-foreground text-center">
                      🔒 Your information is 100% secure and will never be shared with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
