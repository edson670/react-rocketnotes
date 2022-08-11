import { Container, Profile, Logout} from "./styles";
import { RiShutDownLine} from 'react-icons/ri'

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/edson670.png" alt="foto do usuario"/>
                
                <div>
                    <span>Bem-vindo</span>
                    <strong>Edson Silva</strong>
                </div>
            </Profile>
            
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}