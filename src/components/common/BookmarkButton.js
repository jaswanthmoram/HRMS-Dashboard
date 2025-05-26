'use client';

import { useBookmarks } from '../../context/BookmarkContext';

export default function BookmarkButton({ item }) {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();
  const bookmarked = isBookmarked(item.id);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (bookmarked) {
      removeBookmark(item.id);
    } else {
      // Always add a minimal, unique employee object
      addBookmark({
        id: item.id,
        type: 'employee',
        title: item.firstName && item.lastName ? `${item.firstName} ${item.lastName}` : item.title || '',
        description: item.email || item.description || '',
        department: item.department || '',
        performanceRating: item.performanceRating || 1,
        image: item.image || '',
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full transition-colors ${
        bookmarked
          ? 'text-yellow-500 hover:text-yellow-600'
          : 'text-gray-400 hover:text-gray-500'
      }`}
      title={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill={bookmarked ? 'currentColor' : 'none'}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
    </button>
  );
} 