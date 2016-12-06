'use strict';
import React, {Component} from 'react';
import './Loader.css';

const quotes = [
  "Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything. ~ Plato",
  "One good thing about music, when it hits you, you feel no pain. ~ Bob Marley",
  "Music is the mediator between the spiritual and the sensual life. ~ Ludwig van Beethoven",
  "Rock and roll music, if you like it, if you feel it, you can't help but move to it. That's what happens to me. I can't help it. ~ Elvis Presley"
];

const Loader = () => (
  <div className="loader-container">
    <p className="text-center col-sm-6 center-block">
      {quotes[Math.floor(Math.random()*quotes.length)]}
    </p>
    <div>
      <div className="loader"></div>
    </div>
  </div>
);

export default Loader;