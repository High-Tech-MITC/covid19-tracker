import Anime from "react-anime";
import InfoBox from "./InfoBox";

const Info = ({ countryInfo }) => {
  return (
    <div className="app">
      <div className="app__left">
        {/* stats */}

        <Anime
          scale={0.9}
          direction=""
          easing="easeInCubic"
          duration={3000}
          delay={0}
        >
          <div className="app__stats">
            <InfoBox
              title="cases"
              animeDelay={700}
              bgColor="#F59E0B"
              cases={countryInfo.todayCases}
              total={countryInfo.cases}
            />
            <InfoBox
              title="recovered"
              animeDelay={400}
              bgColor="#10B981"
              cases={countryInfo.todayRecovered}
              total={countryInfo.recovered}
            />
            <InfoBox
              title="Deaths"
              animeDelay={600}
              bgColor="#EF4444"
              cases={countryInfo.todayDeaths}
              total={countryInfo.deaths}
            />
          </div>
        </Anime>
      </div>
    </div>
  );
};

export default Info;
