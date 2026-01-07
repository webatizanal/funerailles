import { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom';
import DynamicImage from './DynamicImage';

function FamilyGenealogy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const children = [
    {
      id: 1,
      name: "Jean Pierre",
      image: "jean.jpg",
      chemin: "jean",
      message: "Maman, tu as parcouru des kilomètres sous un soleil brûlant, des paniers lourds sur la tête, pour nous offrir un avenir. Ton sacrifice ces interminables trajets vers Pont-Sondé, Verrettes, Desarmes a tracé notre chemin. Tu n'as jamais fléchi, même après le départ trop tôt de Papa. Ta foi en Dieu et ton amour pour nous ont éclairé la voie. Maintenant que tu reposes auprès de ton Sauveur, je porte tes leçons de persévérance dans mon cœur, éternellement reconnaissant pour la vie que tu nous as donnée par ton labeur."
    },
    {
      id: 2,
      name: "Elfise",
      image: "elfise.jpg",
      chemin: "elfise",
      message: "Tu étais notre roc, Maman, un phare de courage. Seule, tu as porté le poids de huit enfants, tes pieds usés par les voyages vers les marchés de Saint Marc, tes mains marquées par les champs. Tu nous as appris l'honnêteté, le partage et le respect en les vivant. Ta force m'a poussée à apprendre, à m'élever. Ta lumière brille encore en moi, bien que mes larmes coulent en sachant que tu es partie. Je t'aime, Maman, pour chaque sacrifice, chaque prière silencieuse qui nous a soutenus."
    },
    {
      id: 3,
      name: "Renel",
      image: "renel.jpg",
      chemin: "renel",
      message: "Maman, tu étais plus qu'une mère tu étais notre ancre, notre mémoire d'amour. Tes gestes discrets, tes 12 heures de marche vers Verrettes pour nous, parlaient d'une dévotion trop profonde pour les mots. Veuve, tu n'as jamais vacillé, nous choisissant plutôt que la facilité, veillant à ce que nous étudiions, grandissions, prospérions. Tes silences tendres nous enveloppaient de chaleur. Maintenant auprès du Seigneur, tu laisses un vide, mais ton amour demeure éternel et inébranlable. Merci pour tout."
    },
    {
      id: 4,
      name: "Dominique",
      image: "dominique.jpg",
      chemin: "dominique",
      message: "Ta vie, Maman, n'était pas seulement longue elle était profonde. Chaque pas que tu faisais, 7 heures vers Desarmes, 5 vers Pont-Sondé, était un vœu pour nous. Seule après la mort de Papa, tu as versé ton âme dans notre avenir, troquant des produits contre des livres, l'épuisement contre nos rêves. Tes mots fiers, tes conseils doux, vivent dans mon cœur. Tu m'as montré que l'amour est sacrifice, et je t'honorerai en vivant comme toi sans égoïsme, avec ferveur. Repose-toi maintenant, ma Maman adorée."
    },
    {
      id: 5,
      name: "Lecifort",
      image: "lecifort.jpg",
      chemin: "lecifort",
      message: "Maman, tu as affronté la cécité avec grâce, tes dernières années baignées de paix, entourée de notre amour. Mais je te revois toujours marchant vers les marchés, 10 kilomètres jusqu'à Saint Marc, ta détermination nous portant à travers la perte. Tu nous as élevés seule, ta foi comme bouclier, tes sacrifices comme fondation. Mon éducation, ma vie, sont ton triomphe. Comme le dit le Psaume 90, tu t'es envolée vers l'éternité, et je ressens encore ton amour, qui me guide. Dors doucement, Maman."
    },
    {
      id: 6,
      name: "Denise",
      image: "denise.jpg",
      chemin: "denise",
      message: "À travers mes larmes, je rends grâce à Dieu pour tes 95 ans, Maman. Tu as marché 36 kilomètres jusqu'à Verrettes, panier lourd, cœur plus lourd encore, sans jamais plier. Tu nous as élevés seule, ta loyauté nous apprenant à nous tenir droits. Ma vie, tout ce que je construis est bâtie sur tes sacrifices. Où que j'aille, chaque leçon partagée, est à toi. Ton amour était notre force, et je le porterai toujours. Repose dans les bras de Dieu, ma précieuse mère."
    },
    {
      id: 7,
      name: "Fresnel",
      image: "fresnel.jpg",
      chemin: "fresnel",
      message: "Maman, tes 95 ans furent une force tranquille simple, fidèle, farouche. Tu as traversé poussière et pluie, 20 kilomètres jusqu'à Desarmes, pour nous nourrir, nous éduquer. Veuve, tu as choisi nous plutôt que le confort, ton amour une flamme constante. Ta patience, ton courage silencieux, m'ont façonné. Ton absence fait mal, mais ton héritage notre éducation, nos vies est indestructible. Envole-toi doucement vers le ciel, Maman. Je t'aime au-delà des mots."
    },
    {
      id: 8,
      name: "Julius",
      image: "julius.jpg",
      chemin: "julius",
      message: "Seigneur, accueille Maman, que Tu as connue avant sa naissance, dans Ta paix éternelle. Elle a marché des kilomètres sans fin, 15 kilomètres jusqu'à Pont-Sondé, pour nous, ses huit enfants, après le départ de Papa. Ses sacrifices nous ont donné savoir, espoir, foi. Son amour était total, son silence une étreinte chaleureuse. Maintenant, dans Ton amour intemporel, elle nous attend. Maman, tes racines nous tiennent encore. Merci pour une vie qui nous a appris à nous envoler."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play optionnel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className='bg-gradient-to-br from-emerald-50 to-indigo-100 py-8 sm:py-12 px-4 sm:px-6 my-6 sm:my-8 rounded-xl sm:rounded-2xl shadow-lg'>
      {/* Titre - Responsive */}
      <div className='text-center mb-8 sm:mb-12'>
        <div className='inline-block relative'>
          {/* Lignes décoratives - cachées sur mobile */}
          <span className='hidden sm:block w-12 lg:w-20 h-1 bg-emerald-600 absolute -left-16 lg:-left-24 top-1/2 transform -translate-y-1/2'></span>
          
          <h2 className='text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-emerald-900 px-4 sm:px-8'>
            Les progénitures de la défunte
          </h2>
          
          <span className='hidden sm:block w-12 lg:w-20 h-1 bg-emerald-600 absolute -right-16 lg:-right-24 top-1/2 transform -translate-y-1/2'></span>
        </div>
        <p className='text-emerald-700 mt-3 sm:mt-4 text-sm sm:text-lg'>
          {children.length} enfants qui perpétuent son héritage d'amour
        </p>
      </div>

      {/* Carrousel Principal - Responsive */}
      <div className='max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto'>
        <div className='relative bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8'>
          
          {/* Photo de l'enfant actuel - Responsive */}
            <div className='flex justify-center mb-4 sm:mb-6 lg:mb-8'>
              <div className='relative'>
                <Link to={children[currentIndex].chemin} > 
                  <DynamicImage 
                    imageName={children[currentIndex].image} 
                    className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-2xl object-cover border-2 border-emerald-200 shadow-md sm:shadow-lg"
                  />
                  <div className='absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-10 h-10 sm:w-12 sm:h-10 bg-emerald-600 rounded-full flex items-center justify-center'>
                    <span className='text-white text-xs sm:text-sm font-bold text-center'>
                      {currentIndex + 1} <br />
                      Voir
                    </span>
                  </div>
                </Link>   
              </div>
            </div>
          

          {/* Nom - Responsive */}
          <h3 className='text-lg sm:text-xl lg:text-2xl font-serif font-bold text-center text-emerald-900 mb-4 sm:mb-6'>
            {children[currentIndex].name}
          </h3>

          {/* Message - Responsive */}
          <div className='bg-emerald-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6 lg:mb-8 max-h-32 sm:max-h-40 lg:max-h-48 overflow-y-auto'>
            <p className='text-gray-700 leading-relaxed text-justify italic text-sm sm:text-base'>
              "{children[currentIndex].message}"
            </p>
          </div>

          {/* Contrôles de navigation - Responsive */}
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
            
            {/* Bouton Précédent */}
            <button 
              onClick={prevSlide}
              className='flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors w-full sm:w-auto justify-center text-sm sm:text-base'
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Précédent
            </button>

            {/* Indicateurs de points - Centré sur mobile */}
            <div className='flex gap-1 sm:gap-2 order-first sm:order-none'>
              {children.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-emerald-600 scale-125' : 'bg-emerald-300'
                  }`}
                />
              ))}
            </div>

            {/* Bouton Suivant */}
            <button 
              onClick={nextSlide}
              className='flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors w-full sm:w-auto justify-center text-sm sm:text-base'
            >
              Suivant
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Miniatures des enfants - Responsive */}
        <div className='flex justify-start sm:justify-center gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-6 lg:mt-8 overflow-x-auto py-3 sm:py-4 px-2'>
          {children.map((child, index) => (
            <button
              key={child.id}
              onClick={() => goToSlide(index)}
              className={`flex flex-col items-center p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all min-w-16 sm:min-w-20 flex-shrink-0 ${
                index === currentIndex 
                  ? 'bg-emerald-600 text-white shadow-md sm:shadow-lg transform scale-105 sm:scale-110' 
                  : 'bg-white text-emerald-900 hover:bg-emerald-100'
              }`}
            >
              <DynamicImage 
                imageName={child.image} 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover border-2 border-emerald-300"
              />
              <span className={`text-xs mt-1 sm:mt-2 font-medium ${
                index === currentIndex ? 'text-white' : 'text-emerald-700'
              }`}>
                {child.name.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Compteur - Responsive */}
      <div className='text-center mt-4 sm:mt-6 lg:mt-8 text-emerald-700 text-sm sm:text-base'>
        <span className='font-semibold'>{currentIndex + 1}</span>
        <span className='mx-1 sm:mx-2'>/</span>
        <span>{children.length}</span>
      </div>

      {/* Instructions tactiles pour mobile */}
      <div className='text-center mt-4 sm:hidden'>
        <p className='text-emerald-600 text-xs italic'>
          👆 Glissez pour naviguer entre les enfants
        </p>
      </div>
    </div>
  );
}

export default FamilyGenealogy;