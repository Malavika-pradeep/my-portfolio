import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Computational Model for Brain-Heart Analysis",
    description: "",
    tags: ["Pytorch", "Neurokit", "MNE"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Wildlife Poaching Prevention",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    tags: ["Computer Vision", "Pytorch"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "RAG-based Nutritional Chatbot",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    tags: ["Supabase", "Lovable", "Python"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-20">
          Recent <span className="text-primary">Projects</span>
        </h2>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/60 border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-primary/30 group text-left"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.id}-${tag}`}
                    className="px-3 py-1 text-xs font-medium border rounded-full bg-gray-100 text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-primary">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                {project.description || "Project description coming soon."}
              </p>

              <div className="flex space-x-4 mt-auto">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            className="inline-flex items-center gap-2 text-primary font-medium border border-primary/30 rounded-full px-5 py-2 hover:bg-primary hover:text-white transition-all duration-300"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Malavika-pradeep"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
