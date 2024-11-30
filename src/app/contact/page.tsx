import React from "react";

const Contact = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-4">
  <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
    <h1 className="text-3xl font-semibold text-center text-background mb-6">
      Contact Me
    </h1>
    <p className="text-center text-base text-background mb-8">
      I’d love to hear from you! You can reach out to me through the following methods:
    </p>
    <div className="space-y-4 text-center">
      <p className="text-lg text-gray-700">
        <strong>Email:</strong> <a href="mailto:jiangmy@usc.edu" className="text-background hover:underline">jiangmy@usc.edu</a>
      </p>
      <p className="text-lg text-gray-700">
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/matthewyjiang/" className="text-background hover:underline">linkedin.com/in/matthewyjiang</a>
      </p>
    </div>
  </div>
</div>

  );
};

export default Contact;
