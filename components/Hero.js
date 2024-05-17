import modelsIMG from '../assets/Models.png'

var heroBG = {
  backgroundImage: `url("${ modelsIMG.src }")`
};

export default function Hero({title, text}) {
  return (
    <section className="bg-dark py-8 bg-image bg-image-right dark-overlay" style={ heroBG }>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title}</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400" style={{color:"white"}}>{text}</p>
        </div>
    </section>
  );
}