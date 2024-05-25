from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bank.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username


@app.route('/')
def cover():
    user=User(name='John Doe', username='johndoe', password='password')
    return render_template('Cover/index.html')


@app.route('/login')
def login():
    return render_template('Login/index.html')

@app.route('/register')
def register():
    return render_template('Register/index.html')


if __name__ == '__main__':
    app.run(debug=True)