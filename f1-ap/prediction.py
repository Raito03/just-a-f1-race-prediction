import numpy as np
import pandas as pd
# from xgboost import XGBClassifier
import xgboost as xgb

# Load the saved model
loaded_model = xgb.XGBClassifier()
loaded_model.load_model('./models/XGB_model_without_circuitID.json')


formula_1 = pd.read_csv('./assets/formula_1_result.csv')
df_circuits = pd.read_csv('./assets/df_circuits_result.csv')
df_drivers = pd.read_csv('./assets/df_drivers_result.csv')


def predict_positions(drivers, grids):
    predictions = []
    for driver_name, grid in zip(drivers, grids):
        try:
            driver_id = df_drivers[df_drivers['Name']
                                   == driver_name]['driverId'].iloc[0]

            # Find the most recent constructorId for the driver
            constructor_id = formula_1[formula_1['driverId'] == driver_id].sort_values(
                'date', ascending=False)['constructorId'].iloc[0]

            # Prepare input features for prediction
            input_data = pd.DataFrame({
                'prev_position': [formula_1[formula_1['driverId'] == driver_id].sort_values('date', ascending=False)['prev_position'].iloc[0]],
                'grid': [grid],
                'constructorId': [constructor_id],
                'driverId': [driver_id]
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

    # Resolve ties by prioritizing based on probability (Descending order)
    predictions.sort(key=lambda x: (
        x['PredictedPosition'], -x['Probability']))
    seen_positions = set()  # Set to store predicted positions
    final_predictions = []

    for pred in predictions:
        if pred['PredictedPosition'] not in seen_positions:
            final_predictions.append(pred)
            seen_positions.add(pred['PredictedPosition'])
        else:
            pred['PredictedPosition'] += 1  # Move it to the next position
            if pred['PredictedPosition'] not in seen_positions:
                final_predictions.append(pred)
                seen_positions.add(pred['PredictedPosition'])

    return pd.DataFrame(final_predictions)


# Example Usage
# (Replace with your actual driver names, grid positions and circuit)
drivers = ['Max Verstappen', 'Charles Leclerc', 'George Russell', 'Carlos Sainz', 'Sergio Pérez', 'Fernando Alonso', 'Lando Norris', 'Oscar Piastri', 'Lewis Hamilton',
           'Nico Hülkenberg', 'Yuki Tsunoda', 'Lance Stroll', 'Alexander Albon', 'Daniel Ricciardo', 'Kevin Magnussen', 'Valtteri Bottas', 'Logan Sargeant', 'Esteban Ocon', 'Pierre Gasly']

grids = list(range(1, 21))  # Example grid positions

# predicted_positions = predict_positions(drivers, grids)
# print(predicted_positions)
