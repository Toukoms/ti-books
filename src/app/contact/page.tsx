import Link from "next/link";

const ContactUs = () => {
  return (
    <section className="pt-2 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row">
          {/* Contact Form */}
          <div className="md:w-1/2 md:pr-8">
            <form
              action="https://formspree.io/f/your-form-id" // Replace with your form action URL
              method="POST"
              className="bg-white p-8 pt-16 pb-8 border rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 w-full">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full border-gray-300 shadow-sm pt-3 pb-1 focus-visible:border-b-2 focus-visible:outline-none focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 w-full">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full border-gray-300 shadow-sm pt-3 pb-1 focus-visible:border-b-2 focus-visible:outline-none focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    placeholder="you@domain.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 w-full">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 block w-full border-gray-300 shadow-sm pt-3 pb-1 focus-visible:border-b-2 focus-visible:outline-none focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    placeholder="The Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 w-full">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full border-gray-300 shadow-sm pt-3 pb-1 focus-visible:border-b-2 focus-visible:outline-none focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    placeholder="Write your text here"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              Email: <Link href="mailto:contact@ti-books.com" className="text-green-600">contact@ti-books.com</Link>
            </p>
            <p className="text-gray-600">
              Phone: <Link href="tel:0320066600" className="text-green-600">(+261) 32 00 666 00</Link>
            </p>
            {/* Optional: Embed Google Map */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.154517964823!2d47.54577177443648!3d-18.900580107078802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f0877a30bdb83f%3A0xf9ef78514623d2fd!2sPasserelles%20num%C3%A9riques%20Madagasikara!5e1!3m2!1sfr!2smg!4v1724740611586!5m2!1sfr!2smg"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
