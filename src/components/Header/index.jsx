import { Container, Profile, Logout} from "./styles";
import { RiShutDownLine} from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'


export function Header(){
    const { signOut } = useAuth()
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/edson670.png" alt="foto do usuario"/>
                
                <div>
                    <span>Bem-vindo</span>
                    <strong>Edson Silva</strong>
                </div>
            </Profile>
            
            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}