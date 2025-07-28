from unittest.mock import patch, Mock
from flask_backend.controllers.robinhood_controller import authenticate_robinhood_controller


def test_authenticate_robinhood_controller_success():
    # Mock request object
    mock_request = Mock()
    mock_request.json = {
        'credentials': {
            'apiKey': 'valid_api_key',
            'secretKey': 'valid_secret_key',
            'totp': 'valid_totp'
        }
    }

    # Mocking the service call to return True (successful authentication)
    with patch('flask_backend.controllers.robinhood_controller.authenticate_with_robinhood', return_value=True):
        response, status_code = authenticate_robinhood_controller(mock_request)

    assert status_code == 200
    assert response == {"message": "Authentication successful"}


def test_authenticate_robinhood_controller_failure():
    # Mock request object
    mock_request = Mock()
    mock_request.json = {
        'credentials': {
            'apiKey': 'invalid_api_key',
            'secretKey': 'invalid_secret_key',
            'totp': 'invalid_totp'
        }
    }

    # Mocking the service call to return False (failed authentication)
    with patch('flask_backend.controllers.robinhood_controller.authenticate_with_robinhood', return_value=False):
        response, status_code = authenticate_robinhood_controller(mock_request)

    assert status_code == 401
    assert response == {"message": "Authentication failed"}

# The above functions are just a representation and need the actual context to execute.
