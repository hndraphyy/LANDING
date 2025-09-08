const History = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-start">
          Our History
        </h2>

        <ul className="relative border-l-2 border-primary  space-y-12">
          {[
            // data history bisa dipisah di array supaya rapi
            {
              year: "2021",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              year: "2022",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              year: "2023",
              text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
              year: "2024",
              text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          ].map(({ year, text }) => (
            <li key={year} className="relative pl-10">
              {/* circle di timeline */}
              <span className="absolute left-[-13px] top-1 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-md"></span>
              <h3 className="text-xl font-semibold mb-2">{year}</h3>
              <p className="text-gray-700">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default History;
