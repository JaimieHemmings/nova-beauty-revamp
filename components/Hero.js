import modelsIMG from '../assets/Models.png'

var heroBG = {
  backgroundImage: `url("${ modelsIMG.src }")`
};

export default function Hero({title, text}) {
  return (
    <section className="bg-dark py-8 bg-image bg-image-right dark-overlay" style={ heroBG }>
        <div className="py-8 px-4 mx-auto container text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">{title}</h1>
          <p className="mb-8 text-lg font-normal lg:text-xl text-white">{text}</p>
        </div>
    </section>
  );
}