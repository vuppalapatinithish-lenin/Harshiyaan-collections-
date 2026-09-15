/* Firebase Messaging service worker. Fill firebase-config.js first. */
importScripts('https://www.gstatic.com/firebasejs/12.2.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.2.1/firebase-messaging-compat.js');
importScripts('./firebase-config.js');
const firebaseConfig=self.HC_FIREBASE_CONFIG;
if(self.HC_FIREBASE_ENABLED){
 firebase.initializeApp(firebaseConfig);
 const messaging=firebase.messaging();
 messaging.onBackgroundMessage(payload=>{
   const n=payload.notification||{};
   self.registration.showNotification(n.title||'Harshiyaan Collections',{body:n.body||'Order received!',icon:'./products/product1.png',tag:'harshiyaan-order'});
 });
}
