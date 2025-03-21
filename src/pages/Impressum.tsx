
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Impressum = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-center animate-fade-up">Impressum</h1>
          
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8 animate-fade-up">
            <div className="prose max-w-none">
              <h2 className="text-xl md:text-2xl font-serif mb-4">Café Frechen - DAS KUCHENHAUS</h2>
              <p><strong>Inhaber:</strong> Mariam Sfar<br />
              Hauptstraße 115<br />
              50226 Frechen<br />
              Deutschland</p>

              <h3 className="text-lg md:text-xl font-serif mt-6 mb-2">Kontakt</h3>
              <p>
                Telefon: <a href="tel:+492234 59561" className="text-primary hover:underline">02234 59561</a><br />
                E-Mail: <a href="mailto:cafe.frechen@gmail.com" className="text-primary hover:underline">cafe.frechen@gmail.com</a><br />
                Website: <a href="https://cafe-frechen.de" className="text-primary hover:underline">cafe-frechen.de</a>
              </p>

              <h3 className="text-lg md:text-xl font-serif mt-6 mb-2">Umsatzsteuer-ID</h3>
              <p>USt-IdNr.: 224/5288/4895</p>

              <h3 className="text-lg md:text-xl font-serif mt-6 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <p>
                Mariam Sfar<br />
                Hauptstraße 115<br />
                50226 Frechen
              </p>

              <p className="mt-6">Unser Internet-Auftritt und seine Elemente sind urheberrechtlich geschützt.</p>

              <p>Außerdem behalten wir uns das Recht vor, Änderungen oder Ergänzungen der bereitgestellten Informationen vorzunehmen. Inhalt und Struktur der Web-Seiten sind urheberrechtlich geschützt. Die Vervielfältigung von Inhalten oder Daten, insbesondere die Verwendung von Texten, Textteilen oder Bildmaterial bedarf der ausdrücklichen vorherigen Zustimmung von „Café Frechen – DAS KUCHENHAUS".</p>

              <h2 className="text-xl md:text-2xl font-serif mt-8 mb-4">Haftungsausschluss</h2>

              <h3 className="text-lg md:text-xl font-serif mt-6 mb-2">Haftung für Inhalte</h3>
              <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

              <h3 className="text-lg md:text-xl font-serif mt-6 mb-2">Haftung für Links</h3>
              <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

              <p className="mt-6">Unser Internet-Auftritt und seine Elemente sind urheberrechtlich geschützt.</p>

              <p>Außerdem behalten wir uns das Recht vor, Änderungen oder Ergänzungen der bereitgestellten Informationen vorzunehmen. Inhalt und Struktur der Web-Seiten sind urheberrechtlich geschützt. Die Vervielfältigung von Inhalten oder Daten, insbesondere die Verwendung von Texten, Textteilen oder Bildmaterial bedarf der ausdrücklichen vorherigen Zustimmung von „Café Frechen – DAS KUCHENHAUS".</p>

              <h3 className="text-lg md:text-xl font-serif mt-6 mb-2">Online Streitbeilegung:</h3>
              <p>Informationen zur Online-Streitbeilegung (OS) gemäß Art. 14 Abs. 1 der EU Verordnung Nr. 524/2013 (ODR-Verordnung). Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, die unter <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.ec.europa.eu/consumers/odr</a> aufrufbar ist.</p>

              <p>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>

              <h3 className="text-lg md:text-xl font-serif mt-6 mb-2">Datenschutz</h3>
              <p>Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
