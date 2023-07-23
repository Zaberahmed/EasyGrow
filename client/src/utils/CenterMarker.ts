import { Position } from 'geojson';

export function CenterMarker(array: Position[][]) {
  const array1 = array[0];

  var sumOfLongitude = 0;
  var sumOfLatitude = 0;
  for (let i = 0; i < array1.length; i++) {
    const longitude = array1[i][0];
    sumOfLongitude += longitude;
    const latitude = array1[i][1];
    sumOfLatitude += latitude;
  }
  var avarage1 = sumOfLongitude / array1.length;
  var avarage2 = sumOfLatitude / array1.length;
  return [avarage1, avarage2];
  //   console.log(sumOfLongitude, sumOfLatitude, avarage);
}
