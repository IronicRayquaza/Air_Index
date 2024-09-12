import React, { useState } from 'react';
//import './App.css';

const App = () => {
  const [pm25, setPm25] = useState('');
  const [pm10, setPm10] = useState('');
  const [no2, setNo2] = useState('');
  const [so2, setSo2] = useState('');
  const [co, setCo] = useState('');
  const [aqi, setAqi] = useState(null);

  const handlePm25Change = (e) => setPm25(e.target.value);
  const handlePm10Change = (e) => setPm10(e.target.value);
  const handleNo2Change = (e) => setNo2(e.target.value);
  const handleSo2Change = (e) => setSo2(e.target.value);
  const handleCoChange = (e) => setCo(e.target.value);

  const calculateAqi = () => {
    const pm25Value = parseFloat(pm25);
    const pm10Value = parseFloat(pm10);
    const no2Value = parseFloat(no2);
    const so2Value = parseFloat(so2);
    const coValue = parseFloat(co);

    if (isNaN(pm25Value) || isNaN(pm10Value) || isNaN(no2Value) || isNaN(so2Value) || isNaN(coValue) ||
        pm25Value < 0 || pm10Value < 0 || no2Value < 0 || so2Value < 0 || coValue < 0) {
      alert('Please enter valid non-negative numbers for all pollutants.');
      return;
    }

    // Example calculation based on hypothetical formula
    const aqiPm25 = pm25Value * 0.5;
    const aqiPm10 = pm10Value * 0.4;
    const aqiNo2 = no2Value * 0.3;
    const aqiSo2 = so2Value * 0.2;
    const aqiCo = coValue * 0.1;

    const aqiValue = Math.max(aqiPm25, aqiPm10, aqiNo2, aqiSo2, aqiCo);
    setAqi(aqiValue.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Air Quality Index (AQI) Calculator</h1>
      <div className="input-group">
        <label htmlFor="pm25">PM2.5 Concentration (µg/m³):</label>
        <input
          type="number"
          id="pm25"
          value={pm25}
          onChange={handlePm25Change}
          placeholder="Enter PM2.5 concentration"
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="pm10">PM10 Concentration (µg/m³):</label>
        <input
          type="number"
          id="pm10"
          value={pm10}
          onChange={handlePm10Change}
          placeholder="Enter PM10 concentration"
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="no2">NO2 Concentration (µg/m³):</label>
        <input
          type="number"
          id="no2"
          value={no2}
          onChange={handleNo2Change}
          placeholder="Enter NO2 concentration"
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="so2">SO2 Concentration (µg/m³):</label>
        <input
          type="number"
          id="so2"
          value={so2}
          onChange={handleSo2Change}
          placeholder="Enter SO2 concentration"
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="co">CO Concentration (µg/m³):</label>
        <input
          type="number"
          id="co"
          value={co}
          onChange={handleCoChange}
          placeholder="Enter CO concentration"
          className="input"
        />
      </div>
      <button onClick={calculateAqi} className="button">Calculate AQI</button>
      {aqi !== null && (
        <div className="result">
          <h2>AQI: {aqi}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
