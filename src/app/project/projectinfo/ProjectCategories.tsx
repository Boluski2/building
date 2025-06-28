
interface ProjectCategory {
  name: string;
  count: number;
  color: string;
}

interface ProjectCategoriesProps {
  categories: ProjectCategory[];
}

const ProjectCategories = ({ categories }: ProjectCategoriesProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Project Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse portfolio spans multiple engineering disciplines, 
            each contributing to the development of robust infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, ) => (
            <div
              key={category.name}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
            >
              <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-lg">{category.count}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories;
