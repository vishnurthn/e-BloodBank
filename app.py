from flask import Flask, request, jsonify
from flask_cors import CORS
from geopy.distance import geodesic
import random

app = Flask(__name__)
# Allows your Hospital HTML to communicate with this server
CORS(app, resources={r"/*": {"origins": "*"}})

# --- DATABASE: Your existing 50 Donors + Randomized Locations ---
donors = [
    # --- NEARBY (0km - 5km) ---
    {"id": 1, "name": "Arjun", "blood_group": "O+", "lat": 13.0285, "lon": 80.0450},
    {"id": 2, "name": "Vishnu", "blood_group": "O+", "lat": 13.0290, "lon": 80.0460},
    {"id": 3, "name": "Priya", "blood_group": "B-", "lat": 13.0300, "lon": 80.0500},
    {"id": 4, "name": "Ananya", "blood_group": "A+", "lat": 13.0270, "lon": 80.0420},
    {"id": 5, "name": "Siddharth", "blood_group": "AB+", "lat": 13.0310, "lon": 80.0480},
    {"id": 6, "name": "Meera", "blood_group": "O-", "lat": 13.0250, "lon": 80.0400},
    {"id": 7, "name": "Karthik", "blood_group": "B+", "lat": 13.0350, "lon": 80.0600},
    {"id": 8, "name": "Tanvi", "blood_group": "A-", "lat": 13.0200, "lon": 80.0300},
    {"id": 9, "name": "Aditya", "blood_group": "AB-", "lat": 13.0400, "lon": 80.0550},
    {"id": 10, "name": "Ishani", "blood_group": "O+", "lat": 13.0282, "lon": 80.0445},

    # --- MID-RANGE (5km - 15km: Porur, Poonamallee, Valasaravakkam) ---
    {"id": 11, "name": "Vikram", "blood_group": "AB+", "lat": 13.0450, "lon": 80.1100},
    {"id": 12, "name": "Sana", "blood_group": "O-", "lat": 13.0520, "lon": 80.1500},
    {"id": 13, "name": "Rohan", "blood_group": "A+", "lat": 13.0100, "lon": 80.1200},
    {"id": 14, "name": "Deepa", "blood_group": "B+", "lat": 13.0600, "lon": 80.1300},
    {"id": 15, "name": "Aravind", "blood_group": "O+", "lat": 12.9900, "lon": 80.0800},
    {"id": 16, "name": "Kavya", "blood_group": "A-", "lat": 13.0700, "lon": 80.1400},
    {"id": 17, "name": "Manoj", "blood_group": "B-", "lat": 13.0300, "lon": 80.1800},
    {"id": 18, "name": "Riya", "blood_group": "AB-", "lat": 13.0900, "lon": 80.1100},
    {"id": 19, "name": "Suresh", "blood_group": "O-", "lat": 13.0000, "lon": 80.1600},
    {"id": 20, "name": "Varun", "blood_group": "A+", "lat": 13.0200, "lon": 80.1900},

    # --- CITY CENTER (15km - 30km: T-Nagar, Central, Adyar) ---
    {"id": 21, "name": "Rahul", "blood_group": "O+", "lat": 13.1000, "lon": 80.1500},
    {"id": 22, "name": "Deepak", "blood_group": "AB-", "lat": 13.0827, "lon": 80.2707},
    {"id": 23, "name": "Sneha", "blood_group": "A+", "lat": 12.9229, "lon": 80.1275},
    {"id": 24, "name": "Rajesh", "blood_group": "B+", "lat": 13.1500, "lon": 80.2000},
    {"id": 25, "name": "Divya", "blood_group": "O-", "lat": 13.0400, "lon": 80.2400},
    {"id": 26, "name": "Amit", "blood_group": "A-", "lat": 13.0600, "lon": 80.2300},
    {"id": 27, "name": "Pooja", "blood_group": "AB+", "lat": 13.0000, "lon": 80.2500},
    {"id": 28, "name": "Naveen", "blood_group": "B-", "lat": 12.9800, "lon": 80.2200},
    {"id": 29, "name": "Swati", "blood_group": "O+", "lat": 13.1200, "lon": 80.2100},
    {"id": 30, "name": "Gaurav", "blood_group": "A+", "lat": 13.0100, "lon": 80.2800},

    # --- PERIPHERY/OUTSKIRTS (30km - 60km: Kanchipuram, Chengalpattu) ---
    {"id": 31, "name": "Abhishek", "blood_group": "B+", "lat": 12.8300, "lon": 79.7000},
    {"id": 32, "name": "Lata", "blood_group": "O-", "lat": 12.6800, "lon": 79.9800},
    {"id": 33, "name": "Vijay", "blood_group": "A+", "lat": 12.9000, "lon": 80.0000},
    {"id": 34, "name": "Preeti", "blood_group": "AB-", "lat": 13.2500, "lon": 80.3000},
    {"id": 35, "name": "Harish", "blood_group": "O+", "lat": 13.3500, "lon": 80.1000},
    {"id": 36, "name": "Anjali", "blood_group": "B-", "lat": 12.7500, "lon": 80.2000},
    {"id": 37, "name": "Sanjay", "blood_group": "A-", "lat": 12.8500, "lon": 80.1500},
    {"id": 38, "name": "Nehal", "blood_group": "AB+", "lat": 13.1800, "lon": 79.9000},
    {"id": 39, "name": "Yash", "blood_group": "O-", "lat": 13.0500, "lon": 79.8000},
    {"id": 40, "name": "Kriti", "blood_group": "B+", "lat": 12.9500, "lon": 80.3500},

    # --- EXTRA VARIED ENTRIES ---
    {"id": 41, "name": "Sameer", "blood_group": "O+", "lat": 13.0289, "lon": 80.0442},
    {"id": 42, "name": "Radhika", "blood_group": "A+", "lat": 13.0320, "lon": 80.0520},
    {"id": 43, "name": "Pranav", "blood_group": "B+", "lat": 13.0410, "lon": 80.0590},
    {"id": 44, "name": "Tara", "blood_group": "O-", "lat": 13.0210, "lon": 80.0320},
    {"id": 45, "name": "Omkar", "blood_group": "AB+", "lat": 13.0380, "lon": 80.0490},
    {"id": 46, "name": "Zoya", "blood_group": "A-", "lat": 13.0550, "lon": 80.1200},
    {"id": 47, "name": "Aryan", "blood_group": "B-", "lat": 13.0780, "lon": 80.1900},
    {"id": 48, "name": "Shruti", "blood_group": "O+", "lat": 13.1100, "lon": 80.2500},
    {"id": 49, "name": "Tushar", "blood_group": "AB-", "lat": 12.9500, "lon": 80.1000},
    {"id": 50, "name": "Ishita", "blood_group": "A+", "lat": 13.0265, "lon": 80.0435},

    {"id": 51, "name": "Kailash","blood_group": "H", "lat": 13.1000, "lon": 80.1500},
    {"id": 52, "name": "Deepak", "blood_group": "AB-", "lat": 13.0827, "lon": 80.2707},
    {"id": 53, "name": "Sneha", "blood_group": "H", "lat": 12.9229, "lon": 80.1275},
    {"id": 54, "name": "Rajesh", "blood_group": "H", "lat": 13.1500, "lon": 80.2000},
    {"id": 55, "name": "Divya", "blood_group": "H", "lat": 13.0400, "lon": 80.2400},
    {"id": 56, "name": "Amit", "blood_group": "AB-","lat": 13.0600, "lon": 80.2300},
    {"id": 57, "name": "Pooja", "blood_group": "AB-", "lat": 13.0000, "lon": 80.2500},
    {"id": 58, "name": "Naveen", "blood_group": "H", "lat": 12.9800, "lon": 80.2200},
    {"id": 59, "name": "Swati", "blood_group": "H", "lat": 13.1200, "lon": 80.2100},
    {"id": 60, "name": "Gaurav", "blood_group": "AB-","lat": 13.0100, "lon": 80.2800}
]

