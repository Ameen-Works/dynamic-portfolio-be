const express = require("express");
//Install Router to define the url path

const router = express.Router();
//Impoting Portifolio items from Portfolio schema

const portfolioItems = require("../model/react-portfolio");


router.get("/", (req, res) => {
    // res.send({ data: "Hi from get method" });
    portfolioItems.find()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.json({ message: e })
        })
});

router.post("/portfolio", (req, res) => {
    const portFolioItems = new portfolioItems({
        portfolio: {
            portfolio_image: req.body.portfolio.portfolio_image,
            title: req.body.portfolio.title,
            GitLink: req.body.portfolio.GitLink,
            DemoLink: req.body.portfolio.DemoLink
        }
       
    });
    portFolioItems.save()
        .then(data => {
            res.json(data)
        })
        .catch(e => {
            res.json({ message: e })
        })
});
router.post("/testimonial", (req, res) => {
    const portFolioItems = new portfolioItems({
        
        testimonial: {
            testimonial_image: req.body.testimonial.testimonial_image,
            provider_name: req.body.testimonial.provider_name,
            review: req.body.testimonial.review
        }
    });
    portFolioItems.save()
        .then(data => {
            res.json(data)
        })
        .catch(e => {
            res.json({ message: e })
        })
});

module.exports = router;
