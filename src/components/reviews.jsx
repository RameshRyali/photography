import React from "react";
import Event from '../assests/reviews/event.jpg';
import indoor from '../assests/reviews/indoor.jpg';
import outdoor from '../assests/reviews/outdoor.jpg';

import '../styles/reviews.css';
const Review = () => {
    return (
        <section className="reviews" id="reviews">
            <div className="text">
                <h1>Our Customer Reviews</h1>
            </div>
            <div className="review-container">

                <div className="review-section" id="review">
                    <h2>Outdoor Photography</h2>
                    <img src={outdoor} alt="outdoor"/>
                        <div className="review-item">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <div className="reviewer-avatar">J</div>
                                    <div className="reviewer-name">Jonathan Luciani</div>
                                </div>
                                <div className="review-meta">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <div className="review-date">10 months ago</div>
                                </div>
                            </div>
                            <div className="description">"Veronika's outdoor photography is truly magical. She has an incredible eye
                                for finding the perfect light and locations. We did our pre-wedding shoot in a beautiful park,
                                and she knew exactly where to position us to capture the golden hour light."</div>
                        </div>
                </div>

                <div className="review-section" id="review">
                    <h2>Indoor Photography</h2>
                    <img src={indoor} alt="indoor"/>
                        <div className="review-item">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <div className="reviewer-avatar">A</div>
                                    <div className="reviewer-name">Amanda Davis</div>
                                </div>
                                <div className="review-meta">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="review-date">5 months ago</div>
                                </div>
                            </div>
                            <div className="description">"vscclicks did an amazing job with our family portraits in our home. She
                                was patient with the kids and captured some truly special moments."</div>
                        </div>
                </div>

                <div className="review-section" id="review">
                    <h2>Event Photography</h2>
                    <img src={Event} alt="event"/>
                        <div className="review-item">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <div className="reviewer-avatar">M</div>
                                    <div className="reviewer-name">Michael Brown</div>
                                </div>
                                <div className="review-meta">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <div className="review-date">1 year ago</div>
                                </div>
                            </div>
                            <div className="description">"Michael is an amazing event photographer. She has a way of capturing the
                                emotion and excitement of the moment. I highly recommend her for any type of event photography."
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Review;