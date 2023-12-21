import React, { useEffect, useState } from 'react';

const ShareButtons = ({ title, hashtag }) => {
  const [showIcons, setShowIcons] = useState(false);
  const [urls, setUrls] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrls(window.location.href);
    }
  }, []);

  const handleButtonClick = () => {
    setShowIcons(!showIcons);
  };

  const openSocialMedia = (socialMedia) => {
    let url = '';
    switch (socialMedia) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urls)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/share?url=${encodeURIComponent(urls)}&text=${title}&hashtags=${hashtag}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(urls)}&title=${title}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(urls)}`;
        break;
      default:
        break;
    }
    window.open(url, `${socialMedia}-share-dialog`, 'width=626,height=436');
  };

  return (
    <div className="share-container absolute right-2">
      <button onClick={handleButtonClick} className="share-button">
        Share<i className="fas fa-share-alt"></i>
      </button>
      {showIcons && (
        <div className="share-icons">
          <button onClick={() => openSocialMedia('facebook')}>
            <i className="fab fa-facebook-f" />
          </button>
          <button onClick={() => openSocialMedia('twitter')}>
            <i className="fab fa-twitter" />
          </button>
          <button onClick={() => openSocialMedia('linkedin')}>
            <i className="fab fa-linkedin-in" />
          </button>
          <button onClick={() => openSocialMedia('whatsapp')}>
            <i className="fab fa-whatsapp" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareButtons;
