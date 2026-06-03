const ClientLogos = () => {
  const logos = [
    { name: "Google", color: "text-blue-600" },
    { name: "Amazon", color: "text-orange-600" },
    { name: "Microsoft", color: "text-blue-700" },
    { name: "Apple", color: "text-gray-800" },
    { name: "Meta", color: "text-blue-500" },
    { name: "Netflix", color: "text-red-600" },
    { name: "IBM", color: "text-blue-600" },
    { name: "Oracle", color: "text-red-500" },
    { name: "Salesforce", color: "text-blue-400" },
    { name: "Adobe", color: "text-red-700" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-muted-foreground font-medium mb-8">
          Trusted by Leading Organizations
        </h3>
        <div className="relative">
          {/* Scrolling Container */}
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 text-2xl font-bold grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 cursor-pointer"
              >
                <span className={logo.color}>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;