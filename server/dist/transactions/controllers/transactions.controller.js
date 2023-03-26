"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsController = void 0;
const common_1 = require("@nestjs/common");
const getAll_request_1 = require("../dto/getAll.request");
const transactions_service_1 = require("../services/transactions.service");
let TransactionsController = class TransactionsController {
    constructor(TransactionsService) {
        this.TransactionsService = TransactionsService;
    }
    getAllTransactions(data) {
        return this.TransactionsService.getAllTransactions(data);
    }
};
__decorate([
    (0, common_1.Get)('getAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getAll_request_1.GetAllRequest]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "getAllTransactions", null);
TransactionsController = __decorate([
    (0, common_1.Controller)('transactions'),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsController);
exports.TransactionsController = TransactionsController;
//# sourceMappingURL=transactions.controller.js.map