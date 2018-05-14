var express = require('express');
var Fitness = require('./model');

var app = express.Router();

var fitness = new Fitness();

module.exports = app
    .get('/state', (req, res) => res.send(fitness))
    .get('/activity', (req, res) => {
        res.send(fitness.GetActivity(req.query.userId))
    })
    .get('/friends', (req, res) => {
        res.send(fitness.GetUsers(req.query.userId))
    })
    .post('/friends', (req,res) => {
        console.log(req.body);
        try{
            fitness.MakeFriend(
                req.body.myName,
                req.body.newFriend);
                res.send({ success: true });
        } catch (error) {
            res.status(403).send( { success: false } )
        }
    })
    
    .post('/login', (req, res) => {
        res.send(fitness.login(req.body.userId, req.body.password))
    })
    .post('/register', (req, res) => {
        res.send(fitness.register(req.body.userId, req.body.password));
    })
    .post('/activity', (req, res) => {
        console.log(req.body);
        try{
            fitness.InputFitness(
                req.body.Person,
                req.body.Activity, 
                req.body.Duration,
                req.body.Intensity, 
                req.body.Shareable);
                res.send({ success: true });
        } catch (error) {
            res.status(403).send( { success: false } )
        }
        })