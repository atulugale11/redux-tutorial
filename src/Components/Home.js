import React from 'react';

function Home(){
    return(
        <div>
            <div className = "add-to-card">
                <img src = "../../cart.png" />
            </div>
            <h1>Home Component</h1>
            <div className = "cart-wrapper">
                <div className = "img-wrapper item">
                    <img src = "https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max" />
                </div>
                <div className = "text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className = "btn-wrapper item">
                    <button>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;