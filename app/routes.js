import Home from 'containers/Home';
import Tweet from 'containers/Tweet';

const routes = [
  { path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/tweet/:id',
    component: Tweet
  }
];

export default routes;
