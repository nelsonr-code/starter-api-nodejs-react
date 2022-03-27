import express from "express";


export default (app) => {
    // app.use(express.urlencoded());
    app.use(express.json());
}