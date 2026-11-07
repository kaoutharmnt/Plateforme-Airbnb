export function getOpenReservations (reservations){
    return reservations.filter(
        reservations => reservations.status_reservation === "OPEN"
    );
};
export function getReservationDateDebut (reservations, date_debut){
    return reservations.filter(
        reservations => reservations.date_debut === date_debut
    );
};
export function getReservationPrixTotal (reservations, prix_total){
    return reservations.filter(
        reservations => reservations.prix_total === prix_total
    )
};
export function getReservationsByID (reservations, id_reservation){
    return reservations.find(
        reservations => reservations.id_reservation === id_reservation
    );
}