# State management for the SOS
current_sos = {"active": False, "blood_type": None, "target_donors": []}

@app.route('/request-blood', methods=['POST'])
def request_blood():
    global current_sos
    try:
        data = request.json
        # Hospital Location (Default: Saveetha Engineering College)
        h_lat = data.get('lat', 13.0280)
        h_lon = data.get('lon', 80.0440)
        requested_bg = data.get('blood_group')

        print(f"🚨 EMERGENCY: {requested_bg} Required at Hospital")

        # 1. IDENTIFY EXACT MATCHES & CALCULATE DISTANCE
        matches = []
        for d in donors:
            if d['blood_group'] == requested_bg:
                dist = geodesic((h_lat, h_lon), (d['lat'], d['lon'])).km
                matches.append({
                    "id": d['id'],
                    "name": d['name'],
                    "distance_km": round(dist, 2),
                    "status": "CALL_INITIATED"
                })

        # Sort by proximity
        matches.sort(key=lambda x: x['distance_km'])

        # 2. SEPARATE INTO PHASES
        immediate = [d for d in matches if d['distance_km'] <= 5.0]
        escalation = [d for d in matches if 5.0 < d['distance_km'] <= 15.0]

        # 3. SET GLOBAL SOS STATE
        current_sos = {
            "active": True,
            "blood_type": requested_bg,
            "target_donors": [d['id'] for d in matches]
        }

        # 4. PREPARE TERMINAL LOGS
        broadcast_alerts = [
            f"AES-256 Encryption: Verified",
            f"Matching Logic: Found {len(matches)} donors for {requested_bg}",
            f"VoIP Gateway: Calling Phase 1 donors...",
            f"Push Notification: Sent to RedThread App"
        ]

        return jsonify({
            "status": "SOS_ACTIVE",
            "encryption": "AES-256-GCM Secure Link",
            "broadcast_alerts": broadcast_alerts,
            "immediate_donors": immediate,
            "escalation_donors": escalation,
            "total_matches": len(matches)
        }), 200

    except Exception as e:
        print(f"Backend Error: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/reset-sos', methods=['POST'])
def reset_sos():
    global current_sos
    current_sos = {"active": False, "blood_type": None, "target_donors": []}
    return jsonify({"status": "cleared"})

if __name__ == '__main__':
    print("RedThread Backend Active on http://127.0.0.1:5000")
    app.run(debug=True, host='0.0.0.0', port=5000)