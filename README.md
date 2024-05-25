# contact-management-app
This project is a contact management app built with ReactJS, TypeScript, TailwindCSS, Redux, React Router v6, and React Query. It also features a dashboard with charts and maps using data from the COVID-19 API.

## Features
- Add, edit, and delete contacts
- View a list of all contacts
- Display COVID-19 statistics on a dashboard with charts and maps

### Technologies Used
- ReactJS
- TypeScript
- TailwindCSS
- Redux
- React Router v6
- React Query
- Axios
- Chart.js
- React-Leaflet

### Prerequisites
- Node.js
- npm

### Installation
#1. Clone the repository:
- git clone https://github.com/Sameeksha002/contact-management-app.git
- cd contact-management-app

#2. Install dependencies:
- npm install
- npm install tailwindcss@latest postcss@latest autoprefixer@latest
- npm install @reduxjs/toolkit react-redux react-router-dom@6 react-query axios react-chartjs-2 chart.js leaflet react-leaflet

#3. Run the app:
- npm start

#4. Open your browser and navigate to:
- http://localhost:3000

#5. To build the app for production:
- npm run build

### API Endpoints Used
Worldwide data of cases: https://disease.sh/v3/covid-19/all
Country-specific data of cases: https://disease.sh/v3/covid-19/countries
Graph data for cases with date: https://disease.sh/v3/covid-19/historical/all?lastdays=all

### Project Structure
src/
├── api/
│   └── covidApi.ts
├── components/
│   ├── ContactForm.tsx
│   ├── ContactList.tsx
│   ├── ContactDetails.tsx
│   ├── Dashboard.tsx
│   ├── LineChart.tsx
│   └── Map.tsx
├── pages/
│   ├── ContactsPage.tsx
│   └── DashboardPage.tsx
├── redux/
│   ├── contactsSlice.ts
│   └── store.ts
├── App.tsx
├── index.tsx
└── index.css
