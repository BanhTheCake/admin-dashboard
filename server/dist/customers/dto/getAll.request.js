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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllRequest = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const sortType = ['asc', 'desc'];
class GetAllRequest {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], GetAllRequest.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], GetAllRequest.prototype, "pageSize", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetAllRequest.prototype, "field", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(sortType),
    __metadata("design:type", String)
], GetAllRequest.prototype, "sort", void 0);
exports.GetAllRequest = GetAllRequest;
//# sourceMappingURL=getAll.request.js.map