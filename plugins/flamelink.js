import flamelink from 'flamelink'
import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAsZErMVJoG3S7wC_YsAo0cLzzw6UDH1os',
  authDomain: 'flamelink-cms-demo.firebaseapp.com',
  databaseURL: 'https://flamelink-cms-demo.firebaseio.com',
  projectId: 'flamelink-cms-demo',
  storageBucket: 'flamelink-cms-demo.appspot.com'
}

let firebaseApp

if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig)
} else {
  firebaseApp = firebase.app()
}

const app = flamelink({ firebaseApp })

export default app
