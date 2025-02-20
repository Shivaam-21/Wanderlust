const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const ListingSchema=new Schema({
    title:{
        type:String,
        required:true,        
    },
    description:String,
    image:{
        type:String,
        default: "https://via.placeholder.com/300",
    },
    price:Number,
    location:String,
    country:String,
});


const Listing=mongoose.model("Listing",ListingSchema);
module.exports=Listing;