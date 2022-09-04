import {Dashboard} from './components/Dashboard/Dashboard'
import {Header} from './components/Header/Index';
import {GlobalStyle} from './styles/global';
import {NewTransactionModal} from './components/NewTransactionModal/Index'
import { useState } from 'react';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }
    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }
  return (
    <>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequesClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
