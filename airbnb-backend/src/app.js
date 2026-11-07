import express from "express";
import { reservations } from './data/reservations.js';
import {
    getOpenReservations,
    getReservationDateDebut,
    getReservationsByID,
    getReservationPrixTotal
} from './utils/reservationUtils.js';

const app = express();

//  GET /api/reservations - Lister tous les reservations ou filtrer 
app.get('/api/reservations', (req, res) => {
    const { id_reservation, date_debut, date_fin, prix_total, status_reservation, id_user, id_logement } = req.query;
    let result = reservations;
    
    if (id_reservation) result = result.filter(t => t.id_reservation === id_reservation);
    if (date_debut) result = result.filter(t => t.date_debut === date_debut);
    if (date_fin) result = result.filter(t => t.date_fin === date_fin);
    if (prix_total) result = result.filter(t => t.prix_total === prix_total);
    if (status_reservation) result = result.filter(t => t.status_reservation === status_reservation);
    if (id_user) result = result.filter(t => t.id_user === id_user);
    if (id_logement) result = result.filter(t => t.id_logement === id_logement);
    
    return res.json(result);
});

// POST /api/reservations - Créer une nouvelle reservation
app.post('/api/reservations', (req, res) => {
    const { date_debut, date_fin, id_logement, id_user } = req.body;
    
    if (!date_debut || !date_fin || !id_logement || !id_user ) {
        return res.status(400).json({
            message: 'Ces informations sont obligatoires'
        });
    }

    const id = Math.max(...reservations.map(t => t.id), 0) + 1;
    const newReservation = {
        id_reservation,
        date_debut,
        date_fin,
        prix_total,
        status_reservation: "OPEN",
        id_user,
        id_logement
    };

    reservations.push(newReservation);
    return res.status(201).json(newReservation);
});

// PATCH /api/reservations/:id/status_reservation - Modifier uniquement le statut
app.patch('/api/reservations/:id/status_reservation', (req, res) => {
    const id = Number(req.params.id);
    const reservations = reservation.find(t => t.id_reservation === id);

    if (!reservations) {
        return res.status(404).json({ message: 'Reservation introuvable' });
    }

    const { status_reservation } = req.body;

    if (!status_reservation) {
        return res.status(400).json({ message: 'status obligatoire' });
    }

    reservations.status_reservation = status_reservation;
    return res.json(reservations);
});

console.log("Tous les tickets", reservations);
console.log("Les reservations ouverts", getOpenReservations(reservations));
console.log("Les reservation qui debutent le 13-1-2026", getReservationDateDebut(reservations,"13-1-2026"));
console.log("La reservation 1", getReservationsByID(reservations, 1));
console.log("Les reservation ou le prix total est 7000DH", getReservationPrixTotal(reservations, 7000));

export default app;