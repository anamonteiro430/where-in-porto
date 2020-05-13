import React from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import axios from 'axios'

export const Map = () => {

    const location = 'Rua Colégio do Sardão';

    const getcoor = () => {
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: location,
                key: 'AIzaSyDKSJYn438MtAcOYcfklmsbwAznUPIGd0o'
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <h3>Map here</h3>
            {getcoor()}


        </>
    )
}