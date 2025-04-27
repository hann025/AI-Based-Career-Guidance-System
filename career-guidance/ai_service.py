from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd
import numpy as np

app = FastAPI()

# Allow CORS (for React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["POST"],
)

# Load AI models
kmeans = joblib.load("ai_models/kmeans_model.pkl")
sbert_model = joblib.load("ai_models/sbert_model.pkl")
career_data = pd.read_csv("ai_models/enhanced_career_data.csv")

@app.post("/ask-ai")
async def ask_ai(skills: str, interests: str):
    user_embedding = sbert_model.encode(skills + " " + interests)
    user_cluster = kmeans.predict([user_embedding])[0]
    cluster_careers = career_data[career_data["Cluster"] == user_cluster]
    cluster_careers["Similarity"] = cluster_careers["Skills_Interests_Embedding"].apply(
        lambda x: np.dot(user_embedding, x)
    )
    top_career = cluster_careers.sort_values("Similarity", ascending=False).iloc[0]
    return {
        "role": top_career["Role"],
        "skills_needed": top_career["Skills"].split(", "),
        "confidence": float(top_career["Similarity"])
    }