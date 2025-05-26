'use client';

import { AuthProvider } from '../context/AuthContext';
import { BookmarkProvider } from '../context/BookmarkContext';

export default function ClientProviders({ children }) {
  return (
    <AuthProvider>
      <BookmarkProvider>
        {children}
      </BookmarkProvider>
    </AuthProvider>
  );
} 