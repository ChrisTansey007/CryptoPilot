# Cryptopilot

## Development Status

:warning: **Note**: Cryptopilot is currently in the early stages of development. While the platform is functional, users may encounter mock data in certain areas as we progressively integrate real-time exchange data.

## Ongoing Work

- **Exchange Data Integration**: We are in the process of replacing mock data with real-time exchange data to provide accurate insights.
- **API Implementation**: Work is underway to incorporate APIs for major cryptocurrency exchanges including Kraken, Binance, and more.
- **UI Enhancements**: We are actively refining the appearance of graphs and charts in the user interface for better readability and user experience.

## Introduction

Cryptopilot is a culmination of various tools that I have personally used and relied upon in my cryptocurrency investment journey. Recognizing the challenges of juggling multiple platforms, I decided to consolidate these tools into a comprehensive, all-in-one solution. With a friendly user interface, Cryptopilot aims to make cryptocurrency investment management seamless for both novices and seasoned investors alike.

## Overview

Cryptopilot enables investors to:

- **Monitor** their complete portfolio of crypto assets across multiple trading exchanges.
- **Backtest** potential trading strategies using historical data to anticipate future performance.
- **Deploy** trading bots across various trading pairs and exchanges.


## Features
- **Portfolio Monitoring**: View and manage your complete crypto assets across multiple exchanges.
- **Back-testing**: Test potential trading bots using historical data to predict future performance.
- **Bot Implementation**: Deploy trading bots on various trading pairs across different exchanges.
- **User Authentication**: Secure login system integrated with Robinhood. For more details on setting up 2FA with Robinhood, see our [Two-Factor Authentication Guide](TwoFactorAuthenticationGuide.md).
- **Exchange Integration**: Manage and monitor different exchange accounts in one place.

## Technologies & Frameworks
- Frontend: React.js
- Backend: Flask (Python) and Express (Node.js)
- Database: SQLite3
- Authentication: JWT tokens for secure sessions
- API Integration: Robinhood API for user authentication and data retrieval

## Setup & Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Install the necessary Python packages: `pip install -r requirements.txt`
4. Install JavaScript dependencies: `npm install`
5. Start the development servers: `npm run dev`
6. Run tests:
   - JavaScript units: `npm test`
   - Python units: `pytest`

## Database Design
The application uses SQLite3 for database management. Primary models include `ExchangeUser` and `Trade`, which capture user-exchange relationships and individual trade details. These models establish relationships with other potential models like `Transaction`, `Deposit`, and `Balance`.

## Configuration
Set up your environment with a `.env` file containing necessary configurations like `DATABASE_PATH` and `EXPRESS_SERVER_URL`.

## API Key Management
Manage API keys for different exchanges using the `exchange_key_manager.js` utility. This tool is designed to read and update the `.env` file with new exchange API keys.

## Endpoints & Controllers
The application provides several endpoints to interact with the backend services:
- **Delete Exchange**: Remove an exchange entry from the database.
- **Get All Exchanges**: Fetch details of all exchanges including balances and last trades.
- **Get Exchange Credentials**: Retrieve credentials for a specific exchange.

## Contributing
At the current stage of development, we are not actively seeking external contributors. However, as the project progresses and matures, we will be opening up to contributions from the wider community.

That being said, everyone is welcome to fork the project and submit pull requests. While we cannot guarantee that all contributions will be merged, every contribution will be given thoughtful consideration.

If you are interested in being a part of this project once it becomes fully open, or if you have any suggestions, comments, or feedback, please don't hesitate to reach out via email at Chris.S.Tansey@Gmail.com . We greatly appreciate and welcome all feedback.

## Contact

For any questions, feedback, or suggestions, please contact me at Chris.S.Tansey@Gmail.com

## License
MIT

## Dashboard Component
The dashboard offers users a comprehensive view of their trading activities. It incorporates a variety of charts, including `TradesLineChart` and `TradesAreaChart`, to visualize trading data. While the current version might be using mock data for developmental purposes, future iterations will transition to real-time trading data.

## Data Store
The `dataStore.js` acts as a central hub for managing state and feeding data to various components throughout the application. It currently provides mock data for charts, but as development progresses, it will integrate with the backend services to fetch real-time data.

## API Integrations
The application has dedicated API handlers for both Flask (`flaskApi.js`) and Express (`expressApi.js`) backends. These handlers manage operations such as:
- Authenticating with Robinhood.
- Fetching, deleting, and adding new exchange accounts.
- Retrieving specific exchange account credentials.

---

For local development, copy `.env.example` to `.env` and adjust values as needed.
