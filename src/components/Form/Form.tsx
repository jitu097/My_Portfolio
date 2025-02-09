import React, { useRef, useState } from "react";
import { Container } from './styles';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";

// Initialize EmailJS (add at the start of your file)
emailjs.init("hTaHFhbb0yhvU0dfU");

export function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_n4tcias',          // Replace with your Service ID
        'template_zqk8ugi',         // Replace with your Template ID
        formRef.current!,
        'hTaHFhbb0yhvU0dfU'           // Replace with your Public Key
      );
      
      toast.success('Message sent successfully!');
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input 
          type="text" 
          name="user_name"
          placeholder="Your Name" 
          required 
        />
        <input 
          type="email" 
          name="user_email"
          placeholder="Your Email" 
          required 
        />
        <textarea 
          name="message"
          placeholder="Your Message" 
          rows={8} 
          required 
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>
      <ToastContainer position="bottom-left" />
    </Container>
  );
}