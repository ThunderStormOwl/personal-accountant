import { useState } from 'react';
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomingImg from '../../assets/in.svg'
import outgoingImg from '../../assets/out.svg'
import { Container, TransactionTypeContainer } from './styles';

Modal.setAppElement('#root')

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequesClose : () => void,
}

export function NewTransactionModal({isOpen, onRequesClose} : NewTransactionModalProps) {

    const [type, setType] = useState('deposit');

    function handleDepositClick(){
        setType('deposit');
    }
    
    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequesClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <button type="button" onClick={onRequesClose} className='react-modal-close'>
            <img src={closeImg} alt='Close modal'/>
        </button>
        <Container>
            
            <h2>New transaction</h2>
            <input
                placeholder='Title'
            />
            <input
                type='number'
                placeholder='Amount'
            />
            <TransactionTypeContainer>
                <button
                    type='button'
                    onClick={handleDepositClick}
                >
                    <img src={incomingImg} alt='Incoming'/>
                    <span>Incoming</span>
                </button>

                <button
                    type='button'
                >
                    <img src={outgoingImg} alt='Outgoing'/>
                    <span>Outgoing</span>
                </button>
            </TransactionTypeContainer>
            <input
                placeholder='Type'
            />
            <button 
                type='submit'
            >
                Register
            </button>
        </Container>
      </Modal>
    );
}