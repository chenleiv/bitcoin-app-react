import { Link } from 'react-router-dom';

export default function MovesList({ user }) {
  if (!user.moves.length)
    return (
      <div>
        <h4 className='no-moves'>You didn't make any transaction yet.</h4>
        <h5>
          To start, go to{' '}
          <Link to={'/contacts'} className='link'>
            {' '}
            contacts
          </Link>
        </h5>
      </div>
    );
  return (
    <section>
      <h4 className='last-tran'>Your last transactions:</h4>
      {user.moves.slice(0, 3).map((move, idx) => {
        return (
          <div key={idx + Math.random()}>
            <div className='moves-list clean-list'>
              <div>
                <p>
                  <span>To: </span>
                  {move.to}
                </p>
              </div>
              <div>
                <p>
                  {' '}
                  <span>Amount: </span>฿{move.amount}
                </p>
              </div>
              <div>
                <span>Date: </span>
                {move.at}{' '}
              </div>
            </div>
            <p>----------</p>
          </div>
        );
      })}
    </section>
  );
}
