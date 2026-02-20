import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../components/ui/button";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_x00t85p",   
        "template_2i16jd2",  
        form.current,
        "XYtShQggcMtKfjMI8"    
      )
      .then(
        (result) => {
          alert("Message envoyé ! 🎉");
          setFormData({ name: "", email: "", message: "" });
          setSending(false);
        },
        (error) => {
          alert("Erreur, le message n’a pas été envoyé.");
          console.log(error.text);
          setSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 text-white px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-4 text-purple-300">Contact Me</h2>

      <p className="text-white/70 mb-8 max-w-2xl text-center">
        Do you have a project in mind or simply want to chat?
        Feel free to leave me a message. I am always open to new opportunities.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-4 text-white/70 items-center">
        <div className="flex items-center gap-2">
          <Mail size={20} />
          <span>owonazida@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={20} />
          <span>Rennes, France</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-10">
        <span className="w-3 h-3 bg-green-800 rounded-full animate-pulse"></span>
        <span>Available for freelance projects, internships, and full-time positions.</span>
      </div>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col gap-4 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
      >
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

        <Button
          type="submit"
          size="lg"
          disabled={sending}
          className="mt-4 rounded-full px-10 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition"
        >
          {sending ? "Sending..." : "Send"}
        </Button>
      </form>
    </section>
  );
}
