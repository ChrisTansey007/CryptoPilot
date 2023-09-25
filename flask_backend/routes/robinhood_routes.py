# flask_backend\routes\robinhood_routes.py

from flask import Blueprint, request, jsonify
from controllers import robinhood_controller

robinhood_bp = Blueprint('robinhood', __name__)


@robinhood_bp.route('/authenticate', methods=['POST'])
def authenticate():
    response, status_code = robinhood_controller.authenticate_robinhood_controller(
        request)
    return jsonify(response), status_code


@robinhood_bp.route('/balance', methods=['GET'])
def balance():
    balance_data, status_code = robinhood_controller.fetch_robinhood_balance_controller(
        request)
    return jsonify(balance_data), status_code


@robinhood_bp.route('/last-trade', methods=['GET'])
def last_trade():
    trade_data, status_code = robinhood_controller.fetch_robinhood_last_trade_controller(
        request)
    return jsonify(trade_data), status_code
