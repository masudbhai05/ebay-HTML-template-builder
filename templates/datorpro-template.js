
const  ebayTempate = async (title, specs) => {

     const response = await fetch("/templates/datorpro-teplate.css");
     const css = await response.text();


    return `
    <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>DatorPro Store</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&amp;display=swap" rel="stylesheet">


<style>
    ${css}
</style>
<!-- product slider css -->
<div class="main-container">
    <section class="top-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <div class="logo">
                        <a>
                            <img alt="" src="https://i.postimg.cc/NGdkhVJb/dp-logo-2.png" class="logo-img">
                        </a>
                    </div>
                </div>
                <div class="col-md-4 text-sm-center">
                    <div class="search-box text-sm-center">
                        <a target="_blank"
                            href="https://www.ebay.com/str/globaltechnologydeals?_trksid=p4429486.m145687.l149086">
                            <img alt="" src="https://i.postimg.cc/4NXFDXVJ/search.png">
                        </a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contact-btn-area text-center float-md-end ">
                        <a class="contact-btn" target="_blank"
                            href="https://www.ebay.com/str/globaltechnologydeals?_trksid=p4429486.m145687.l149086">Contact
                            Seller</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="product-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <section class="gallery">
                        <img alt="" class="gallery-img"
                            src="https://makemyyard.com/cdn/shop/files/198291-1.de9d360a.jpg?v=1736948338&amp;width=600">
                    </section>
                </div>
                <div class="col-md-6 product-content">
                    <h3><span class="badge bg-primary fw-normal">New</span></h3>
                    <h1>${title}</h1>
                    <div class="d-flex">
                        <div class="features w-50 text-start">
                            <h4 class="features-tilte ">Specs</h4>
                            <div class="features-area">
                                <div class="row">
                                   ${specs.map(spec => `<div class="single-feature ">
                                        <div class="feature-icon">
                                            <img src="https://i.postimg.cc/cHJ25Mmg/check.png" alt="">
                                        </div>
                                        <p>${spec.trim()}</p></div>`).join("")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="description-tab-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="tab-wrapper mb-40">
                        <div class="row">

                            <div class="col-12">
                                <div class="tabset">

                                    <section id="Overview">
                                        <h4 class="overview-heading">Overview</h4>

                                        <h5 class="fw-bold mb-3">Product Details</h5>
                                        <ul class="overview-content">
                                            <li><strong>Item:</strong> Reduced Pressure Principle Assembly</li>
                                            <li><strong>Model:</strong> 1-975XL2</li>
                                            <li><strong>Size:</strong> 1 inch</li>
                                            <li><strong>Connection:</strong> FNPT with Ball Valve</li>
                                            <li><strong>Material:</strong> Lead-Free Cast Bronze</li>
                                            <li><strong>Brand Name:</strong> Wilkins</li>
                                        </ul>

                                        <h5 class="fw-bold mb-3">Key Features</h5>
                                        <ul class="overview-content">
                                            <li><strong>Durable Construction:</strong> Built with lead-free cast
                                                bronze for reliable and long-lasting use.</li>
                                            <li><strong>Compact Design:</strong> Features a smaller footprint for
                                                easier installation in tight spaces.</li>
                                            <li><strong>Integrated Ball Valves:</strong> Facilitates quick and
                                                efficient shutoff for maintenance or testing.</li>
                                            <li><strong>Advanced Backflow Protection:</strong> Designed to prevent
                                                water contamination in both residential and commercial applications.
                                            </li>
                                            <li><strong>Reliable Performance:</strong> Withstands pressure up to 175
                                                PSI and water temperatures ranging from 33°F to 140°F.</li>
                                        </ul>

                                        <h5 class="fw-bold mb-3">Specifications</h5>
                                        <ul class="overview-content">
                                            <li><strong>Model:</strong> 1-975XL2</li>
                                            <li><strong>Size:</strong> 1 inch</li>
                                            <li><strong>Connection Type:</strong> FNPT with Ball Valve</li>
                                            <li><strong>Material:</strong> Lead-Free Cast Bronze</li>
                                            <li><strong>Pressure Rating:</strong> Up to 175 PSI</li>
                                            <li><strong>Temperature Range:</strong> 33°F to 140°F</li>
                                            <li><strong>Certification:</strong> Meets lead-free compliance standards
                                            </li>
                                        </ul>

                                        <h5 class="fw-bold mb-3">Applications</h5>
                                        <ul class="overview-content">
                                            <li>Suitable for residential and commercial water systems</li>
                                            <li>Ideal for irrigation systems and potable water safety</li>
                                            <li>Effective in preventing backflow contamination</li>
                                        </ul>
                                    </section>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-wrapper">
                        <div class="tabset">
                            <section id="Overview">
                                <h4 class="overview-heading">Why doesn't my item have a label or sticker? </h4>
                                <div class="d-flex align-items-center">
                                    <div>
                                        <p>
                                            All of our products, including sprinkler heads and other irrigation
                                            components, come directly from the manufacturer’s authorized
                                            distribution channels. Items distributed for retail display often
                                            include labels or stickers, but products sourced through these direct
                                            channels typically do not. This allows us to offer the same high-quality
                                            items at lower, more affordable prices for our customers. Rest assured,
                                            all items are genuine and meet the highest industry standards.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="tab-wrapper">
                        <div class="tabset">
                            <section id="Overview">

                                <div class="row">
                                    <div class="col-md-8">
                                        <h4 class="overview-heading">Return &amp; Refund policy</h4>
                                        <p>We aim for your complete satisfaction with a generous <strong>30-day
                                                return</strong>
                                            window at no cost to you. For a smooth process,
                                            please ensure returned items are in their original shipped condition,
                                            including all packaging and accessories. Items not
                                            meeting this requirement may be subject to a restocking fee.
                                        </p>
                                    </div>
                                    <div class="col-md-4  ">
                                        <img class="float-end" src="https://i.postimg.cc/K8th1ZBZ/OBJECTS.png" alt="">
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="tab-wrapper">
                        <div class="tabset">
                            <section id="Overview">

                                <div class="row">
                                    <div class="col-md-8">
                                        <h4 class="overview-heading">Our promise</h4>
                                        <div class="promiss-content">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="tick"><img
                                                                src="https://i.postimg.cc/cHJ25Mmg/check.png" alt="">
                                                        </td>
                                                        <td>
                                                            <p>
                                                                Ensuring your satisfaction is our top priority.
                                                                Orders
                                                                made
                                                                by <strong>2 PM
                                                                    EST</strong> will be shipped the same day, and
                                                                all
                                                                other
                                                                items will be shipped within <strong>ONE BUSINESS
                                                                    day</strong>.
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tick"><img
                                                                src="https://i.postimg.cc/cHJ25Mmg/check.png" alt="">
                                                        </td>
                                                        <td>
                                                            <p>Some items are sourced from the manufacturer and may
                                                                take <strong>5 to 7 business days

                                                                </strong>
                                                                to ship. Please check the <strong>handling
                                                                    time</strong> and <strong>delivery date</strong>
                                                                at checkout.
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tick"><img
                                                                src="https://i.postimg.cc/cHJ25Mmg/check.png" alt="">
                                                        </td>
                                                        <td>
                                                            <p>
                                                                Each item undergoes rigorous professional testing to
                                                                meet
                                                                our strict
                                                                quality standards.


                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="tick"><img
                                                                src="https://i.postimg.cc/cHJ25Mmg/check.png" alt="">
                                                        </td>
                                                        <td>
                                                            <p>Our dedicated team is available to assist you
                                                                promptly.
                                                                We
                                                                aim to
                                                                respond to all messages within <strong>24
                                                                    hours</strong>.

                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <img class="float-end" src="https://i.postimg.cc/fTnPmWkr/promiss.png" alt="">
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="tab-wrapper">
                        <div class="tabset">
                            <section id="Overview">

                                <div class="row">
                                    <div class="col-md-8">
                                        <h4 class="overview-heading">What about the warranty?</h4>
                                        <p>All items come with a 30-day DOA warranty. Please note, the warranty does
                                            not cover damages due to misuse, such as water
                                            exposure or buyer's remorse.
                                        </p>
                                    </div>
                                    <div class="col-md-4  ">
                                        <img class="float-end" src="https://i.postimg.cc/DzdytC73/warrenty.png" alt="">
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="contact-area">
        <div class="container">
            <div class="contact-btn-area">
                <a class="contact-btn" target="_blank"
                    href="https://www.ebay.com/str/globaltechnologydeals?_trksid=p4429486.m145687.l149086">CONTACT
                    US</a>
            </div>
        </div>
    </section>
</div>
    
    `;
}