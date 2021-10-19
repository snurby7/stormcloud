/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(1);
const nest_router_1 = __webpack_require__(5);
const account_module_1 = __webpack_require__(6);
const app_controller_1 = __webpack_require__(49);
const app_service_1 = __webpack_require__(50);
const authz_module_1 = __webpack_require__(51);
const budget_module_1 = __webpack_require__(57);
const category_module_1 = __webpack_require__(66);
const neo4j_module_1 = __webpack_require__(14);
const payee_module_1 = __webpack_require__(74);
const transaction_1 = __webpack_require__(81);
const transaction_module_1 = __webpack_require__(102);
const routes = [
    {
        path: 'v1',
        children: [
            account_module_1.AccountModule,
            budget_module_1.BudgetModule,
            category_module_1.CategoryModule,
            payee_module_1.PayeeModule,
            transaction_module_1.TransactionModule,
            transaction_1.TransactionSearchModule,
        ],
    },
    {
        path: 'v2',
        children: [],
    },
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nest_router_1.RouterModule.forRoutes(routes),
            account_module_1.AccountModule,
            authz_module_1.AuthzModule,
            budget_module_1.BudgetModule,
            category_module_1.CategoryModule,
            neo4j_module_1.Neo4jModule,
            payee_module_1.PayeeModule,
            transaction_module_1.TransactionModule,
            transaction_1.TransactionSearchModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("nest-router");

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountModule = void 0;
const common_1 = __webpack_require__(1);
const extensions_1 = __webpack_require__(7);
const neo4j_1 = __webpack_require__(10);
const account_controller_1 = __webpack_require__(35);
const account_service_1 = __webpack_require__(36);
let AccountModule = class AccountModule {
};
AccountModule = __decorate([
    (0, common_1.Module)({
        imports: [neo4j_1.Neo4jModule, extensions_1.CommonAccountModule],
        providers: [account_service_1.AccountService],
        exports: [account_service_1.AccountService],
        controllers: [account_controller_1.AccountController],
    })
], AccountModule);
exports.AccountModule = AccountModule;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ICommonAccountConverter = exports.IAccountLinkResponse = exports.IAccountLinkRequest = exports.IAccountLinkedNodeMeta = exports.IAccountLinkBreak = exports.IAccountBalanceRequest = exports.CommonAccountService = exports.CommonAccountModule = void 0;
var account_1 = __webpack_require__(8);
Object.defineProperty(exports, "CommonAccountModule", ({ enumerable: true, get: function () { return account_1.CommonAccountModule; } }));
Object.defineProperty(exports, "CommonAccountService", ({ enumerable: true, get: function () { return account_1.CommonAccountService; } }));
Object.defineProperty(exports, "IAccountBalanceRequest", ({ enumerable: true, get: function () { return account_1.IAccountBalanceRequest; } }));
Object.defineProperty(exports, "IAccountLinkBreak", ({ enumerable: true, get: function () { return account_1.IAccountLinkBreak; } }));
Object.defineProperty(exports, "IAccountLinkedNodeMeta", ({ enumerable: true, get: function () { return account_1.IAccountLinkedNodeMeta; } }));
Object.defineProperty(exports, "IAccountLinkRequest", ({ enumerable: true, get: function () { return account_1.IAccountLinkRequest; } }));
Object.defineProperty(exports, "IAccountLinkResponse", ({ enumerable: true, get: function () { return account_1.IAccountLinkResponse; } }));
var converters_1 = __webpack_require__(33);
Object.defineProperty(exports, "ICommonAccountConverter", ({ enumerable: true, get: function () { return converters_1.ICommonAccountConverter; } }));


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(28), exports);


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonAccountModule = void 0;
const common_1 = __webpack_require__(1);
const neo4j_1 = __webpack_require__(10);
const common_account_service_1 = __webpack_require__(24);
let CommonAccountModule = class CommonAccountModule {
};
CommonAccountModule = __decorate([
    (0, common_1.Module)({
        providers: [common_account_service_1.CommonAccountService],
        imports: [neo4j_1.Neo4jModule],
        exports: [common_account_service_1.CommonAccountService],
    })
], CommonAccountModule);
exports.CommonAccountModule = CommonAccountModule;


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Neo4jService = exports.Neo4jModule = void 0;
__exportStar(__webpack_require__(11), exports);
var neo4j_module_1 = __webpack_require__(14);
Object.defineProperty(exports, "Neo4jModule", ({ enumerable: true, get: function () { return neo4j_module_1.Neo4jModule; } }));
var neo4j_service_1 = __webpack_require__(16);
Object.defineProperty(exports, "Neo4jService", ({ enumerable: true, get: function () { return neo4j_service_1.Neo4jService; } }));
__exportStar(__webpack_require__(21), exports);


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(13), exports);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Neo4jModule = exports.neo4jProvider = void 0;
const common_1 = __webpack_require__(1);
const neo4j_driver_1 = __webpack_require__(15);
const neo4j_service_1 = __webpack_require__(16);
exports.neo4jProvider = {
    provide: 'Neo4j',
    useFactory: () => {
        return (0, neo4j_driver_1.driver)('bolt://localhost:7687', neo4j_driver_1.auth.basic('neo4j', 'mammoth'), {
            disableLosslessIntegers: true,
        });
    },
};
let Neo4jModule = class Neo4jModule {
};
Neo4jModule = __decorate([
    (0, common_1.Module)({
        exports: [neo4j_service_1.Neo4jService, 'Neo4j'],
        providers: [exports.neo4jProvider, neo4j_service_1.Neo4jService],
    })
], Neo4jModule);
exports.Neo4jModule = Neo4jModule;


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("neo4j-driver");

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var Neo4jService_1, _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Neo4jService = void 0;
const common_1 = __webpack_require__(1);
const neo4j_driver_1 = __webpack_require__(15);
const rxjs_1 = __webpack_require__(17);
const operators_1 = __webpack_require__(18);
const queries_1 = __webpack_require__(19);
const rxjs_2 = __webpack_require__(21);
let Neo4jService = Neo4jService_1 = class Neo4jService {
    constructor(neo4jDriver) {
        this.neo4jDriver = neo4jDriver;
        this.logger = new common_1.Logger(Neo4jService_1.name);
    }
    get rxSession() {
        return this.neo4jDriver.rxSession();
    }
    async executeStatement(statementProps) {
        var _a;
        const { query, params } = statementProps;
        const session = this.neo4jDriver.session();
        const result = await session.run(query, (_a = Object.assign({}, params)) !== null && _a !== void 0 ? _a : {});
        session.close();
        return result;
    }
    flattenStatementResult(queryResult, key) {
        if (queryResult.records.length === 0) {
            this.logger.warn('No results matched the given query.');
            return [];
        }
        return queryResult.records.map((record) => {
            const { properties } = record.get(key);
            if (!properties) {
                this.logger.warn(`There are results here, but no result is matched by ${key}`);
                return {};
            }
            return Object.assign({}, properties);
        });
    }
    removeTargetedRelationshipFromNode(id, label, relationship) {
        const statement = `
      MATCH (:${label} {id: $id})-[r:${relationship}]-()
      DELETE r
    `;
        return this.rxSession
            .writeTransaction((trx) => trx.run(statement, { id }).consume())
            .toPromise();
    }
    removeTargetedRelationshipFromNode$(id, label, relationship) {
        const statement = `
      MATCH (:${label} {id: $id})-[r:${relationship}]-()
      DELETE r
    `;
        return this.rxSession.writeTransaction((trx) => trx
            .run(statement, { id })
            .consume()
            .pipe((0, operators_1.map)((result) => ({
            message: `Deleted ${result.counters.updates().nodesDeleted || 0} record(s)`,
            isDeleted: result.counters.updates().nodesDeleted > 0,
            id,
        })), (0, operators_1.catchError)((err) => (0, rxjs_1.throwError)(err))));
    }
    async createRelationshipBetweenNodes(fromNode, toNode, relationship) {
        const { label: toLabel, budgetId: toBudgetId } = toNode, toNodeProps = __rest(toNode, ["label", "budgetId"]);
        const { label: fromLabel, budgetId: fromBudgetId } = fromNode, fromNodeProps = __rest(fromNode, ["label", "budgetId"]);
        if (toBudgetId !== fromBudgetId) {
            throw new Error('Error - Budget Id on the two nodes must match.');
        }
        return await this.executeStatement({
            query: `
        MATCH (fromNode:${fromLabel} {id: $fromNodeProps.id })
        MATCH (toNode:${toLabel} {id: $toNodeProps.id })
        CREATE (fromNode)-[r:${relationship}]->(toNode)
        RETURN r
      `,
            params: {
                toNodeProps,
                fromNodeProps,
            },
        });
    }
    createRelationshipBetweenNodes$(fromNode, relationship, toNode) {
        const relationshipKey = 'relationshipKey';
        const { query, params } = queries_1.Neo4jCommonQueries.createRelationship(relationshipKey, fromNode, relationship, toNode);
        return this.rxSession.writeTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, rxjs_2.getRecordsByKey)(relationshipKey), (0, operators_1.catchError)((err) => (0, rxjs_1.throwError)(err))));
    }
};
Neo4jService = Neo4jService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('Neo4j')),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_driver_1.Driver !== "undefined" && neo4j_driver_1.Driver) === "function" ? _a : Object])
], Neo4jService);
exports.Neo4jService = Neo4jService;


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Neo4jCommonQueries = void 0;
exports.Neo4jCommonQueries = {
    createRelationship: (resultKey, fromNodeProps, relationship, toNodeProps) => {
        if (fromNodeProps.budgetId !== toNodeProps.budgetId)
            throw Error('Budget Ids do not match');
        return {
            query: `
        MATCH (fromNode:${fromNodeProps.label} {id: $fromNodeId })
        MATCH (toNode:${toNodeProps.label} {id: $toNodeId })
        CREATE (fromNode)-[${resultKey}:${relationship}]->(toNode)
        RETURN ${resultKey}
      `,
            params: {
                fromNodeId: fromNodeProps.id,
                toNodeId: toNodeProps.id,
            },
        };
    },
};


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRecordsByKeyNotification = exports.getRecordsByKey = void 0;
var neo4j_operators_1 = __webpack_require__(22);
Object.defineProperty(exports, "getRecordsByKey", ({ enumerable: true, get: function () { return neo4j_operators_1.getRecordsByKey; } }));
Object.defineProperty(exports, "getRecordsByKeyNotification", ({ enumerable: true, get: function () { return neo4j_operators_1.getRecordsByKeyNotification; } }));


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.transformRecordToDetail = exports.getRecordsByKeyNotification = exports.getRecordsByKey = void 0;
const operators_1 = __webpack_require__(18);
const neo4j_formatter_util_1 = __webpack_require__(23);
const getRecordsByKey = (key, formatResult) => (0, operators_1.map)(record => {
    var _a;
    const { properties } = (_a = record === null || record === void 0 ? void 0 : record.get(key)) !== null && _a !== void 0 ? _a : {};
    if (!properties) {
        console.warn(`No results found on the given key - ${key}`);
        return;
    }
    if (formatResult)
        return formatResult(Object.assign({}, properties));
    return Object.assign({}, properties);
});
exports.getRecordsByKey = getRecordsByKey;
const getRecordsByKeyNotification = (key) => (0, operators_1.map)(notifications => notifications
    .map(notification => {
    var _a, _b;
    const { properties } = (_b = (_a = notification.value) === null || _a === void 0 ? void 0 : _a.get(key)) !== null && _b !== void 0 ? _b : {};
    if (!properties) {
        console.warn(`No results found on the given key - ${key}`);
        return;
    }
    return Object.assign({}, properties);
})
    .filter(record => Boolean(record)));
