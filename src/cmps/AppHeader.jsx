import { Link } from 'react-router-dom';
import { SiBitcoinsv } from 'react-icons/si';
// import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

export function AppHeader({ user }) {
  // const history = useHistory();
  // const params = useParams()

  console.log(user);
  return (
    <header className='app-header full'>
      <div>
        <Link to='/' title='HomePage' className='logo'>
          <SiBitcoinsv />
        </Link>
      </div>
      <nav className='nav'>
        <Link to='/homepage' title='homepage'>
          HOME
        </Link>
        <Link to='/contacts' title='contacts'>
          CONTACTS
        </Link>
        <Link to='/statistic' title='statistic'>
          STATISTIC
        </Link>
      </nav>
    </header>
  );
}
