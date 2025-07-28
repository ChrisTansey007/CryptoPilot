# controllers/robinhood_controller.py

from flask_backend.services.authenticate_with_robinhood import authenticate_with_robinhood
# flask_backend\utils\database_operations.py


def authenticate_robinhood_controller(request):
    username = request.json['credentials']['apiKey']
    password = request.json['credentials']['secretKey']
    totpKey = request.json['credentials']['totp']

    success = authenticate_with_robinhood(username, password, totpKey)

    if success:
        return {"message": "Authentication successful"}, 200
    else:
        return {"message": "Authentication failed"}, 401


# def fetch_robinhood_balance_controller(request):
#     balance_data = fetch_balance(request.args.get('apiKey'))
#     return balance_data, 200


# def fetch_robinhood_last_trade_controller(request):
#     trade_data = fetch_last_trade(request.args.get('username'))
#     return trade_data, 200
