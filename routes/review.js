const express = require("express") ;
const router = express.Router({mergeParams: true}) ;
const wrapAsync = require("../utils/wrapAsync.js") ;
const Listing = require("../models/listing.js") ;
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js") ;

const Review = require("../models/review.js") ;

const reviewController = require("../controllers/reviews.js") ;






//POST REVIEW ROUTE
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));


//DELETE REVIEW ROUTE
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));


module.exports = router ;
