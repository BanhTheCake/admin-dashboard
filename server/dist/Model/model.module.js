"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const OverallStats_entity_1 = require("./entities/OverallStats.entity");
const ProductStat_entity_1 = require("./entities/ProductStat.entity");
const Products_entity_1 = require("./entities/Products.entity");
const Users_entity_1 = require("./entities/Users.entity");
const transactions_entity_1 = require("./entities/transactions.entity");
const AffiliateStats_entity_1 = require("./entities/AffiliateStats.entity");
let ModelModule = class ModelModule {
};
ModelModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [
            {
                provide: 'OVERALL_STATS',
                useFactory: (connection) => connection.model('overallStats', OverallStats_entity_1.OverallStatsSchema),
                inject: ['DATABASE_CONNECTION'],
            },
            {
                provide: 'PRODUCT_STATS',
                useFactory: (connection) => connection.model('productStats', ProductStat_entity_1.ProductStatsSchema),
                inject: ['DATABASE_CONNECTION'],
            },
            {
                provide: 'PRODUCTS',
                useFactory: (connection) => connection.model('products', Products_entity_1.ProductsSchema),
                inject: ['DATABASE_CONNECTION'],
            },
            {
                provide: 'USERS',
                useFactory: (connection) => connection.model('users', Users_entity_1.UsersSchema),
                inject: ['DATABASE_CONNECTION'],
            },
            {
                provide: 'TRANSACTIONS',
                useFactory: (connection) => connection.model('transactions', transactions_entity_1.TransactionsSchema),
                inject: ['DATABASE_CONNECTION'],
            },
            {
                provide: 'AFFILIATE_STATS',
                useFactory: (connection) => connection.model('affiliateStats', AffiliateStats_entity_1.AffiliateStatsSchema),
                inject: ['DATABASE_CONNECTION'],
            },
        ],
        exports: [
            'OVERALL_STATS',
            'PRODUCT_STATS',
            'PRODUCTS',
            'USERS',
            'TRANSACTIONS',
            'AFFILIATE_STATS',
        ],
    })
], ModelModule);
exports.ModelModule = ModelModule;
//# sourceMappingURL=model.module.js.map