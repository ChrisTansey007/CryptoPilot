# flask-backend\services\robinhood_operations.py

import pyotp
import robin_stocks.robinhood as r
from flask_backend.utils.database_operations import (
    fetch_token_from_db,
    save_token_to_db,
)
# flask_backend\utils\database_operations.py


def authenticate_with_robinhood(username, password, totpKey):
    try:
        totp = pyotp.TOTP(totpKey).now()
        login = r.login(username, password, mfa_code=totp)

        if 'access_token' in login:
            token = login['access_token']
            tokenExpiry = login['expires_in']
            save_token_to_db('robinhood', token, tokenExpiry)
            return {"status": "success", "message": "Successfully authenticated with Robinhood."}
        else:
            return {"status": "error", "message": "Failed to authenticate with Robinhood. No access token received."}

    except Exception as e:
        return {"status": "error", "message": f"An error occurred: {str(e)}"}
