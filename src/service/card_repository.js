import firebaseApp from './firebase';

class CardRepository { 
    saveCard(userId, card) {
        firebaseApp.database().ref(`${userId}/card/${card.id}`).set(card);
    }
    removeCard(userId, card) {
        firebaseApp.database().ref(`${userId}/card/${card.id}`).remove();
    }
}

export default CardRepository;