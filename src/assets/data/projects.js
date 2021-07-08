import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import edgarImg from '../images/edgarImg.PNG';
import Capture from '../images/Capture.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'bus it',
    desc:
      'An application to that enables users to book rides online for diffrent routes. I developed the website and the mobile app',
    img: Capture,
  },
  {
    id: uuidv4(),
    name: 'U Tracker',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Green CTG',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'edgar portfolio',
    desc: 'A portfolio for edgar mugambi a computer scientist.',
    img: edgarImg,
  },
  {
    id: uuidv4(),
    name: 'Restaurant',
    desc:
      'A tracking website that will show the performance of the website.You will see the dishes offered.',
    img: ProjectImg,
  },
];

export default projects;