exports.getRecordsByKeyNotification = getRecordsByKeyNotification;
const transformRecordToDetail = (recordBase, recordDetailMap) => (0, operators_1.map)(notifications => notifications
    .map(notification => {
    var _a, _b;
    const { properties } = (_b = (_a = notification.value) === null || _a === void 0 ? void 0 : _a.get(recordBase)) !== null && _b !== void 0 ? _b : {};
    if (!properties) {
        console.warn(`Bang - No results found on the given key - ${recordBase}`);
        return;
    }
    const baseRecord = Object.assign({}, properties);
    Object.keys(recordDetailMap).forEach(key => {
        var _a, _b;
        const { properties: formatProperties } = (_b = (_a = notification.value) === null || _a === void 0 ? void 0 : _a.get(key)) !== null && _b !== void 0 ? _b : {};
        baseRecord[recordDetailMap[key]] = (0, neo4j_formatter_util_1.getFormattedNode)(formatProperties);
    });
    return baseRecord;
})
    .filter(record => Boolean(record)));
exports.transformRecordToDetail = transformRecordToDetail;


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFormattedNode = void 0;
const getFormattedNode = (node) => {
    var _a;
    return ({
        id: node.id,
        value: (_a = node.name) !== null && _a !== void 0 ? _a : 'not-sure-why-there-is-no-name',
    });
};
exports.getFormattedNode = getFormattedNode;


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CommonAccountService_1, _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonAccountService = void 0;
const common_1 = __webpack_require__(1);
const rxjs_1 = __webpack_require__(17);
const operators_1 = __webpack_require__(18);
const common_queries_1 = __webpack_require__(25);
const neo4j_1 = __webpack_require__(10);
const queries_1 = __webpack_require__(26);
let CommonAccountService = CommonAccountService_1 = class CommonAccountService {
    constructor(neo4jService) {
        this.neo4jService = neo4jService;
        this.logger = new common_1.Logger(CommonAccountService_1.name);
    }
    updateLink$(linkRequest) {
        const { currentTransactionLinkDetails, storedTransactionDetails, newLinkDetails } = linkRequest;
        if (newLinkDetails.id !== currentTransactionLinkDetails.id) {
            return (0, rxjs_1.forkJoin)([
                this.neo4jService.removeTargetedRelationshipFromNode$(storedTransactionDetails.id, storedTransactionDetails.label, storedTransactionDetails.relationship),
                this.updateLinkedNodeBalance$(newLinkDetails),
                this.updateLinkedNodeBalance$(currentTransactionLinkDetails),
            ]).pipe((0, operators_1.switchMap)(() => this.neo4jService.createRelationshipBetweenNodes$(storedTransactionDetails, storedTransactionDetails.relationship, newLinkDetails)), (0, operators_1.map)(() => ({ message: 'Successfully unlinked and relinked' })));
        }
        else if (storedTransactionDetails.balanceRequest.isBalanceDifferent) {
            return this.updateLinkedNodeBalance$({
                label: storedTransactionDetails.balanceRequest.label,
                id: storedTransactionDetails.balanceRequest.id,
                amount: storedTransactionDetails.balanceRequest.chargeAmount,
                budgetId: newLinkDetails.budgetId,
                refund: storedTransactionDetails.balanceRequest.refundAmount,
            }).pipe((0, operators_1.map)((_) => ({ message: 'Successfully updated balance' })));
        }
        else {
            return (0, rxjs_1.of)({
                message: 'Nothing to update, the balances and links are the same',
            });
        }
    }
    updateLinkedNodeBalance$(linkedAccountMeta) {
        const resultKey = 'matchedNode';
        const { query, params } = common_queries_1.CommonQueries.getNodeStatement(resultKey, {
            id: linkedAccountMeta.id,
            label: linkedAccountMeta.label,
            budgetId: linkedAccountMeta.budgetId,
        });
        return this.neo4jService.rxSession.writeTransaction((txc) => txc
            .run(query, params)
            .records()
            .pipe((0, operators_1.first)(), (0, neo4j_1.getRecordsByKey)(resultKey, (record) => { var _a; return (_a = record.balance) !== null && _a !== void 0 ? _a : 0; }), (0, operators_1.flatMap)((balance) => this.setUpdatedBalanceOnNode$(balance, linkedAccountMeta)), (0, operators_1.catchError)((err) => (0, rxjs_1.throwError)(err))), { timeout: 4000 });
    }
    setUpdatedBalanceOnNode$(currentBalance, linkedNode) {
        const resultKey = 'linkedNode';
        const { query, params } = (0, queries_1.updateLinkedNodeBalance)(resultKey, linkedNode, currentBalance);
        return this.neo4jService.rxSession.writeTransaction((rxTransaction) => rxTransaction
            .run(query, params)
            .records()
            .pipe((0, operators_1.first)(), (0, neo4j_1.getRecordsByKey)(resultKey), (0, operators_1.catchError)((err) => (0, rxjs_1.of)(err))), { timeout: 3000 });
    }
    removeLinkWithRefund(removeWithRefund) {
        const { account, transaction, budgetId, refundAmount, relationship } = removeWithRefund;
        return (0, rxjs_1.forkJoin)([
            this.updateLinkedNodeBalance$({
                id: account.id,
                label: account.label,
                budgetId,
                amount: refundAmount,
            }),
            this.neo4jService.removeTargetedRelationshipFromNode$(transaction.id, transaction.label, relationship),
        ]);
    }
    async getNodeBalance(request) {
        const { id, label, budgetId } = request;
        const node = 'node';
        return await this.neo4jService
            .executeStatement({
            query: `
          MATCH (${node}:${label} {id: $id, budgetId: $budgetId})
          RETURN ${node}
        `,
            params: {
                id,
                budgetId,
            },
        })
            .then((statementResult) => {
            const [result] = this.neo4jService.flattenStatementResult(statementResult, node);
            return result.balance || 0;
        });
    }
    getNodeBalance$(request) {
        const node = 'node';
        const { query, params } = common_queries_1.CommonQueries.getNodeStatement(node, request);
        return this.neo4jService.rxSession.writeTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, operators_1.first)(), (0, neo4j_1.getRecordsByKey)(node, (record) => { var _a; return (_a = record.balance) !== null && _a !== void 0 ? _a : 0; })));
    }
};
CommonAccountService = CommonAccountService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jService !== "undefined" && neo4j_1.Neo4jService) === "function" ? _a : Object])
], CommonAccountService);
exports.CommonAccountService = CommonAccountService;


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonQueries = void 0;
exports.CommonQueries = {
    getNodeStatement: (resultKey, request) => {
        const { id, label, budgetId } = request;
        return {
            query: `
        MATCH (${resultKey}:${label} {id: $id, budgetId: $budgetId})
        RETURN ${resultKey}
      `,
            params: {
                id,
                budgetId,
            },
        };
    },
    deleteNodeStatement: (resultKey, request) => {
        const { id, label, budgetId } = request;
        return {
            query: `
        MATCH (${resultKey}:${label} {id: $id, budgetId: $budgetId})
        DELETE ${resultKey}
      `,
            params: {
                id,
                budgetId,
            },
        };
    },
};


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(27), exports);


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateLinkedNodeBalance = void 0;
const updateLinkedNodeBalance = (resultKey, linkedAccountMeta, balance = 0) => ({
    query: `
    MATCH (${resultKey}:${linkedAccountMeta.label} {id: $nodeId, budgetId: $budgetId})
    SET ${resultKey}.balance = $updatedBalance
    RETURN ${resultKey}
  `,
    params: {
        nodeId: linkedAccountMeta.id,
        budgetId: linkedAccountMeta.budgetId,
        updatedBalance: balance + (linkedAccountMeta.amount || 0) + (linkedAccountMeta.refund || 0),
    },
});
exports.updateLinkedNodeBalance = updateLinkedNodeBalance;


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(32), exports);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(17);
const account_service_1 = __webpack_require__(36);
const dto_1 = __webpack_require__(43);
let AccountController = class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    createNewAccount(budgetId, accountRequest) {
        if (!accountRequest.budgetId || accountRequest.budgetId !== budgetId) {
            throw new common_1.HttpException('No budgetId found on request', common_1.HttpStatus.CONFLICT);
        }
        return this.accountService.createAccount(accountRequest);
    }
    getAllAccountsForBudgetId(budgetId) {
        return this.accountService.findAccounts({
            budgetId,
        });
    }
    getAccount(budgetId, id) {
        return this.accountService.findAccount(budgetId, id);
    }
    updateAccountDetails(budgetId, id, updateAccount) {
        if (id !== updateAccount.id && budgetId !== updateAccount.budgetId) {
            throw new common_1.HttpException('The parameter id and the body id do not match.', common_1.HttpStatus.CONFLICT);
        }
        return this.accountService.updateAccountDetails(updateAccount);
    }
    deleteAccount(budgetId, accountId) {
        return this.accountService.deleteAccount(budgetId, accountId);
    }
};
__decorate([
    (0, common_1.Post)(':budgetId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Create Account',
        description: 'Creates an account, a account is a top level node for the system.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The newly created account is returned',
    }),
    __param(0, (0, common_1.Param)('budgetId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_a = typeof dto_1.CreateAccount !== "undefined" && dto_1.CreateAccount) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _b : Object)
], AccountController.prototype, "createNewAccount", null);
__decorate([
    (0, common_1.Get)(':budgetId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Find all accounts',
        description: 'Get all the accounts that have Account as its label',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'A list of all accounts and their properties and labels.',
    }),
    __param(0, (0, common_1.Param)('budgetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_c = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _c : Object)
], AccountController.prototype, "getAllAccountsForBudgetId", null);
__decorate([
    (0, common_1.Get)(':budgetId/detail/:accountId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Find a single account',
        description: 'Get a specific account by the accountId in a given budgetId',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'A single account and its properties and labels',
    }),
    __param(0, (0, common_1.Param)('budgetId')),
    __param(1, (0, common_1.Param)('accountId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_d = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _d : Object)
], AccountController.prototype, "getAccount", null);
__decorate([
    (0, common_1.Post)(':budgetId/detail/:accountId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update a given account',
        description: 'Update a single account, currently only updates the name property and everything else remains the same',
    }),
    __param(0, (0, common_1.Param)('budgetId')),
    __param(1, (0, common_1.Param)('accountId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_e = typeof dto_1.UpdateAccount !== "undefined" && dto_1.UpdateAccount) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _f : Object)
], AccountController.prototype, "updateAccountDetails", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Delete an account',
        description: `
      This will delete an account.
    `,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns back a message saying how many nodes have been deleted. Data will need to refresh itself after making this request.',
    }),
    (0, common_1.Delete)(':budgetId/account/:accountId'),
    __param(0, (0, common_1.Param)('budgetId')),
    __param(1, (0, common_1.Param)('accountId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_g = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _g : Object)
], AccountController.prototype, "deleteAccount", null);
AccountController = __decorate([
    (0, common_1.Controller)('accounts'),
    (0, swagger_1.ApiTags)('account'),
    __metadata("design:paramtypes", [typeof (_h = typeof account_service_1.AccountService !== "undefined" && account_service_1.AccountService) === "function" ? _h : Object])
], AccountController);
exports.AccountController = AccountController;


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AccountService_1, _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountService = void 0;
const common_1 = __webpack_require__(1);
const operators_1 = __webpack_require__(18);
const constants_1 = __webpack_require__(37);
const extensions_1 = __webpack_require__(7);
const neo4j_1 = __webpack_require__(10);
const queries_1 = __webpack_require__(40);
let AccountService = AccountService_1 = class AccountService extends extensions_1.CommonAccountService {
    constructor(neo4jService) {
        super(neo4jService);
        this.neo4jService = neo4jService;
        this.logger = new common_1.Logger(AccountService_1.name);
    }
    createAccount(request) {
        const resultKey = 'account';
        const { query, params } = queries_1.accountQueries.createAccount(resultKey, request);
        return this.neo4jService.rxSession.writeTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, neo4j_1.getRecordsByKey)(resultKey)));
    }
    findAccounts(request) {
        const resultKey = 'accounts';
        const { query, params } = queries_1.accountQueries.findAccounts(resultKey, request);
        return this.neo4jService.rxSession.readTransaction((trx) => trx.run(query, params).records().pipe((0, operators_1.materialize)(), (0, operators_1.toArray)(), (0, neo4j_1.getRecordsByKeyNotification)(resultKey)));
    }
    findAccount(budgetId, accountId) {
        const resultKey = 'account';
        const { query, params } = queries_1.accountQueries.getAccountById(resultKey, budgetId, accountId);
        return this.neo4jService.rxSession.readTransaction((trx) => trx.run(query, params).records().pipe((0, neo4j_1.getRecordsByKey)(resultKey)));
    }
    updateAccountDetails(request) {
        const resultKey = 'account';
        const { query, params } = queries_1.accountQueries.updateExistingAccount(resultKey, request);
        return this.neo4jService.rxSession.writeTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, neo4j_1.getRecordsByKey)(resultKey)));
    }
    deleteAccount(budgetId, accountId) {
        const resultKey = 'deletedAccount';
        const { query, params } = queries_1.accountQueries.deleteAccountById(resultKey, budgetId, accountId);
        return this.neo4jService.rxSession.writeTransaction((trx) => trx.run(query, params).consume().pipe((0, operators_1.map)((result) => ({
            message: `Deleted ${result.counters.updates().nodesDeleted || 0} record(s)`,
            id: accountId,
            isDeleted: true,
        }))));
    }
    convertTransactionToAccountLink(transaction, transactionAmount) {
        return {
            id: transaction.accountId,
            label: constants_1.SupportedLabel.Account,
            budgetId: transaction.budgetId,
            amount: transactionAmount,
        };
    }
    convertToAccountLinkResponse(currentTransaction, transactionUpdateRequest, linkingRelationship, currentTransactionAmount, updatedTransactionRequestAmount) {
        const currentNodeRelationship = {
            id: currentTransaction.accountId,
            label: constants_1.SupportedLabel.Account,
            isBalanceDifferent: currentTransaction.inflow !== transactionUpdateRequest.inflow ||
                currentTransaction.outflow !== transactionUpdateRequest.outflow,
            chargeAmount: updatedTransactionRequestAmount,
            refundAmount: -currentTransactionAmount,
            budgetId: currentTransaction.budgetId,
        };
        return {
            storedTransactionDetails: {
                id: currentTransaction.id,
                label: constants_1.SupportedLabel.Transaction,
                budgetId: currentTransaction.budgetId,
                relationship: linkingRelationship,
                balanceRequest: currentNodeRelationship,
            },
            currentTransactionLinkDetails: {
                id: currentTransaction.accountId,
                amount: -currentTransactionAmount,
                label: constants_1.SupportedLabel.Account,
                budgetId: currentTransaction.budgetId,
            },
            newLinkDetails: {
                id: transactionUpdateRequest.accountId,
                amount: updatedTransactionRequestAmount,
                label: constants_1.SupportedLabel.Account,
                budgetId: transactionUpdateRequest.budgetId,
            },
        };
    }
};
AccountService = AccountService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jService !== "undefined" && neo4j_1.Neo4jService) === "function" ? _a : Object])
], AccountService);
exports.AccountService = AccountService;


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(38), exports);
__exportStar(__webpack_require__(39), exports);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeRelationship = void 0;
var NodeRelationship;
(function (NodeRelationship) {
    NodeRelationship["AccountOf"] = "ACCOUNT_OF";
    NodeRelationship["CategoryOf"] = "CATEGORY_OF";
    NodeRelationship["PayeeOf"] = "PAYEE_OF";
    NodeRelationship["UsedAccount"] = "USED_ACCOUNT";
    NodeRelationship["UsedCategory"] = "USED_CATEGORY";
    NodeRelationship["UsedPayee"] = "USED_PAYEE";
})(NodeRelationship = exports.NodeRelationship || (exports.NodeRelationship = {}));


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupportedLabel = void 0;
var SupportedLabel;
(function (SupportedLabel) {
    SupportedLabel["Account"] = "Account";
    SupportedLabel["Category"] = "Category";
    SupportedLabel["Payee"] = "Payee";
    SupportedLabel["Transaction"] = "Transaction";
    SupportedLabel["Budget"] = "Budget";
})(SupportedLabel = exports.SupportedLabel || (exports.SupportedLabel = {}));


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.accountQueries = void 0;
const uuid_1 = __webpack_require__(42);
const constants_1 = __webpack_require__(37);
exports.accountQueries = {
    createAccount: (resultKey, request) => ({
        query: `
        MATCH (budget:${constants_1.SupportedLabel.Budget} {id: $budgetId})
        CREATE (${resultKey}:${constants_1.SupportedLabel.Account} $nodeProps)
        MERGE (${resultKey})-[r:${constants_1.NodeRelationship.AccountOf}]->(budget)
        RETURN ${resultKey}
      `,
        params: {
            budgetId: request.budgetId,
            nodeProps: Object.assign(Object.assign({}, request), { createdDate: new Date().toISOString(), id: (0, uuid_1.v4)() }),
        },
    }),
    findAccounts: (resultKey, request) => ({
        query: `
        MATCH (${resultKey}:${constants_1.SupportedLabel.Account} {budgetId: $budgetId})
        RETURN ${resultKey}
        ${request.limit ? `LIMIT ${request.limit}` : ''}
      `,
        params: {
            budgetId: request.budgetId,
        },
    }),
    getAccountById: (resultKey, budgetId, accountId) => ({
        query: `
        MATCH (${resultKey}:${constants_1.SupportedLabel.Account} {id: $accountId, budgetId: $budgetId})
        RETURN ${resultKey}
      `,
        params: {
            accountId,
            budgetId,
        },
    }),
    updateExistingAccount: (resultKey, request) => ({
        query: `
        MATCH (${resultKey}:${constants_1.SupportedLabel.Account} {id: $accountId, budgetId: $budgetId})
        SET ${resultKey} += {name: $updatedName, balance: $updatedBalance}
        RETURN ${resultKey}
      `,
        params: {
            accountId: request.id,
            budgetId: request.budgetId,
            updatedName: request.name,
            updatedBalance: request.balance,
        },
    }),
    deleteAccountById: (resultKey, budgetId, accountId) => ({
        query: `
        MATCH (${resultKey}:${constants_1.SupportedLabel.Account} { id: $accountId, budgetId: $budgetId })
        DETACH DELETE ${resultKey}
      `,
        params: {
            accountId,
            budgetId,
        },
    }),
};


