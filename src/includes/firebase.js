import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBNEfo1qPadihyfuuAWf0DSTVMzQldVxeY',
  authDomain: 'music-app-75f0d.firebaseapp.com',
  projectId: 'music-app-75f0d',
  storageBucket: 'music-app-75f0d.appspot.com',
  appId: '1:1074815960718:web:0c33abd412d8c93c94abdf'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase persitence error ${error}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, storage, songsCollection, commentsCollection }
