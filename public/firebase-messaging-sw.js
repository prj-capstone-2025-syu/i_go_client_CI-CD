importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in the messagingSenderId
firebase.initializeApp({
    apiKey: "AIzaSyAKw4-LxFYGf4Q7D3qIVtgPggLU9HCi4Bc",
    authDomain: "igo-project-56559.firebaseapp.com",
    projectId: "igo-project-56559",
    storageBucket: "igo-project-56559.firebasestorage.app",
    messagingSenderId: "932057891922",
    appId: "1:932057891922:web:d45582c1010db17b1f8b8b",
    measurementId: "G-GBQRRJX8HP"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

// 백그라운드 메시지 핸들러
messaging.onBackgroundMessage((payload) => {
    console.log('백그라운드 메시지 수신:', payload);

    // 'data' 페이로드가 있으면 항상 직접 알림을 생성
    if (payload.data) {
        const notificationTitle = payload.data.title || payload.notification?.title || 'IGO 알림';
        const notificationOptions = {
            body: payload.data.body || payload.notification?.body || '새로운 알림이 있습니다.',
            icon: '/logo.png', // 아이콘 경로 확인 필요
            badge: '/logo.png', // 뱃지 경로 확인 필요
            data: payload.data // 가장 중요: 커스텀 데이터를 알림에 포함
        };

        return self.registration.showNotification(notificationTitle, notificationOptions);
    }
});