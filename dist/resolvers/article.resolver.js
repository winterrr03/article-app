"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolversArticle = void 0;
var article_model_1 = __importDefault(require("../models/article.model"));
var category_model_1 = __importDefault(require("../models/category.model"));
exports.resolversArticle = {
    Query: {
        getListArticle: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var sortKey, sortValue, currentPage, limitItems, filterKey, filterValue, keyword, find, keywordRegex, skip, sort, articles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sortKey = args.sortKey, sortValue = args.sortValue, currentPage = args.currentPage, limitItems = args.limitItems, filterKey = args.filterKey, filterValue = args.filterValue, keyword = args.keyword;
                        find = {
                            deleted: false
                        };
                        if (filterKey && filterValue) {
                            find[filterKey] = filterValue;
                        }
                        // Hết Bộ lọc
                        // Tìm kiếm
                        if (keyword) {
                            keywordRegex = new RegExp(keyword, "i");
                            find["title"] = keywordRegex;
                        }
                        skip = (currentPage - 1) * limitItems;
                        sort = {};
                        if (sortKey && sortValue) {
                            sort[sortKey] = sortValue;
                        }
                        return [4 /*yield*/, article_model_1.default.find(find).limit(limitItems).skip(skip).sort(sort)];
                    case 1:
                        articles = _a.sent();
                        return [2 /*return*/, articles];
                }
            });
        }); },
        getArticle: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var id, article;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = args.id;
                        return [4 /*yield*/, article_model_1.default.findOne({
                                _id: id,
                                deleted: false
                            })];
                    case 1:
                        article = _a.sent();
                        return [2 /*return*/, article];
                }
            });
        }); },
    },
    Article: {
        category: function (article) { return __awaiter(void 0, void 0, void 0, function () {
            var categoryId, category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoryId = article.categoryId;
                        return [4 /*yield*/, category_model_1.default.findOne({
                                _id: categoryId
                            })];
                    case 1:
                        category = _a.sent();
                        return [2 /*return*/, category];
                }
            });
        }); }
    },
    Mutation: {
        createArticle: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var article, newArticle;
            return __generator(this, function (_a) {
                article = args.article;
                newArticle = new article_model_1.default(article);
                newArticle.save();
                return [2 /*return*/, newArticle];
            });
        }); },
        deleteArticle: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = args.id;
                        return [4 /*yield*/, article_model_1.default.updateOne({
                                _id: id
                            }, {
                                deleted: true,
                                deletedAt: new Date()
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, "Đã xóa"];
                }
            });
        }); },
        updateArticle: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var id, article, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = args.id, article = args.article;
                        return [4 /*yield*/, article_model_1.default.updateOne({
                                _id: id,
                                deleted: false
                            }, article)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, article_model_1.default.findOne({
                                _id: id,
                                deleted: false
                            })];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        }); },
    }
};
