"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundGradient } from "@/components/ui/acernity/BackgroundGradient";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
    name: string;
    price: string;
    features: string[];
}

export default function PricingCard({
    name,
    price,
    features,
}: PricingCardProps) {
    return (
        <CardContainer className="inter-var max-w-sm">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {name}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Tarif mensuel
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <BackgroundGradient className="rounded-xl">
                        <div className="p-4">
                            <h3 className="text-3xl font-bold text-white">
                                {price}
                            </h3>
                            <p className="text-white/80 mt-2">par mois</p>
                        </div>
                    </BackgroundGradient>
                </CardItem>
                <div className="mt-8">
                    {features.map((feature, i) => (
                        <CardItem
                            key={i}
                            translateZ="40"
                            className="text-neutral-500 dark:text-white text-sm mb-2"
                        >
                            ✓ {feature}
                        </CardItem>
                    ))}
                </div>
                <CardItem translateZ="80" className="w-full mt-8">
                    <Button className="w-full bg-black text-white dark:bg-white dark:text-black">
                        Choisir ce plan
                    </Button>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}
