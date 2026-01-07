import DynamicImage from '../Components/DynamicImage'
import FamilyGenealogy from '../Components/FamilyGenealogy'
import { Link } from 'react-router-dom'
import React from 'react'

function Home() {
  return (  // ⬅️ RETURN AJOUTÉ
    <div className='home '>
        <header className='min-h-screen bg-gradient-to-br from-emerald-100 to-green-100 border-b-4 sm:border-b-8 border-emerald-900 py-4 sm:py-5'>
            {/* Funerailles en live */}
            
                <div className='fixed top-3 right-1 z-50 shadow-xl shadow-red-300  w-fit bg-white flex flex-col justify-center items-center gap-3 p-1 rounded-2xl animate-pulse-scale'>
                    <div>
                        <DynamicImage 
                            imageName="live.jpg" 
                            className="w-11 rounded-xl sm:rounded-2xl object-cover mx-auto shadow-lg "
                        />
                    </div>
                    <Link to="https://www.youtube.com/live/V_oMhZ3AKCA?si=QxFCKJ447gj3gbQk" target='blank' className='bg-red-100 rounded-full p-1'>
                        <div>
                            <DynamicImage 
                                imageName="youtube.jpg" 
                                className="w-11 rounded-full sm:rounded-full object-cover mx-auto shadow-lg "
                            />
                        </div>
                    </Link>
                    <Link to="https://www.facebook.com/share/1GYdfuLQCC/?mibextid=wwXIfr" target='blank' className='bg-blue-100 rounded-full p-1'>
                        <div>
                            <DynamicImage 
                                imageName="facebook.png" 
                                className="w-11 rounded-full sm:rounded-full object-cover mx-auto shadow-lg "
                            />
                        </div>
                    </Link>
                </div>
            

            <div className='container mx-auto px-4 sm:px-6 h-full flex items-center justify-center'>  
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center w-full max-w-6xl'>
                    
                    {/* Carte Photo - Version Responsive */}
                    <div className='flex justify-center order-2 lg:order-1'>
                        <div className='relative bg-emerald-50 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 lg:p-8 w-full max-w-xs sm:max-w-sm lg:max-w-md transform hover:scale-[1.02] transition-transform duration-300'>
                            {/* Photo avec cadre élégant */}
                            <div className='relative mb-4 sm:mb-6 lg:mb-8'>
                                <div className='absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-emerald-200 rounded-xl sm:rounded-2xl opacity-20'></div>
                                <DynamicImage 
                                    imageName="image2.jpg" 
                                    className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-xl sm:rounded-2xl object-cover mx-auto shadow-lg border-4 border-white"
                                />
                            </div>
                
                            {/* Contenu texte */}
                            <div className='text-center space-y-3 sm:space-y-4'>
                                <h3 className='text-lg sm:text-xl lg:text-2xl font-serif font-bold text-emerald-900'>
                                    Madame Fleurius Saint Fleur
                                </h3>
                                
                                <div className='h-px w-12 sm:w-16 bg-emerald-300 mx-auto'></div>
                                
                                <p className='text-gray-700 italic leading-relaxed text-sm sm:text-base lg:text-lg font-light'>
                                    "Ton amour demeure dans nos cœurs, 
                                    ta présence dans chaque souvenir.
                                    À jamais notre guide, notre lumière."
                                </p>
                                
                                <div className='pt-3 sm:pt-4 border-t border-emerald-100'>
                                    <span className='text-emerald-800 font-medium tracking-wide text-sm sm:text-base'>
                                        8 Avril 1930 - 25 Septembre 2025
                                    </span>
                                </div>
                            </div>
                            
                            {/* Élément décoratif */}
                            <div className='absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-emerald-600 rounded-full opacity-20'></div>
                            <div className='absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 rounded-full opacity-30'></div>
                        </div>
                    </div>    
                    
                    {/* Message Principal - Version Responsive */}
                    <div className='text-center lg:text-left order-1 lg:order-2'>
                        <div className='space-y-4 sm:space-y-6'>
                            <div className='inline-block p-2 sm:p-3 bg-emerald-900 rounded-lg mb-3 sm:mb-4'>
                                <span className='text-white text-xs sm:text-sm font-semibold tracking-widest'>
                                    IN MEMORIAM
                                </span>
                            </div>
                            
                            <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-emerald-300 leading-tight'>
                                <span className='block'>Repose en paix</span>
                                <span className='block text-emerald-300'>auprès du Seigneur</span>
                            </h1>
                            
                            <div className='h-1 w-16 sm:w-20 bg-emerald-300 lg:mx-0 mx-auto'></div>
                            
                            <p className='text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-full lg:max-w-none'>
                                Ton héritage d'amour<br />
                                <span className='text-emerald-300 font-semibold'>vit en chacun de nous</span>
                            </p>
                            
                            {/* Citation biblique discrète */}
                            <div className='pt-4 sm:pt-6 border-t border-emerald-200 mt-6 sm:mt-8'>
                                <p className='text-xs sm:text-sm text-emerald-100 italic'>
                                    "Je suis la résurrection et la vie" - Jean 11:25
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Indicateur de défilement */}
            <div className='absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
                <div className='w-5 h-8 sm:w-6 sm:h-10 border-2 border-emerald-100 rounded-full flex justify-center'>
                    <div className='w-1 h-2 sm:h-3 bg-emerald-100 rounded-full mt-1 sm:mt-2'></div>
                </div>
            </div>
        </header>

        <main className='flex flex-col justify-center m-3 sm:m-4 lg:m-5'>
            {/* -Genealogie de la famille- */}
            <div className='bg-green-100 flex flex-col justify-center items-center p-10 rounded-2xl lg:flex-row'>
                <div className=''>
                    <DynamicImage 
                        imageName="heritage.jpg" 
                        className="w-48 h-56 sm:w-56 sm:h-64 lg:w-64 lg:h-72 rounded-xl sm:rounded-2xl object-cover mx-auto shadow-lg border-4 border-white"
                    />
                </div>
                <div className='flex-1'>
                    <p className='p-5 text-center text-lg text-emerald-800'>De son labeur incessant sous le soleil implacable d’Haïti est né un héritage de 8 enfants, 55 petits-enfants et 59 arrière-petits-enfants, 
                        un clan puissant de 122 âmes qui ont vu la lumière de la vie grâce à sa dévotion inébranlable.
                    </p>
                </div>
            </div>

            <FamilyGenealogy />

            <div className='bg-blue-50 p-3 sm:p-4 lg:p-5 flex flex-col justify-center items-center text-justify rounded-lg'>
                <h2 className='text-xl sm:text-2xl font-bold text-blue-900 w-full text-center mb-4 sm:mb-5'>
                    <span className='my-1 h-1 w-1/2 relative right-0 left-1/2 bg-blue-700 block'></span>
                    <span className='px-2'>Biographie de Mme Fleurius Saint Fleur</span>
                    <span className='my-1 h-1 w-1/2 relative right-1/2 left-0 bg-blue-700 block'></span>
                </h2>
                <div className='biographie  flex flex-col lg:flex-row justify-center my-3 sm:my-4 lg:my-5 gap-4 sm:gap-6 w-full'>
                    <div className='flex-1 flex flex-col gap-3 sm:gap-4 text-blue-900 p-2 sm:p-3 lg:p-4'>
                        <p className='text-sm sm:text-base leading-relaxed'>
                            Mme Fleurius Saint Fleur, née Trisse Necifort, est née le 8 avril 1930 dans le modeste quartier de Guiton, niché dans la 5eme section communale de Saint Marc, Haïti. Quatrième d'une fratrie de huit enfants trois filles et cinq garçons née de Zami Necifort et Louisine Seance, ses premières années furent 
                            marquées par de profondes pertes : son père à 18 ans, sa mère à 40 ans.
                        </p>
                        <p className='text-sm sm:text-base leading-relaxed'>
                            L'éducation formelle resta un rêve lointain, interdit par les dures réalités de la vie rurale.
                            Dès sa jeunesse, elle s'est plongée dans le rythme de la terre cultivant sous un soleil brûlant et parcourant les sentiers poussiéreux comme commerçante saisonnière, ses paniers débordant d'ignames, de bananes plantains et d'autres produits, équilibrés précairement sur sa tête ou attachés à un âne fatigué.
                        </p>
                        <p className='text-sm sm:text-base leading-relaxed'>
                            En 1949, l'amour a fleuri au milieu des labeurs lorsqu'elle rencontra Fleurius Saint Fleur, son partenaire fidèle, lumière de sa vie. Leur union libre donna naissance à dix enfants, mais la douleur frappa à nouveau : seuls huit survécurent : Jean Pierre, Elfise, Renel, Dominique, 
                            Lecifort, Denise, Fresnel et Julius. Le décès prématuré de Fleurius la laissa veuve dans la fleur de l'âge, seule pour porter le poids d'une famille au bord du désespoir. Sans filet de sécurité, sans seconde chance en amour, elle choisit la voie de la résolution solitaire. <br />
                            Ses journées devinrent un témoignage de courage, une marche implacable gravée dans la terre même de l'Artibonite. Privée du luxe des roues ou du repos, elle parcourait les sentiers impitoyables de Guiton aux marchés lointains, des charges écrasantes sur son dos. Vers Pont-Sondé, 
                            à 15 kilomètres au nord-ouest à travers des pistes crevassées et des ruisseaux gonflés, le trajet exigeait plus de cinq heures ardues à pieds, à 36 kilomètres à l'est le long des rives sinueuses de l'Artibonite, c'était une odyssée de 12 heures, la chaleur de midi sapant ses forces alors qu'elle s'arrêtait juste pour boire dans une gourde, ses pensées tournées vers les bouches affamées à la maison.
                            Desarmes, à 20 kilomètres au sud-est, n'offrait aucun répit—près de sept heures de détermination obstinée, évitant nids-de-poule et regards indiscrets, le souffle laborieux de son âne faisant écho à ses prières silencieuses. 
                            Même Saint Marc, à seulement 10 kilomètres, devenait une épreuve de trois heures, répétée trois fois par semaine, sa silhouette devenant une ombre familière à l'horizon
                            Avec des mains calleuses et une détermination inébranlable, elle portait de lourds fardeaux, marchandait avec acharnement et priait avec ferveur, permettant à ses enfants de grimper  les échelons. Enseignants, ingénieurs, leaders, diplomates, cuisinière Haute Tailleuse, chaque succès étant une fleur née de son sacrifice.
                        </p>
                        <p className='text-sm sm:text-base leading-relaxed'>
                            En 1964, elle donna sa vie à Jésus à l'Église Baptiste Dieu Pourvoira de Poirier, rejoignant plus tard l'Église Baptiste Bon Samaritain à Saint Marc (1996). Devenue aveugle à 80 ans, sa foi resta inébranlable. Son héritage : 8 enfants, 43 petits-enfants, 59 arrière-petits-enfants110 âmes enracinées dans son amour. <br/>
                            Mme Fleurius était une titanide de résilience, son cœur un foyer de dévotion. Elle a livré le bon combat, ses pieds fatigués traçant des chemins d'espoir. Le 25 septembre 2025, elle s'est éteinte paisiblement à Saint Marc, 
                            Dieu donne, Dieu ôte que Son nom soit béni. Sa vie nous murmure : Persévérez. Aimez farouchement. Vos graines s'élèveront.
                        </p>                        
                    </div>
                    <div className='flex flex-row lg:flex-col justify-center gap-3 sm:gap-4 lg:justify-between mt-4 lg:mt-0'>
                        <DynamicImage 
                            imageName="image3.jpg" 
                            className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-auto rounded-xl sm:rounded-2xl object-cover mx-auto shadow-lg border-4 border-white"
                        />
                        <DynamicImage 
                            imageName="pigeon.jpg" 
                            className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-auto rounded-xl sm:rounded-2xl object-cover mx-auto shadow-lg border-4 border-white"
                        />
                    </div>
                </div>                
            </div>
        </main>
    </div>
  )
}

export default Home