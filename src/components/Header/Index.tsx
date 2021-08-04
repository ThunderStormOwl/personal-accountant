import logo from '../../assets/logo.svg'
import {Container, Content} from './styles'

export function Header (){
    return(
        <Container>
            <Content>
                <img src={logo} alt="Personal accountant" />
                <button type="button">
                    New transaction
                </button>
            </Content>
        </Container>
    )
}