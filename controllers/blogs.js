const Blog = require("../models/Blogs");
const faker = require("faker");

const Model = Blog;

const blog_get_all = (req, res) => {
  Model.find()
    .then((result) => res.render("blogs", { blogs: result }))
    .catch((err) => {
      global.console.log(err);
      res.send({ message: "Internal Server Error" });
    });
};

const blog_add = (req, res) => {
  global.console.log(req);
  const blog = new Model(req.body);

  blog
    .save()
    .then((result) => {
      global.console.log(result);
      res.status(201).send(result);
      // res.send(result);
    })
    .catch((err) => {
      global.console.log(err);
      res.status(500).send({ message: "internal Server Error" });
    });
};

const blog_add_test = (req, res) => {
  const blog = new Model({
    title: faker.name.title(),
    snippet: faker.hacker.phrase(),
    body: faker.lorem.paragraph(),
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      global.console.log(err);
      res.send({ message: "internal Server Error" });
    });
};

const blog_get_one = (req, res) => {
  const id = req.params.id;
  global.console.log(id);
  Model.findById(id)
    .then((result) => {
      if (!result) res.status(404).send({ message: "not found" });
      else res.send(result);
    })
    .catch((err) => {
      global.console.log(err);
      res.send({ message: "internal Server Error" });
    });
};

const blog_delete = (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => res.send({ message: `${req.params.id} Deleted!` }))
    .catch((err) => {
      global.console.log(err);
      res.send({ message: "internal Server Error" });
    });
};

const blog_update = (req, res) => {
  const id = req.params.id;

  Model.updateOne({ _id: id }, req.body, (err) => global.console.log(err))
    .then((result) => {
      res.send(result.n > 0);
      global.console.log(result);
    })
    .catch((err) => {
      global.console.log(err);
      res.send({ message: "internal Server Error" });
    });
};

module.exports = {
  blog_get_all,
  blog_add,
  blog_add_test,
  blog_get_one,
  blog_delete,
  blog_update,
};
