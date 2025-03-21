
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🍰',
      title: 'Torten & Kuchen',
      description: 'Täglich frisch gebackene Torten und Kuchen aus unserer hauseigenen Konditorei.',
    },
    {
      icon: '☕',
      title: 'Kaffee-Spezialitäten',
      description: 'Perfekt zubereitete Kaffeespezialitäten mit Bohnen von lokalen Röstern.',
    },
    {
      icon: '🥐',
      title: 'Frühstück',
      description: 'Genießen Sie ein ausgedehntes Frühstück in entspannter Atmosphäre.',
    },
    {
      icon: '🔥',
      title: 'Flammkuchen',
      description: 'Knusprige Flammkuchen mit verschiedenen Belägen nach traditionellem Rezept.',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-accent text-accent-foreground rounded-full mb-4">
            Unser Angebot
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Warum Sie uns lieben werden
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Im Kuchen-Haus Frechen verbinden wir traditionelles Handwerk mit modernen Kreationen, um Ihnen ein unvergessliches kulinarisches Erlebnis zu bieten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 150 + 300}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-serif text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
