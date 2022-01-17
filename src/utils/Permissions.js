import React from 'react';
import {PermissionsAndroid} from 'react-native';

export const  requestLocationPermission = async (success, failure) => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        )
    
        if( granted === PermissionsAndroid.RESULTS.GRANTED ) {
            console.log("You can use the location")
    
            // Geolocation.getCurrentPosition(
            //     ({ coords }) => {
            //         console.log("coords: ", coords)
            //     },
            //     (errObject) => {
            //         console.log("message: ", errObject) // it gets thrown here
            //     }
            // )
        } else {
            console.log("You cannot use the location")
        }
      } catch (err) {
    
      }
    }


     // const [
  //   currentLongitude,
  //   setCurrentLongitude
  // ] = useState('...');
  // const [
  //   currentLatitude,
  //   setCurrentLatitude
  // ] = useState('...');
  // const [
  //   locationStatus,
  //   setLocationStatus
  // ] = useState('');

  // console.log('currentLongitude',currentLongitude);
  // console.log('currentLatitude',currentLatitude);

  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     if (Platform.OS === 'ios') {
  //       getOneTimeLocation();
  //       subscribeLocationLocation();
  //     } else {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //           {
  //             title: 'Location Access Required',
  //             message: 'This App needs to Access your location',
  //           },
  //         );
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           //To Check, If Permission is granted
  //           getOneTimeLocation();
  //           subscribeLocationLocation();
  //         } else {
  //           setLocationStatus('Permission Denied');
  //         }
  //       } catch (err) {
  //         console.warn(err);
  //       }
  //     }
  //   };
  //   requestLocationPermission();
  // }, []);

  // const getOneTimeLocation = () => {
  //   setLocationStatus('Getting Location ...');
  //   Geolocation.getCurrentPosition(
  //     //Will give you the current location
  //     (position) => {
  //       setLocationStatus('You are Here');

  //       //getting the Longitude from the location json
  //       const currentLongitude = 
  //         JSON.stringify(position.coords.longitude);

  //       //getting the Latitude from the location json
  //       const currentLatitude = 
  //         JSON.stringify(position.coords.latitude);

  //       //Setting Longitude state
  //       setCurrentLongitude(currentLongitude);
        
  //       //Setting Longitude state
  //       setCurrentLatitude(currentLatitude);
  //     },
  //     (error) => {
  //       setLocationStatus(error.message);
  //     },
  //     { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
  //   );
  // };

  // const subscribeLocationLocation = () => {
  //  Geolocation.watchPosition(
  //     (position) => {
  //       //Will give you the location on location change
        
  //       setLocationStatus('You are Here');
  //       console.log(position);

  //       //getting the Longitude from the location json        
  //       const currentLongitude =
  //         JSON.stringify(position.coords.longitude);

  //       //getting the Latitude from the location json
  //       const currentLatitude = 
  //         JSON.stringify(position.coords.latitude);

  //       //Setting Longitude state
  //       setCurrentLongitude(currentLongitude);

  //       //Setting Latitude state
  //       setCurrentLatitude(currentLatitude);
  //     },
  //     (error) => {
  //       setLocationStatus(error.message);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       timeout: 20000,
  //       maximumAge: 1000,
  //       distanceFilter: 10
  //     },
  //   );
  // };