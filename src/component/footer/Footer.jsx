import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-200 bg-blue-950 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        
        {/* Left side - Title */}
        <p className="text-2xl font-bold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Portfolio
        </p>

        {/* Right side - Social Media Links */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 hover:text-blue-400"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-2v9h-4v-12h6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 hover:text-blue-600"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 hover:text-sky-400"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1c-.9.54-1.88.92-2.9 1.12A4.48 4.48 0 0016.5 0c-2.5 0-4.5 2.02-4.5 4.5 0 .35.04.7.12 1.02C7.7 5.36 4.1 3.57 1.67.9a4.48 4.48 0 00-.61 2.27c0 1.56.8 2.93 2 3.74a4.48 4.48 0 01-2.04-.56v.06c0 2.18 1.56 4 3.63 4.4a4.48 4.48 0 01-2.03.08c.57 1.77 2.24 3.07 4.22 3.11A8.96 8.96 0 010 19.54 12.67 12.67 0 006.84 21c8.21 0 12.7-6.8 12.7-12.7 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z"></path>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 hover:text-pink-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
              <path d="M17.5 6.5h.01"></path>
            </svg>
          </a>

        </span>
      </div>
    </footer>
  );
}
