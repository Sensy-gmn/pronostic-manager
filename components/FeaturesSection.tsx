"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureCard = ({ feature, index }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, rotateY: 90 }}
            animate={
                inView
                    ? { opacity: 1, y: 0, rotateY: 0 }
                    : { opacity: 0, y: 50, rotateY: 90 }
            }
            transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
            }}
            className="bg-gradient-to-br from-purple-900 to-indigo-800 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
        >
            <motion.div
                className="text-6xl mb-6 text-yellow-300"
                initial={{ scale: 0 }}
                animate={
                    inView
                        ? { scale: 1, rotate: [0, 15, -15, 0] }
                        : { scale: 0 }
                }
                transition={{
                    delay: index * 0.2 + 0.4,
                    type: "spring",
                    stiffness: 200,
                }}
            >
                {feature.icon}
            </motion.div>
            <motion.h3
                className="text-2xl font-bold mb-4 text-white"
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
            >
                {feature.title}
            </motion.h3>
            <motion.p
                className="text-gray-300 text-lg"
                initial={{ x: 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.8, duration: 0.5 }}
            >
                {feature.description}
            </motion.p>
        </motion.div>
    );
};

const FeaturesSection = ({ features }) => {
    return (
        <section className="py-20 bg-gradient-to-b from-black via-purple-900 to-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/path-to-your-background-image.jpg')] opacity-10 bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20"></div>
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl font-extrabold text-center mb-16 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                >
                    Nos fonctionnalités exceptionnelles
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            feature={feature}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
