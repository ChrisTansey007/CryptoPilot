# flask_backend\models\models.py

from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class ExchangeUser(db.Model):
    __tablename__ = 'exchange_user'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    username = db.Column(db.String(50), unique=True, nullable=False)
    session_token = db.Column(db.String(255), unique=True, nullable=False)
    token_expiry = db.Column(db.DateTime, nullable=False)

    trades = db.relationship('Trade', backref='exchange_user', lazy=True)
    transactions = db.relationship(
        'Transaction', backref='exchange_user', lazy=True)
    deposits = db.relationship('Deposit', backref='exchange_user', lazy=True)
    balances = db.relationship('Balance', backref='exchange_user', lazy=True)


class Trade(db.Model):
    __tablename__ = 'trade'

    trade_id = db.Column(db.Integer, primary_key=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'exchange_user.id'), nullable=False)


class Transaction(db.Model):
    __tablename__ = 'transaction'

    transaction_id = db.Column(db.Integer, primary_key=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'exchange_user.id'), nullable=False)


class Deposit(db.Model):
    __tablename__ = 'deposit'

    deposit_id = db.Column(db.Integer, primary_key=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'exchange_user.id'), nullable=False)


class Balance(db.Model):
    __tablename__ = 'balance'

    balance_id = db.Column(db.Integer, primary_key=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'exchange_user.id'), nullable=False)
