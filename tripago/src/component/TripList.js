import React, {useState} from 'react'

function TripList() {
    const [trip, setTrip] = useState([])
    console.log(trip)

    // fetch('https://3000-joshalhassa-reactfireba-cqdbxx8bw01.ws-eu74.gitpod.io/trips')
        .then(response => response.json())
        .then(json => setTrip(json))

    return (
        <div>Trip List</div>
  )
}

export default TripList