/***/ }),
/* 42 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(44), exports);
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(48), exports);


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountQuery = void 0;
const class_validator_1 = __webpack_require__(45);
class AccountQuery {
}
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AccountQuery.prototype, "budgetId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AccountQuery.prototype, "limit", void 0);
exports.AccountQuery = AccountQuery;


/***/ }),
/* 45 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 46 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAccount = void 0;
const class_validator_1 = __webpack_require__(45);
const contracts_1 = __webpack_require__(47);
class CreateAccount {
}
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAccount.prototype, "budgetId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccount.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(contracts_1.SupportedAccountType, {
        message: 'Value must match a supported enum value',
    }),
    __metadata("design:type", typeof (_a = typeof contracts_1.SupportedAccountType !== "undefined" && contracts_1.SupportedAccountType) === "function" ? _a : Object)
], CreateAccount.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateAccount.prototype, "balance", void 0);
exports.CreateAccount = CreateAccount;


/***/ }),
/* 47 */
/***/ ((module) => {

module.exports = require("contracts");

/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAccount = void 0;
const class_validator_1 = __webpack_require__(45);
const contracts_1 = __webpack_require__(47);
class UpdateAccount {
}
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateAccount.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateAccount.prototype, "budgetId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(contracts_1.SupportedAccountType, {
        message: 'Value must match a supported enum value',
    }),
    __metadata("design:type", typeof (_a = typeof contracts_1.SupportedAccountType !== "undefined" && contracts_1.SupportedAccountType) === "function" ? _a : Object)
], UpdateAccount.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateAccount.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateAccount.prototype, "balance", void 0);
exports.UpdateAccount = UpdateAccount;


