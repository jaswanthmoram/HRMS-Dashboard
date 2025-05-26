'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  // Load bookmarks from localStorage on initial load
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bookmarks');
      if (saved) {
        setBookmarks(JSON.parse(saved));
        console.log('[BookmarkContext] Loaded bookmarks from localStorage:', JSON.parse(saved));
      }
    } catch (e) {
      console.error('[BookmarkContext] Failed to load bookmarks:', e);
    }
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      console.log('[BookmarkContext] Saved bookmarks to localStorage:', bookmarks);
    } catch (e) {
      console.error('[BookmarkContext] Failed to save bookmarks:', e);
    }
  }, [bookmarks]);

  const addBookmark = (item) => {
    setBookmarks((prev) => {
      if (!prev.some(b => b.id === item.id)) {
        return [...prev, { ...item, bookmarkedAt: new Date().toISOString() }];
      }
      return prev;
    });
  };

  const removeBookmark = (itemId) => {
    setBookmarks((prev) => prev.filter(bookmark => bookmark.id !== itemId));
  };

  const isBookmarked = (itemId) => {
    return bookmarks.some(bookmark => bookmark.id === itemId);
  };

  const getBookmarksByType = (type) => {
    return bookmarks.filter(bookmark => bookmark.type === type);
  };

  return (
    <BookmarkContext.Provider value={{
      bookmarks,
      addBookmark,
      removeBookmark,
      isBookmarked,
      getBookmarksByType
    }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
} 