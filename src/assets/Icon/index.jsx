export const CartIcon = ({
  width = "1.2em",
  height = "2em",
  className,
  onclick,
}) => (
  <svg
    style={{ cursor: "pointer" }}
    onClick={onclick}
    focusable="false"
    width={width}
    height={height}
    viewBox="0 0 20 19"
  >
    <path
      d="M3 7H17L18 18H2L3 7Z"
      fill="none"
      stroke="currentColor"
      stroke-width="1.2"
    ></path>
    <path
      d="M13 4V4C13 2.34315 11.6569 1 10 1V1C8.34315 1 7 2.34315 7 4V4"
      fill="none"
      stroke="currentColor"
      stroke-width="1.2"
    ></path>
  </svg>
);

export const UserIcon = ({
  width = "1.2em",
  height = "2em",
  className,
  onclick,
}) => (
  <svg
    style={{ cursor: "pointer" }}
    onClick={onclick}
    focusable="false"
    width={width}
    height={height}
    viewBox="0 0 18 17"
  >
    <circle
      cx="9"
      cy="5"
      r="4"
      fill="none"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linejoin="round"
    ></circle>
    <path
      d="M1 17v0a4 4 0 014-4h8a4 4 0 014 4v0"
      fill="none"
      stroke="currentColor"
      stroke-width="1.2"
    ></path>
  </svg>
);

export const SearchIcon = ({
  width = "1.2em",
  height = "2em",
  className,
  onclick,
}) => (
  <svg
    style={{ cursor: "pointer" }}
    onClick={onclick}
    focusable="false"
    width={width}
    height={height}
    class="icon icon--header-search   "
    viewBox="0 0 18 18"
  >
    <path
      d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17"
      fill="none"
      stroke="currentColor"
      stroke-width="1.2"
    ></path>
  </svg>
);

export const MenuIcon = ({
  width = "1.2em",
  height = "2em",
  className,
  onclick,
}) => (
  <svg
    onClick={onclick}
    focusable="false"
    width={width}
    height={height}
    class="icon icon--header-hamburger   "
    viewBox="0 0 18 14"
  >
    <path
      d="M0 1h18M0 13h18H0zm0-6h18H0z"
      fill="none"
      stroke="currentColor"
      stroke-width="1.2"
    ></path>
  </svg>
);

export const HeartIcon = ({ width = "1em", height = "1em", className }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
  </svg>
);

export const GoogleIcon = ({ width = "1em", height = "1em", className }) => (
  <svg
    width={width}
    height={height}
    viewBox="-3 0 262 262"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    />
    <path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    />
    <path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    />
    <path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    />
  </svg>
);
