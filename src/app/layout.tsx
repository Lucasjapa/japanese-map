import type {Metadata} from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "Mapa do Japão"
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
            {children}
            <footer className="bg-gray-900 text-white py-4 w-full absolute bottom-0">
                <div className="container mx-auto flex flex-col items-center text-center px-4">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Criado por Lucas Cavalcante da Silva</p>
                    <p className="text-sm mt-1">
                        Dados obtidos de <a href="https://www.eu-japan.eu/" target="_blank" rel="noopener noreferrer"
                                            className="underline">www.eu-japan.eu</a>
                    </p>
                </div>
            </footer>
        </body>
        </html>
    );
}
