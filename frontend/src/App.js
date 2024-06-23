import React from 'react';
import Header from './Header';
import Post from './Post';
import Logo from './logo';
import './App.css';

const App = () => {
  const dummyContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...";

  return (
    <div className="app">
    <Logo />
      <Header />
      <main>
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        <Post author="Larissa Alves" content={dummyContent} />
        {/* Add more Post components as needed */}
      </main>
    </div>
  );
};

export default App;
