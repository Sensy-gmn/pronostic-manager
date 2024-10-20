"use client";

import { motion } from "framer-motion";
import React from "react";

interface FeatureProps {
    feature: {
        icon: string;
        title: string;
        description: string;
    };
    index: number;
}

const baseCardStyle =
    "p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl";

export const FeatureCard1: React.FC<FeatureProps> = ({ feature, index }) => {
    return (
        <motion.div
            className={`${baseCardStyle} bg-gradient-to-br from-purple-700 to-indigo-800`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="text-4xl mb-4 text-white">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white">
                {feature.title}
            </h3>
            <p className="text-purple-200">{feature.description}</p>
        </motion.div>
    );
};

export const FeatureCard2: React.FC<FeatureProps> = ({ feature, index }) => {
    return (
        <motion.div
            className={`${baseCardStyle} bg-gradient-to-br from-emerald-600 to-teal-700`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="text-4xl mb-4 text-emerald-200">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white">
                {feature.title}
            </h3>
            <p className="text-emerald-100">{feature.description}</p>
        </motion.div>
    );
};

export const FeatureCard3: React.FC<FeatureProps> = ({ feature, index }) => {
    return (
        <motion.div
            className={`${baseCardStyle} bg-gradient-to-br from-amber-600 to-orange-700`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="text-4xl mb-4 text-amber-200">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white">
                {feature.title}
            </h3>
            <p className="text-amber-100">{feature.description}</p>
        </motion.div>
    );
};
