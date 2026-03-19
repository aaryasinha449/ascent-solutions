import { useState } from "react";
import {
  Mail, MapPin, Send, Clock, CheckCircle2, ArrowRight,
  MessageCircle, Building2, Phone, ChevronDown,
} from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 77220 91584",
    subvalue: "Mon – Sat: 9:00 AM – 6:00 PM",
    link: "tel:+917722091584",
    accent: "hsl(var(--primary))",
    iconBg: "bg-primary",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "Sales@eletechtradingcorp.com",
    subvalue: "We respond within 2–4 hours",
    link: "mailto:Sales@eletechtradingcorp.com",
    accent: "#3b82f6",
    iconBg: "bg-blue-500",
  },
  {
    icon: Building2,
    label: "Corporate Office",
    value: "Office No. 12, 4th Floor, Vishnupriya Apartment",
    subvalue: "Sinhagad Road, Dattawadi, Pune – 411030",
    link: "https://maps.google.com/?q=Vishnupriya+Apartment+Sinhagad+Road+Dattawadi+Pune",
    accent: "#16a34a",
    iconBg: "bg-green-600",
  },
  {
    icon: MapPin,
    label: "Gujarat Office / Warehouse",
    value: "27 & 28, Fortune Industrial Park",
    subvalue: "Odhav Industrial Estate, Ahmedabad – 382430",
    link: "https://maps.google.com/?q=Fortune+Industrial+Park+Odhav+Ahmedabad",
    accent: "#f59e0b",
    iconBg: "bg-amber-500",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 6:00 PM",
    subvalue: "Emergency Support: 24/7",
    link: null,
    accent: "#8b5cf6",
    iconBg: "bg-violet-500",
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

// ── Styled input classes shared across fields ──
const inputCls =
  "w-full rounded-xl border border-border bg-background/80 px-4 font-body text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 outline-none " +
  "focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-background hover:border-primary/50";

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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject:           "New Quote Request - Eletech Website",
          "Full Name":        form.name,
          "Phone Number":     form.phone,
          "Email Address":    form.email,
          "Service Required": form.service,
          Message:            form.message,
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
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.35) 50%, hsl(var(--background)) 100%)",
      }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-primary/4 rounded-full translate-x-1/3 translate-y-1/3 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/3 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[80px] pointer-events-none" />

      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="red-line" />
            <span className="font-body font-semibold text-primary text-sm uppercase tracking-widest">Get In Touch</span>
            <span className="red-line" />
          </div>
          <h2 className="section-heading mb-4">
            Contact <span className="gradient-text">Eletech</span>
          </h2>
          <p className="section-subheading">
            Ready to elevate your building? Reach out for a free consultation, product demo, or site survey.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Left column — contact info ── */}
          <div className="lg:col-span-2 space-y-3">
            {contactInfo.map(({ icon: Icon, label, value, subvalue, link, accent, iconBg }, i) => (
              <div
                key={i}
                className="group flex gap-4 p-4 rounded-2xl hover:-translate-y-0.5 transition-all duration-250"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.55)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 28px rgba(0,0,0,0.10), 0 0 0 1.5px ${accent}33`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)";
                }}
              >
                <div
                  className={`w-11 h-11 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200`}
                >
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
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                height: "400px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid rgba(255,255,255,0.5)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.6819856695624!2d73.83823097382667!3d18.498058682591132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf86d2d956c1%3A0xf4a6d002049fc11e!2sIshan%20Pure%20Veg%20Restaurant!5e0!3m2!1sen!2sin!4v1773946575852!5m2!1sen!2sin"
                width="100%"
                height="400"
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
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.82)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 16px 60px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              {/* Form header */}
              <div className="relative bg-gradient-primary px-7 py-6 overflow-hidden rounded-t-3xl">
                <div className="absolute inset-0 bg-dot-pattern-dark opacity-25" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl" />
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
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{
                        background: "rgba(220,252,231,0.9)",
                        border: "2px solid rgba(134,239,172,0.6)",
                        boxShadow: "0 0 0 8px rgba(220,252,231,0.4)",
                      }}
                    >
                      <CheckCircle2 className="text-green-600" size={36} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Request Submitted!</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                      Your request has been submitted successfully. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-heading font-bold px-8 py-3 rounded-xl shadow-[var(--shadow-button)] hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <input
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={`${inputCls} h-12`}
                        />
                      </div>
                      <div>
                        <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">
                          Phone Number <span className="text-primary">*</span>
                        </label>
                        <input
                          required
                          placeholder="+91 77220 91584"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className={`${inputCls} h-12`}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`${inputCls} h-12`}
                      />
                    </div>

                    {/* Service Required — modern styled select */}
                    <div>
                      <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">
                        Service Required
                      </label>
                      <div className="relative">
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className={`${inputCls} h-12 pr-10 appearance-none cursor-pointer`}
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <ChevronDown size={16} strokeWidth={2} />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe your requirement — building type, number of floors, location, budget..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputCls} py-3 resize-none`}
                      />
                    </div>

                    {error && (
                      <p className="font-body text-sm text-destructive text-center">{error}</p>
                    )}

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="relative w-full flex items-center justify-center gap-2.5 bg-gradient-primary text-primary-foreground font-heading font-bold text-base rounded-xl transition-all duration-300 disabled:opacity-70 overflow-hidden group"
                      style={{
                        height: "54px",
                        boxShadow: "0 4px 20px hsl(var(--primary)/0.35), 0 2px 6px hsl(var(--primary)/0.20)",
                      }}
                      onMouseEnter={(e) => {
                        if (!loading) {
                          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px) scale(1.01)";
                          (e.currentTarget as HTMLButtonElement).style.boxShadow =
                            "0 8px 32px hsl(var(--primary)/0.45), 0 2px 8px hsl(var(--primary)/0.25)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.transform = "";
                        (e.currentTarget as HTMLButtonElement).style.boxShadow =
                          "0 4px 20px hsl(var(--primary)/0.35), 0 2px 6px hsl(var(--primary)/0.20)";
                      }}
                    >
                      {/* Shimmer layer */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
                      <Send size={16} />
                      {loading ? "Sending..." : "Send My Request"}
                      {!loading && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />}
                    </button>

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
