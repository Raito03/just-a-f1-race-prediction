# just-a-f1-race-prediction

## Description

2nd minor project on formula one race prediction

## Technologies Used

- **Frontend**:
  - React
  - Vite
  - CSS (or other styling solutions like styled-components)
- **Backend**:
  - Flask
  - Python

## Installation

To set up the entire project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/project-name.git
   cd project-name
   ```

2. **Set up the frontend**:
   Follow the instructions in the "Frontend" section .

3. **Set up the backend**:
   Follow the instructions in the "Backend" section.

---

## Frontend (React with Vite)

The frontend of this application is built using **React** and bundled with **Vite**. Vite provides faster build times and improved development experience compared to traditional bundlers like Webpack.

### Running the Frontend

1. Navigate to the frontend directory:

   ```bash
   cd f1-uu
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
    pnpm dev
   ```

This will start the frontend on `http://localhost:3000` (default port).

---

## Backend (Flask)

The backend is built using **Flask**, a lightweight Python web framework. The Flask API handles requests from the frontend and communicates with the database or other services.

### Running the Backend

1. Navigate to the backend directory:

   ```bash
   cd f1-ap
   ```

2. Create a virtual environment (recommended):

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

To start the backend server:

```bash
python app.py

```

or

```bash
flask run
```

This will run the Flask API on `http://127.0.0.1:5000` (default port).

---

![Screenshot (177)](https://github.com/user-attachments/assets/d2977ed2-0014-4798-91e9-6de4a3d9bb9f)
![Screenshot (178)](https://github.com/user-attachments/assets/79ab2443-91c7-409b-80e0-1c0d9da9f9fb)
