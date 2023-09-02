import React from 'react'
import '../styles/home.css'
import { TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/BeautifulDatePicker.css'; // Create your own CSS file for custom styling
import { useState } from 'react';
import { borders } from '@mui/system';


export default function Home() {
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChange = (event) => {
    setPrice(event.target.value);
  };
  const handleChange2 = (event) => {
    setType(event.target.value);
  };

  return (
    <div className='mainContainer'>
        <div className='topContainer'>
            <p className='mainText'>Search properties to rent</p>
            <div class="input-box">
              <i class="uil uil-search"></i>
              <input type="text" placeholder="Search here..." />
            </div>
        </div>

        <div className='middleContainer'>
          <form onSubmit={ (ev) => {ev.preventDefault()}}>
            <div className='child1'>
            <TextField label="Location" color="secondary"  />
            </div>
            <div className='child2'>
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
              placeholderText="Select a date"
              className="custom-datepicker"
            />
            </div>
            <div className='child3'>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={price}
              label="Price"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </div>
            <div className='child4'>
            <InputLabel id="demo-simple-select-label-2">Property Type</InputLabel>
            <Select
              labelId="demo-simple-select-label-2"
              id="demo-simple-select-2"
              value={type}
              label="Property Type"
              onChange={handleChange2}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </div>
            <div className='child5'>
            <button class="button">Search</button>
            </div>
          </form>
        </div>

        <div className='bottomContainer'>

        
          <div class="wrapper">
            <h1>PHILIPPINES</h1>
            <div class="image i1"></div>
            <div class="details"><h1><em>Boracay Island</em></h1>
            <h2>Surfer's Home</h2>
            <p>3 Days - 2 Nights</p></div>
            <h1>£750</h1>
          </div>

          <div class="wrapper">
            <h1>THAILAND</h1>
            <div class="image i2"></div>
            <div class="details"><h1><em>Mae Hong Son</em></h1>
            <h2>Farmer's Walk</h2>
            <p>4 Days - 3 Nights</p></div>
            <h1>£950</h1>
          </div>

        <div class="wrapper">
          <h1>JAPAN</h1>
          <div class="image i3"></div>
          <div class="details"><h1><em>Tokyo</em></h1>
          <h2>Mandarin Oriental</h2>
          <p>3 Days - 2 Nights</p></div>
          <h1>£1250</h1>
        </div>

      <div class="wrapper">
        <h1>KOREA</h1>
        <div class="image i1"></div>
        <div class="details"><h1><em>Seoul</em></h1>
        <h2>Ramada Hotel</h2>
        <p>3 Days - 2 Nights</p></div>
        <h1>£1250</h1>
      </div>

      <div class="wrapper">
        <h1>PHILIPPINES</h1>
        <div class="image i2"></div>
        <div class="details"><h1><em>Boracay Island</em></h1>
        <h2>Surfer's Home</h2>
        <p>3 Days - 2 Nights</p></div>
        <h1>£750</h1>
      </div>

    <div class="wrapper">
      <h1>THAILAND</h1>
      <div class="image i3"></div>
      <div class="details"><h1><em>Mae Hong Son</em></h1>
      <h2>Farmer's Walk</h2>
      <p>4 Days - 3 Nights</p></div>
      <h1>£750</h1>
    </div>

    <div class="wrapper">
      <h1>PHILIPPINES</h1>
      <div class="image i1"></div>
      <div class="details"><h1><em>Boracay Island</em></h1>
      <h2>Surfer's Home</h2>
      <p>3 Days - 2 Nights</p></div>
      <h1>£750</h1>
    </div>

    <div class="wrapper">
      <h1>THAILAND</h1>
      <div class="image i2"></div>
      <div class="details"><h1><em>Mae Hong Son</em></h1>
      <h2>Farmer's Walk</h2>
      <p>4 Days - 3 Nights</p></div>
      <h1>£950</h1>
    </div>
        </div>
    </div>
  )
}
