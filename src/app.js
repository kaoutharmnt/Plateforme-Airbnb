import express from "express";
import { reservations } from './data/reservation.js';
import {
    getOpenReservations
} from './utils/reservationUtils.js';

const app = express();

console.log("Tous les tickets", reservations);
console.log("Les reservations ouverts", getOpenReservations(reservations));

export default app;