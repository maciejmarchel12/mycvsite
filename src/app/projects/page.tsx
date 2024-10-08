'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

// Define the structure of the project object using an interface
interface Project {
    title: string;
    desc: string;
    images: string[];
    link: string;
}

export default function Projects() {
    const projects: Project[] = [
        { 
            title: "ReactStock",
            desc: "This is a project I worked on during my final year in the software systems development course (Bsc Honors) my goal of the project was to create a inventory stock management web application for small businesses, you can find out more by visiting the project page.", 
            images: [
              "/images/reactStockThumbnail1.png",
              "/images/reactStockThumbnail2.png", 
              "/images/reactStockThumbnail3.png"
            ], 
            link: "projects/first" 
        },
        { 
            title: "Project 2",
            desc: "",  
            images: ["/path-to-image-2.jpg", "/path-to-image-2b.jpg", "/path-to-image-2c.jpg"], 
            link: "projects/second" 
        },
        { 
            title: "Project 3",
            desc: "", 
            images: ["/path-to-image-3.jpg", "/path-to-image-3b.jpg", "/path-to-image-3c.jpg"], 
            link: "projects/third" 
        },
        { 
            title: "Project 4",
            desc: "", 
            images: ["/path-to-image-4.jpg", "/path-to-image-4b.jpg", "/path-to-image-4c.jpg"], 
            link: "projects/fourth" 
        },
    ];

    return (
        <div className="bg-base-200 min-h-screen p-10">
            <h1 className="text-blue-500 text-4xl font-bold mb-6">Welcome to the Project Page</h1>
            <h2 className="text-2xl font-semibold mb-4">About me:</h2>
            <p className="mb-10">Lorem Ipsum</p>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

// Add type annotation for the 'project' prop using the Project interface
function ProjectCard({ project }: { project: Project }) {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % project.images.length);
        }, 5000); // Change every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [project.images.length]);

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img 
                    src={project.images[currentImage]} 
                    alt={project.title} 
                    className="h-48 w-full object-cover" 
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.desc}</p>
                <div className="card-actions justify-end">
                    <Link href={project.link}>
                        <button className="btn btn-primary">View Project</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}