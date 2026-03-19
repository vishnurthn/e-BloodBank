import sqlite3

# Connect to (or create) the database file
connection = sqlite3.connect('redthread.db')

# Create the users table with all the new "pakka" features
connection.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        phone TEXT NOT NULL,
        blood_group TEXT NOT NULL,
        points INTEGER DEFAULT 0,
        last_donation_date TEXT,
        live_lat REAL,
        live_lng REAL,
        is_on_mission INTEGER DEFAULT 0
    )
''')

print("Database initialized successfully: redthread.db created!")
connection.close()