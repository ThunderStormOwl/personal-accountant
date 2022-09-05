import { useState, FormEvent, ChangeEvent } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomingImg from '../../assets/in.svg';
import outgoingImg from '../../assets/out.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequesClose: () => void;
}

type TransactionType = 'deposit' | 'withdraw';

export function NewTransactionModal({ isOpen, onRequesClose }: NewTransactionModalProps) {
  const [type, setType] = useState<TransactionType>('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  function handleDepositClick() {
    setType('deposit');
  }

  function handleWithdrawClick() {
    setType('withdraw');
  }

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function handleValueChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(Number(e.target.value));
  }

  function handleCategoryChange(e: ChangeEvent<HTMLInputElement>) {
    setCategory(e.target.value);
  }

  function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequesClose}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >
      <button
        type={'button'}
        onClick={onRequesClose}
        className={'react-modal-close'}
      >
        <img
          src={closeImg}
          alt={'Close modal'}
        />
      </button>

      <Container onSubmit={handleCreateTransaction}>
        <h2>New transaction</h2>

        <input
          placeholder={'Title'}
          value={title}
          onChange={handleTitleChange}
        />

        <input
          type={'number'}
          placeholder={'Amount'}
          value={value}
          onChange={handleValueChange}
        />

        <TransactionTypeContainer>
          <RadioBox
            type={'button'}
            onClick={handleDepositClick}
            isActive={type === 'deposit'}
            activeColor={'green'}
          >
            <img
              src={incomingImg}
              alt={'Incoming'}
            />
            <span>Incoming</span>
          </RadioBox>

          <RadioBox
            type={'button'}
            onClick={handleWithdrawClick}
            isActive={type === 'withdraw'}
            activeColor={'red'}
          >
            <img
              src={outgoingImg}
              alt={'Outgoing'}
            />
            <span>Outgoing</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder={'Type'}
          value={category}
          onChange={handleCategoryChange}
        />

        <button type={'submit'}>Register</button>
      </Container>
    </Modal>
  );
}
