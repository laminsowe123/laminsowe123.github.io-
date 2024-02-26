async function getLocation(page) {
  let locationParams = {};

  if (navigator.geolocation) {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      locationParams = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      };
    } catch (error) {
      console.error('Geolocation permission denied:', error);
      // location defaults to central Bristol
      locationParams = {
        lat: 51.454514,
        lon: -2.587910
      };
    }
  } else {
    console.error('Geolocation is not supported by this browser.');
    // location defaults to central Bristol
    locationParams = {
      lat: 51.454514,
      lon: -2.587910
    };
  }

  location.href = `${page}?${new URLSearchParams(locationParams).toString()}`;
}