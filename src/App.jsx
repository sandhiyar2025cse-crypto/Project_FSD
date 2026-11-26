import BoxComponent from "./boxes/boxes";
import SymbolOfExcellence from "./symbol-of-excellence/symbol-of-excellence";
import { symbolOfExcellence } from "./data";
import ContentComponent from "./ContentComponent/ContentComponent";
import HeroComponent from "./HeroComponent/HeroComponent";
function App() {
  return (
    <div>
      <BoxComponent
        value1="200+"
        detail1="Colleges"
        value2="130"
        detail2="Professional Trainers"
        value3="2000+"
        detail3="Study Materials"
        value4="10000"
        detail4="Students"
      />
      <SymbolOfExcellence data={symbolOfExcellence} />
      <ContentComponent
        title="Learners Today, Leaders Tomorrow"
        description="With our continuous research and development, we provide 
        you with an excellent Aptitude training."
      />
      <HeroComponent
        title="Aptitude Guru Hem"
        heading="At AGH, we shape futures and build skills that"
        highlight="ignite your career journey."
        description="Where Success Meets Opportunity! Are you ready to embark on a transformative journey towards success? At Aptitude Guru Hem, we are committed to providing you with the essential skills and knowledge to excel in your professional endeavors. Our expert training in aptitude and coding equips you to conquer every challenge, from company interview assessments to prestigious coding platforms like LeetCode, GeeksForGeeks, HackerRank, and more."
        button1="Start Your Learning"
        button2="Join a Live Demo"
      />
    </div>
  );
}

export default App;
