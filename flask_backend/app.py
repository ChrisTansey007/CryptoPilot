# flask_backend\app.py

from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_backend.extensions import jwt, cors as ext_cors
from flask_backend.routes.robinhood_routes import robinhood_bp
from flask_backend.routes.other_exchanges_routes import other_exchanges_bp
from flask_backend.models.models import db


def create_app():
    app = Flask(__name__)

    app.config.from_object('config.config')

    ext_cors.init_app(app)
    db.init_app(app)
    jwt.init_app(app)
    migrate = Migrate(app, db)

    app.register_blueprint(robinhood_bp, url_prefix='/api/robinhood')
    app.register_blueprint(
        other_exchanges_bp, url_prefix='/api/other-exchanges')

    CORS(app)

    return app


if __name__ == '__main__':
    app = create_app()

    with app.app_context():
        db.create_all()

    app.run()
