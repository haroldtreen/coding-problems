import {
  Hand,
} from './Hand.js';

export class BlackJackHand extends Hand {
  score() {
    const scores = this.possibleScores();
    let maxUnder = Number.MIN_VALUE;
    let minOver = Number.MAX_VALUE;
    for (const score of scores) {
      if (score > 21 && score < minOver) {
        minOver = score;
      } else if (score <= 21 && score > maxUnder) {
        maxUnder = score;
      }
    }
    return maxUnder === Number.MIN_VALUE ? minOver : maxUnder;
  }

  possibleScores() {
    const scores = [];
    if (this.cards.length === 0) {
      return scores;
    }
    for (const card of this.cards) {
      this.addCardToScoreList(card, scores);
    }
    return scores;
  }

  addCardToScoreList(card, scores) {
    if (scores.length === 0) {
      scores.push(0);
    }
    const length = scores.length;
    for (let i = 0; i < length; i++) {
      const score = scores[i];
      scores[i] = score + card.minValue();
      if (card.minValue() !== card.maxValue()) {
        scores.push(score + card.maxValue());
      }
    }
  }

  busted() {
    return this.score() > 21;
  }

  is21() {
    return this.score() === 21;
  }

  isBlackJack() {
    if (this.cards.length !== 2) {
      return false;
    }
    const first = this.cards[0];
    const second = this.cards[1];
    return (first.isAce() && second.isFaceCard()) || (second.isAce() && first.isFaceCard());
  }
}
