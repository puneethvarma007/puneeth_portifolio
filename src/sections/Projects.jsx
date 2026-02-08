import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);

  const categories = ["Work Experience", "Personal Projects"];

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">Projects</h2>

      {categories.map((category) => {
        const filteredProjects = myProjects.filter(
          (project) => project.category === category
        );

        if (filteredProjects.length === 0) return null;

        return (
          <div key={category} className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6 underline decoration-navy decoration-4 underline-offset-8">
              {category}
            </h3>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-12 h-[1px] w-full" />
            <div className="flex flex-col gap-10">
              {filteredProjects.map((project) => (
                <Project
                  key={project.id}
                  {...project}
                  setPreview={setPreview}
                />
              ))}
            </div>
          </div>
        );
      })}

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
