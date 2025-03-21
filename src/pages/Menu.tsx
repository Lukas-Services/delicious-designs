
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Coffee, UtensilsCrossed, Cake } from 'lucide-react';

const MenuSection = ({ title, description, items }) => (
  <div className="mb-16 animate-fade-up">
    <h2 className="text-2xl md:text-3xl font-serif mb-2">{title}</h2>
    <p className="text-muted-foreground mb-8 max-w-2xl">{description}</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full"
        >
          {item.image && (
            <div className="h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
          )}
          <div className="p-5 flex-grow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-serif text-lg font-medium">{item.name}</h3>
              <span className="font-medium text-primary">{item.price}</span>
            </div>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const kuchenItems = [
    {
      name: "Klassischer Apfelkuchen",
      description: "Traditionell gebackener Apfelkuchen mit Zimtnote und Mandelsplittern",
      price: "3,90 €",
      image: "https://placehold.co/600x400/e9e9e9/7c7c7c?text=Apfelkuchen"
    },
    {
      name: "Schwarzwälder Kirschtorte",
      description: "Schokoladen-Biskuit mit Sahne, Kirschen und Schokoladenraspeln",
      price: "4,20 €",
      image: "https://placehold.co/600x400/e9e9e9/7c7c7c?text=Kirschtorte"
    },
    {
      name: "Käsekuchen",
      description: "Cremiger Käsekuchen nach Hausrezept auf knusprigem Mürbeteigboden",
      price: "3,80 €",
      image: "https://placehold.co/600x400/e9e9e9/7c7c7c?text=Käsekuchen"
    },
    {
      name: "Erdbeertorte (saisonal)",
      description: "Leichte Biskuittorte mit frischen Erdbeeren und Vanillesahne",
      price: "4,50 €",
      image: "https://placehold.co/600x400/e9e9e9/7c7c7c?text=Erdbeertorte"
    }
  ];

  const getraenkeItems = [
    {
      name: "Café Crema",
      description: "Aromatischer Kaffee aus unserer hauseigenen Röstung",
      price: "2,80 €"
    },
    {
      name: "Cappuccino",
      description: "Espresso mit aufgeschäumter Milch und einer Prise Kakao",
      price: "3,20 €"
    },
    {
      name: "Latte Macchiato",
      description: "Schichtgetränk aus Espresso und heißer Milch",
      price: "3,50 €"
    },
    {
      name: "Heiße Schokolade",
      description: "Cremige Schokolade mit Sahnehaube",
      price: "3,30 €"
    }
  ];

  const snackItems = [
    {
      name: "Flammkuchen Klassik",
      description: "Mit Schmand, Zwiebeln und Speck",
      price: "8,90 €",
      image: "https://placehold.co/600x400/e9e9e9/7c7c7c?text=Flammkuchen"
    },
    {
      name: "Quiche Lorraine",
      description: "Klassische Quiche mit Speck und Zwiebeln",
      price: "7,50 €",
      image: "https://placehold.co/600x400/e9e9e9/7c7c7c?text=Quiche"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-accent text-accent-foreground rounded-full mb-4">
              Unsere Spezialitäten
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-4">
              Das Kuchenhaus Menü
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Entdecken Sie unsere Auswahl an hausgemachten Kuchen, Torten und herzhaften Spezialitäten, 
              begleitet von feinsten Kaffeekreationen.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-up">
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => document.getElementById('kuchen').scrollIntoView({ behavior: 'smooth' })}
            >
              <Cake className="mr-2 h-4 w-4" />
              Kuchen & Torten
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => document.getElementById('getraenke').scrollIntoView({ behavior: 'smooth' })}
            >
              <Coffee className="mr-2 h-4 w-4" />
              Getränke
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => document.getElementById('snacks').scrollIntoView({ behavior: 'smooth' })}
            >
              <UtensilsCrossed className="mr-2 h-4 w-4" />
              Herzhafte Snacks
            </Button>
          </div>

          <div id="kuchen">
            <MenuSection 
              title="Kuchen & Torten" 
              description="Alle unsere Kuchen und Torten werden täglich frisch in unserer hauseigenen Konditorei zubereitet." 
              items={kuchenItems} 
            />
          </div>

          <div id="getraenke">
            <MenuSection 
              title="Getränke" 
              description="Genießen Sie unsere Kaffee-Spezialitäten, zubereitet aus sorgfältig ausgewählten Bohnen." 
              items={getraenkeItems} 
            />
          </div>

          <div id="snacks">
            <MenuSection 
              title="Herzhafte Snacks" 
              description="Für den kleinen Hunger zwischendurch oder als leichtes Mittagessen." 
              items={snackItems} 
            />
          </div>

          <div className="text-center mt-16 animate-fade-up">
            <p className="text-muted-foreground mb-6">
              Fragen zu Allergenen oder besonderen Wünschen? Sprechen Sie uns gerne an!
            </p>
            <Button onClick={() => window.location.href = '/contact'}>
              Kontaktieren Sie uns
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
