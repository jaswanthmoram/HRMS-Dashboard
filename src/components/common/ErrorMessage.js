'use client';

export default function ErrorMessage({ message, onRetry, className = '' }) {
  return (
    <div
      className={`p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in ${className}`}
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="h-5 w-5 text-red-600 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-sm text-red-600">{message}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 text-sm text-red-600 hover:text-red-800 font-medium transition-colors"
        >
          Try again
        </button>
      )}
    </div>
  );
} 