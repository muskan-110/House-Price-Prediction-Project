# 🏠 Bangalore House Price Prediction

This project predicts house prices in Bangalore using a Machine Learning model (Flask backend) and a React + Tailwind frontend.

## 🚀 Tech Stack
- React + Tailwind CSS (frontend)
- Flask + scikit-learn (backend)
- ML model for price prediction

## 📂 Project Structure
📦 Bangalore-House-Price-Prediction
│
├── 📁 client/              # React frontend (UI)
│   ├── public/             # Static files
│   ├── src/                # React components
│   ├── package.json        # Frontend dependencies
│   ├── tailwind.config.js  # TailwindCSS config
│   └── postcss.config.js   # PostCSS config
│
├── 📁 model/               # ML model + preprocessing
│   ├── banglore_home_prices_model.pickle   # Trained ML model
│   ├── columns.json        # Feature columns (locations, sqft, etc.)
│   └── house_price_prediction.ipynb   # Jupyter notebook (training)
│
├── 📁 server/              # Flask backend
│   ├── artifacts/          # Any training/exported data
│   ├── server.py           # Flask API
│   ├── util.py             # Helper functions
│   └── requirements.txt    # Backend dependencies
│
└── README.md

## ⚡ How to Run Locally
 ⚙️ Backend (Flask + ML Model)-

# Go to server folder
cd server

# Create virtual environment
python -m venv venv

# Activate venv
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run backend
python server.py


🎨 Frontend (React + Tailwind)-
# Go to client folder
cd client

# Install dependencies
npm install

# Start frontend
npm start


