import readline from "node:readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validCoordinates (lat,lon) => {
    if (lat < -90 || lat > 90) {
        return false;
    }
    if (lon < -180 || lon > 180) {
        return false;
    }
    return true;
    }

    rl.question('Enter latitude: ', (lat) => {
       console.log(`Latitude: ${lat}`); 
       rl.close();
    });

    