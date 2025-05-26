import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const publications = [
  {
    title: "Safe Reactive Navigation for Granular Terrain Exploration",
    year: "2025",
    authors: ["Matthew Y. Jiang"],
    link: "/undergraduate_thesis.pdf",
    published: true,
  },
  {
    title: "Upcoming Paper for ICRA 2026",
    year: "2026",
    authors: ["Matthew Y. Jiang", "Shipeng Liu", "Feifei Qian"],
    link: "",
    published: false,
  },
];

const Publications = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-relaxed">
            Publications
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Academic contributions and ongoing research projects.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {publications.map((publication, index) => (
              <article
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col"
              >
                <div className="p-8 pb-4 flex-grow flex flex-col text-left">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    {publication.title}
                  </h2>
                  <div className="text-gray-300 space-y-1">
                    <p>
                      <span className="font-semibold">
                        {publication.published ? "Published:" : "Expected:"}
                      </span>{" "}
                      {publication.year}
                    </p>
                    <p>
                      <span className="font-semibold">Authors:</span>{" "}
                      {publication.authors.join(", ")}
                    </p>
                  </div>
                </div>
                {publication.link && (
                  <div className="pt-4 pb-8 flex justify-center">
                    <a
                      href={publication.link}
                      className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
                    >
                      View Publication
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;
