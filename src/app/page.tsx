import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center">
        {/* Hero Section */}
        <header className="bg-primary text-white w-full py-12 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <div className="keyboard">
                <span className="key">M</span>
                <span className="key">A</span>
                <span className="key">T</span>
                <span className="key">T</span>
                <span className="key">H</span>
                <span className="key">E</span>
                <span className="key">W</span>
                <span className="key">&nbsp;</span>
                <span className="key">J</span>
                <span className="key">I</span>
                <span className="key">A</span>
                <span className="key">N</span>
                <span className="key">G</span>
            </div>
</h1>
          <p className="text-xl select-none">Design. Innovate. Engineer.</p>
        </header>
  
        <div className="flex flex-wrap gap-6">
        {/* Content Section */}
        <main className="max-w-7xl mx-auto p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for Assets */}
          <a href="https://github.com/usc-robosub">
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 h-full">
            <div className="h-40 w-40 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
              
            <Image
                src="/assets/auv-logo-transparent.png"
                alt="Placeholder"
                layout="responsive"
                width={100} // Required for Next.js but ignored when layout="responsive"
                height={100} // Aspect ratio is maintained based on these values
                className="rounded-md"
            />
            </div>
            <h2 className="text-xl text-gray-600 font-bold mb-2">Robosub SC</h2>
            <p className="text-gray-600 text-center">
            The USC Autonomous Underwater Vehicle (AUV) Design Team is a student-led group focused on designing and programming advanced autonomous underwater robots for the annual RoboSub Competition.
            </p>
          </div>

          </a>
          <a href="https://sites.google.com/usc.edu/roboland/home">
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 h-full">
            <div className="h-40 w-40 bg-white rounded-full mb-4 flex items-center justify-center">
            <Image
                src="/assets/viterbi-informal.jpg"
                alt="Placeholder"
                layout="responsive"
                width={100} // Required for Next.js but ignored when layout="responsive"
                height={100} // Aspect ratio is maintained based on these values
                className="rounded-md"
            />
            </div>
            <h2 className="text-xl text-gray-600 font-bold mb-2">RoboLAND</h2>
            <p className="text-gray-600 text-center">
            Robot Locomotion And Navigation Dynamics:
            Generating desired movements from undesired environments.
            </p>
          </div>
          </a>
  
            <a href="https://github.com/matthewyjiang">
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 h-full">
            <div className="h-40 w-40 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
            <Image
                src="/assets/kermit.png"
                alt="Placeholder"
                layout="responsive"
                width={100} // Required for Next.js but ignored when layout="responsive"
                height={100} // Aspect ratio is maintained based on these values
                className="rounded-full"
            />
            </div>
            <h2 className="text-xl text-gray-600 font-bold mb-2">GitHub</h2>
            <p className="text-gray-600 text-center">
            Explore innovative projects in robotics, AI, and software development on my GitHub profile.
            </p>
          </div>
          </a>
        </main>
        </div>
      </div>



    )
  }
  