"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefsArticle = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.typeDefsArticle = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Article {\n    id: String,\n    title: String,\n    avatar: String,\n    description: String,\n    category: Category\n  }\n  type Query {\n    getListArticle(\n      sortKey: String,\n      sortValue: String,\n      currentPage: Int = 1,\n      limitItems: Int = 10,\n      filterKey: String,\n      filterValue: String,\n      keyword: String,\n    ): [Article],\n    getArticle(id: String): Article\n  }\n  input ArticleInput {\n    title: String,\n    avatar: String,\n    description: String,\n    categoryId: String\n  }\n  type Mutation {\n    createArticle(article: ArticleInput): Article,\n    deleteArticle(id: String): String,\n    updateArticle(id: String, article: ArticleInput): Article\n  }\n"], ["\n  type Article {\n    id: String,\n    title: String,\n    avatar: String,\n    description: String,\n    category: Category\n  }\n  type Query {\n    getListArticle(\n      sortKey: String,\n      sortValue: String,\n      currentPage: Int = 1,\n      limitItems: Int = 10,\n      filterKey: String,\n      filterValue: String,\n      keyword: String,\n    ): [Article],\n    getArticle(id: String): Article\n  }\n  input ArticleInput {\n    title: String,\n    avatar: String,\n    description: String,\n    categoryId: String\n  }\n  type Mutation {\n    createArticle(article: ArticleInput): Article,\n    deleteArticle(id: String): String,\n    updateArticle(id: String, article: ArticleInput): Article\n  }\n"])));
var templateObject_1;
