# React Injector Project

Simple project to demonstrate manipulation of React elements using external script.

## Built With

1. React
2. Next.js

## Getting Started

Clone the repository and run `yarn` command to install all dependencies.
Once dependencies are installed, run `yarn dev` to start the application.

## How It Works

It loads an external JavaScript file dynamically. The external file creates an injected function on window object which is then executed by the React page component. The React page component passes the reference to the root component of that page. The reference of the page root is used to access the element inside the root to manipulate the target element.