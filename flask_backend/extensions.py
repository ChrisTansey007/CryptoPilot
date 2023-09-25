from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS

# Initialize extensions without binding them to a specific Flask application.
db = SQLAlchemy()          # Database extension
jwt = JWTManager()         # JWT authentication extension
cors = CORS()              # CORS handling extension

# Further extensions can be added as needed.
