import Link from "next/link";

export default function Projects() {
    const projects = [
        { title: "Project 1", image: "/path-to-image-1.jpg", link: "projects/first"},
        { title: "Project 2", image: "/path-to-image-2.jpg", link: "projects/second"},
        { title: "Project 3", image: "/path-to-image-3.jpg", link: "projects/third"},
        { title: "Project 4", image: "/path-to-image-4.jpg", link: "projects/fourth"},
    ];


    return (
        <div className="bg-base-200 min-h-screen p-10">
          <h1 className="text-blue-500 text-4xl font-bold mb-6">Welcome to the Project Page</h1>
          <h2 className="text-2xl font-semibold mb-4">About me:</h2>
          <p className="mb-10">Lorem Ipsum</p>
    
          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <div className="card-actions justify-end">
                    <Link href={project.link}>
                      <button className="btn btn-primary">View Project</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }