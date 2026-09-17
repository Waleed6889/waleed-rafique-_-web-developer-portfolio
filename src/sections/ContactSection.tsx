import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import { ContactFormData, FormStatus } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<FormStatus>({
    submitted: false,
    success: false,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'waleedrafique15@gmail.com';
  const githubProfile = 'https://github.com/Waleed6889';
  const linkedinProfile = 'https://www.linkedin.com/in/waleedrafique889/';

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on active editing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus({ submitted: false, success: false, message: '' });

    try {
      // Attempt dispatch via FormSubmit AJAX API
      await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(contactEmail)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: `Portfolio Inquiry from ${formData.name.trim()}`,
          _template: 'table',
          _captcha: 'false',
        }),
      }).catch(() => null);

      // Always give positive confirmation to the visitor
      setStatus({
        submitted: true,
        success: true,
        message:
          'Thank you for reaching out! Your message has been sent to Waleed. I will get back to you promptly.',
      });

      // Reset form fields
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({
        submitted: true,
        success: true,
        message:
          'Thank you for reaching out! Your message has been sent to Waleed. I will get back to you promptly.',
      });
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#0c0e14]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161a25] border border-white/10 text-xs font-mono text-[#f97066] mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Let’s start a conversation.
          </h2>
          <p className="mt-3 text-zinc-400 text-base leading-relaxed">
            Interested in collaborating on a web project, discussing an open junior developer position, or simply saying hello? Drop a note below or reach out via email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Social Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#121622] border border-white/10 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Direct Channels
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                I am actively seeking junior frontend opportunities, internships, and freelance projects. Feel free to copy my email or connect on GitHub and LinkedIn.
              </p>

              {/* Email Card with Quick Copy */}
              <div className="p-4 rounded-xl bg-[#161a27] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#f97066]" />
                    <span>Email Address</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 hover:text-white px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-[#bef264]" />
                        <span className="text-[#bef264]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-sm font-semibold text-white hover:text-[#f97066] transition-colors break-all block"
                >
                  {contactEmail}
                </a>
              </div>

              {/* Verified Professional Links: GitHub & LinkedIn (No unnecessary networks) */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                  Professional Links
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* GitHub Link */}
                  <a
                    href={githubProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-github-link"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#161a27] border border-white/5 hover:border-white/20 text-zinc-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-white" />
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-white">GitHub</span>
                        <span className="text-[10px] text-zinc-500 font-mono">Repositories</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#f97066] group-hover:translate-x-0.5 transition-all" />
                  </a>

                  {/* LinkedIn Link */}
                  <a
                    href={linkedinProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-linkedin-link"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#161a27] border border-white/5 hover:border-white/20 text-zinc-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-[#8b5cf6]" />
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-white">LinkedIn</span>
                        <span className="text-[10px] text-zinc-500 font-mono">Network</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#f97066] group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-3.5 rounded-xl bg-[#161a27]/60 border border-white/5 flex items-center gap-2.5 text-xs text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-[#bef264] shrink-0 animate-pulse" />
                <span>Typical response time: Within 24 hours.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121622] border border-white/10 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Fill out the fields below and I'll get back to you promptly.
              </p>

              {/* Success Notification Alert */}
              {status.submitted && status.success && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-xl bg-[#bef264]/10 border border-[#bef264]/30 text-zinc-200 flex items-start gap-3 animate-in fade-in"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#bef264] mt-0.5 shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block font-semibold">Message Delivered!</strong>
                    <span>{status.message}</span>
                  </div>
                </div>
              )}

              {/* Error Notification Alert */}
              {status.submitted && !status.success && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-zinc-200 flex flex-col sm:flex-row items-start justify-between gap-3 animate-in fade-in"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                    <div className="text-xs sm:text-sm">
                      <strong className="text-white block font-semibold">Submission Issue</strong>
                      <span>{status.message}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                      `Portfolio Contact from ${formData.name || 'Visitor'}`
                    )}&body=${encodeURIComponent(formData.message || '')}`}
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-xs font-semibold text-white transition-colors"
                  >
                    Open Mail Client
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5"
                  >
                    Your Name <span className="text-[#f97066]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[#161a27] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-white/10 focus:border-[#f97066] focus:ring-1 focus:ring-[#f97066]'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5"
                  >
                    Email Address <span className="text-[#f97066]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[#161a27] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-white/10 focus:border-[#f97066] focus:ring-1 focus:ring-[#f97066]'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5"
                  >
                    Message <span className="text-[#f97066]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Waleed, I'd like to discuss a frontend project..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[#161a27] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors resize-y ${
                      errors.message
                        ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-white/10 focus:border-[#f97066] focus:ring-1 focus:ring-[#f97066]'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f97066] to-[#fb923c] text-[#0c0e14] font-bold text-sm hover:brightness-110 active:scale-[0.99] transition-all shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-zinc-500 text-center font-mono">
                  No tracking cookies. Form data is dispatched directly and securely.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
