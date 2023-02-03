import LandingPageContentContainer from "./LandingPageContentContainer";

const LandingPageContainer = () => {
  return (
    <header id="main" className="landing-page-container">
      <div className="landing-page-shadow">
        <LandingPageContentContainer />
      </div>
    </header>
  );
};

export default LandingPageContainer;
