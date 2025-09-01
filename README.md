# 🏠 Bangalore House Price Prediction

This project predicts house prices in Bangalore using a Machine Learning model (Flask backend) and a React + Tailwind frontend.

## 🚀 Tech Stack
- React + Tailwind CSS (frontend)
- Flask + scikit-learn (backend)
- ML model for price prediction

## 📂 Project Structure
Bangalore-House-Price-Prediction/
│── 📂 client/ # React frontend (UI)
│ ├── 📂 public/ # Static assets
│ ├── 📂 src/ # React components & pages
│ ├── 📄 package.json # Frontend dependencies
│ ├── 📄 tailwind.config.js # TailwindCSS config
│ └── 📄 postcss.config.js # PostCSS config
│
│── 📂 model/ # ML model & preprocessing
│ ├── 📄 banglore_home_prices_model.pickle # Trained model
│ ├── 📄 columns.json # Feature columns (locations, sqft, etc.)
│ └── 📄 house_price_prediction.ipynb # Training notebook
│
│── 📂 server/ # Flask backend
│ ├── 📄 server.py # Flask API
│ ├── 📄 util.py # Helper functions
│ └── 📄 requirements.txt # Backend dependencies
│
│── 📄 README.md # Project documentation

## ⚡ How to Run Locally
## ⚙️ Backend (Flask + ML Model)-

1. Go to server folder
   cd server

2. Create virtual environment
   python -m venv venv

3.  Activate venv
   . Windows:
    venv\Scripts\activate
   . Mac/Linux:
    source venv/bin/activate

5. Install dependencies
   pip install -r requirements.txt

6. Run backend
   python server.py


## 🎨 Frontend (React + Tailwind)-
1. Go to client folder
   cd client

2. Install dependencies
   npm install

3. Start frontend
   npm start


