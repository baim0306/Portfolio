export default function HeroRight({ portfolioData }) {
  return (
    <div
      style={{
        backgroundImage: `url(${portfolioData.image_profil})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="hero-right w-2/3 md:w-1/2 lg:w-1/4 aspect-square rounded-full border-b-6 border-r-2 border-l-2 border-green-400 shadow-lg shadow-green-700 backdrop-blur-lg translate-x-20 md:translate-x-40 lg:translate-x-0"
    ></div>
  );
}
