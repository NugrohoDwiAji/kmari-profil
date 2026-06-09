import content from "../data/content.json";

export default function Footer() {
  const { tagline, hours, contact, copyright } = content.footer;

  return (
    <footer className="bg-purple-950 text-purple-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src="/logo.jpeg" alt="KMari" className="h-12 mb-4" />
            <p className="text-purple-300 text-sm">{tagline}</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-3">{hours.title}</h4>
            <ul className="space-y-2">
              {hours.items.map((item, i) => (
                <li key={i} className="text-sm leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-3">{contact.title}</h4>
            <ul className="space-y-2">
              {contact.items.map((item, i) => (
                <li key={i} className="text-sm leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-400 text-sm">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
