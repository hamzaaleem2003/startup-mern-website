import React from 'react';
import ScrollToTopButton from './components/scrolltotopbutton';
import IntroSection from './components/intro';
import About from './components/about';
import Services from './components/services'; // Import the Services component
import Technologies from './components/technologies';
import Careers from './components/careers';
import ContactFeedback from './components/feedback&contact';
import Copyright from './components/copyright'

function App() {
  return (
    <div>
      {/* Scroll to top button */}
      <ScrollToTopButton />

      {/* Intro Section */}
      <IntroSection />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />
      <Technologies/>
      <Careers/>
      <ContactFeedback />
      <Copyright/>
    </div>
  );
}

export default App;
