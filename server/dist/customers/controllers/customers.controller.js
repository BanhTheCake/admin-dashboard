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
exports.CustomersController = void 0;
const common_1 = require("@nestjs/common");
const getAll_request_1 = require("../dto/getAll.request");
const customers_service_1 = require("../services/customers.service");
let CustomersController = class CustomersController {
    constructor(CustomersService) {
        this.CustomersService = CustomersService;
    }
    getAllCustomers(data) {
        return this.CustomersService.getAllCustomers(data);
    }
    getGeography() {
        return this.CustomersService.getGeography();
    }
    getAllAdmins() {
        return this.CustomersService.getAllAdmins();
    }
    getAllUserPerformance(id) {
        return this.CustomersService.getAllUserPerformance(id);
    }
    getDashboard() {
        return this.CustomersService.getDashboard();
    }
};
__decorate([
    (0, common_1.Get)('getAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getAll_request_1.GetAllRequest]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "getAllCustomers", null);
__decorate([
    (0, common_1.Get)('geography'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "getGeography", null);
__decorate([
    (0, common_1.Get)('admins'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "getAllAdmins", null);
__decorate([
    (0, common_1.Get)('performance/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "getAllUserPerformance", null);
__decorate([
    (0, common_1.Get)('/dashboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "getDashboard", null);
CustomersController = __decorate([
    (0, common_1.Controller)('customers'),
    __metadata("design:paramtypes", [customers_service_1.CustomersService])
], CustomersController);
exports.CustomersController = CustomersController;
//# sourceMappingURL=customers.controller.js.map