import modelsIMG from '../assets/Models.png'

var heroBG = {
  backgroundImage: `url("${ modelsIMG.src }")`
};

export default function Hero() {
  return (
    <section className="bg-dark py-8 bg-image bg-image-right dark-overlay" style={ heroBG }>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in your potential</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400" style={{color:"white"}}>Welcome to my sanctuary of holistic beauty and rejuvenation, where tranquility meets transformation. Nestled in the heart of serene Cornish surroundings, we invite you on a journey of self-discovery and revitalization. Using a variety of skills I blend ancient healing techniques with modern practices to provide a holistic approach to beauty and wellness.</p>
        </div>
    </section>
  );
}