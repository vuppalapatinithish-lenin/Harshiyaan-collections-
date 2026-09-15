# Harshiyaan Collections — Firebase Order Notifications

This build keeps the premium storefront and adds online order syncing plus admin-phone notifications.

## What it does
- Customer order is saved locally and also sent to Firebase Firestore.
- Admin dashboard listens for new orders in real time.
- Admin phone can show a browser notification and speak **“Order received!”**.
- Optional Firebase Cloud Messaging (FCM) background push is included.
- `functions/` contains a Firebase Cloud Function that sends push notifications to registered admin devices.

## One-time Firebase setup
1. Create a Firebase project at Firebase Console.
2. Add a **Web App** and copy its config into `firebase-config.js`.
3. In Firebase Console → Cloud Messaging → Web Push certificates, create a Web Push certificate and put the VAPID public key into `firebase-config.js`.
4. Create/enable Firestore Database.
5. Deploy the included Firestore rules and Cloud Function using Firebase CLI:
   - `firebase login`
   - `firebase use YOUR_PROJECT_ID`
   - `firebase deploy --only firestore:rules,functions`
6. Replace the values in `firebase-messaging-sw.js` only if your Firebase config file is served in a way your hosting blocks; normally it imports `firebase-config.js` directly.
7. Upload the website to GitHub Pages or Firebase Hosting (HTTPS is required for web push).

## Admin phone
1. Open `admin.html` on the admin phone.
2. Enter the existing admin password.
3. Tap **Enable Phone Notifications** and allow notifications.
4. Keep the admin dashboard open for instant real-time order sound. FCM can also deliver background notifications after the Cloud Function is deployed.

## Important
The included Firestore rules are starter/demo rules. Before a real launch, use Firebase Authentication and server-side authorization so customers cannot read or modify other orders. Do not put server secrets in frontend files.
