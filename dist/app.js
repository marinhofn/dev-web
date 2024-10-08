"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./config/server");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const estacionamentoRoutes_1 = __importDefault(require("./routes/estacionamentoRoutes"));
const reservaRoutes_1 = __importDefault(require("./routes/reservaRoutes"));
const vagaRoutes_1 = __importDefault(require("./routes/vagaRoutes"));
const veiculoRoutes_1 = __importDefault(require("./routes/veiculoRoutes"));
const app = (0, server_1.createServer)();
app.use('/user', userRoutes_1.default);
app.use('/auth', authRoutes_1.default);
app.use('/estacionamento', estacionamentoRoutes_1.default);
app.use('/reserva', reservaRoutes_1.default);
app.use('/vaga', vagaRoutes_1.default);
app.use('/veiculo', veiculoRoutes_1.default);
exports.default = app;