/***/ }),
/* 49 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(50);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 51 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthzModule = void 0;
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(52);
const jwt_strategy_1 = __webpack_require__(53);
let AuthzModule = class AuthzModule {
};
AuthzModule = __decorate([
    (0, common_1.Module)({
        imports: [passport_1.PassportModule.register({ defaultStrategy: 'jwt' })],
        providers: [jwt_strategy_1.JwtStrategy],
        exports: [passport_1.PassportModule],
    })
], AuthzModule);
exports.AuthzModule = AuthzModule;


/***/ }),
/* 52 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 53 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(52);
const dotenv = __importStar(__webpack_require__(54));
const jwks_rsa_1 = __webpack_require__(55);
const passport_jwt_1 = __webpack_require__(56);
dotenv.config();
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            secretOrKeyProvider: (0, jwks_rsa_1.passportJwtSecret)({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: 'https://dev-mammoth.auth0.com/.well-known/jwks.json',
            }),
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            audience: 'https://mammoth.api.com',
            issuer: 'https://dev-mammoth.auth0.com/',
            algorithms: ['RS256'],
        });
    }
    validate(payload) {
        return payload;
    }
};
JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),
/* 54 */
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),
/* 55 */
/***/ ((module) => {

module.exports = require("jwks-rsa");

/***/ }),
/* 56 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BudgetModule = void 0;
const common_1 = __webpack_require__(1);
const neo4j_1 = __webpack_require__(10);
const budget_controller_1 = __webpack_require__(58);
const budget_service_1 = __webpack_require__(59);
let BudgetModule = class BudgetModule {
};
BudgetModule = __decorate([
    (0, common_1.Module)({
        imports: [neo4j_1.Neo4jModule],
        controllers: [budget_controller_1.BudgetController],
        exports: [budget_service_1.BudgetService],
        providers: [budget_service_1.BudgetService],
    })
], BudgetModule);
exports.BudgetModule = BudgetModule;


/***/ }),
/* 58 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BudgetController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(17);
const budget_service_1 = __webpack_require__(59);
const dto_1 = __webpack_require__(62);
let BudgetController = class BudgetController {
    constructor(budgetService) {
        this.budgetService = budgetService;
    }
    createNewBudget(budgetRequest) {
        return this.budgetService.createBudget(budgetRequest);
    }
    queryBudgets(query) {
        return this.budgetService.queryBudgets(query);
    }
    getBudget(id) {
        return this.budgetService.getBudget(id);
    }
    updateExistingBudget(budgetId, request) {
        if (budgetId !== request.id) {
            throw new common_1.BadRequestException();
        }
        return this.budgetService.saveBudget(request);
    }
    removeBudgetById(id) {
        return this.budgetService.deleteBudget(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create Budget',
        description: `
      Creates a budget, a budget is the top level node for the system. A budget can be thought of as an Excel document.
      You can have multiple sheets in one Excel document, so think of sheets as categories, transactions, accounts, etc.
    `,
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The newly created budget is returned',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof dto_1.Budget !== "undefined" && dto_1.Budget) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _b : Object)
], BudgetController.prototype, "createNewBudget", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all budgets',
        description: 'Get all the budgets that have Budget as its label',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'A list of all budgets and their properties and labels.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.BudgetQuery !== "undefined" && dto_1.BudgetQuery) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _d : Object)
], BudgetController.prototype, "queryBudgets", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get a single budget',
        description: 'Get a budget that has Budget as its label',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'A single budget and its properties and labels',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_e = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _e : Object)
], BudgetController.prototype, "getBudget", null);
__decorate([
    (0, common_1.Post)(':id'),
    (0, swagger_1.ApiOperation)({
        description: 'Update a single budget, currently only updates the name property and everything else remains the same',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof dto_1.UpdateBudget !== "undefined" && dto_1.UpdateBudget) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _g : Object)
], BudgetController.prototype, "updateExistingBudget", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Delete a budget',
        description: `
      This will delete a budget and all of its children. Think of it as deleting an Excel document but no backups.
    `,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns back a message saying how many nodes have been deleted. Data will need to refresh itself after making this request.',
    }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _h : Object)
], BudgetController.prototype, "removeBudgetById", null);
BudgetController = __decorate([
    (0, common_1.Controller)('budget'),
    (0, swagger_1.ApiTags)('budget'),
    __metadata("design:paramtypes", [typeof (_j = typeof budget_service_1.BudgetService !== "undefined" && budget_service_1.BudgetService) === "function" ? _j : Object])
], BudgetController);
exports.BudgetController = BudgetController;


/***/ }),
/* 59 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BudgetService = void 0;
const common_1 = __webpack_require__(1);
const operators_1 = __webpack_require__(18);
const neo4j_1 = __webpack_require__(10);
const queries_1 = __webpack_require__(60);
let BudgetService = class BudgetService {
    constructor(neo4jService) {
        this.neo4jService = neo4jService;
    }
    createBudget(request) {
        const node = 'createdBudget';
        const { query, params } = (0, queries_1.getCreateBudgetStatement)(node, request);
        return this.neo4jService.rxSession.writeTransaction((trx) => trx.run(query, params).records().pipe((0, neo4j_1.getRecordsByKey)(node)));
    }
    queryBudgets(request) {
        const resultKey = 'budgets';
        const { query } = (0, queries_1.getBudgetsByQuery)(resultKey, request);
        return this.neo4jService.rxSession.readTransaction((trx) => trx.run(query).records().pipe((0, operators_1.materialize)(), (0, operators_1.toArray)(), (0, neo4j_1.getRecordsByKeyNotification)(resultKey)));
    }
    getBudget(id) {
        const resultKey = 'budget';
        const { query, params } = (0, queries_1.getBudgetById)(resultKey, id);
        return this.neo4jService.rxSession.readTransaction((trx) => trx.run(query, params).records().pipe((0, neo4j_1.getRecordsByKey)(resultKey)));
    }
    deleteBudget(id) {
        const { query, params } = (0, queries_1.deleteBudgetById)(id);
        return this.neo4jService.rxSession.writeTransaction((trx) => trx.run(query, params).consume().pipe((0, operators_1.map)((result) => ({
            message: `Deleted ${result.counters.updates().nodesDeleted || 0} record(s)`,
            id,
            isDeleted: result.counters.updates().nodesDeleted > 0,
        }))));
    }
    saveBudget(request) {
        const budgetKey = 'budget';
        const { query, params } = (0, queries_1.updateBudgetRequest)(budgetKey, request);
        return this.neo4jService.rxSession.writeTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, neo4j_1.getRecordsByKey)(budgetKey)));
    }
};
BudgetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jService !== "undefined" && neo4j_1.Neo4jService) === "function" ? _a : Object])
], BudgetService);
exports.BudgetService = BudgetService;


/***/ }),
/* 60 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(61), exports);


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateBudgetRequest = exports.deleteBudgetById = exports.getBudgetById = exports.getBudgetsByQuery = exports.getCreateBudgetStatement = void 0;
const uuid_1 = __webpack_require__(42);
const constants_1 = __webpack_require__(37);
const getCreateBudgetStatement = (key, request) => ({
    query: `
    CREATE (${key}:${constants_1.SupportedLabel.Budget} $nodeProps)
    RETURN ${key}
  `,
    params: {
        nodeProps: Object.assign(Object.assign({}, request), { createdDate: new Date().toISOString(), id: (0, uuid_1.v4)() }),
    },
});
exports.getCreateBudgetStatement = getCreateBudgetStatement;
const getBudgetsByQuery = (resultKey, request) => ({
    query: `
    MATCH (${resultKey}:${constants_1.SupportedLabel.Budget})
    RETURN ${resultKey}
    ${request.limit ? `LIMIT ${request.limit}` : ''}
  `,
});
exports.getBudgetsByQuery = getBudgetsByQuery;
const getBudgetById = (resultKey, id) => ({
    query: `
    MATCH (${resultKey}:${constants_1.SupportedLabel.Budget})
    WHERE ${resultKey}.id = $id
    RETURN ${resultKey}
  `,
    params: {
        id,
    },
});
exports.getBudgetById = getBudgetById;
const deleteBudgetById = (id) => ({
    query: `
    MATCH (budget:${constants_1.SupportedLabel.Budget} { id: $id })
    DETACH DELETE budget
  `,
    params: {
        id,
    },
});
exports.deleteBudgetById = deleteBudgetById;
const updateBudgetRequest = (resultKey, request) => ({
    query: `
    MATCH (${resultKey}:${constants_1.SupportedLabel.Budget} { id: $id })
    SET ${resultKey}.name = $name
    RETURN ${resultKey}
  `,
    params: {
        name: request.name,
        id: request.id,
    },
});
exports.updateBudgetRequest = updateBudgetRequest;


/***/ }),
/* 62 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(63), exports);
__exportStar(__webpack_require__(64), exports);
__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BudgetQuery = void 0;
class BudgetQuery {
}
exports.BudgetQuery = BudgetQuery;


/***/ }),
/* 64 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Budget = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(45);
class Budget {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Name property given to your budget',
        example: 'Colorado Getaway',
        required: true,
    }),
    __metadata("design:type", String)
], Budget.prototype, "name", void 0);
exports.Budget = Budget;


/***/ }),
/* 65 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateBudget = void 0;
const class_validator_1 = __webpack_require__(45);
const budget_dto_1 = __webpack_require__(64);
class UpdateBudget extends budget_dto_1.Budget {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBudget.prototype, "id", void 0);
exports.UpdateBudget = UpdateBudget;


/***/ }),
/* 66 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryModule = void 0;
const common_1 = __webpack_require__(1);
const extensions_1 = __webpack_require__(7);
const neo4j_1 = __webpack_require__(10);
const category_controller_1 = __webpack_require__(67);
const category_service_1 = __webpack_require__(68);
let CategoryModule = class CategoryModule {
};
CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [neo4j_1.Neo4jModule, extensions_1.CommonAccountModule],
        controllers: [category_controller_1.CategoryController],
        providers: [category_service_1.CategoryService],
        exports: [category_service_1.CategoryService],
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;


/***/ }),
/* 67 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(17);
const category_service_1 = __webpack_require__(68);
const dto_1 = __webpack_require__(70);
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    createCategory(categoryRequest) {
        return this.categoryService.createCategory(categoryRequest);
    }
    getAllCategoriesByBudgetId(budgetId) {
        return this.categoryService.findCategories(budgetId);
    }
    getCategoryWithChildren(id, budgetId) {
        return this.categoryService.getCategoryWithChildren(id, budgetId);
    }
    async updateCategory(id, updateCategory) {
        if (id !== updateCategory.id) {
            throw new common_1.HttpException('The parameter id and the body id do not match.', common_1.HttpStatus.CONFLICT);
        }
        return await this.categoryService.updateCategory(updateCategory);
    }
    delete(budgetId, categoryId) {
        return this.categoryService.deleteCategory(categoryId, budgetId);
    }
};
__decorate([
    (0, common_1.Post)(':budgetId/create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create Category or Child Category' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The newly created category is returned',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof dto_1.CreateCategory !== "undefined" && dto_1.CreateCategory) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _b : Object)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Get)(':budgetId/list'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all categories',
        description: 'Get all the categories that have either Category or Child_Category as its label',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'A list of all categories and their properties and labels.',
    }),
    __param(0, (0, common_1.Param)('budgetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_c = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _c : Object)
], CategoryController.prototype, "getAllCategoriesByBudgetId", null);
__decorate([
    (0, common_1.Get)(':id/budget/:budgetId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get a single category',
        description: 'Get a category that has either Category or Child_Category as its label',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'A single category and its properties and labels',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('budgetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_d = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _d : Object)
], CategoryController.prototype, "getCategoryWithChildren", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update a category',
        description: `
      Update properties on a category. First thing it checks is if a parentCategoryId is set
      if a parentCategoryId is set it will update its link to the category. If a budgetId is set it will remove
      the parentCategoryId and relink to the budget.
    `,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns back the updated category with its properties and labels after being updated',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof dto_1.UpdateCategory !== "undefined" && dto_1.UpdateCategory) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], CategoryController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)(':budgetId/delete/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete a category',
        description: `
      This will delete a full category and all of its children.
    `,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns back a message saying how many nodes have been deleted. Data will need to refresh itself after making this request.',
    }),
    __param(0, (0, common_1.Param)('budgetId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_g = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _g : Object)
], CategoryController.prototype, "delete", null);
CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    (0, swagger_1.ApiTags)('category'),
    __metadata("design:paramtypes", [typeof (_h = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _h : Object])
], CategoryController);
exports.CategoryController = CategoryController;


/***/ }),
/* 68 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CategoryService_1, _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryService = void 0;
const common_1 = __webpack_require__(1);
const operators_1 = __webpack_require__(18);
const constants_1 = __webpack_require__(37);
const extensions_1 = __webpack_require__(7);
const neo4j_1 = __webpack_require__(10);
const category_queries_1 = __webpack_require__(69);
let CategoryService = CategoryService_1 = class CategoryService extends extensions_1.CommonAccountService {
    constructor(neo4jService) {
        super(neo4jService);
        this.neo4jService = neo4jService;
        this.logger = new common_1.Logger(CategoryService_1.name);
    }
    createCategory(request) {
        if (request.parentId) {
            return this.createChildCategory(request);
        }
        return this.createTopLevelCategory(request);
    }
    findCategories(budgetId) {
        const { query, params } = category_queries_1.categoryQueries.getAllCategoriesByBudget(budgetId);
        return this.neo4jService.rxSession.readTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, operators_1.materialize)(), (0, operators_1.toArray)(), (0, operators_1.map)((response) => response
            .reduce((arr, notification) => {
            const record = notification.value;
            record === null || record === void 0 ? void 0 : record.keys.map((key) => {
                var _a;
                const { parentNode, children } = record.get(key);
                arr.push({
                    name: parentNode.properties.name,
                    budgetId: parentNode.properties.budgetId,
                    id: parentNode.properties.id,
                    children: (_a = children.details) === null || _a === void 0 ? void 0 : _a.map((detail) => (Object.assign({}, detail.properties))),
                });
            });
            return arr;
        }, [])
            .filter((searchResponse) => searchResponse.budgetId ||
            (searchResponse.children &&
                searchResponse.children.length > 0)))));
    }
    getCategoryWithChildren(id, budgetId) {
        const { query, params } = category_queries_1.categoryQueries.getCategoryWithChildrenById(id, budgetId);
        return this.neo4jService.rxSession.readTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, operators_1.materialize)(), (0, operators_1.toArray)(), (0, operators_1.map)((response) => response
            .reduce((arr, notification) => {
            const record = notification.value;
            record === null || record === void 0 ? void 0 : record.keys.map((key) => {
                var _a;
                const { parentNode, children } = record.get(key);
                arr.push({
                    name: parentNode.properties.name,
                    budgetId: parentNode.properties.budgetId,
                    id: parentNode.properties.id,
                    children: (_a = children.details) === null || _a === void 0 ? void 0 : _a.map((detail) => (Object.assign({}, detail.properties))),
                });
            });
            return arr;
        }, [])
            .filter((searchResponse) => searchResponse.budgetId ||
            (searchResponse.children &&
                searchResponse.children.length > 0)))));
    }
    async updateCategory(request) {
        const key = 'category';
        const { id, budgetId } = request;
        const category = await this.getCategoryById(id, budgetId);
        if (!category) {
            throw new common_1.NotFoundException(`No category record exists with id - ${id}`);
        }
        await this.neo4jService.removeTargetedRelationshipFromNode(category.id, constants_1.SupportedLabel.Category, constants_1.NodeRelationship.CategoryOf);
        const fromNode = {
            id: category.id,
            label: constants_1.SupportedLabel.Category,
            budgetId: category.budgetId,
        };
        let toNode = null;
        const hadExistingParentWithNewParentId = category.parentId !== null &&
            category.parentId !== request.parentId &&
            request.parentId;
        if (hadExistingParentWithNewParentId || request.parentId) {
            toNode = {
                id: request.parentId,
                label: constants_1.SupportedLabel.Category,
                budgetId: category.budgetId,
            };
        }
        else {
            toNode = {
                id: request.budgetId,
                label: constants_1.SupportedLabel.Budget,
                budgetId: category.budgetId,
            };
        }
        await this.neo4jService.createRelationshipBetweenNodes(fromNode, toNode, constants_1.NodeRelationship.CategoryOf);
        const balance = await this.getNodeBalance(fromNode);
        return await this.neo4jService
            .executeStatement({
            query: `
          MATCH (${key}:${constants_1.SupportedLabel.Category} { id: $categoryId, budgetId: $budgetId})
          SET ${key} = $props
          RETURN ${key}
        `,
            params: {
                budgetId: request.budgetId,
                categoryId: request.id,
                props: Object.assign(Object.assign({}, request), { balance }),
            },
        })
            .then((statementResult) => {
            const [result] = this.neo4jService.flattenStatementResult(statementResult, key);
            return result;
        });
    }
    deleteCategory(categoryId, budgetId) {
        const { query, params } = category_queries_1.categoryQueries.deleteCategory(categoryId, budgetId);
        return this.neo4jService.rxSession.writeTransaction((trx) => trx.run(query, params).consume().pipe((0, operators_1.map)((result) => ({
            message: `Deleted ${result.counters.updates().nodesDeleted || 0} record(s)`,
            id: categoryId,
            isDeleted: result.counters.updates().nodesDeleted > 0,
        }))));
    }
    createTopLevelCategory(request) {
        const resultKey = 'category';
        const { query, params } = category_queries_1.categoryQueries.createCategory(resultKey, request);
        return this.neo4jService.rxSession.writeTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, neo4j_1.getRecordsByKey)(resultKey)));
    }
    createChildCategory(request) {
        const resultKey = 'childCategory';
        const { query, params } = category_queries_1.categoryQueries.createChildCategory(resultKey, request);
        return this.neo4jService.rxSession.writeTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, neo4j_1.getRecordsByKey)(resultKey)));
    }
    getCategoryById(categoryId, budgetId) {
        const resultKey = 'category';
        const { query, params } = category_queries_1.categoryQueries.getCategoryNode(resultKey, categoryId, budgetId);
        return this.neo4jService.rxSession
            .readTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, neo4j_1.getRecordsByKey)(resultKey)))
            .toPromise();
    }
    convertTransactionToAccountLink(transaction, transactionAmount) {
        return {
            id: transaction.categoryId,
            label: constants_1.SupportedLabel.Category,
            budgetId: transaction.budgetId,
            amount: transactionAmount,
        };
    }
    convertToAccountLinkResponse(currentTransaction, transactionUpdateRequest, linkingRelationship, currentTransactionAmount, updatedTransactionRequestAmount) {
        const currentNodeRelationship = {
            id: currentTransaction.categoryId,
            label: constants_1.SupportedLabel.Category,
            isBalanceDifferent: currentTransaction.inflow !== transactionUpdateRequest.inflow ||
                currentTransaction.outflow !== transactionUpdateRequest.outflow,
            chargeAmount: updatedTransactionRequestAmount,
            refundAmount: -currentTransactionAmount,
            budgetId: currentTransaction.budgetId,
        };
        return {
            storedTransactionDetails: {
                id: currentTransaction.id,
                label: constants_1.SupportedLabel.Transaction,
                budgetId: currentTransaction.budgetId,
                relationship: linkingRelationship,
                balanceRequest: currentNodeRelationship,
            },
            currentTransactionLinkDetails: {
                id: currentTransaction.categoryId,
                amount: -currentTransactionAmount,
                label: constants_1.SupportedLabel.Category,
                budgetId: currentTransaction.budgetId,
            },
            newLinkDetails: {
                id: transactionUpdateRequest.categoryId,
                amount: updatedTransactionRequestAmount,
                label: constants_1.SupportedLabel.Category,
                budgetId: transactionUpdateRequest.budgetId,
            },
        };
    }
};
CategoryService = CategoryService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jService !== "undefined" && neo4j_1.Neo4jService) === "function" ? _a : Object])
], CategoryService);
exports.CategoryService = CategoryService;


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.categoryQueries = void 0;
const uuid_1 = __webpack_require__(42);
const constants_1 = __webpack_require__(37);
exports.categoryQueries = {
    createChildCategory: (resultKey, request) => ({
        query: `
      MATCH (parentCategory:${constants_1.SupportedLabel.Category} {id: $parentId, budgetId: $budgetId})
      CREATE (${resultKey}:${constants_1.SupportedLabel.Category} $nodeProps)
      MERGE (${resultKey})-[r:${constants_1.NodeRelationship.CategoryOf}]->(parentCategory)
      RETURN ${resultKey}
    `,
        params: {
            budgetId: request.budgetId,
            parentId: request.parentId,
            nodeProps: Object.assign(Object.assign({}, request), { id: (0, uuid_1.v4)() }),
        },
    }),
    createCategory: (resultKey, request) => ({
        query: `
      MATCH (budget:${constants_1.SupportedLabel.Budget} {id: $budgetId})
      CREATE (${resultKey}:${constants_1.SupportedLabel.Category} $nodeProps)
      MERGE (${resultKey})-[r:${constants_1.NodeRelationship.CategoryOf}]->(budget)
      RETURN ${resultKey}
    `,
        params: {
            nodeProps: Object.assign(Object.assign({}, request), { id: (0, uuid_1.v4)() }),
            budgetId: request.budgetId,
        },
    }),
    getAllCategoriesByBudget: (budgetId) => ({
        query: `
      MATCH (parent:${constants_1.SupportedLabel.Category} {budgetId: $budgetId})
      OPTIONAL MATCH (parent)<-[:${constants_1.NodeRelationship.CategoryOf}]-(child)
      RETURN {
        parentNode: parent,
        children: {details :collect(child)}
      }
    `,
        params: {
            budgetId,
        },
    }),
    getCategoryWithChildrenById: (categoryId, budgetId) => ({
        query: `
      MATCH (parentCategory:Category {id: $id, budgetId: $budgetId})
      OPTIONAL MATCH (parentCategory)<-[:${constants_1.NodeRelationship.CategoryOf}]-(childCategory})
      WITH COLLECT (childCategory}) + parentCategory AS all
      UNWIND all as parentCategory
      MATCH (parentCategory)
      OPTIONAL MATCH (parentCategory)<-[:${constants_1.NodeRelationship.CategoryOf}]-(childCategory})
      RETURN {
        parentNode: parentCategory,
        children : {details :collect(childCategory})}
      }
    `,
        params: {
            id: categoryId,
            budgetId,
        },
    }),
    deleteCategory: (categoryId, budgetId) => ({
        query: `
        MATCH (node:${constants_1.SupportedLabel.Category} { id: $categoryId, budgetId: $budgeId })
        DETACH DELETE node
      `,
        params: {
            budgetId,
            categoryId,
        },
    }),
    getCategoryNode: (resultKey, categoryId, budgetId) => ({
        query: `
        MATCH (${resultKey}:${constants_1.SupportedLabel.Category} {id: $categoryId, budgetId: $budgetId})
        RETURN ${resultKey}
      `,
        params: {
            categoryId,
            budgetId,
        },
    }),
};


/***/ }),
/* 70 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(71), exports);
__exportStar(__webpack_require__(72), exports);
__exportStar(__webpack_require__(73), exports);


/***/ }),
/* 71 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryQuery = void 0;
const class_validator_1 = __webpack_require__(45);
class CategoryQuery {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CategoryQuery.prototype, "budgetId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CategoryQuery.prototype, "limit", void 0);
exports.CategoryQuery = CategoryQuery;


/***/ }),
/* 72 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCategory = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(45);
class CreateCategory {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateCategory.prototype, "budgetId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCategory.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Links to an optional parent category',
        required: false,
        example: '302e0ddc-7354-4f69-87ae-ba66d17622f2',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateCategory.prototype, "parentId", void 0);
exports.CreateCategory = CreateCategory;


/***/ }),
/* 73 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCategory = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(45);
class UpdateCategory {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateCategory.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCategory.prototype, "budgetId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCategory.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Parent category Id to link to',
        example: '582ba03f-7c68-4ac6-a097-72e02b0385c6',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateCategory.prototype, "parentId", void 0);
exports.UpdateCategory = UpdateCategory;


/***/ }),
/* 74 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PayeeModule = void 0;
const common_1 = __webpack_require__(1);
const extensions_1 = __webpack_require__(7);
const neo4j_1 = __webpack_require__(10);
const payee_controller_1 = __webpack_require__(75);
const payee_service_1 = __webpack_require__(79);
let PayeeModule = class PayeeModule {
};
PayeeModule = __decorate([
    (0, common_1.Module)({
        controllers: [payee_controller_1.PayeeController],
        exports: [payee_service_1.PayeeService],
        providers: [payee_service_1.PayeeService],
        imports: [neo4j_1.Neo4jModule, extensions_1.CommonAccountModule],
    })
], PayeeModule);
exports.PayeeModule = PayeeModule;


/***/ }),
/* 75 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PayeeController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(17);
const dto_1 = __webpack_require__(76);
const payee_service_1 = __webpack_require__(79);
let PayeeController = class PayeeController {
    constructor(payeeService) {
        this.payeeService = payeeService;
    }
    createPayee(budgetId, createRequest) {
        if (!createRequest.budgetId || createRequest.budgetId !== budgetId) {
            throw new common_1.HttpException('No budgetId found on request', common_1.HttpStatus.CONFLICT);
        }
        return this.payeeService.createPayee(createRequest);
    }
    getAllPayees(budgetId) {
        return this.payeeService.getAllPayees(budgetId);
    }
};
__decorate([
    (0, common_1.Post)(':budgetId'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a payee' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Returns the newly created payee',
    }),
    __param(0, (0, common_1.Param)('budgetId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_a = typeof dto_1.CreatePayee !== "undefined" && dto_1.CreatePayee) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _b : Object)
], PayeeController.prototype, "createPayee", null);
__decorate([
    (0, common_1.Get)(':budgetId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Payees by a given request' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'All payees that match the given request',
    }),
    __param(0, (0, common_1.Param)('budgetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_c = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _c : Object)
], PayeeController.prototype, "getAllPayees", null);
PayeeController = __decorate([
    (0, common_1.Controller)('payee'),
    (0, swagger_1.ApiTags)('payee'),
    __metadata("design:paramtypes", [typeof (_d = typeof payee_service_1.PayeeService !== "undefined" && payee_service_1.PayeeService) === "function" ? _d : Object])
], PayeeController);
exports.PayeeController = PayeeController;


/***/ }),
/* 76 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(77), exports);
__exportStar(__webpack_require__(78), exports);


/***/ }),
/* 77 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePayee = void 0;
const class_validator_1 = __webpack_require__(45);
class CreatePayee {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreatePayee.prototype, "budgetId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePayee.prototype, "name", void 0);
exports.CreatePayee = CreatePayee;


/***/ }),
/* 78 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PayeeQuery = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(45);
class PayeeQuery {
}
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], PayeeQuery.prototype, "budgetId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PayeeQuery.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'A partial string to try and match a payee on',
        example: 'South',
    }),
    __metadata("design:type", String)
], PayeeQuery.prototype, "name", void 0);
exports.PayeeQuery = PayeeQuery;


/***/ }),
/* 79 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PayeeService_1, _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PayeeService = void 0;
const common_1 = __webpack_require__(1);
const operators_1 = __webpack_require__(18);
const constants_1 = __webpack_require__(37);
const extensions_1 = __webpack_require__(7);
const neo4j_1 = __webpack_require__(10);
const payee_queries_1 = __webpack_require__(80);
let PayeeService = PayeeService_1 = class PayeeService extends extensions_1.CommonAccountService {
    constructor(neo4jService) {
        super(neo4jService);
        this.neo4jService = neo4jService;
        this.logger = new common_1.Logger(PayeeService_1.name);
    }
    createPayee(request) {
        const resultKey = 'payee';
        const { query, params } = payee_queries_1.payeeQueries.createPayee(resultKey, request);
        return this.neo4jService.rxSession.writeTransaction((trx) => trx.run(query, params).records().pipe((0, neo4j_1.getRecordsByKey)(resultKey)));
    }
    getAllPayees(budgetId) {
        const resultKey = 'payees';
        const { query, params } = payee_queries_1.payeeQueries.getAllPayeesByBudgetId(resultKey, budgetId);
        return this.neo4jService.rxSession.readTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, operators_1.materialize)(), (0, operators_1.toArray)(), (0, neo4j_1.getRecordsByKeyNotification)(resultKey)));
    }
    convertTransactionToAccountLink(transaction, transactionAmount) {
        return {
            id: transaction.payeeId,
            label: constants_1.SupportedLabel.Payee,
            budgetId: transaction.budgetId,
            amount: transactionAmount,
        };
    }
    convertToAccountLinkResponse(currentTransaction, transactionUpdateRequest, linkingRelationship, currentTransactionAmount, updatedTransactionRequestAmount) {
        const currentNodeRelationship = {
            id: currentTransaction.payeeId,
            label: constants_1.SupportedLabel.Payee,
            isBalanceDifferent: currentTransaction.inflow !== transactionUpdateRequest.inflow ||
                currentTransaction.outflow !== transactionUpdateRequest.outflow,
            chargeAmount: updatedTransactionRequestAmount,
            refundAmount: -currentTransactionAmount,
            budgetId: currentTransaction.budgetId,
        };
        return {
            storedTransactionDetails: {
                id: currentTransaction.id,
                label: constants_1.SupportedLabel.Transaction,
                budgetId: currentTransaction.budgetId,
                relationship: linkingRelationship,
                balanceRequest: currentNodeRelationship,
            },
            currentTransactionLinkDetails: {
                id: currentTransaction.payeeId,
                amount: -currentTransactionAmount,
                label: constants_1.SupportedLabel.Payee,
                budgetId: currentTransaction.budgetId,
            },
            newLinkDetails: {
                id: transactionUpdateRequest.payeeId,
                amount: updatedTransactionRequestAmount,
                label: constants_1.SupportedLabel.Payee,
                budgetId: transactionUpdateRequest.budgetId,
            },
        };
    }
};
PayeeService = PayeeService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jService !== "undefined" && neo4j_1.Neo4jService) === "function" ? _a : Object])
], PayeeService);
exports.PayeeService = PayeeService;


/***/ }),
/* 80 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.payeeQueries = void 0;
const uuid_1 = __webpack_require__(42);
const constants_1 = __webpack_require__(37);
exports.payeeQueries = {
    createPayee: (resultKey, request) => ({
        query: `
        MATCH (budget:Budget {id: $budgetId})
        CREATE (${resultKey}:${constants_1.SupportedLabel.Payee} $nodeProps)
        MERGE (${resultKey})-[r:${constants_1.NodeRelationship.PayeeOf}]->(budget)
        RETURN ${resultKey}
      `,
        params: {
            budgetId: request.budgetId,
            nodeProps: Object.assign(Object.assign({}, request), { createdDate: new Date().toISOString(), id: (0, uuid_1.v4)() }),
        },
    }),
    getAllPayeesByBudgetId: (resultKey, budgetId) => ({
        query: `
        MATCH (${resultKey}:${constants_1.SupportedLabel.Payee} { budgetId: $budgetId })
        RETURN ${resultKey}
      `,
        params: {
            budgetId,
        },
    }),
};


/***/ }),
/* 81 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionService = exports.TransactionModule = exports.TransactionController = void 0;
__exportStar(__webpack_require__(82), exports);
__exportStar(__webpack_require__(83), exports);
var transaction_controller_1 = __webpack_require__(90);
Object.defineProperty(exports, "TransactionController", ({ enumerable: true, get: function () { return transaction_controller_1.TransactionController; } }));
var transaction_module_1 = __webpack_require__(102);
Object.defineProperty(exports, "TransactionModule", ({ enumerable: true, get: function () { return transaction_module_1.TransactionModule; } }));
var transaction_service_1 = __webpack_require__(96);
Object.defineProperty(exports, "TransactionService", ({ enumerable: true, get: function () { return transaction_service_1.TransactionService; } }));


/***/ }),
/* 82 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Transaction_UsedCategory = exports.Transaction_UsedPayee = exports.Transaction_UsedAccount = exports.TransactionLabel = void 0;
exports.TransactionLabel = 'Transaction';
exports.Transaction_UsedAccount = 'USED_ACCOUNT';
exports.Transaction_UsedPayee = 'USED_PAYEE';
exports.Transaction_UsedCategory = 'USED_CATEGORY';


/***/ }),
/* 83 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(84), exports);
__exportStar(__webpack_require__(89), exports);
__exportStar(__webpack_require__(87), exports);


/***/ }),
/* 84 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionSearchController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const contracts_1 = __webpack_require__(47);
const rxjs_1 = __webpack_require__(17);
const utils_1 = __webpack_require__(85);
const transaction_search_service_1 = __webpack_require__(87);
let TransactionSearchController = class TransactionSearchController {
    constructor(transactionSearchService) {
        this.transactionSearchService = transactionSearchService;
    }
    getTransactionsForAccount(budgetId, accountId) {
        return this.transactionSearchService.getTransactionsByAccount(budgetId, accountId);
    }
    getTransactionsForPayee(budgetId, payeeId) {
        return this.transactionSearchService.getTransactionsByPayee(budgetId, payeeId);
    }
    getTransactionsForCategory(budgetId, categoryId) {
        return this.transactionSearchService.getTransactionByCategory(budgetId, categoryId);
    }
    getTransactionsByQuery(budgetId, query) {
        return this.transactionSearchService.getTransactionsByDateBoundary(budgetId, (0, utils_1.toMonthBoundary)(query));
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Query the transactions that are linked to a given account',
        description: 'Get the transactions relate to the account',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Transactions that are linked to the accountId',
    }),
    (0, common_1.Get)(':budgetId/account/:accountId'),
    __param(0, (0, common_1.Param)('budgetId')),
    __param(1, (0, common_1.Param)('accountId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_a = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _a : Object)
], TransactionSearchController.prototype, "getTransactionsForAccount", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Query the transactions that are linked to a given payee',
        description: 'Get the transactions relate to the payee',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Transactions that are linked to the payeeId',
    }),
    (0, common_1.Get)(':budgetId/payee/:payeeId'),
    __param(0, (0, common_1.Param)('budgetId')),
    __param(1, (0, common_1.Param)('payeeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_b = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _b : Object)
], TransactionSearchController.prototype, "getTransactionsForPayee", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Query the transactions that are linked to a given category',
        description: 'Get the transactions relate to the category',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Transactions that are linked to the categoryId',
    }),
    (0, common_1.Get)(':budgetId/category/:categoryId'),
    __param(0, (0, common_1.Param)('budgetId')),
    __param(1, (0, common_1.Param)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_c = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _c : Object)
], TransactionSearchController.prototype, "getTransactionsForCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Query the transactions between two dates in time',
        description: 'Get the transactions between two dates',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Transactions that are between two dates',
    }),
    (0, common_1.Get)(':budgetId/search-date-range'),
    __param(0, (0, common_1.Param)('budgetId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof contracts_1.IDateRangeSearchQuery !== "undefined" && contracts_1.IDateRangeSearchQuery) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _e : Object)
], TransactionSearchController.prototype, "getTransactionsByQuery", null);
TransactionSearchController = __decorate([
    (0, common_1.Controller)('transaction'),
    (0, swagger_1.ApiTags)('transaction-search'),
    __metadata("design:paramtypes", [typeof (_f = typeof transaction_search_service_1.TransactionSearchService !== "undefined" && transaction_search_service_1.TransactionSearchService) === "function" ? _f : Object])
], TransactionSearchController);
exports.TransactionSearchController = TransactionSearchController;


/***/ }),
/* 85 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(86), exports);


/***/ }),
/* 86 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toMonthBoundary = void 0;
const toMonthBoundary = (request) => {
    return {
        start: {
            day: request.dayStart,
            month: request.monthStart,
            year: request.yearStart,
        },
        end: {
            day: request.dayEnd,
            month: request.monthEnd,
            year: request.yearEnd,
        },
    };
};
exports.toMonthBoundary = toMonthBoundary;


/***/ }),
/* 87 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionSearchService = void 0;
const common_1 = __webpack_require__(1);
const operators_1 = __webpack_require__(18);
const neo4j_1 = __webpack_require__(10);
const neo4j_operators_1 = __webpack_require__(22);
const transaction_search_queries_1 = __webpack_require__(88);
let TransactionSearchService = class TransactionSearchService {
    constructor(neo4jService) {
        this.neo4jService = neo4jService;
    }
    getTransactionsByPayee(budgetId, payeeId) {
        const { query, params, recordBase, formatKeyMap, } = transaction_search_queries_1.searchQueries.getTransactionByPayee(payeeId, budgetId);
        return this.neo4jService.rxSession.readTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, operators_1.materialize)(), (0, operators_1.toArray)(), (0, neo4j_operators_1.transformRecordToDetail)(recordBase, formatKeyMap)));
    }
    getTransactionByCategory(budgetId, categoryId) {
        const { query, params, recordBase, formatKeyMap, } = transaction_search_queries_1.searchQueries.getTransactionByCategory(categoryId, budgetId);
        return this.neo4jService.rxSession.readTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, operators_1.materialize)(), (0, operators_1.toArray)(), (0, neo4j_operators_1.transformRecordToDetail)(recordBase, formatKeyMap)));
    }
    getTransactionsByAccount(budgetId, accountId) {
        const { query, params, recordBase, formatKeyMap } = transaction_search_queries_1.searchQueries.getTransactionByAccount(accountId, budgetId);
        return this.neo4jService.rxSession.readTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, operators_1.materialize)(), (0, operators_1.toArray)(), (0, neo4j_operators_1.transformRecordToDetail)(recordBase, formatKeyMap)));
    }
    getTransactionsByDateBoundary(budgetId, request) {
        const { query, params, recordBase, formatKeyMap } = transaction_search_queries_1.searchQueries.getTransactionsByRange(budgetId, request);
        return this.neo4jService.rxSession.readTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, operators_1.materialize)(), (0, operators_1.toArray)(), (0, neo4j_operators_1.transformRecordToDetail)(recordBase, formatKeyMap)));
    }
};
TransactionSearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jService !== "undefined" && neo4j_1.Neo4jService) === "function" ? _a : Object])
], TransactionSearchService);
exports.TransactionSearchService = TransactionSearchService;


/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.searchQueries = void 0;
const constants_1 = __webpack_require__(37);
const account = 'account';
const budget = 'budget';
const payee = 'payee';
const category = 'category';
const transaction = 'transaction';
exports.searchQueries = {
    getTransactionByAccount: (accountId, budgetId) => {
        return {
            query: `
        MATCH (${transaction}:Transaction)
          -[:${constants_1.NodeRelationship.UsedAccount}]->(${account}:${constants_1.SupportedLabel.Account} {id: $accountId})
          -[:${constants_1.NodeRelationship.AccountOf}]->(${budget}:${constants_1.SupportedLabel.Budget} {id: $budgetId}),
        (${transaction})-[${constants_1.NodeRelationship.UsedCategory}]->(${category}:${constants_1.SupportedLabel.Category})-[:${constants_1.NodeRelationship.CategoryOf}]->(budget),
        (${transaction})-[${constants_1.NodeRelationship.UsedPayee}]->(${payee}:${constants_1.SupportedLabel.Payee})-[:${constants_1.NodeRelationship.PayeeOf}]->(budget)
        RETURN ${transaction}, ${category}, ${account}, ${payee}`,
            params: {
                accountId,
                budgetId,
            },
            recordBase: transaction,
            formatKeyMap: {
                [account]: 'account',
                [payee]: 'payee',
                [category]: 'category',
            },
        };
    },
    getTransactionByPayee: (payeeId, budgetId) => {
        return {
            query: `
        MATCH (${transaction}:Transaction)
          -[:${constants_1.NodeRelationship.UsedPayee}]->(${payee}:${constants_1.SupportedLabel.Payee} {id: $payeeId})
          -[:${constants_1.NodeRelationship.PayeeOf}]->(${budget}:${constants_1.SupportedLabel.Budget} {id: $budgetId}),
        (${transaction})-[${constants_1.NodeRelationship.UsedCategory}]->(${category}:${constants_1.SupportedLabel.Category})-[:${constants_1.NodeRelationship.CategoryOf}]->(budget),
        (${transaction})-[${constants_1.NodeRelationship.UsedAccount}]->(${account}:${constants_1.SupportedLabel.Account})-[:${constants_1.NodeRelationship.AccountOf}]->(budget),
        RETURN ${transaction}, ${category}, ${account}, ${payee}`,
            params: {
                payeeId,
                budgetId,
            },
            recordBase: transaction,
            formatKeyMap: {
                [account]: 'account',
                [payee]: 'payee',
                [category]: 'category',
            },
        };
    },
    getTransactionByCategory: (categoryId, budgetId) => {
        return {
            query: `
        MATCH (${transaction}:Transaction)
          -[:${constants_1.NodeRelationship.UsedCategory}]->(${category}:${constants_1.SupportedLabel.Category} {id: $categoryId})
          -[:${constants_1.NodeRelationship.CategoryOf}]->(${budget}:${constants_1.SupportedLabel.Budget} {id: $budgetId}),
        (${transaction})-[${constants_1.NodeRelationship.UsedAccount}]->(${account}:${constants_1.SupportedLabel.Account})-[:${constants_1.NodeRelationship.AccountOf}]->(budget),
        (${transaction})-[${constants_1.NodeRelationship.UsedPayee}]->(${payee}:${constants_1.SupportedLabel.Payee})-[:${constants_1.NodeRelationship.PayeeOf}]->(budget)
        RETURN ${transaction}, ${category}, ${account}, ${payee}`,
            params: {
                categoryId,
                budgetId,
            },
            recordBase: transaction,
            formatKeyMap: {
                [account]: 'account',
                [payee]: 'payee',
                [category]: 'category',
            },
        };
    },
    getTransactionsByRange: (budgetId, boundary) => {
        const startDay = +boundary.start.day;
        const startMonth = +boundary.start.month;
        const startYear = +boundary.start.year;
        const endDay = +boundary.end.day;
        const endMonth = +boundary.end.month;
        const endYear = +boundary.end.year;
        return {
            query: `
        MATCH (${transaction}:Transaction {budgetId: $budgetId}),
        (${transaction})-[${constants_1.NodeRelationship.UsedCategory}]->(${category}:${constants_1.SupportedLabel.Category})-[:${constants_1.NodeRelationship.CategoryOf}]->(budget),
        (${transaction})-[${constants_1.NodeRelationship.UsedAccount}]->(${account}:${constants_1.SupportedLabel.Account})-[:${constants_1.NodeRelationship.AccountOf}]->(budget),
        (${transaction})-[${constants_1.NodeRelationship.UsedPayee}]->(${payee}:${constants_1.SupportedLabel.Payee})-[:${constants_1.NodeRelationship.PayeeOf}]->(budget)
        WHERE datetime({year: ${endYear}, month: ${endMonth}, day: ${endDay}}) > transaction.date >= datetime({year: ${startYear}, month: ${startMonth}, day: ${startDay}})
        RETURN ${transaction}, ${category}, ${account}, ${payee}
      `,
            params: {
                budgetId,
            },
            recordBase: transaction,
            formatKeyMap: {
                account,
                payee,
                category,
            },
        };
    },
};


/***/ }),
/* 89 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionSearchModule = void 0;
const common_1 = __webpack_require__(1);
const neo4j_1 = __webpack_require__(10);
const transaction_search_controller_1 = __webpack_require__(84);
const transaction_search_service_1 = __webpack_require__(87);
let TransactionSearchModule = class TransactionSearchModule {
};
TransactionSearchModule = __decorate([
    (0, common_1.Module)({
        controllers: [transaction_search_controller_1.TransactionSearchController],
        providers: [transaction_search_service_1.TransactionSearchService],
        imports: [neo4j_1.Neo4jModule],
    })
], TransactionSearchModule);
exports.TransactionSearchModule = TransactionSearchModule;


/***/ }),
/* 90 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(17);
const dto_1 = __webpack_require__(91);
const transaction_service_1 = __webpack_require__(96);
let TransactionController = class TransactionController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    createTransaction(budgetId, request) {
        if (budgetId !== request.budgetId) {
            throw new common_1.BadRequestException();
        }
        return this.transactionService.createTransaction(request);
    }
    updateTransaction(budgetId, transactionId, transactionData) {
        if (transactionData.budgetId !== budgetId ||
            transactionData.id !== transactionId) {
            throw new common_1.BadRequestException();
        }
        return this.transactionService.updateTransaction$(transactionData);
    }
    deleteTransaction(budgetId, transactionId) {
        return this.transactionService.deleteTransaction$(budgetId, transactionId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Create a single transaction and link it accordingly',
        description: `
      When a transaction is created this is going to first create the transaction. It will then go and link to the account,
      category, and payee. It will update the balances on those with the current inflow/outflow of the transaction.
      `,
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Returns back a single, newly created transaction',
    }),
    (0, common_1.Post)(':budgetId'),
    __param(0, (0, common_1.Param)('budgetId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_a = typeof dto_1.TransactionCreateDto !== "undefined" && dto_1.TransactionCreateDto) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _b : Object)
], TransactionController.prototype, "createTransaction", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Update a transaction',
        description: `
    Updates a given transaction and will re-establish any links it might have
    `,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns back the updated transactions with its properties and labels after being updated',
    }),
    (0, common_1.Post)(':budgetId/detail/:transactionId'),
    __param(0, (0, common_1.Param)('budgetId')),
    __param(1, (0, common_1.Param)('transactionId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof dto_1.TransactionDto !== "undefined" && dto_1.TransactionDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _d : Object)
], TransactionController.prototype, "updateTransaction", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Delete a transaction',
        description: `
    This is going to remove a transaction and before it's completely gone it will grab what was there, refund all the links
    and then it will remove itself from the network.
    `,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns back a message saying how many nodes have been deleted. Data will need to refresh itself after making this request.',
    }),
    (0, common_1.Delete)(':budgetId/detail/:transactionId'),
    __param(0, (0, common_1.Param)('budgetId')),
    __param(1, (0, common_1.Param)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_e = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _e : Object)
], TransactionController.prototype, "deleteTransaction", null);
TransactionController = __decorate([
    (0, common_1.Controller)('transaction'),
    (0, swagger_1.ApiTags)('transaction'),
    __metadata("design:paramtypes", [typeof (_f = typeof transaction_service_1.TransactionService !== "undefined" && transaction_service_1.TransactionService) === "function" ? _f : Object])
], TransactionController);
exports.TransactionController = TransactionController;


/***/ }),
/* 91 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(92), exports);
__exportStar(__webpack_require__(93), exports);
__exportStar(__webpack_require__(94), exports);
__exportStar(__webpack_require__(95), exports);


/***/ }),
/* 92 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionCreateDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(45);
class TransactionCreateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The date of the transaction, this can be updated, must be an ISO String',
        example: '2020-01-25T14:16:18.362Z',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], TransactionCreateDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Account id to link',
        example: '9c5126fb-e06e-47d0-81a1-684803be6713',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransactionCreateDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payee id to link',
        example: 'aee9b132-1b96-43d1-813c-ed32277ae664',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransactionCreateDto.prototype, "payeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category id to link',
        example: '870cf3c0-484e-4b8e-b4ce-52374c7bf0b8',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransactionCreateDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Budget Id that has all the Id properties above',
        example: '6f76c705-aee2-404e-b2a8-a02cce1a0590',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransactionCreateDto.prototype, "budgetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total inflow from the transaction',
        example: 16.39,
    }),
    (0, class_validator_1.ValidateIf)((prop) => !prop.outflow && prop.outflow < 0),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TransactionCreateDto.prototype, "inflow", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total outflow from the transaction',
        example: -16.39,
    }),
    (0, class_validator_1.ValidateIf)((prop) => !prop.inflow && prop.inflow > 0),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(0),
    __metadata("design:type", Number)
], TransactionCreateDto.prototype, "outflow", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Just a little description on the transaction',
        example: 'Food sucked, never coming back',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransactionCreateDto.prototype, "memo", void 0);
exports.TransactionCreateDto = TransactionCreateDto;


/***/ }),
/* 93 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionDeleteDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(45);
class TransactionDeleteDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Budget Id to remove transaction from',
        example: 'ab4455a2-f18a-4554-a012-cc4bb40ec384',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransactionDeleteDto.prototype, "budgetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Transaction Id to remove',
        example: 'caaf736f-b3f1-4d5d-aa21-1999f18a24cd',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransactionDeleteDto.prototype, "id", void 0);
exports.TransactionDeleteDto = TransactionDeleteDto;


/***/ }),
/* 94 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionQueryDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(45);
class TransactionQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If you know the specific transaction id you can pass that here',
        required: false,
        example: '53b37aa8-2297-4dc8-a9c4-6f40fd5dbdd8',
    }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TransactionQueryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If you know the specific account id you can pass that here',
        required: false,
        example: '1f083ddd-a891-4120-a52a-37a5c78b5f19',
    }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TransactionQueryDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If you know the specific payee id you can pass that here',
        required: false,
        example: '6706ed0d-ea5e-48d9-8bb1-efbb1ec4b547',
    }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TransactionQueryDto.prototype, "payeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If you know the specific category id you can pass that here',
        required: false,
        example: '1dea30ec-4fe8-458e-a6b8-adb11a8b62af',
    }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TransactionQueryDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If you have a set number of transactions you want back it can go here',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransactionQueryDto.prototype, "limit", void 0);
exports.TransactionQueryDto = TransactionQueryDto;


/***/ }),
/* 95 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(45);
class TransactionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Budget Id that has all the Id properties above',
        example: '6f76c705-aee2-404e-b2a8-a02cce1a0590',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransactionDto.prototype, "budgetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total inflow from the transaction',
        example: 16.39,
    }),
    (0, class_validator_1.ValidateIf)((prop) => !prop.outflow && prop.outflow < 0),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TransactionDto.prototype, "inflow", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total outflow from the transaction',
        example: -16.39,
    }),
    (0, class_validator_1.ValidateIf)((prop) => !prop.inflow && prop.inflow > 0),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(0),
    __metadata("design:type", Number)
], TransactionDto.prototype, "outflow", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Just a little description on the transaction',
        example: 'Food sucked, never coming back',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransactionDto.prototype, "memo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Must have an id on this in order to find the correct transaction to update',
        example: '2ba85dda-7a9f-4046-9841-89bc15b9295f',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransactionDto.prototype, "id", void 0);
exports.TransactionDto = TransactionDto;


/***/ }),
/* 96 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionService = void 0;
const common_1 = __webpack_require__(1);
const rxjs_1 = __webpack_require__(17);
const operators_1 = __webpack_require__(18);
const account_1 = __webpack_require__(97);
const category_1 = __webpack_require__(98);
const constants_1 = __webpack_require__(37);
const neo4j_1 = __webpack_require__(10);
const payee_1 = __webpack_require__(99);
const constants_2 = __webpack_require__(82);
const queries_1 = __webpack_require__(100);
let TransactionService = class TransactionService {
    constructor(neo4jService, accountService, categoryService, payeeService) {
        this.neo4jService = neo4jService;
        this.accountService = accountService;
        this.categoryService = categoryService;
        this.payeeService = payeeService;
    }
    createTransaction(request) {
        const resultKey = 'transactionResult';
        const { query, params } = queries_1.TransactionQueries.createNewTransaction(resultKey, request);
        const createTransaction$ = this.neo4jService.rxSession.writeTransaction((txc) => txc
            .run(query, params)
            .records()
            .pipe((0, neo4j_1.getRecordsByKey)(resultKey)));
        return createTransaction$.pipe((0, operators_1.switchMap)((result) => this.updateLinkedNodeBalanceByService$(result)));
    }
    updateLinkedNodeBalanceByService$(transaction) {
        const amount = this.getTransactionAmount(transaction);
        const services = [
            this.accountService,
            this.payeeService,
            this.categoryService,
        ];
        return (0, rxjs_1.forkJoin)(services.map((service) => service.updateLinkedNodeBalance$(Object.assign({}, service.convertTransactionToAccountLink(transaction, amount))))).pipe((0, operators_1.map)(() => transaction));
    }
    getTransactionsByQuery(request) {
        const resultKey = 'nodes';
        const { query, params } = queries_1.TransactionQueries.searchTransactions(resultKey, request);
        return this.neo4jService.rxSession.readTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, operators_1.materialize)(), (0, operators_1.toArray)(), (0, neo4j_1.getRecordsByKeyNotification)(resultKey)));
    }
    updateTransaction$(request) {
        const findMatchingTransaction$ = this.getTransaction(request.id, request.budgetId).pipe((0, operators_1.map)((transaction) => {
            return transaction
                ? transaction
                : (0, rxjs_1.throwError)(new common_1.NotFoundException('No current transaction found to match!'));
        }));
        return findMatchingTransaction$.pipe((0, operators_1.switchMap)((transaction) => (0, rxjs_1.forkJoin)([...this.updateLinkedNodeBalance$(transaction, request)])), (0, operators_1.flatMap)(() => this.updateTransactionProperties$(request)));
    }
    deleteTransaction$(budgetId, transactionId) {
        return this.getTransactionsByQuery({
            budgetId: budgetId,
            id: transactionId,
        }).pipe((0, operators_1.map)((results) => results[0]), (0, operators_1.map)((transaction) => {
            if (!transaction) {
                throw new common_1.NotFoundException('No current transaction found to match!');
            }
            return transaction;
        }), (0, operators_1.flatMap)((transaction) => this.removeLinkWithRefund$(transaction)), (0, operators_1.flatMap)((_) => this.deleteTransactionById$(transactionId, budgetId)));
    }
    getTransaction(transactionId, budgetId) {
        const resultKey = 'transaction';
        const { query, params } = queries_1.TransactionQueries.getTransaction(resultKey, transactionId, budgetId);
        return this.neo4jService.rxSession.readTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, operators_1.catchError)((err) => (0, rxjs_1.throwError)(err)), (0, neo4j_1.getRecordsByKey)(resultKey)));
    }
    updateTransactionProperties$(request) {
        const resultKey = 'transactionNode';
        const { query, params } = queries_1.TransactionQueries.updateTransaction(resultKey, request);
        return this.neo4jService.rxSession.writeTransaction((trx) => trx
            .run(query, params)
            .records()
            .pipe((0, neo4j_1.getRecordsByKey)(resultKey), (0, operators_1.catchError)((err) => (0, rxjs_1.throwError)(err))));
    }
    getTransactionAmount(transaction) {
        return transaction.inflow ? transaction.inflow : transaction.outflow || 0;
    }
    updateLinkedNodeBalance$(transaction, request) {
        const serviceLinks = [
            {
                service: this.accountService,
                relationship: constants_2.Transaction_UsedAccount,
            },
            {
                service: this.categoryService,
                relationship: constants_2.Transaction_UsedCategory,
            },
            {
                service: this.payeeService,
                relationship: constants_2.Transaction_UsedPayee,
            },
        ];
        const currentTransactionAmount = this.getTransactionAmount(transaction);
        const updateTransactionRequestAmount = this.getTransactionAmount(request);
        return serviceLinks.map(({ service, relationship }) => service.updateLink$(service.convertToAccountLinkResponse(transaction, request, relationship, currentTransactionAmount, updateTransactionRequestAmount)));
    }
    removeLinkWithRefund$(currentTransaction) {
        const refundAmount = currentTransaction.inflow
            ? -currentTransaction.inflow
            : currentTransaction.outflow
                ? -currentTransaction.outflow
                : 0;
        const commonRequest = {
            refundAmount,
            budgetId: currentTransaction.budgetId,
            transaction: {
                id: currentTransaction.id,
                label: constants_1.SupportedLabel.Transaction,
                budgetId: currentTransaction.budgetId,
            },
        };
        return (0, rxjs_1.forkJoin)([
            this.payeeService.removeLinkWithRefund(Object.assign(Object.assign({}, commonRequest), { relationship: constants_2.Transaction_UsedPayee, account: {
                    id: currentTransaction.payeeId,
                    label: constants_1.SupportedLabel.Payee,
                } })),
            this.accountService.removeLinkWithRefund(Object.assign(Object.assign({}, commonRequest), { relationship: constants_2.Transaction_UsedAccount, account: {
                    id: currentTransaction.accountId,
                    label: constants_1.SupportedLabel.Account,
                } })),
            this.categoryService.removeLinkWithRefund(Object.assign(Object.assign({}, commonRequest), { relationship: constants_2.Transaction_UsedCategory, account: {
                    id: currentTransaction.categoryId,
                    label: constants_1.SupportedLabel.Category,
                } })),
        ]);
    }
    deleteTransactionById$(transactionId, budgetId) {
        const { query, params } = queries_1.TransactionQueries.deleteTransactionStatement(transactionId, budgetId);
        return this.neo4jService.rxSession.writeTransaction((trx) => trx.run(query, params).consume().pipe((0, operators_1.map)((result) => ({
            message: `Deleted ${result.counters.updates().nodesDeleted || 0} record(s)`,
            isDeleted: true,
            id: transactionId,
        }))));
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jService !== "undefined" && neo4j_1.Neo4jService) === "function" ? _a : Object, typeof (_b = typeof account_1.AccountService !== "undefined" && account_1.AccountService) === "function" ? _b : Object, typeof (_c = typeof category_1.CategoryService !== "undefined" && category_1.CategoryService) === "function" ? _c : Object, typeof (_d = typeof payee_1.PayeeService !== "undefined" && payee_1.PayeeService) === "function" ? _d : Object])
], TransactionService);
exports.TransactionService = TransactionService;


/***/ }),
/* 97 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryService = exports.CategoryModule = exports.CategoryController = void 0;
var category_controller_1 = __webpack_require__(67);
Object.defineProperty(exports, "CategoryController", ({ enumerable: true, get: function () { return category_controller_1.CategoryController; } }));
var category_module_1 = __webpack_require__(66);
Object.defineProperty(exports, "CategoryModule", ({ enumerable: true, get: function () { return category_module_1.CategoryModule; } }));
var category_service_1 = __webpack_require__(68);
Object.defineProperty(exports, "CategoryService", ({ enumerable: true, get: function () { return category_service_1.CategoryService; } }));


/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PayeeService = exports.PayeeModule = exports.PayeeController = void 0;
var payee_controller_1 = __webpack_require__(75);
Object.defineProperty(exports, "PayeeController", ({ enumerable: true, get: function () { return payee_controller_1.PayeeController; } }));
var payee_module_1 = __webpack_require__(74);
Object.defineProperty(exports, "PayeeModule", ({ enumerable: true, get: function () { return payee_module_1.PayeeModule; } }));
var payee_service_1 = __webpack_require__(79);
Object.defineProperty(exports, "PayeeService", ({ enumerable: true, get: function () { return payee_service_1.PayeeService; } }));


/***/ }),
/* 100 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(88), exports);
__exportStar(__webpack_require__(101), exports);


/***/ }),
/* 101 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionQueries = void 0;
const uuid_1 = __webpack_require__(42);
const common_queries_1 = __webpack_require__(25);
const constants_1 = __webpack_require__(37);
exports.TransactionQueries = {
    createNewTransaction: (requestKey, request) => ({
        query: `
      MATCH (category:Category {id: $categoryId, budgetId: $budgetId})
      MATCH (account:Account {id: $accountId, budgetId: $budgetId})
      MATCH (payee:Payee {id: $payeeId, budgetId: $budgetId})
      CREATE (${requestKey}:${constants_1.SupportedLabel.Transaction} $nodeProps)
      SET ${requestKey}.createdDate = datetime("${new Date().toISOString()}")
      SET ${requestKey}.date = datetime("${request.date}")
      MERGE (${requestKey})-[relatesToAccount:${constants_1.NodeRelationship.UsedAccount}]->(account)
      MERGE (${requestKey})-[relatesToCategory:${constants_1.NodeRelationship.UsedCategory}]->(category)
      MERGE (${requestKey})-[relatesToPayee:${constants_1.NodeRelationship.UsedPayee}]->(payee)
      RETURN ${requestKey}
    `,
        params: {
            budgetId: request.budgetId,
            categoryId: request.categoryId,
            accountId: request.accountId,
            payeeId: request.payeeId,
            nodeProps: Object.assign(Object.assign({}, request), { createdDate: new Date().toISOString(), id: (0, uuid_1.v4)() }),
        },
    }),
    deleteTransactionStatement: (transactionId, budgetId) => common_queries_1.CommonQueries.deleteNodeStatement('deletedNode', {
        id: transactionId,
        budgetId,
        label: constants_1.SupportedLabel.Transaction,
    }),
    searchTransactions: (resultKey, query) => {
        const { budgetId, categoryId, payeeId, accountId, id } = query;
        return {
            query: `
      MATCH (${resultKey}:${constants_1.SupportedLabel.Transaction} {budgetId: $budgetId})
      WHERE ${resultKey}.categoryId = $categoryId
        OR ${resultKey}.id = $id
        OR ${resultKey}.payeeId = $payeeId
        OR ${resultKey}.accountId = $accountId
        OR ${resultKey}.budgetId = $budgetId
      RETURN ${resultKey}
    `,
            params: {
                id: id || '',
                budgetId: budgetId || '',
                categoryId: categoryId || '',
                payeeId: payeeId || '',
                accountId: accountId || '',
            },
        };
    },
    updateTransaction: (resultKey, request) => ({
        query: `
    MATCH (${resultKey}:${constants_1.SupportedLabel.Transaction} { id: $id})
    SET ${resultKey} += {inflow: $inflow, outflow: $outflow, memo: $memo, date: datetime($date), accountId: $accountId, payeeId: $payeeId, categoryId: $categoryId}
    RETURN ${resultKey}
  `,
        params: {
            memo: request.memo || null,
            inflow: request.inflow || null,
            outflow: request.outflow || null,
            date: request.date,
            id: request.id,
            accountId: request.accountId,
            categoryId: request.categoryId,
            payeeId: request.payeeId,
        },
    }),
    getTransaction: (resultKey, transactionId, budgetId) => common_queries_1.CommonQueries.getNodeStatement(resultKey, {
        id: transactionId,
        budgetId,
        label: constants_1.SupportedLabel.Transaction,
    }),
};


/***/ }),
/* 102 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionModule = void 0;
const common_1 = __webpack_require__(1);
const account_1 = __webpack_require__(97);
const category_1 = __webpack_require__(98);
const neo4j_1 = __webpack_require__(10);
const payee_1 = __webpack_require__(99);
const transaction_controller_1 = __webpack_require__(90);
const transaction_service_1 = __webpack_require__(96);
let TransactionModule = class TransactionModule {
};
TransactionModule = __decorate([
    (0, common_1.Module)({
        controllers: [transaction_controller_1.TransactionController],
        providers: [transaction_service_1.TransactionService],
        imports: [neo4j_1.Neo4jModule, payee_1.PayeeModule, category_1.CategoryModule, account_1.AccountModule],
    })
], TransactionModule);
exports.TransactionModule = TransactionModule;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(4);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.setGlobalPrefix(globalPrefix);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Mammoth API')
        .setDescription('Mammoth API Docs')
        .setVersion('1.0')
        .addTag('budget')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    const port = process.env.PORT || 3333;
    await app.listen(port, () => {
        common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
    });
}
bootstrap();

})();

/******/ })()
;