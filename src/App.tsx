import Banner from './components/Banner/index';
import Styles from './app.module.css';
import Story1 from './assets/images/story1.png';
import Story2 from './assets/images/story2.png';
import bannerTwo from './assets/images/bannerTwo.png';


function App() {
  return (
    <div style={{ width: '100vw' }}>
      <Banner />
      <div className={Styles.content}>
        <div className={Styles.story1}>
          <img className={Styles.storyOneImg} src={Story1} alt="story1"></img>
          <div className={Styles.storyOneContent}>
            <div className={Styles.title}>Dumb DragonZ</div>
            <div className={Styles.paragraph}>a collection of 10,000 PFPs with useful functions, with rich variety and unique rarity characteristics.</div>
            <div className={Styles.paragraph}>Everyone thinks we're DUMB, but every DumbDragon will enjoy their time at DumbLab and create their own Dumb creation.</div>
            <div className={Styles.paragraph}>Who wouldn't want to do Dumb but amazing things with DumbLab together!</div>
          </div>
        </div>
        <div className={Styles.bannerTwo}></div>
        <div className={Styles.story2}>
          <div className={Styles.storyTwoContent}>
            <div className={Styles.title}>Dumb LAB</div>
            <div className={Styles.paragraph}>What is the difference between a genius and a fool...?
              We’d like to invite you to join and do some fun experiments to get the conclusion
              yourself...</div>
            <div className={Styles.paragraph}>Those who are seen as Dumb in the outside world, should show your own creativity here and leave your mark by experimenting in our DumbDragon world.</div>
            <div className={Styles.paragraph}>Assemble, Everyone! Use your imagination and innovation, brainstorm your own</div>
            <div className={Styles.paragraph}>interesting ideas and experiments in the lab!</div>
          </div>
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
