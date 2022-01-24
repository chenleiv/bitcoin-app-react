// import MovesList from './MovesList';

export function TransferFunds({ onTransferCoins, contact }) {
  var amount = 0;
  const handleFunds = ({ target }) => {
    amount = target.value ? +target.value : 0;
  };
  return (
    <section className='transfer'>
      {/* <h3>Transfer coins to: {contact.name}</h3> */}

      {/* <h3> to: {contact.name}</h3> */}
      <h3> How much do you want to transfer to {contact.name} ?</h3>
      <input onChange={handleFunds} type='number' name='transfer' id='transfer' />
      <button onClick={() => onTransferCoins(contact, amount)}>Transfer</button>
    </section>
  );
}
