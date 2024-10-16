import { SparklesCore } from "@/components/ui/acernity/Sparkles";
import { StickyScrollReveal } from "@/components/ui/acernity/StickyScrollReveal";
import { TextGenerateEffect } from "@/components/ui/acernity/TextGenerateEffect";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Link from "next/link";

const PricingCard = dynamic(() => import("@/components/client/PricingCard"), {
    ssr: false,
});

const features = [
    {
        title: "Suivi en temps réel",
        description:
            "Visualisez vos paris en cours et leurs performances en temps réel.",
        icon: "🔄",
    },
    {
        title: "Analyse de portefeuille",
        description:
            "Obtenez des insights détaillés sur la performance de votre portefeuille de paris.",
        icon: "📊",
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
        title: "Alertes intelligentes",
        description:
            "Recevez des notifications pour les meilleures opportunités de paris selon vos critères.",
        icon: "🔔",
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
            {/* Hero Section */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
                <h1 className="text-6xl font-bold mb-6 text-white">
                    Optimisez vos pronostics sportifs comme un pro.
                </h1>
                <div className="w-[40rem] h-40 relative">
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <TextGenerateEffect
                            words="Une application qui vous propose une organisation et une visibilité sur vos pronostics sportifs."
                            className="text-xl mb-8 max-w-2xl"
                        />
                    </div>
                </div>
                <div className="flex space-x-4 mt-8">
                    <Button
                        asChild
                        size="lg"
                        className="bg-white text-black hover:bg-gray-200"
                    >
                        <Link href="/register">Créer un compte</Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="text-white border-white hover:bg-white hover:text-black"
                    >
                        <Link href="/contact">Contacter l&apos;équipe</Link>
                    </Button>
                </div>
            </div>

            {/* Features Section */}
            <section id="features" className="py-20 bg-black">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Nos fonctionnalités
                    </h2>
                    <StickyScrollReveal content={features} />
                </div>
            </section>

            {/* Demo Images Section */}

            {/*  */}

            {/*  */}

            {/*  */}

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
