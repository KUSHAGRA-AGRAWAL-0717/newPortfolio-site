import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Code,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const SOCIALS = [
  { icon: Github, href: "https://github.com/KUSHAGRA-AGRAWAL-0717" },
  { icon: Linkedin, href: "https://linkedin.com/in/kushagraagrawal017" },
  { icon: Code, href: "https://leetcode.com/u/Kushagra_0717" },
  { icon: Mail, href: "mailto:kushagraagrawal.9672@gmail.com" },
];

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSuccess(false);

    const form = formRef.current;
    if (!form) return;

    const name =
      (form.querySelector('input[name="user_name"]') as HTMLInputElement)
        ?.value || "";
    const email =
      (form.querySelector('input[name="user_email"]') as HTMLInputElement)
        ?.value || "";
    const phone =
      (form.querySelector('input[name="user_phone"]') as HTMLInputElement)
        ?.value || "";
    const subject =
      (form.querySelector('input[name="user_subject"]') as HTMLInputElement)
        ?.value || "";
    const message =
      (form.querySelector('textarea[name="message"]') as HTMLTextAreaElement)
        ?.value || "";

    const fullMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;

    const injectHidden = (fieldName: string, value: string) => {
      let el = form.querySelector(
        `input[name="${fieldName}"]`,
      ) as HTMLInputElement;
      if (!el) {
        el = document.createElement("input");
        el.type = "hidden";
        el.name = fieldName;
        form.appendChild(el);
      }
      el.value = value;
    };

    injectHidden("hidden_phone", phone);
    injectHidden("hidden_email", email);
    injectHidden("hidden_subject", subject);

    const msgField = form.querySelector(
      'textarea[name="message"]',
    ) as HTMLTextAreaElement;
    if (msgField) msgField.value = fullMessage;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
        formRef.current?.reset();
        setTimeout(() => setSuccess(false), 3200);
      })
      .catch((err) => {
        setSending(false);
        setError("Failed to send email. Please try again later.");
        console.error("FAILED...", err?.text || err);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4 inline-flex">
            <Send size={14} />
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your
            ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "kushagraagrawal.9672@gmail.com",
                    href: "mailto:kushagraagrawal.9672@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 9672048846",
                    href: "tel:+919672048846",
                  },
                  { icon: MapPin, label: "Location", value: "India" },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-accent group-hover:border-accent/40 group-hover:shadow-[0_0_12px_-3px_hsla(180,100%,50%,0.25)] transition-all duration-300 flex-shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-foreground font-medium hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-foreground mb-3">
                Connect With Me
              </h4>
              <div className="flex gap-2">
                {SOCIALS.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 hover:shadow-[0_0_12px_-3px_hsla(180,100%,50%,0.25)] transition-all duration-300"
                  >
                    <s.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="gradient-btn rounded-xl p-5 shadow-[0_0_25px_-5px_hsla(180,100%,50%,0.2)]"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-accent-foreground animate-pulse" />
                <span className="text-sm font-bold text-accent-foreground">
                  Available for Work
                </span>
              </div>
              <p className="text-xs text-accent-foreground/80">
                Currently accepting freelance projects and full-time
                opportunities
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="glass rounded-2xl p-8 space-y-5 hover:border-accent/20 transition-all duration-500"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    name="user_name"
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Your Email *
                  </label>
                  <input
                    name="user_email"
                    type="email"
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Phone Number
                </label>
                <input
                  name="user_phone"
                  type="tel"
                  className="input-field"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Subject *
                </label>
                <input
                  name="user_subject"
                  required
                  className="input-field"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full gradient-btn py-3.5 rounded-xl text-sm font-semibold text-accent-foreground flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_25px_-5px_hsla(180,100%,50%,0.3)] disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2 text-accent text-sm font-medium"
                  >
                    <CheckCircle size={16} />
                    Message sent successfully! I'll be in touch soon.
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2 text-destructive text-sm"
                  >
                    <AlertCircle size={16} />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
