import logo from '../../assets/logo.svg'
import {Container, Content} from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header ({onOpenNewTransactionModal}: HeaderProps){
    return(
        <Container>
            <Content>
                <img src={logo} alt="Personal accountant" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    New transaction
                </button>            
            </Content>
        </Container>
    )
}