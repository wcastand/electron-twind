import { tw } from 'https://cdn.skypack.dev/twind'
import { render, h } from 'https://cdn.skypack.dev/preact'
import { useReducer } from 'https://cdn.skypack.dev/preact/hooks'
import htm from 'https://cdn.skypack.dev/htm'

const html = htm.bind(h)

render(
  html`
    <${Layout}>
      <div class=${tw`px-4 py-6 sm:px-0`}>
        <div class=${tw`border-4 border-dashed border-gray-200 rounded-lg h-96`}></div>
      </div>
    <//>
  `,
  document.body
)

// https://tailwindui.com/preview
function Layout({ children }) {
  const [userMenuOpen, toggleUserMenu] = useReducer((state) => !state, false)
  const [mobileMenuOpen, toggleMobileMenu] = useReducer((state) => !state, false)

  return html`
    <div>
      <nav class=${tw`bg-gray-800`}>
        <div class=${tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div class=${tw`flex items-center justify-between h-16`}>
            <div class=${tw`flex items-center`}>
              <div class=${tw`flex-shrink-0`}>
                <img class=${tw`h-8 w-8`} src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
              </div>
              <div class=${tw`hidden md:block`}>
                <div class=${tw`ml-10 flex items-baseline space-x-4`}>
                  <a href="#" class=${tw`bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium`}> Dashboard </a>

                  <a href="#" class=${tw`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                    Team
                  </a>

                  <a href="#" class=${tw`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                    Projects
                  </a>

                  <a href="#" class=${tw`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                    Calendar
                  </a>

                  <a href="#" class=${tw`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                    Reports
                  </a>
                </div>
              </div>
            </div>
            <div class=${tw`hidden md:block`}>
              <div class=${tw`ml-4 flex items-center md:ml-6`}>
                <button
                  class=${tw`bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
                >
                  <span class=${tw`sr-only`}>View notifications</span>
                  <svg
                    class=${tw`h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                <div class=${tw`ml-3 relative`}>
                  <div>
                    <button
                      class=${tw`max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
                      id="user-menu"
                      aria-haspopup="true"
                      onClick=${toggleUserMenu}
                    >
                      <span class=${tw`sr-only`}>Open user menu</span>
                      <img
                        class=${tw`h-8 w-8 rounded-full`}
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                  <div
                    class=${tw`
                      origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5
                      ${
                        userMenuOpen
                          ? `transition ease-out duration-100 transform opacity-100 scale-100`
                          : `transition ease-in duration-75 transform opacity-0 scale-95`
                      }
                    `}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a href="#" class=${tw`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`} role="menuitem"> Your Profile </a>

                    <a href="#" class=${tw`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`} role="menuitem"> Settings </a>

                    <a href="#" class=${tw`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`} role="menuitem"> Sign out </a>
                  </div>
                </div>
              </div>
            </div>
            <div class=${tw`-mr-2 flex md:hidden`}>
              <button
                class=${tw`bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
                onClick=${toggleMobileMenu}
              >
                <span class=${tw`sr-only`}>Open main menu</span>
                <svg
                  class=${tw`${mobileMenuOpen ? `hidden` : `block`} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  class=${tw`${mobileMenuOpen ? `block` : `hidden`} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class=${tw`${mobileMenuOpen ? `block` : `hidden`} md:hidden`}>
          <div class=${tw`px-2 pt-2 pb-3 space-y-1 sm:px-3`}>
            <a href="#" class=${tw`bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium`}> Dashboard </a>

            <a href="#" class=${tw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>
              Team
            </a>

            <a href="#" class=${tw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>
              Projects
            </a>

            <a href="#" class=${tw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>
              Calendar
            </a>

            <a href="#" class=${tw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>
              Reports
            </a>
          </div>
          <div class=${tw`pt-4 pb-3 border-t border-gray-700`}>
            <div class=${tw`flex items-center px-5`}>
              <div class=${tw`flex-shrink-0`}>
                <img
                  class=${tw`h-10 w-10 rounded-full`}
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class=${tw`ml-3`}>
                <div class=${tw`text-base font-medium leading-none text-white`}>Tom Cook</div>
                <div class=${tw`text-sm font-medium leading-none text-gray-400`}>tom@example.com</div>
              </div>
              <button
                class=${tw`ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
              >
                <span class=${tw`sr-only`}>View notifications</span>
                <svg
                  class=${tw`h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
            <div class=${tw`mt-3 px-2 space-y-1`}>
              <a href="#" class=${tw`block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700`}>
                Your Profile
              </a>

              <a href="#" class=${tw`block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700`}>
                Settings
              </a>

              <a href="#" class=${tw`block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700`}>
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header class=${tw`bg-white shadow`}>
        <div class=${tw`max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8`}>
          <h1 class=${tw`text-3xl font-bold leading-tight text-gray-900`}>Dashboard</h1>
        </div>
      </header>
      <main>
        <div class=${tw`max-w-7xl mx-auto py-6 sm:px-6 lg:px-8`}>${children}</div>
      </main>
    </div>
  `
}
