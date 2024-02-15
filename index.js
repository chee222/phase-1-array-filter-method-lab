// Code your solution here
const matchingDrivers = ['Bobby', 'Sammy' , 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    const matchingDrivers = [];
  
    for (let i = 0; i < drivers.length; i++) {
      const driverName = drivers[i].toLowerCase();
  
      if (driverName === name.toLowerCase()) {
        matchingDrivers.push(drivers[i]);
      }
    }
  
    return matchingDrivers;
  }
  
  function fuzzyMatch(drivers, pattern) {
    const members = [];
  
    for (const driver of drivers) {
      if (driver.toLowerCase().startsWith(pattern.toLowerCase())) {
        members.push(driver);
      }
    }
  
    return members;
  }
  
  const drivers = ['Bobby', 'Sammy', 'Sally', 'bobby'];
  const pattern = 'Sa';
  
  const members = fuzzyMatch(drivers, pattern);
  
  if (members.length === 0) {
    console.log('No matching members found.');
  } else {
    console.log('Matching members:', members);
  }
  
  console.log(fuzzyMatch(['Sammy', 'Sarah', 'Sally'], 'Sa'));
  console.log(fuzzyMatch(['Sammy', 'Sally'], 'y'));
  console.log(fuzzyMatch(['Sammy'], 'mm'));

  function matchName(drivers, nameToCheck) {
    const matches = [];
  
    for (let i = 0; i < drivers.length; i++) {
      if (drivers[i].name === nameToCheck) {
        matches.push(drivers[i]);
      }
    }
  
    return matches;
  }
  [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh'
    },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay'
    }
  ]
  const nameToCheck = 'Bobby';
  const matches = matchName(drivers, nameToCheck);
  console.log(matches);