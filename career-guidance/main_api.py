from fastapi import FastAPI
import joblib
import pandas as pd
import numpy as np

app = FastAPI()

# Load models from ai_models/
kmeans = joblib.load("ai_models/kmeans_model.pkl")
sbert_model = joblib.load("ai_models/sbert_model.pkl")
career_data = pd.read_csv("ai_models/enhanced_career_data.csv")

@app.post("/predict-career")
async def predict_career(skills: str, interests: str):
    user_embedding = sbert_model.encode(skills + " " + interests)
    user_cluster = kmeans.predict([user_embedding])[0]
    cluster_careers = career_data[career_data["Cluster"] == user_cluster]
    cluster_careers["Similarity"] = cluster_careers["Skills_Interests_Embedding"].apply(
        lambda x: np.dot(user_embedding, x)
    )
    top_career = cluster_careers.sort_values("Similarity", ascending=False).iloc[0]
    return {
        "role": top_career["Role"],
        "required_skills": top_career["Skills"].split(", "),
        "similarity_score": float(top_career["Similarity"])
    }