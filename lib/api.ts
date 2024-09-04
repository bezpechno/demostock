// lib/api.ts
import axios from 'axios';
import rateLimit from 'axios-rate-limit';

const api = rateLimit(
  axios.create(),
  { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 } // Максимум 2 запроса в секунду
);

export default api;