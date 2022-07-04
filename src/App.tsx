import React from 'react';
import Banner from './components/Banner/index';
import Styles from './app.module.css';
import Story1 from './assets/images/story1.png';
import Story2 from './assets/images/story2.png';

function App() {
  return (
    <div style={{ width: '100vw' }}>
      <Banner />
      <div className={Styles.content}>
        <div className={Styles.title}>Hey Dumb DragonZ！</div>
        <div className={Styles.story1}>
          <img className={Styles.storyOneImg} src={Story1} alt="story1"></img>
          <div className={Styles.storyOneContent}>What is the difference between a genius and a fool...?
            We’d like to invite you to join and do some fun experiments to get the conclusion
            yourself...
            Those who are seen as Dumb in the outside world, should show your own creativity
            here and leave your mark by experimenting in our DumbDragon world.
            Assemble, Everyone! Use your imagination and innovation, brainstorm your own
            interesting ideas and experiments in the lab!</div>
        </div>
        <div className={Styles.story2}>
          <div className={Styles.storyTwoContent}>What is the difference between a genius and a fool...?
            We’d like to invite you to join and do some fun experiments to get the conclusion
            yourself...
            Those who are seen as Dumb in the outside world, should show your own creativity
            here and leave your mark by experimenting in our DumbDragon world.
            Assemble, Everyone! Use your imagination and innovation, brainstorm your own
            interesting ideas and experiments in the lab!</div>
          <img className={Styles.storyTwoImg} src={Story2} alt="story2"></img>
        </div>
        <div className={Styles.story3}>
          <div className={Styles.storyThreeTitle}>what we can bring you</div>
          <div className={Styles.storyThreeContent}>
            - A whole new interactive experience that will continue to give value back to our
            holders over the long term of this experience.
            <div> - We will be able to write the story and be a part of the legend of DumbDragonz
              together.</div>
            <div>Perhaps a silly idea would spark some flares and your unintentional creation ends up
              turning into a work of art.</div>
            <div>Aba Aba Aba Aba Aba Aba Aba Aba .......</div>
            <div>Enjoy being DUMB</div>
            <div>Now….. Whose experiment explosion turned my lab into a Dumbverse?!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
