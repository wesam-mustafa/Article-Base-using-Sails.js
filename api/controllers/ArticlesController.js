/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  list: function (req, res) {
    Articles.find({}).exec(function (err, articles) {
      if (err) res.send(500, {
        error: "Database Error!"
      });
      res.view("list", {
        articles: articles
      });
    });
  },
  add: function (req, res) {
    res.view("add");
  },
  create: function (req, res) {
    Articles.create({
      title: req.body.title,
      body: req.body.body
    }).exec(function(err){
        if(err) {res.send(500,{error:"Database Error !"})}
        res.redirect("/articles/list");
    });
  }


};
