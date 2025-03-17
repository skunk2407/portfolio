import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Utilisation d'EmailJS pour envoyer le message
    emailjs
      .sendForm('service_your_service_id', 'template_your_template_id', e.target, 'user_your_user_id')
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Votre message a été envoyé avec succès!');
        },
        (error) => {
          console.log(error.text);
          setStatus('Une erreur est survenue, réessayez plus tard.');
        }
      );

    // Réinitialiser les champs après l'envoi
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Contactez-moi
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg max-w-4xl text-center mb-6"
      >
        Si vous avez des questions ou souhaitez m'envoyer un message, remplissez ce formulaire et je vous répondrai dans les plus brefs délais !
      </motion.p>

      <form
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 bg-gray-700 rounded-lg text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 bg-gray-700 rounded-lg text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 bg-gray-700 rounded-lg text-white"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 rounded-lg text-white text-lg font-semibold hover:bg-blue-500 transition-all"
        >
          Envoyer
        </button>
      </form>

      {status && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-center text-lg"
        >
          {status}
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
