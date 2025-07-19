export default function PeopleW(){
      const teamMembers = [
    {
      id: 1,
      name: "Djamshid Turdaliyev",
      position: "Boshqaruvchi sherik",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Eldorxon Fayzullaxo'jayev",
      position: "Sherik",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Feruza Bobokulova",
      position: "Sherik",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9b592a4?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Djuraev Ixtiyor",
      position: "Advokat",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-700 mb-4">
            Bizning jamoamiz
          </h1>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Image Container */}
              <div className="relative h-80 bg-gray-300 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-32"></div>
                
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-200 font-medium">
                    {member.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed">
              Bizning professional jamoamiz yuridik sohadagi ko'p yillik tajriba va 
              chuqur bilimlar bilan mijozlarimizga sifatli xizmat ko'rsatishga intiladi. 
              Har bir a'zo o'z sohasida mutaxassis bo'lib, mijozlarning huquqiy 
              muammolarini hal qilishda katta tajribaga ega.
            </p>
          </div>
        </div>
      </div>
    </div>
  );


}