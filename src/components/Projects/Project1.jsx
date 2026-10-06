import { Link } from "react-router-dom";

const projects = [
    {
        title: "Residential Villa Project",
        image: "/Images/Projects/project1.jfif",
        category: "Residential",
        type: "Completed"
    },
    {
        title: "Commercial Complex",
        image: "/Images/project-5.webp",
        category: "Commercial",
        type:"In Progress"
    },
    {
        title: "Apartment Construction",
        image: "/Images/Projects/project3.jfif",
        category: "Residential",
        type:"In Progress"
    },
    {
        title: "Office Building",
        image: "/Images/Projects/project4",
        category: "Commercial",
        type:"Completed"
    },
    {
        title: "Interior Renovation",
        image: "/Images/Projects/project5.jfif",
        category: "Renovation",
        type:"In Progress"
    },
    //   {
    //     title: "Industrial Structure",
    //     image: "/Images/Projects/project6.webp",
    //     category: "Industrial",
    //   },
];

const Project = () => {
    return (
        <>
            {/* Projects Section */}
            <section
                className="py-20 px-6 bg-gray-100"
                style={{ fontFamily: "'Dancing Script', cursive" }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">
                            Completed & Ongoing Projects
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Each project reflects our dedication to craftsmanship, safety,
                            and client satisfaction.
                        </p>
                    </div>

                    {/* Project Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                            >
                                {/* Image */}
                                <div className="relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-100 object-cover group-hover:scale-105 transition duration-300"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                        <Link
                                            to="/contact"
                                            className="bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-2 rounded"
                                        > Enquire Now
                                        </Link>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {project.category}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;
