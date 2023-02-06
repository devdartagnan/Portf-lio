import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyAbQzPRb8XNPUXM3DIBSijQpvX-ethJXPI',
    authDomain: 'projects-ceeb4.firebaseapp.com',
    projectId: 'projects-ceeb4',
    storageBucket: 'projects-ceeb4.appspot.com',
};

firebase.initializeApp(firebaseConfig);

interface PropsDb{
    id:string;
    thumb:string;
}

let dbData: Array<object>;

const db = firebase.firestore();
db.collection("portifolio").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // dbData = [...{},doc]
        // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        console.log(`${doc.id} =>${JSON.stringify(doc.data())}`)
    })
});


const menuBtn = document.querySelector('.menu-header') as HTMLElement
const menuItems = document.querySelector('.nav-menu') as HTMLElement

menuBtn.addEventListener('click', (e) => {
    e.preventDefault()
    menuItems.classList.toggle('none')
})