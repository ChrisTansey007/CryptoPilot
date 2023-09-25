# flask_backend\routes\other_exchanges_routes.py

from flask import Blueprint, request

other_exchanges_bp = Blueprint('other_exchanges', __name__)


@other_exchanges_bp.route('/authenticate', methods=['POST'])
def authenticate_other_exchanges():
    return {"message": "Other exchanges authenticated."}, 200
