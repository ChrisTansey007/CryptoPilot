import sqlite3
from datetime import datetime, timedelta


# Mock Configuration Retrieval
def get_config(parameter):
    configurations = {
        "database_name": "tokens.db"
    }
    return configurations.get(parameter)

# Database Connection Singleton and Decoupling


class Database:
    _connection = None

    @classmethod
    def get_connection(cls):
        if cls._connection is None:
            cls._connection = sqlite3.connect(get_config("database_name"))
        return cls._connection

    @staticmethod
    def close_connection():
        if Database._connection:
            Database._connection.close()

    @staticmethod
    def fetch_token(exchange_name):
        try:
            cursor = Database.get_connection().cursor()
            cursor.execute(
                'SELECT token, tokenExpiry FROM ExchangeKeys WHERE exchangeName = ?', (exchange_name,))
            return cursor.fetchone()
        except sqlite3.Error as e:
            print(f"Database error: {e}")
            return None

    @staticmethod
    def save_token(exchange_name, token, expires_in):
        try:
            cursor = Database.get_connection().cursor()
            expiration_time = datetime.now() + timedelta(seconds=expires_in)

            cursor.execute(
                'SELECT COUNT(*) FROM ExchangeKeys WHERE exchangeName = ?', (exchange_name,))
            count = cursor.fetchone()[0]

            if count > 0:
                cursor.execute(
                    'UPDATE ExchangeKeys SET token = ?, tokenExpiry = ? WHERE exchangeName = ?',
                    (token, expiration_time, exchange_name))
            else:
                cursor.execute(
                    'INSERT INTO ExchangeKeys (exchangeName, token, tokenExpiry) VALUES (?, ?, ?)',
                    (exchange_name, token, expiration_time))
            Database.get_connection().commit()
        except sqlite3.Error as e:
            print(f"Database error: {e}")

# Updated functions using the Database class


def fetch_token_from_db(exchange_name):
    result = Database.fetch_token(exchange_name)
    if not result:
        return None
    token, expiration_datetime = result
    if datetime.strptime(expiration_datetime, "%Y-%m-%d %H:%M:%S.%f") < datetime.now():
        return None
    return token


def save_token_to_db(exchange_name, token, expires_in):
    Database.save_token(exchange_name, token, expires_in)
