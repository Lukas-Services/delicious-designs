
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md animate-fade-up">
          <h1 className="text-6xl font-serif font-semibold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Entschuldigung, diese Seite existiert nicht.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
