import React, { useReducer } from 'react';
import stateCityList from './UsStateAndCity.json'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const CHANGE_STATE = "changeState"
const CHANGE_CITY = "changeCity"

function reducer(state, action) {

  switch (action.type) {
      case CHANGE_STATE:
      return {...state, stateId: action.payload.stateId};
      case CHANGE_CITY:
      return { ...state, cityId: action.payload.cityId};
      default:
      return state
  }
}

const initialState = {
  stateId: -1,
  cityId: null
}

export default function CitySelect() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setStateId(event) {
    dispatch({
      type: CHANGE_STATE,
      payload: {stateId: event.target.value}
    })
  }

  function setCityId(event) {
    dispatch({
      type: CHANGE_CITY,
      payload: {cityId: event.target.value}
    })
  }

  const statesOptionList = stateCityList.map((value)=>{
    return (<option 
    value={value.id} 
    key={value.id}>
      {value.state}
    </option>)
  })

  function getCityOption(){
    if (state.stateId == -1){
      return []
    }

    return stateCityList[state.stateId].cities.map((value)=>{
      return (<option 
        value={value.id} 
        key={value.id}>
          {value.city}
      </option>)
    })
  }

  const disableStateSelect = state.stateId == -1

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>US State</Form.Label>
          <Form.Select defaultValue="-1" onChange={setStateId}>
            <option value="-1">Choose state...</option>
            {statesOptionList}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>US City</Form.Label>
          <Form.Select 
            defaultValue="Choose..." 
            onChange={setCityId} 
            disabled={disableStateSelect}>
              <option>Choose city...</option>
              {getCityOption()}
          </Form.Select>
        </Form.Group>
      </Row>
    </Form>
  )
}