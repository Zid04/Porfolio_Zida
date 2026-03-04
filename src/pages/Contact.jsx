import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setFeedback(null);

    emailjs
      .sendForm(
        "service_x00t85p",
        "template_2i16jd2",
        form.current,
        "XYtShQggcMtKfjMI8"
      )
      .then(
        () => {
          setFeedback({
            type: "success",
            message: "Your message has been sent successfully!",
          });
          setFormData({ name: "", email: "", message: "" });
          setSending(false);
        },
        () => {
          setFeedback({
            type: "error",
            message: "An error occurred. Please try again.",
          });
          setSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 text-white px-6 flex flex-col items-center"
    >
      {/* Titre */}
      <h2 className="text-4xl font-bold mb-4 text-purple-300">Contact Me</h2>

      <p className="text-white/70 mb-8 max-w-2xl text-center">
        Do you have a project in mind or simply want to chat?  
        Feel free to reach out — I’m always open to new opportunities.
      </p>

      {/* Infos rapides */}
      <div className="flex flex-col md:flex-row gap-6 mb-6 text-white/70 items-center">
        <div className="flex items-center gap-2">
          <Mail size={20} />
          <span>owonazida@gmail.com</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={20} />
          <span>Rennes, France</span>
        </div>
      </div>

      {/* Disponibilité */}
      <div className="flex items-center gap-2 mb-10">
        <span className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></span>
        <span>Available for freelance projects, internships, and full‑time roles.</span>
      </div>

      {/* Formulaire */}
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col gap-4 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
      >
        <h3 className="text-2xl font-semibold text-purple-200 mb-2">
          Send me a message
        </h3>

        {/* Feedback */}
        {feedback && (
          <div
            className={`p-3 rounded-lg text-center ${
              feedback.type === "success"
                ? "bg-green-600/20 text-green-300"
                : "bg-red-600/20 text-red-300"
            }`}
          >
            {feedback.message}
          </div>
        )}

        {/* Champ nom */}
        <div className="flex flex-col gap-1">
          <label className="text-white/70">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Champ email */}
        <div className="flex flex-col gap-1">
          <label className="text-white/70">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Champ message */}
        <div className="flex flex-col gap-1">
          <label className="text-white/70">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        {/* Bouton */}
        <Button
          type="submit"
          size="lg"
          disabled={sending}
          className="mt-4 rounded-full px-10 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition flex items-center gap-2"
        >
          {sending ? "Sending..." : <>Send <Send size={18} /></>}
        </Button>
      </form>
    </section>
  );
}
