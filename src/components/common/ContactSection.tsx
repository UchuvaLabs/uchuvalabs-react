const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-10 py-16 bg-gradient-to-b from-primary to-black text-text"
    >
      <div className="container mx-auto text-center px-4 md:px-8">
        <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-8">
            Contact Us
          </h2>
          <div className="relative mb-6">
            <input
              type="text"
              className="w-full p-4 pt-6 rounded-lg border border-gray-300 focus:border-accent focus:ring-0 text-gray-700"
              aria-label="Your Name"
            />
            <label className="absolute top-3 left-4 text-gray-500 transform -translate-y-1/2 transition-transform duration-300">
              Your Name
            </label>
          </div>
          <div className="relative mb-6">
            <input
              type="email"
              className="w-full p-4 pt-6 rounded-lg border border-gray-300 focus:border-accent focus:ring-0 text-gray-700"
              aria-label="Your Email"
            />
            <label className="absolute top-3 left-4 text-gray-500 transform -translate-y-1/2 transition-transform duration-300">
              Your Email
            </label>
          </div>
          <div className="relative mb-6">
            <textarea
              className="w-full p-4 pt-6 rounded-lg border border-gray-300 focus:border-accent focus:ring-0 text-gray-700"
              rows={3}
              aria-label="Your Message"
            />
            <label className="absolute top-3 left-4 text-gray-500 transform -translate-y-1/2 transition-transform duration-300">
              Your Message
            </label>
          </div>
          <button className="bg-text text-white py-3 px-24 rounded-lg hover:bg-text hover:text-gray-300 transition-colors duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
