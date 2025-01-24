import React from 'react';
import './CommunityBoard.css';

const CommunityBoard = ({ data }) => {
  return (
    <div className="community-board">
      {data.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.title} />
          <div className="card-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#F9A01B',
                color: 'black', 
                padding: '10px 20px',
                borderRadius: '5px', 
                textDecoration: 'none', 
                display: 'inline-block',
                marginTop: '10px', 
              }}
            >
              More Team Information
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityBoard;
