# flask-backend\tests\routes\mocks\robinhood_mocks.py

from unittest.mock import patch

mocked_authenticate_success = {
    "status": "success",
    "message": "Successfully authenticated",
    "token": "sample_token"
}

mocked_authenticate_failure = {
    "status": "failure",
    "message": "Invalid credentials"
}


def mock_authenticate_robinhood_controller(credentials):
    if credentials.json["username"] == "valid_user" and credentials.json["password"] == "valid_pass":
        return mocked_authenticate_success, 200
    return mocked_authenticate_failure, 401


mocked_balance_data = {
    "status": "success",
    "balance": 1000.00
}


def mock_fetch_robinhood_balance_controller():
    return mocked_balance_data, 200


mocked_last_trade_data = {
    "status": "success",
    "last_trade": {
        "symbol": "AAPL",
        "price": 150.00,
        "quantity": 10
    }
}


def mock_fetch_robinhood_last_trade_controller():
    return mocked_last_trade_data, 200
