# flask-backend/tests/services/test_services.py

from unittest.mock import patch, Mock
from flask_backend.services.authenticate_with_robinhood import authenticate_with_robinhood

# for some crazy reason the first import module does not show up as a module


def test_authenticate_with_robinhood_success():
    with patch('flask_backend.services.authenticate_with_robinhood.pyotp.TOTP', return_value=Mock(now=Mock(return_value="123456"))), \
            patch('flask_backend.services.authenticate_with_robinhood.r.login', return_value={"access_token": "sample_token", "expires_in": 3600}), \
            patch('flask_backend.services.authenticate_with_robinhood.save_token_to_db', return_value=None):

        response = authenticate_with_robinhood(
            "valid_user", "valid_pass", "valid_totp")

    assert response == {"status": "success",
                        "message": "Successfully authenticated with Robinhood."}


def test_authenticate_with_robinhood_failure_no_token():
    with patch('flask_backend.services.authenticate_with_robinhood.pyotp.TOTP', return_value=Mock(now=Mock(return_value="123456"))), \
            patch('flask_backend.services.authenticate_with_robinhood.r.login', return_value={}), \
            patch('flask_backend.services.authenticate_with_robinhood.save_token_to_db', return_value=None):

        response = authenticate_with_robinhood(
            "invalid_user", "invalid_pass", "invalid_totp")

    assert response == {
        "status": "error", "message": "Failed to authenticate with Robinhood. No access token received."}


def test_authenticate_with_robinhood_exception():
    with patch('flask_backend.services.authenticate_with_robinhood.pyotp.TOTP', side_effect=Exception("Sample Exception")), \
            patch('flask_backend.services.authenticate_with_robinhood.r.login', return_value={"access_token": "sample_token", "expires_in": 3600}), \
            patch('flask_backend.services.authenticate_with_robinhood.save_token_to_db', return_value=None):

        response = authenticate_with_robinhood("user", "pass", "totp")

    assert response == {"status": "error",
                        "message": "An error occurred: Sample Exception"}
