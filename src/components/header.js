import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div class="container mx-auto px-6 py-3">
          <div class="flex items-center justify-between">
            <div class="w-full text-gray-700  text-2xl font-semibold">
              Brand
            </div>
            <div class="flex items-center justify-end w-full">
              <button class="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                <span
                  class="iconify"
                  data-icon="carbon:notification-new"
                  data-width="25"
                  data-height="25"
                ></span>
              </button>

              <div class="flex sm:hidden">
                <button
                  type="button"
                  class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                    <path
                      fill-rule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="relative mt-6 max-w-lg mx-auto">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg
                class="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <input
              class="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
