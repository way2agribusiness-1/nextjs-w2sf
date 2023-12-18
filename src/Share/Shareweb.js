import React, { useState } from 'react';

const ShareButtons = ({ title, hashtag }) => {
  const [showIcons, setShowIcons] = useState(false);
  const url = window.location.href;

  const handleButtonClick = () => {
    setShowIcons(!showIcons);
  };

  const facebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      'facebook-share-dialog',
      'width=626,height=436'
    );
  };

  const twitterShare = () => {
    window.open(
      `https://twitter.com/share?url=${encodeURIComponent(
        url
      )}&text=${title}&hashtags=${hashtag}`,
      'twitter-share-dialog',
      'width=626,height=436'
    );
  };

  const linkedinShare = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}&title=${title}`,
      'linkedin-share-dialog',
      'width=626,height=436'
    );
  };

  const whatsappShare = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(url)}`);
  };

  return (
    <div className="share-container absolute right-2">
      <button onClick={handleButtonClick} className="share-button">
        Share<i className="fas fa-share-alt"></i>
      </button>
      {showIcons && (
        <div className="share-icons">
          <button onClick={facebookShare}>
            <i className="fab fa-facebook-f" />
          </button>
          <button onClick={twitterShare}>
            <i className="fab fa-twitter" />
          </button>
          <button onClick={linkedinShare}>
            <i className="fab fa-linkedin-in" />
          </button>
          <button onClick={whatsappShare}>
            <i className="fab fa-whatsapp" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareButtons;
