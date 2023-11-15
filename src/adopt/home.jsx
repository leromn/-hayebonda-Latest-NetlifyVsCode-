export default function Home() {
  return (
    <div className="Home">
      <body>
        <header class="bg-gray-800 text-white py-4">
          <div class="container mx-auto flex items-center justify-between px-4">
            <h1 class="text-2xl font-bold">Logo</h1>
            <nav>
              <ul class="flex space-x-4">
                <li>
                  <a href="#" class="hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-gray-300">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-gray-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-gray-300">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section
          class="hero bg-cover bg-center"
          style="background-image: url('https://source.unsplash.com/featured/1280x720/?selling-products')"
        >
          <div class="container mx-auto py-24 text-center">
            <h2 class="text-4xl font-bold text-white mb-4">
              Discover Amazing Products
            </h2>
            <a
              href="#"
              class="bg-white text-gray-800 py-2 px-4 rounded-full inline-block"
            >
              Shop Now
            </a>
          </div>
        </section>

        <section class="features py-12 bg-gray-100">
          <div class="container mx-auto grid grid-cols-3 gap-8">
            <div class="feature-card bg-white shadow-lg p-6">
              <div class="text-center">
                <i class="fas fa-rocket text-4xl text-blue-500 mb-4"></i>
                <h3 class="text-xl font-bold">Fast Delivery</h3>
                <p class="mt-2">Get your products delivered in no time!</p>
              </div>
            </div>
            <div class="feature-card bg-white shadow-lg p-6">
              <div class="text-center">
                <i class="fas fa-comments text-4xl text-blue-500 mb-4"></i>
                <h3 class="text-xl font-bold">Great Customer Support</h3>
                <p class="mt-2">We're here to assist you 24/7!</p>
              </div>
            </div>
            <div class="feature-card bg-white shadow-lg p-6">
              <div class="text-center">
                <i class="fas fa-thumbs-up text-4xl text-blue-500 mb-4"></i>
                <h3 class="text-xl font-bold">High-Quality Products</h3>
                <p class="mt-2">We only offer the best products for you.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="individual-feature bg-gray-200 px-4 py-12">
          <div class="container mx-auto">
            <div class="flex flex-wrap items-center -mx-4">
              <div class="w-full lg:w-1/2 px-4">
                <div class="feature-image float-right">
                  <img
                    src="https://source.unsplash.com/featured/1280x720/?fast-delivery"
                    alt="Fast Delivery"
                    class="rounded-lg"
                  />
                </div>
              </div>
              <div class="w-full lg:w-1/2 px-4">
                <h3 class="text-3xl font-bold mb-4">Fast Delivery</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ut mauris a purus vulputate tincidunt vel sit amet
                  nulla.
                </p>
                <a
                  href="#"
                  class="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="individual-feature px-4 py-12">
          <div class="container mx-auto">
            <div class="flex flex-wrap items-center -mx-4">
              <div class="w-full lg:w-1/2 px-4">
                <h3 class="text-3xl font-bold mb-4">Great Customer Support</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ut mauris a purus vulputate tincidunt vel sit amet
                  nulla.
                </p>
                <a
                  href="#"
                  class="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Learn More
                </a>
              </div>
              <div class="w-full lg:w-1/2 px-4">
                <div class="feature-image float-left">
                  <img
                    src="https://source.unsplash.com/featured/1280x720/?customer-support"
                    alt="Great Customer Support"
                    class="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="testimonial py-12 bg-gray-100">
          <div class="container mx-auto grid grid-cols-2 gap-8">
            <div class="testimonial-card bg-white shadow-lg p-6 text-center">
              <i class="fas fa-quote-left text-4xl text-blue-500 mb-4"></i>
              <p class="mb-2">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer ut mauris a purus vulputate tincidunt velit sit amet
                nulla."
              </p>
              <p class="font-semibold">John Doe</p>
              <p class="text-gray-500">CEO, Company Inc.</p>
            </div>
            <div class="testimonial-card bg-white shadow-lg p-6 text-center">
              <i class="fas fa-quote-left text-4xl text-blue-500 mb-4"></i>
              <p class="mb-2">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer ut mauris a purus vulputate tincidunt velit sit amet
                nulla."
              </p>
              <p class="font-semibold">Jane Doe</p>
              <p class="text-gray-500">CTO, Company Inc.</p>
            </div>
          </div>
        </section>

        <section class="blogs px-4 py-12">
          <div class="container mx-auto">
            <h2 class="text-3xl font-bold mb-8">Recent Blog Posts</h2>
            <div class="grid grid-cols-3 gap-8">
              <div class="blog-card bg-white shadow-lg p-6">
                <h3 class="text-xl font-bold mb-2">Title 1</h3>
                <p class="text-gray-500 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" class="text-blue-500">
                  Read More
                </a>
              </div>
              <div class="blog-card bg-white shadow-lg p-6">
                <h3 class="text-xl font-bold mb-2">Title 2</h3>
                <p class="text-gray-500 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" class="text-blue-500">
                  Read More
                </a>
              </div>
              <div class="blog-card bg-white shadow-lg p-6">
                <h3 class="text-xl font-bold mb-2">Title 3</h3>
                <p class="text-gray-500 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" class="text-blue-500">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="faq py-12 bg-gray-100">
          <div class="container mx-auto">
            <h2 class="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div class="accordion">
              <div class="accordion-item">
                <h3 class="accordion-title">Question 1</h3>
                <div class="accordion-content">
                  <p>Answer 1</p>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-title">Question 2</h3>
                <div class="accordion-content">
                  <p>Answer 2</p>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-title">Question 3</h3>
                <div class="accordion-content">
                  <p>Answer 3</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="team px-4 py-12">
          <div class="container mx-auto grid grid-cols-4 gap-8">
            <div class="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                class="rounded-full mb-4"
              />
              <h3 class="text-xl font-bold">John Doe</h3>
              <p class="text-gray-500">CEO</p>
              <div class="social-icons mt-2">
                <a href="#" class="text-blue-500">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="text-blue-500">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="#" class="text-blue-500">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}
