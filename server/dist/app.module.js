"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const customers_module_1 = require("./customers/customers.module");
const database_module_1 = require("./database/database.module");
const model_module_1 = require("./Model/model.module");
const overviewStats_module_1 = require("./overviewStats/overviewStats.module");
const products_module_1 = require("./products/products.module");
const transactions_module_1 = require("./transactions/transactions.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            model_module_1.ModelModule,
            products_module_1.ProductsModule,
            customers_module_1.CustomersModule,
            transactions_module_1.TransactionsModule,
            overviewStats_module_1.OverallStatsModule,
        ],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map