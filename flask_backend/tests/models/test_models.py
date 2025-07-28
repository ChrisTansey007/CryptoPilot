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
    user = ExchangeUser(username="tradeuser",
                        session_token="tradetoken",
                        token_expiry=datetime.utcnow())
    test_database.session.add(user)
    test_database.session.commit()

    trade = Trade(user_id=user.id,
                  symbol="BTCUSD",
                  side="buy",
                  quantity=1.5,
                  price=20000.0)
    test_database.session.add(trade)
    test_database.session.commit()

    retrieved = Trade.query.filter_by(trade_id=trade.trade_id).first()
    assert retrieved is not None
    assert retrieved.user_id == user.id


def test_transaction_creation_and_relationship(test_database):
    user = ExchangeUser(username="transuser",
                        session_token="transtoken",
                        token_expiry=datetime.utcnow())
    test_database.session.add(user)
    test_database.session.commit()

    txn = Transaction(user_id=user.id,
                      amount=100.0,
                      type="withdrawal")
    test_database.session.add(txn)
    test_database.session.commit()

    retrieved = Transaction.query.filter_by(transaction_id=txn.transaction_id).first()
    assert retrieved is not None
    assert retrieved.user_id == user.id


def test_deposit_creation_and_relationship(test_database):
    user = ExchangeUser(username="depouser",
                        session_token="depotoken",
                        token_expiry=datetime.utcnow())
    test_database.session.add(user)
    test_database.session.commit()

    dep = Deposit(user_id=user.id,
                  amount=500.0)
    test_database.session.add(dep)
    test_database.session.commit()

    retrieved = Deposit.query.filter_by(deposit_id=dep.deposit_id).first()
    assert retrieved is not None
    assert retrieved.user_id == user.id


def test_balance_creation_and_relationship(test_database):
    user = ExchangeUser(username="baluser",
                        session_token="baltoken",
                        token_expiry=datetime.utcnow())
    test_database.session.add(user)
    test_database.session.commit()

    bal = Balance(user_id=user.id,
                  asset="BTC",
                  amount=1.23)
    test_database.session.add(bal)
    test_database.session.commit()

    retrieved = Balance.query.filter_by(balance_id=bal.balance_id).first()
    assert retrieved is not None
    assert retrieved.user_id == user.id

