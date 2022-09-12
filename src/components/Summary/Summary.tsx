import { useContext } from 'react';
import { Container } from './styles';
import incomeImg from '../../assets/in.svg';
import outcomeImg from '../../assets/out.svg';
import totalImg from '../../assets/total.svg';
import { TransactionContext } from '../../TransactionsContext';

export function Summary() {
  const transactions = useContext(TransactionContext);

  return (
    <Container>
      <div>
        <header>
          <p>Incoming expenses</p>
          <img
            src={incomeImg}
            alt='Income'
          />
        </header>
        <strong>$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Outgoing expenses</p>
          <img
            src={outcomeImg}
            alt='Outcome'
          />
        </header>
        <strong>- $500,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img
            src={totalImg}
            alt='Total'
          />
        </header>
        <strong>$500,00</strong>
      </div>
    </Container>
  );
}
