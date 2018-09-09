import React, { Component } from 'react';
import './info-card.scss';

class InfoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      position: this.props.position
    };

    this.toggleActive = this.toggleActive.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.positionJoin = this.positionJoin.bind(this);
  }
  render() {
    return (
      <article className={'info-card' + (this.state.isActive ? ' info-card--active' : '') }>
        <header className="info-card__header">
          <label className="info-card__label" title={(this.state.isActive ? 'Ocultar' : 'Ver mais') + ' detalhes da vaga - Desenvolvedor front end'}>
            <input className="info-card__input" name="vagas" type="checkbox" onChange={this.toggleActive} />
            <span className="info-card__bg"></span>
            <div className="info-card__group">
              <h1 className="info-card__title">{this.props.position.title}</h1>
              <button
                type="button"
                title={(this.state.position.isFavorite ? 'Remover de' : 'Adicionar à') + ' vagas favoritas'}
                className={'info-card__like' + (this.state.position.isFavorite ? ' info-card__like--active' : '')}
                onClick={this.toggleFavorite}>
                  <span className="info-card__star material-icons">{this.state.position.isFavorite ? 'star' : 'star_border'}</span>
              </button>
            </div>
            <span className="info-card__arrow material-icons">keyboard_arrow_down</span>
          </label>
        </header>
        <div className="info-card__content" ref={(content) => this.content = content}>
          <div className="info-card__inner">
            <div dangerouslySetInnerHTML={this.props.position}></div>
            <button className="info-card__button" onClick={this.positionJoin}>Candidate-se</button>
          </div>
        </div>
      </article>
    );
  }
  toggleActive() {
    if (!this.state.isActive) {
      this.content.style.display = 'block';
      const height = this.content.scrollHeight;
      this.content.style.display = '';
      this.content.classList.add('info-card__content--active');
      this.content.style.height = height + 'px';
    } else {
      this.content.style.height = '0px';

      setTimeout(() => {
        this.content.classList.remove('info-card__content--active');
      }, 200);
    }

    this.setState(state => ({
      isActive: !state.isActive
    }));
  }
  toggleFavorite() {
    const position = this.state.position;

    position.isFavorite = !position.isFavorite;

    this.props.onAlert(`Vaga ${position.isFavorite ? 'adicionada às' : 'removida das'} favoritas`);

    this.setState({
      position: position
    }, () => {
      this.props.onFavoriteToggle(this.state.position.id, this.state.position.isFavorite);
    });
  }
  positionJoin() {
    this.props.onAlert(`Você se inscreveu no processo seletivo para a vaga "${this.state.position.title}" com sucesso! Em breve entraremos em contato`);
  }
}

export default InfoCard;
