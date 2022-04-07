import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 Contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Thiago Henrique</strong>
              <small>instagram</small>
            </div>
            <span>thiago@email.com.br</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Thiago Henrique</strong>
              <small>instagram</small>
            </div>
            <span>thiago@email.com.br</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Thiago Henrique</strong>
              <small>instagram</small>
            </div>
            <span>thiago@email.com.br</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
