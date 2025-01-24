import React from 'react';
import CommunityBoard from './CommunityBoard';

const App = () => {
  const communityData = [
    {
      id: 1,
      title: 'Heat vs. Knicks',
      description: 'January 26th @ 3:00pm',
      link: 'https://www.espn.com/nba/team/_/name/ny/new-york-knicks',
      image: 'https://i.ebayimg.com/images/g/xM0AAOSwVNNg4oGZ/s-l1600.jpg',
    },
    {
      id: 2,
      title: 'Suns vs. Heat',
      description: 'January 29th @ 7:30pm',
      link: 'https://www.espn.com/nba/team/_/name/phx/phoenix-suns',
      image: 'https://i.pinimg.com/736x/43/52/49/435249ef86766625a94e5aea088a02f5.jpg',
    },
    {
      id: 3,
      title: 'Kings vs. Heat',
      description: 'January 31st @ 7:30pm',
      link: 'https://www.espn.com/nba/team/_/name/sac/sacramento-kings',
      image: 'https://content.sportslogos.net/news/2016/04/Kings-New-Logo-confirmed.png',
    },
    {
      id: 4,
      title: 'Heat vs. Wizards',
      description: 'February 2nd @ 7:30pm',
      link: 'https://www.espn.com/nba/team/_/name/wsh/washington-wizards',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/1200px-Washington_Wizards_logo.svg.png',
    },
    {
      id: 5,
      title: 'Clippers vs. Heat',
      description: 'February 4th @ 6:00pm',
      link: 'https://www.espn.com/nba/team/_/name/lac/la-clippers',
      image: 'https://ca-times.brightspotcdn.com/dims4/default/fad4f84/2147483647/strip/true/crop/1152x648+0+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa8%2F9b%2F10e5a7a81cf6b638596c260a2ca4%2Flat-sp-clippers-logo-big-20150224',
    },
    {
      id: 6,
      title: 'Magic vs. Heat',
      description: 'February 6th @ 7:30pm',
      link: 'https://www.espn.com/nba/team/_/name/orl/orlando-magic',
      image: 'https://logobrands.com/cdn/shop/collections/7b6f9d6cca90e9338720deb6ed594d80.jpg?v=1646869543',
    },
    {
      id: 7,
      title: 'Spurs vs. Heat',
      description: 'February 7th @ 7:30pm',
      link: 'https://www.espn.com/nba/team/_/name/sa/san-antonio-spurs',
      image: 'https://i.ebayimg.com/images/g/Do8AAOSwcNliqB~w/s-l1200.webp',
    },
    {
      id: 8,
      title: 'Celtics vs. Heat',
      description: 'February 11th @ 2:00pm',
      link: 'https://www.espn.com/nba/team/_/name/bos/boston-celtics',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png',
    },
    {
      id: 9,
      title: 'Heat vs. Bucks',
      description: 'February 13th @ 8:00pm',
      link: 'https://www.espn.com/nba/team/_/name/mil/milwaukee-bucks',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1200px-Milwaukee_Bucks_logo.svg.png',
    },
    {
      id: 10,
      title: 'Heat vs. 76ers',
      description: 'February 14th @ 7:00pm',
      link: 'https://www.espn.com/nba/team/_/name/phi/philadelphia-76ers',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1200px-Philadelphia_76ers_logo.svg.png',
    },
    {
      id: 11,
      title: 'Heat vs. Pelicans',
      description: 'February 23rd @ 10:00pm',
      link: 'https://www.espn.com/nba/team/_/name/no/new-orleans-pelicans',
      image: 'https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MjU5MTI5MDMxNjAwMDAx/new-orleans-pelicans-logo-2jpg.jpg',
    },
    {
      id: 12,
      title: 'Heat vs. Kings',
      description: 'February 26th @ 10:00pm',
      link: 'https://www.espn.com/nba/team/_/name/sac/sacramento-kings',
      image: 'https://content.sportslogos.net/news/2016/04/Kings-New-Logo-confirmed.png',
    },
  ];

  return (
    <div style={{ background: 'linear-gradient(#98002E, #FFFDD0)' }}>
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/Miami-Heat-logo.png"
          alt="Header Image"
          style={{ width: '500px', height: '250px' }}
        />
        <h1 style={{ marginTop: '20px', color: '#F9F1F0', position: 'relative'}}>🏀 Miami Heat Remaining Schedule 2023-24 🏀</h1>
      </header>
      <CommunityBoard data={communityData} />
    </div>
  );
};

export default App;
