import Image from "next/image";
import LoginForm from "../../../components/client/LoginForm";

export default function LoginPage() {
    return (
        <div className="h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4 overflow-hidden">
            <div className="w-full max-w-4xl flex bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="w-1/2 p-8 hidden md:block">
                    <Image
                        src="/login.png"
                        alt="Sports betting illustration"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                        Bienvenue sur Pronostic Manager
                    </h1>
                    <LoginForm />
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Pas encore de compte ?{" "}
                        <a
                            href="/register"
                            className="text-blue-600 hover:underline"
                        >
                            Inscrivez-vous ici
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
