import numpy as np
import pandas as pd
from sklearn.preprocessing import LabelEncoder
# from xgboost import XGBClassifier
import xgboost as xgb

# Load the saved model
loaded_model = xgb.XGBClassifier()
loaded_model.load_model('./models/XGBoost_model_with_CircuitId.xgb')

# Load necessary data
formula_1 = pd.read_csv('./assets/formula_1_result.csv')
df_circuits = pd.read_csv('./assets/df_circuits_result.csv')
df_drivers = pd.read_csv('./assets/df_drivers_result.csv')

# Initialize LabelEncoder
le = LabelEncoder()
le.fit(formula_1['position'])


def predict_positions_new_model(drivers, grids, circuit_loc):
    predictions = []
    for driver_name, grid in zip(drivers, grids):
        try:
            driver_id = df_drivers[df_drivers['Name']
                                   == driver_name]['driverId'].iloc[0]
            circuit_id = df_circuits[df_circuits['location']
                                     == circuit_loc]['circuitId'].iloc[0]
            # Find the most recent constructorId for the driver
            constructor_id = formula_1[formula_1['driverId'] == driver_id].sort_values(
                'date', ascending=False)['constructorId'].iloc[0]

            # Prepare input features for prediction
            input_data = pd.DataFrame({
                'driverId': [driver_id],
                'constructorId': [constructor_id],
                'grid': [grid],
                'circuitId': [circuit_id],
                'Length': [df_circuits[df_circuits['circuitId'] == circuit_id]['Length'].iloc[0]],
                'Turns': [df_circuits[df_circuits['circuitId'] == circuit_id]['Turns'].iloc[0]],
                'Constructor Experience': [formula_1[formula_1['driverId'] == driver_id].sort_values('date', ascending=False)['Constructor Experience'].iloc[0]],
                'Driver Experience': [formula_1[formula_1['driverId'] == driver_id].sort_values('date', ascending=False)['Driver Experience'].iloc[0]],
                'prev_position': [formula_1[formula_1['driverId'] == driver_id].sort_values('date', ascending=False)['prev_position'].iloc[0]],
            })

            # Get predicted probabilities for all positions
            predicted_probs = loaded_model.predict_proba(input_data)[0]

            # # Find the position with the highest probability (considering ties)
            predicted_position = np.argmax(predicted_probs)
            # # Adjust to ensure the position starts from 1
            predicted_position += 1
            # Make prediction using the trained model
            predictions.append({
                'DriverName': driver_name,
                'Grid': grid,
                'PredictedPosition': predicted_position,
                # Store probability
                'Probability': predicted_probs[predicted_position - 1]
            })
        except IndexError:
            print(f"Driver {driver_name} not found or insufficient data.")

    return pd.DataFrame(sorted(predictions, key=lambda x: x['PredictedPosition']))


# Example usage (replace with your actual data)
drivers = ['Max Verstappen', 'Charles Leclerc', 'George Russell', 'Carlos Sainz', 'Sergio Pérez', 'Fernando Alonso', 'Lando Norris', 'Oscar Piastri', 'Lewis Hamilton',
           'Nico Hülkenberg', 'Yuki Tsunoda', 'Lance Stroll', 'Alexander Albon', 'Daniel Ricciardo', 'Kevin Magnussen', 'Valtteri Bottas', 'Logan Sargeant', 'Esteban Ocon', 'Pierre Gasly']

grids = list(range(1, 21))
circuit_location = 'Sakhir'

# predicted_positions = predict_positions_new_model(
#     drivers, grids, circuit_location)
# print(predicted_positions)
