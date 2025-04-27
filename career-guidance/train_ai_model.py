import pandas as pd
import joblib
from sentence_transformers import SentenceTransformer
from sklearn.cluster import KMeans
import numpy as np
import sys

# Load dataset (update path to your CSV)
data = pd.read_csv("your_dataset.csv")  

# Train and save models
sbert_model = SentenceTransformer('all-MiniLM-L6-v2')
data["Skills_Interests_Embedding"] = data.apply(
    lambda x: sbert_model.encode(x["Skills"] + " " + x["Interests"]), axis=1
)
kmeans = KMeans(n_clusters=20)
data["Cluster"] = kmeans.fit_predict(list(data["Skills_Interests_Embedding"]))

# Save to ai_models/ folder
joblib.dump(kmeans, "ai_models/kmeans_model.pkl")
joblib.dump(sbert_model, "ai_models/sbert_model.pkl")
data.to_csv("ai_models/enhanced_career_data.csv", index=False)
if len(sys.argv) > 1:
    skills = sys.argv[1]  # Get skills from PHP
    interests = sys.argv[2]
    print("Starting model training...")  # Add at the start
data = pd.read_csv("your_dataset.csv")
print(f"Dataset loaded with {len(data)} entries")  # Add after loading data

sbert_model = SentenceTransformer('all-MiniLM-L6-v2')
print("Generating embeddings...")  # Add before heavy computations
data["Skills_Interests_Embedding"] = data.apply(
    lambda x: sbert_model.encode(x["Skills"] + " " + x["Interests"]), axis=1
)
print("Embeddings generated. Clustering...")

kmeans = KMeans(n_clusters=20)
data["Cluster"] = kmeans.fit_predict(list(data["Skills_Interests_Embedding"]))
print("Models trained. Saving files...")

joblib.dump(kmeans, "ai_models/kmeans_model.pkl")
joblib.dump(sbert_model, "ai_models/sbert_model.pkl")
data.to_csv("ai_models/enhanced_career_data.csv", index=False)
print("Training complete! Models saved to ai_models/")
    print(f"Recommended role: Data Scientist")  # Example output
