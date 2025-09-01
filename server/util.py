import json
import pickle
import os
import numpy as np

__location = None
__data_columns = None
__model = None

def get_estimated_price(location,sqft,bhk,bath):
    try:
     loc_index = __data_columns.index(location.lower())
    except:
     loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bhk
    x[2] = bath
    if loc_index >= 0:
        x[loc_index] = 1

    return round(__model.predict([x])[0], 2)

def get_location_name():
    return __location

def load_save_artifacts():
    print("loading saved artifacts....start")
    global __location
    global __data_columns
    global __model
    
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    with open(os.path.join(current_dir, "artifacts", "columns.json"), "r") as f:
        __data_columns = json.load(f)['data_columns']
        __location = __data_columns[3:]
    
    with open(os.path.join(current_dir, "artifacts", "banglore_home_prices_model.pickle"), "rb") as f:
        __model = pickle.load(f)
    print("loading saved artifacts....done")

if __name__ == '__main__':
    load_save_artifacts()
    print(get_location_name())
    print(get_estimated_price('1st Phase JP Nagar',1000, 3, 3)) 
    print(get_estimated_price('1st Phase JP Nagar',1000, 2, 2))
    print(get_estimated_price('Kalhalli',1000, 2, 2))
    print(get_estimated_price('Ejipura',1000, 2, 2))