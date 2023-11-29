import React from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';

function App() {
const handleSubmit = (section,data) => {
  console.log('Submitted ${section}', data)
}

  return (
    <div className="App">
      <h1>My CV</h1>
      <General onSubmit={(data) => handleSubmit('General Info', data)} />
      <Education onSubmit={(data) => handleSubmit('Educational Experience', data)} />
      <Experience onSubmit={(data) => handleSubmit('Practical Experience', data)} />
      <Footer/>
    </div>
  );
}

export default App;
