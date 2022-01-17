import firebaseApp from './firebase';

class CardRepository { 

    syncCards(userId, onUpdate) {
        
        const ref = firebaseApp.database().ref(`${userId}/card`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
            console.log(value);
        });
        return () => ref.off();
    }

    saveCard(userId, card) {
        firebaseApp.database().ref(`${userId}/card/${card.id}`).set(card);
    }
    removeCard(userId, card) {
        firebaseApp.database().ref(`${userId}/card/${card.id}`).remove();
    }
}

export default CardRepository;