import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
	var app = firebase.initializeApp({
		apiKey: "AIzaSyApI9VhS6zU3oS7p3NhC3tEwbPJjqbRgX4",
		authDomain: "test-next-1.firebaseapp.com",
		databaseURL: "https://test-next-1.firebaseio.com",
		projectId: "test-next-1",
	});
}

var db = firebase.firestore(app);
var base = Rebase.createClass(db);

export default base;
