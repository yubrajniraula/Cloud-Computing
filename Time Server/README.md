# Node.js Time Server

This is a simple Node.js application that creates a server and returns the current date and time in a specific format when requested.

## Prerequisites

- Node.js (version >= 10.x)
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:
   npm install

## Usage

1. Start the server by running the following command:
   node timeserver.js 8000

   This will start the server on `http://localhost:8000`.

2. To get the current date and time, send a request to `http://localhost:8000/api/currenttime` using a tool like `curl` or a web browser.
   curl http://localhost:8000/api/currenttime

   The server will respond with the current date and time in the following format:
   {"year":2024,"month":"06","date":"05","hour":"14","minute":"32"}

## File Structure

- `timeserver.js`: The main file that contains the server code.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.

## License

No license.

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [W3Schools](https://www.w3schools.com/nodejs/) for the Node.js tutorial
- [Stack Overflow](https://stackoverflow.com/) for the community solutions and discussions
