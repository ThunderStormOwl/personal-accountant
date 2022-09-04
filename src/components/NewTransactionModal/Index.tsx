import { useState } from 'react';
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

  function handleDepositClick() {
    setType('deposit');
  }

  function handleWithdrawClick() {
    setType('withdraw');
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

      <Container>
        <h2>New transaction</h2>

        <input placeholder={'Title'} />

        <input
          type={'number'}
          placeholder={'Amount'}
        />

        <TransactionTypeContainer>
          <RadioBox
            type={'button'}
            onClick={handleDepositClick}
            isActive={type === 'deposit'}
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
          >
            <img
              src={outgoingImg}
              alt={'Outgoing'}
            />
            <span>Outgoing</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder={'Type'} />

        <button type={'submit'}>Register</button>
      </Container>
    </Modal>
  );
}
