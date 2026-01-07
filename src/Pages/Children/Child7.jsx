import DynamicImage from "../../Components/DynamicImage";
import { Link } from "react-router-dom";



function Child7() {
    return(
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 py-8 px-4 sm:px-6">
            <Link to="/" className="fixed top-1 left-1 z-20">
                <button
                    className="bg-emerald-700 text-white  rounded-lg px-3 py-1 font-bold"
                    >
                    Retour
                </button>
            </Link>
            
            
            {/* En-tête de présentation */}
            <div className="max-w-6xl mx-auto text-center mb-12">
                <div className="inline-block relative">
                    <span className='hidden sm:block w-16 lg:w-24 h-1 bg-emerald-600 absolute -left-20 lg:-left-28 top-1/2 transform -translate-y-1/2'></span>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-emerald-900 px-4 sm:px-8">
                        Le Septième de la Famille
                    </h1>
                    <span className='hidden sm:block w-16 lg:w-24 h-1 bg-emerald-600 absolute -right-20 lg:-right-28 top-1/2 transform -translate-y-1/2'></span>
                </div>
                <p className="text-emerald-700 mt-4 text-lg sm:text-xl">
                    Fresnel Saint Fleur
                </p>
            </div>

            {/* Contenu principal */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Photo de présentation */}
                    <div className="lg:w-2/5 p-6 sm:p-8 flex justify-center items-start">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-emerald-200 rounded-2xl opacity-20"></div>
                            <DynamicImage 
                                imageName="fresnel.jpg" 
                                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-lg border-4 border-white"
                            />
                            <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white text-sm font-bold">1</span>
                            </div>
                        </div>
                    </div>

                    {/* Discours et autobiographie */}
                    <div className="lg:w-3/5 p-6 sm:p-8 lg:pl-4">
                        <div className="h-full flex flex-col justify-center">
                            {/* Citation d'introduction */}
                            <blockquote className="mb-6">
                                <p className="text-lg sm:text-xl text-emerald-800 italic font-light leading-relaxed">
                                    "Maman, ton sacrifice a tracé notre chemin. Ton amour continue de nous guider."
                                </p>
                            </blockquote>

                            {/* Séparateur */}
                            <div className="w-16 h-1 bg-emerald-300 mb-6"></div>

                            {/* Autobiographie */}
                            <div className="space-y-4">
                                <h2 className="text-xl sm:text-2xl font-serif font-semibold text-emerald-900">
                                    Mon Témoignage
                                </h2>
                                
                                <div className="bg-emerald-50 rounded-xl p-4 sm:p-6 max-h-96 overflow-y-auto">
                                    <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                                        Je m’appelle Fresnel, fils de Maman, né de son courage silencieux. 
                                        Ses marches de 7 heures vers Desarmes, veuve et résolue, ont donné un avenir à mes 6 enfants. 
                                        <br /><br />
                                        Elle nous a choisis plutôt que la facilité, ses mains marquées par les champs, son cœur plein d’espoir. 
                                        La vie de Maman était un hymne discret d’amour, et je raconte à mes enfants l’histoire de la femme qui a traversé les tempêtes pour nous élever. 
                                        Ses racines courent profondément en nous, et son sacrifice est notre fierté.
                                    </p>
                                </div>
                            </div>

                            {/* Informations personnelles */}
                            <div className="mt-6 pt-6 border-t border-emerald-100">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-emerald-700">
                                    <div>
                                        <span className="font-semibold">Rôle dans la famille :</span>
                                        <p>Le Septième</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Profession :</span>
                                        <p>Ingénieur, Avocat, Gestionnaire, Pasteur.</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Lieu de résidence :</span>
                                        <p>Orlando, Florida</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Enfants :</span>
                                        <p>6 enfants</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Child7;