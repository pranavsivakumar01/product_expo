import './page3.css';  

function PricingCards() {
  const handleFreeTrialClick = () => {
    alert("Free Trial clicked");
  };

  const handlePremiumClick = () => {
    alert("Premium clicked");
  };

  return (
    <div className="pricing-container">
      <button className="card-button" onClick={handleFreeTrialClick}>
        <div className="card">
          <img src="https://www.talkdesk.com/_next/image/?url=https%3A%2F%2Finfra-cloudfront-talkdeskcom.svc.talkdeskapp.com%2Ftalkdesk_com%2F10-steps-find-the-best-call-center-industry-benchmarks-2280x1160.png&w=1920&q=50 " alt="Free Trial" className="card-image" />
          <div className="card-title free-trial-title">FREE TRIAL</div>
          <h4 className="card-description">DESCRIPTION</h4>
          <p className="card-paragraph">Use the free trial for seven days and get the best experience from our Innovbiz.</p>
        </div>
      </button>
      
      <button className="card-button" onClick={handlePremiumClick}>
        <div className="card">
          <img src="https://raw.githubusercontent.com/pranavsivakumar01/pictures/main/business_14089637.png" alt="Premium" className="card-image" />
          <div className="card-title premium-title">PREMIUM</div>
          <h4 className="card-description">DESCRIPTION</h4>
          <p className="card-paragraph">Use our premium and enjoy the best user experience with the best features.</p>
        </div>
      </button>
    </div>
  );
}

export default PricingCards;
