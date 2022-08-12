import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'




export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir a nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Quae, aspernatur saepe. Distinctio odit omnis vero quibusdam maiores 
            atque a tempore hic? Vitae accusamus ea, consequuntur laborum unde quisquam
            voluptates aliquid?
          </p>

          <Section title="Links Ùteis">
            <Links>
              <li> <a href="#">https://www.rocketset.com.br/</a> </li>
              <li> <a href="#">https://www.rocketset.com.br/</a> </li>

            </Links>
          </Section>

          <Section title="Marcadores">

            <Tag title="express" />
            <Tag title="nodejs" />

          </Section>

          <Button title="Voltar" />

        </Content>
      </main>
    </Container>
  )
}
