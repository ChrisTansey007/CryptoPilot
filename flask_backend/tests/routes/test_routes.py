# flask-backend\tests\routes\test_routes.py
import pytest
from flask import Flask, jsonify
from unittest.mock import patch
from flask_backend.routes.robinhood_routes import robinhood_bp
from .mocks.robinhood_mocks import (mock_authenticate_robinhood_controller,
                                    mocked_authenticate_success,
                                    mocked_authenticate_failure,
                                    mocked_balance_data,
                                    mocked_last_trade_data)


@pytest.fixture
def app():
    app = Flask(__name__)
    app.register_blueprint(robinhood_bp)
    return app


@pytest.fixture
def test_client(app):
    return app.test_client()


def test_authenticate_endpoint(test_client):
    with patch('flask_backend.routes.robinhood_routes.robinhood_controller.authenticate_robinhood_controller',
               side_effect=mock_authenticate_robinhood_controller):

        # Successful authentication scenario
        valid_data = {
            "username": "valid_user",
            "password": "valid_pass"
        }
        response = test_client.post('/authenticate', json=valid_data)
        assert response.status_code == 200
        assert response.get_json() == mocked_authenticate_success

        # Failed authentication scenario
        invalid_data = {
            "username": "invalid_user",
            "password": "invalid_pass"
        }
        response = test_client.post('/authenticate', json=invalid_data)
        assert response.status_code == 401
        assert response.get_json() == mocked_authenticate_failure


@patch('flask_backend.routes.robinhood_routes.robinhood_controller.fetch_robinhood_balance_controller',
       return_value=(mocked_balance_data, 200))
def test_balance_endpoint(mock_fetch_balance, test_client):
    response = test_client.get('/balance')
    assert response.status_code == 200
    assert response.get_json() == mocked_balance_data


@patch('flask_backend.routes.robinhood_routes.robinhood_controller.fetch_robinhood_last_trade_controller',
       return_value=(mocked_last_trade_data, 200))
def test_last_trade_endpoint(mock_fetch_last_trade, test_client):
    response = test_client.get('/last-trade')
    assert response.status_code == 200
    assert response.get_json() == mocked_last_trade_data
