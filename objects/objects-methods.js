let restaurant = {
    name: "ASB",
    guestCapacity: 75,
    guestCount:0,
    checkAvailability: function(partySize) {
        return partySize <= (this.guestCapacity - this.guestCount)
    },
    seatParty: function(partySize) {
        this.guestCount += partySize
    },
    removeParty: function(partySize) {
        this.guestCount -= partySize
    }
}

//seatParty
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(12)
console.log(restaurant.checkAvailability(4))