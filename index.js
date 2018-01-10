let store = {drivers: [], passengers: [], trips: []}
let id = 0

class Driver {
  constructor(name) {
    this.id = ++id
    this.name = name
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    })
  }

  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    })
  }
}

class Passenger {
  constructor(name) {
    this.id = ++id
    this.name = name
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    })
  }

  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    })
  }

}

class Trip {
  constructor(driver, passenger) {
    this.id = ++id
    if (driver) {
      this.driverId = driver.id
    }
    if (passenger) {
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  setDriver(driver) {
    this.driverId = driver.id
  }

  setPassenger(passenger) {
    this.passengerId = passenger.id
  }

  passenger() {
    return store.passengers.find((passenger) => {
      return passenger.id === this.passengerId
    })
  }

  driver() {
    return store.drivers.find((driver) => {
      return driver.id === this.driverId
    })
  }
}
