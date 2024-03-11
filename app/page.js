"use client";
import { useState } from 'react';
import { global } from 'styled-jsx/css';

const IndexPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch age
    const agifyResponse = await fetch(` https://api.agify.io?name=meelad`);
    const agifyData = await agifyResponse.json();
    setAge(agifyData.age);

    // Fetch gender
    const genderizeResponse = await fetch(` https://api.genderize.io?name=luc`);
    const genderizeData = await genderizeResponse.json();
    setGender(genderizeData.gender);

    // Fetch country
    const nationalizeResponse = await fetch(` https://api.nationalize.io?name=nathaniel`);
    const nationalizeData = await nationalizeResponse.json();
    setCountry(nationalizeData.country);
  };

  return (
    <div>
      <h1>Guess Age, Gender, and Country</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {age !== null && (
        <div>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Guessed Age:</strong> {age}
          </p>
          <p>
            <strong>Guessed Gender:</strong> {gender}
          </p>
          <p>
            <strong>Guessed Country:</strong> {country}
          </p>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
