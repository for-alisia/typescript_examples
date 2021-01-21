"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label for=\"name\">Email</label>\n        <input name=\"email\" />\n      </div>\n      <div>\n        <label for=\"password\">Password</label>\n        <input name=\"password\" type=\"password\" />\n      </div>\n      <button type=\"submit\">Submit</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'for-alisia@mail.ru' && password === '12345') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <p>You are logged in</p>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <p>You are not logged in</p>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send("\n    Welcome to protected route, loged in user!\n  ");
});
