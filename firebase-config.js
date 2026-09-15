/* Harshiyaan Collections — Firebase Web App configuration.
 * Replace PASTE_ values with the config from Firebase Console > Project settings > Web app.
 * Web API keys are identifiers, not server secrets; Firestore Rules still matter.
 */
globalThis.HC_FIREBASE_CONFIG = {
  apiKey: "PASTE_FIREBASE_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT.firebasestorage.app",
  messagingSenderId: "PASTE_MESSAGING_SENDER_ID",
  appId: "PASTE_FIREBASE_APP_ID",
  vapidKey: "PASTE_WEB_PUSH_VAPID_KEY"
};
globalThis.HC_FIREBASE_ENABLED = !Object.values(globalThis.HC_FIREBASE_CONFIG).some(v => String(v).startsWith('PASTE_'));
