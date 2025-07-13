import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const EnquiryForm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: '',
  });

  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const clearErrors = () => setErrors({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.enquiry.trim()) tempErrors.enquiry = 'Enquiry message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const clearForm = () => {
    setFormData({ name: '', email: '', phone: '', enquiry: '' });
    setSubmitSuccess(false);
    clearErrors()
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validate()) return;

    emailjs
      .sendForm(
        'service_rnuqefj',     // your EmailJS service ID
        'template_v2kd1ie',    // your EmailJS template ID
        form.current,
        'T9TfGWWvlvE14TMaQ'   // your EmailJS public key
      )
      .then(() => {
        setSubmitSuccess(true);
        clearForm();
      })
      .catch((error) => {
        setErrors({ submit: 'Failed to send message. Please try again later.' });
        console.error(error);
      });
  };

  return (
    <section className="w-full bg-white py-16 px-4 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white p-10 md:px-12 lg:px-20 rounded-2xl shadow-2xl">
        <div className="flex flex-col mb-10">
          <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
            Quick Enquiry
          </h1>
          <p className="text-gray-600 mt-2 text-center lg:text-left">
            We'd love to hear from you! Fill out the form and we'll get back as soon as possible.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-6 md:grid-cols-2" noValidate>
          <div className="flex flex-col">
            <input
              name="name"
              type="text"
              placeholder="Full Name*"
              className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                errors.name ? 'border border-red-500' : ''
              }`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="flex flex-col">
            <input
              name="email"
              type="email"
              placeholder="Email*"
              className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                errors.email ? 'border border-red-500' : ''
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            value={formData.phone}
            onChange={handleChange}
          />

          <div className="flex flex-col md:col-span-2">
            <textarea
              name="enquiry"
              placeholder="Your Enquiry*"
              className={`w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                errors.enquiry ? 'border border-red-500' : ''
              }`}
              value={formData.enquiry}
              onChange={handleChange}
            />
            {errors.enquiry && <p className="text-red-500 text-sm mt-1">{errors.enquiry}</p>}
          </div>

          {errors.submit && (
            <p className="text-red-600 text-center md:col-span-2">{errors.submit}</p>
          )}

          {submitSuccess && (
            <p className="text-green-600 text-center md:col-span-2">
              Your enquiry has been sent successfully!
            </p>
          )}

          <div className="md:col-span-2">
            <button
              type="submit"
              className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 focus:outline-none focus:shadow-outline w-full"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
