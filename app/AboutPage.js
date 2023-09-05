import React from 'react';
import './AboutPage.css'; // Import your CSS file
import logo from './megaphoneLogo.png'

function AboutPage() {
  const [isEST, setIsEST] = useState(false);

  const toggleTimeConversion = () => {
    setIsEST(!isEST);
  };

  const renderTime = (pstTime, estTime) => {
    return isEST ? estTime : pstTime;
  };

  return (
    <div className="horizontal">
      {/* Left page About Us text */}
      <div className="page divider" id="left-page-divider">
        <h1>About Us</h1>
        <p>
          The annual Husband Calling contest at the Iowa State Fair is an entertaining event that has seen more than 500 contestants and over 2,000 spectators from around the country gather to share little moments of affection. Contestants take turns on stage in speaking to their partner, competing to be the dearest and most loving of all. It is a great way of strengthening relationships and fostering a community of love.
        </p>
      </div>

      {/* Right page Schedule content */}
      <div className="page divider" id="right-page-divider">
        <div className="inner-container">
          {/* Right page Schedule header */}
          <div className="horizontal">
            {/* Right page Schedule header text */}
            <div className="divider">
              <h1 id="right-header">Schedule</h1>
            </div>
            {/* Right page Schedule EST conversion button */}
            <div className="divider">
              <button className="button" id="conversion-button" onClick={toggleTimeConversion}>
                {isEST ? 'Convert to PST' : 'Convert to EST'}
              </button>
            </div>
          </div>
          <div style={{ margin: '30px' }}></div>
          <div>
            {/* Schedule action 1 with + */}
            <div className="horizontal">
              <div className="add-list">
                <h2 className="list-text list-header">Event Kickoff & Introduction</h2>
                <p className="list-text list-time" id="event-time-1">
                  {renderTime('10:00 AM PST', '1:00 PM EST')}
                </p>
              </div>
              <div>
                <img
                  width="50px"
                  height="50px"
                  className="add-button"
                  src="./add-button.png"
                  alt="add"
                />
              </div>
            </div>
            {/* Schedule action 2 */}
            <div style={{ margin: '20px' }}></div>
            <div className="add-list">
              <h2 className="list-text list-header">Welcome Speech From Host</h2>
              <p className="list-text list-time" id="event-time-2">
                {renderTime('11:00 AM PST', '2:00 PM EST')}
              </p>
            </div>
            {/* Schedule action 3 with + */}
            <div style={{ margin: '20px' }}></div>
            <div className="horizontal">
              <div className="add-list">
                <h2 className="list-text list-header">Competition | First Round</h2>
                <p className="list-text list-time" id="event-time-3">
                  {renderTime('11:30 AM PST', '2:30 PM EST')}
                </p>
              </div>
              <div>
                <img
                  width="50px"
                  height="50px"
                  className="add-button"
                  src="./add-button.png"
                  alt="add"
                />
              </div>
            </div>
            {/* Schedule action 4 */}
            <div style={{ margin: '20px' }}></div>
            <div className="add-list">
              <h2 className="list-text list-header">Intermission</h2>
              <p className="list-text list-time" id="event-time-4">
                {renderTime('2:00 PM PST', '5:00 PM EST')}
              </p>
            </div>
            {/* Schedule action 5 with + */}
            <div style={{ margin: '20px' }}></div>
            <div className="horizontal">
              <div className="add-list">
                <h2 className="list-text list-header">Competition | Second Round</h2>
                <p className="list-text list-time" id="event-time-5">
                  {renderTime('3:00 PM PST', '6:00 PM EST')}
                </p>
              </div>
              <div>
                <img
                  width="50px"
                  height="50px"
                  className="add-button"
                  src="./add-button.png"
                  alt="add"
                />
              </div>
            </div>
            {/* Schedule action 6 */}
            <div style={{ margin: '20px' }}></div>
            <div className="add-list">
              <h2 className="list-text list-header">Briefing and Results</h2>
              <p className="list-text list-time" id="event-time-6">
                {renderTime('6:00 PM PST', '9:00 PM EST')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
