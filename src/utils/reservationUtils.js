export function getOpenReservations (reservations){
    return reservations.filter(
        reservations => reservations.status_reservation === "OPEN"
    );
}