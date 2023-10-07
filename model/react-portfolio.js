const mongoose=require("mongoose");

//creating Portfolio schema into DB

const PortfolioSchema=mongoose.Schema({
    portfolio:{
        portfolio_image:String,
        title:String,
        GitLink:String,
        DemoLink:String
    },
    testimonial:{
        testimonial_image:String,
        provider_name:String,
        review:String
    }
});

module.exports=mongoose.model("portfolioItems",PortfolioSchema);