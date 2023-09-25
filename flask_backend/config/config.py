# flask-backend\config\config.py

from dotenv import load_dotenv
import os

load_dotenv(os.path.join(os.path.dirname(__file__), '..', '..', '.env'))

DATABASE_NAME = os.getenv('DATABASE_PATH')
EXPRESS_SERVER_URL = os.getenv('EXPRESS_SERVER_URL')
TEST_DATABASE_PATH = os.getenv('TEST_DATABASE_PATH')
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + DATABASE_NAME
