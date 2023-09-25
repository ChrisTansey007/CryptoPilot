import pytest
from flask import Flask
from flask_backend.models.models import db, ExchangeUser, Trade, Transaction, Deposit, Balance
from datetime import datetime
from dotenv import load_dotenv
import os

# Test Configuration
load_dotenv(os.path.join(os.path.dirname(__file__), '..', '..', '.env'))
TEST_DATABASE_PATH = os.getenv('TEST_DATABASE_PATH')
# Example SQLite test database URI
TEST_DATABASE_PATH = "sqlite:///test_database.db"


@pytest.fixture(scope='module')
def test_app():
    # Create a Flask app instance for testing with test configurations
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = TEST_DATABASE_PATH
    db.init_app(app)
    with app.app_context():
        yield app


@pytest.fixture(scope='module')
def test_database(test_app):
    # Create tables
    db.create_all()

    # Insert test data (if needed)

    yield db

    # Cleanup: Drop tables after tests
    db.drop_all()


def test_exchange_user_creation(test_database):
    user = ExchangeUser(username="testuser",
                        session_token="sampletoken",
                        token_expiry=datetime.strptime("2023-12-31", "%Y-%m-%d"))
    test_database.session.add(user)
    test_database.session.commit()

    retrieved_user = ExchangeUser.query.filter_by(username="testuser").first()
    assert retrieved_user is not None
    assert retrieved_user.username == "testuser"


def test_trade_creation_and_relationship(test_database):
    # Placeholder test for when the Trade model is expanded
    pass


def test_transaction_creation_and_relationship(test_database):
    # Placeholder test for when the Transaction model is expanded
    pass


def test_deposit_creation_and_relationship(test_database):
    # Placeholder test for when the Deposit model is expanded
    pass


def test_balance_creation_and_relationship(test_database):
    # Placeholder test for when the Balance model is expanded
    pass
