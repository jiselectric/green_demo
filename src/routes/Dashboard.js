import React from 'react'
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header.js';
import Typography from '@mui/material/Typography';
import { VegaLite } from 'react-vega'
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import { margin } from '@mui/system';

const Dashboard = () => {

  const [value, setValue] = React.useState('high');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const [time, setTime] = React.useState('Month');

  const changeTime = (event) => {
    setTime(event.target.value);
    console.log(event.target.value);
  }

  const barData = {
    values: [
    { Month: 'Jan', Total_Video_Minutes_Saved: 100, Symbol: 'Me' }, { Month: 'Jan', Total_Video_Minutes_Saved: 200, Symbol: 'Average_Time_by_Peer' }, 
    { Month: 'Feb', Total_Video_Minutes_Saved: 55, Symbol: 'Me' }, { Month: 'Feb', Total_Video_Minutes_Saved: 120, Symbol: 'Average_Time_by_Peer' },
    { Month: 'Mar', Total_Video_Minutes_Saved: 43, Symbol: 'Me' }, { Month: 'Mar', Total_Video_Minutes_Saved: 80, Symbol: 'Average_Time_by_Peer' },
    { Month: 'Apr', Total_Video_Minutes_Saved: 91, Symbol: 'Me', }, { Month: 'Apr', Total_Video_Minutes_Saved: 75, Symbol: 'Average_Time_by_Peer' },
    { Month: 'May', Total_Video_Minutes_Saved: 81, Symbol: 'Me' }, { Month: 'May', Total_Video_Minutes_Saved: 23, Symbol: 'Average_Time_by_Peer' },
    { Month: 'Jun', Total_Video_Minutes_Saved: 53, Symbol: 'Me' }, { Month: 'Jun', Total_Video_Minutes_Saved: 45, Symbol: 'Average_Time_by_Peer' },
    { Month: 'Jul', Total_Video_Minutes_Saved: 19, Symbol: 'Me' },{  Month: 'Jul', Total_Video_Minutes_Saved: 102, Symbol: 'Average_Time_by_Peer' },
    { Month: 'Aug', Total_Video_Minutes_Saved: 87, Symbol: 'Me' }, { Month: 'Aug', Total_Video_Minutes_Saved: 136, Symbol: 'Average_Time_by_Peer' },
    { Month: 'Sept', Total_Video_Minutes_Saved: 52, Symbol: 'Me' }, { Month: 'Sept', Total_Video_Minutes_Saved: 119, Symbol: 'Average_Time_by_Peer' },
    { Month: 'Oct', Total_Video_Minutes_Saved: 61, Symbol: 'Me' }, { Month: 'Oct', Total_Video_Minutes_Saved: 245, Symbol: 'Average_Time_by_Peer' },
    { Month: 'Nov', Total_Video_Minutes_Saved: 70, Symbol: 'Me' }, { Month: 'Nov', Total_Video_Minutes_Saved: 80, Symbol: 'Average_Time_by_Peer' },
    { Month: 'Dec', Total_Video_Minutes_Saved: 65, Symbol: 'Me' }, { Month: 'Dec', Total_Video_Minutes_Saved: 64, Symbol: 'Average_Time_by_Peer' },
    ],
  }

  const spec = {
    width: 450,
    height: 280,
    mark: {'type': 'line', 'point': true},
    encoding: {
      x: { field: 'Month', type: 'ordinal', "sort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        'axis': { 'grid': false, 'labelAngle': 0 },
      },
      y: { field: 'Total_Video_Minutes_Saved', type: 'quantitative' },
     
      "color": 
      {"field": "Symbol", "type": "nominal", "scale": {"domain": ["Me", "Average_Time_by_Peer"],
        // "legend": {"labelColor": "#FFFFFF"}
      }
    },
    "config": {"legend": {"labelFontSize": 30}}
       // "range": ["#E3E3E3", "#66CC00"]
    },
    data: { name: 'values', }, // note: vega-lite data attribute is a plain object instead of an array

  }

  return(
    <div>
      <Header/>

      <Grid container justify="center" alignItems='center' style={{height: "5px", padding: 35}}>

        <Grid item xs={4}> 
          <Typography variant="h5" fontWeight='500'  style={{ color : '#2F4F4F', }}>
            Energy Saving Options
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h5" fontWeight='500' style={{  color : '#2F4F4F', }}>
            Energy Saving Dashboard
          </Typography>
        </Grid>

      </Grid>

      <Grid container>
        <Grid item xs={4.8}>

          <Box m={4.3}>
            <Typography variant="h6" fontWeight='500' style={{ color : '#708090'}}>
              Energy Friendly Viewing
            </Typography>

            <Box>
              <Switch style={{ color : '#1E90FF'}}></Switch>
            </Box>
          </Box>

          {/* <Box m={3.5}>
            <Switch style={{ color : '#1E90FF'}}></Switch>
          </Box>
           */}
          <Box m={5}>
            <Typography variant="h6" fontWeight='500' style={{  color : '#708090' }}>
              Tolerance Level
            </Typography>

            <Box>
              <FormGroup row>
                <RadioGroup aria-label="tolerance" name="tolerance" value={value} onChange={handleRadioChange} row>
                <FormControlLabel value="high" control={<Radio color="primary"/>} label="High" />
                <FormControlLabel value="moderate" control={<Radio color="primary" />} label="Moderate" />
                <FormControlLabel value="low" control={<Radio color="primary"/>} label="Low" />
                </RadioGroup>
              </FormGroup>
            </Box>
          </Box> 

            {/* <Box m={4.5}>
              <FormGroup row>
                <RadioGroup aria-label="tolerance" name="tolerance" value={value} onChange={handleRadioChange} row>
                <FormControlLabel value="high" control={<Radio color="primary"/>} label="High" />
                <FormControlLabel value="moderate" control={<Radio color="primary" />} label="Moderate" />
                <FormControlLabel value="low" control={<Radio color="primary"/>} label="Low" />
                </RadioGroup>
              </FormGroup>
            </Box> */}
        

        </Grid>

        <Grid item xs={7.2}>
          <div>
            <FormControl style={{ width: 300, margin: 33}} onChange={changeTime}>
              {/* <InputLabel variant="standard" htmlFor="uncontrolled-native"> */}
                <Typography variant="h6" fontWeight='500' style={{  color : '#708090', margin: 3.3 }}>
                  Time Frame
                </Typography>
              {/* </InputLabel> */}
              <NativeSelect
              defaultValue={10}
              inputProps={{
              name: 'time',
              id: 'uncontrolled-native',
              }}
              >
                <option value={10}> Month </option>
                <option value={20}> Week </option>
                <option value={30}> Day </option>
              </NativeSelect>
            </FormControl>
          </div>

          <VegaLite spec={spec} data={barData}/>

        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard