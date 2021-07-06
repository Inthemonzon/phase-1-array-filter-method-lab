/*function findMatching(drivers, name){
    const newDrivers = drivers.filter( function(driver) {return driver.toLowercase() === name.toLowercase()});
    return newDrivers;
}*/

function findMatching(drivers, name) {
    let newDrivers = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return newDrivers;
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.substring(0, name.length) === name.substring(0, name.length))
}

function matchName(drivers, name) {
    return drivers.filter(function(driver) { return driver.name === name });
}