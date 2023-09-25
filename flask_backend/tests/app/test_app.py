import pytest
from flask import Flask
from ...app import create_app
from ...models import db
import sys

sys.path.append('C:\\Users\\theca\\cryptopilot')


@pytest.fixture
def app():
    return create_app()


def test_create_app_instance():
    app = create_app()
    assert isinstance(
        app, Flask), "create_app should return an instance of Flask."


def test_create_app_configurations(app):
    # Check loaded configurations
    assert 'DATABASE_NAME' in app.config, "DATABASE_NAME configuration is not loaded."
    assert 'EXPRESS_SERVER_URL' in app.config, "EXPRESS_SERVER_URL configuration is not loaded."
    assert 'TEST_DATABASE_PATH' in app.config, "TEST_DATABASE_PATH configuration is not loaded."


def test_create_app_extensions(app):
    # Check if extensions are initialized
    assert hasattr(app, 'extensions'), "Extensions attribute missing in app."
    assert 'sqlalchemy' in app.extensions, "SQLAlchemy (db) extension not initialized."
    assert 'jwt' in app.extensions, "JWT extension not initialized."
    assert 'cors' in app.extensions, "CORS extension not initialized."

# For blueprint checks, we'd ideally examine app.py more closely or
# utilize the Flask app's 'url_map' attribute to check for specific routes.
# Here, we're just providing a placeholder for the blueprint checks.


def test_create_app_blueprints(app):
    assert 'robinhood' in app.blueprints, "Robinhood blueprint not registered."
    # Add checks for other blueprints as needed


def test_database_table_creation(app):
    with app.app_context():
        # Check for the presence of tables in the database
        tables = db.metadata.tables.keys()
        assert 'exchange_user' in tables, "exchange_user table not created."
        assert 'trade' in tables, "trade table not created."
        assert 'transaction' in tables, "transaction table not created."
        assert 'deposit' in tables, "deposit table not created."
        assert 'balance' in tables, "balance table not created."
