import { Container } from './styles';
import incomeImg from '../../assets/in.svg';
import outcomeImg from '../../assets/out.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (result, transaction) => {
      if (transaction.type === 'deposit') {
        result.deposits += transaction.value;
        result.total += transaction.value;
      } else {
        result.withdrawals += transaction.value;
        result.total -= transaction.value;
      }
      return result;
    },
    { deposits: 0, withdrawals: 0, total: 0 }
  );

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
        <strong>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outgoing expenses</p>
          <img
            src={outcomeImg}
            alt='Outcome'
          />
        </header>
        <strong>
          -{' '}
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(summary.withdrawals)}
        </strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img
            src={totalImg}
            alt='Total'
          />
        </header>
        <strong>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
