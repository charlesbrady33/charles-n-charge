module.exports = {
  $schema: "https://pinokio.computer/schema/v1/schema.json",
  title: "Charles n Charge",
  description: "Professional lawn and property maintenance business website with invoice maker, calculator, and mobile app.",
  image: "https://avatars.githubusercontent.com/u/328936621?v=4",
  version: "1.0.0",
  
  menu: [
    {
      icon: "fa-solid fa-circle-play",
      text: "start",
      href: "start"
    },
    {
      icon: "fa-solid fa-circle-stop",
      text: "stop",
      href: "stop"
    },
    {
      icon: "fa-solid fa-hammer",
      text: "build",
      href: "build"
    },
    {
      icon: "fa-solid fa-broom",
      text: "lint",
      href: "lint"
    }
  ],

  tasks: {
    setup: {
      title: "Setup Dependencies",
      description: "Install project dependencies",
      run: [
        {
          method: "shell.run",
          params: {
            message: "npm install"
          }
        }
      ]
    },

    start: {
      title: "Start Charles n Charge",
      description: "Start the development server (runs on port 3000)",
      run: [
        {
          method: "shell.run",
          params: {
            message: "npm install"
          }
        },
        {
          method: "shell.run",
          params: {
            message: "npm run dev"
          }
        }
      ]
    },

    stop: {
      title: "Stop Charles n Charge",
      description: "Stop the development server running on port 3000",
      run: [
        {
          method: "shell.run",
          params: {
            message: "lsof -ti:3000 | xargs kill -9 2>/dev/null || true"
          }
        }
      ]
    },

    build: {
      title: "Build for Production",
      description: "Build the project for production deployment",
      run: [
        {
          method: "shell.run",
          params: {
            message: "npm install"
          }
        },
        {
          method: "shell.run",
          params: {
            message: "npm run build"
          }
        }
      ]
    },

    lint: {
      title: "Lint Code",
      description: "Run linting checks on the codebase",
      run: [
        {
          method: "shell.run",
          params: {
            message: "npm run lint || true"
          }
        }
      ]
    },

    test: {
      title: "Run Tests",
      description: "Execute the test suite",
      run: [
        {
          method: "shell.run",
          params: {
            message: "npm test"
          }
        }
      ]
    }
  }
}
