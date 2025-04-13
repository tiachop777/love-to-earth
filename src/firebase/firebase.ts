// src/firebase/firebase.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // ✅ THÊM DÒNG NÀY
// (Không cần analytics nếu chưa dùng)

const firebaseConfig = {
  apiKey: "AIzaSyAa_ez91k5AbjBjeuVfC5AD6s2QyfIYKHc",
  authDomain: "love-to-earth.firebaseapp.com",
  projectId: "love-to-earth",
  storageBucket: "love-to-earth.firebasestorage.app",
  messagingSenderId: "643153091859",
  appId: "1:643153091859:web:6aad4f40e9f3ac6d4b8ee6",
  measurementId: "G-REQ1ELH710"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// ✅ Thêm Firestore
const db = getFirestore(app);

// ✅ Xuất để sử dụng ở nơi khác
export { db };
