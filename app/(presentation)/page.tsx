import {
    FeatureCard1,
    FeatureCard2,
    FeatureCard3,
} from "@/components/FeatureCard";
import { SparklesCore } from "@/components/ui/acernity/Sparkles";
import { TextGenerateEffect } from "@/components/ui/acernity/TextGenerateEffect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { LampEffect } from "@/components/ui/LampEffect";
import dynamic from "next/dynamic";

const PricingCard = dynamic(() => import("@/components/client/PricingCard"), {
    ssr: false,
});

const features = [
    {
        icon: "🚀",
        title: "Suivi en temps réel",
        description:
            "Visualisez vos paris en cours et leurs performances en temps réel.",
    },
    {
        icon: "📊",
        title: "Analyses avancées",
        description:
            "Obtenez des insights détaillés sur vos performances et tendances.",
    },
    {
        icon: "🔔",
        title: "Alertes personnalisées",
        description:
            "Recevez des notifications pour les opportunités de paris importantes.",
    },
    {
        title: "Gestion de bankroll",
        description:
            "Optimisez votre bankroll avec nos outils avancés de gestion de cashflow.",
        icon: "💰",
    },
    {
        title: "Statistiques personnalisées",
        description:
            "Accédez à des statistiques sur mesure pour affiner votre stratégie de paris.",
        icon: "📈",
    },
    {
        title: "Intégration multi-bookmakers",
        description:
            "Centralisez vos paris de différents bookmakers en un seul endroit.",
        icon: "🌐",
    },
];

export default function Presentation() {
    return (
        <div className="relative w-full">
            {/* Hero Section avec Lamp Effect */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gray-950">
                <LampEffect />
            </div>

            {/* Features Section */}
            <section
                id="features"
                className="py-20 relative overflow-hidden bg-slate-950"
            >
                <BackgroundBeams />
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">
                        <TextGenerateEffect words="Découvrez nos fonctionnalités uniques" />
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard1 feature={features[0]} index={0} />
                        <FeatureCard2 feature={features[1]} index={1} />
                        <FeatureCard3 feature={features[2]} index={2} />
                    </div>
                </div>
            </section>

            {/* Demo Images Section */}

            {/*  */}

            {/*  */}

            {/*  */}

            {/* Pricing Section */}
            <section id="pricing" className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 animate-gradient-x"></div>
                <div className="absolute inset-0">
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFF5E0"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">
                        <TextGenerateEffect words="Choisissez votre plan" />
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            {
                                name: "Débutant",
                                price: "9.99€",
                                features: [
                                    "Suivi en temps réel",
                                    "Analyse de base",
                                    "Support par email",
                                ],
                            },
                            {
                                name: "Pro",
                                price: "19.99€",
                                features: [
                                    "Toutes les fonctionnalités Débutant",
                                    "Analyse avancée",
                                    "Alertes personnalisées",
                                    "Support prioritaire",
                                ],
                            },
                            {
                                name: "Expert",
                                price: "39.99€",
                                features: [
                                    "Toutes les fonctionnalités Pro",
                                    "API access",
                                    "Conseils d'experts",
                                    "Support 24/7",
                                ],
                            },
                        ].map((plan, index) => (
                            <div key={index} className="flex justify-center ">
                                <PricingCard {...plan} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
