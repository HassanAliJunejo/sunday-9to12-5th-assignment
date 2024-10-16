import Link from "next/link";

export default function Home() {
  return (
    <div className="parentContainer flex justify-center w-[100%] flex-wrap ">
      <div className="blogcontainer scale-in-bottom min-h-[380px] lg:min-w-[400px] lg:min-h-[340px] md:min-h-[410px] md:max-w-[320px] sm:max-w-[280px] sm:min-h-[430px] m-4 rounded-xl p-3">
          
            <img src="blog1.jpeg" alt="" className=" w-[400px] h-[170px] bg-red-100" />
            <h1 className="text-xl font-bold mb-4">"Tech Tutorials and Solutions Blog"</h1>
            <p className="overflow-hidden"><strong>Description</strong>:Target Audience: IT professionals, students, and tech enthusiasts.
Content: Share step-by-step tutorials, troubleshooting tips, coding solutions, and software recommendations. You can also cover freelancing tips for IT professionals.
Monetization: Affiliate marketing, sponsored posts, and online courses.
Example Topics: "How to Build a Personal Portfolio Website in 2024," "Freelancing Platforms for IT Experts," "Troubleshooting Common Errors in Python."
            </p>
            <br />
        <Link href="/blog1">
           <button className="read absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-[90px] h-[25px] font-medium bg-yellow-400 rounded-full hover:font-medium hover:bg-black hover:text-yellow-400 hover:transition duration-500">
            <span>Read More</span>
           </button>
        </Link>
      </div>
      <div className="blogcontainer scale-in-bottom min-h-[380px] lg:min-w-[400px] lg:min-h-[380px] md:min-h-[410px] md:max-w-[320px] sm:max-w-[280px] sm:min-h-[430px] m-4 mx-<6> rounded-xl p-3">
          <img src="blog2.jpeg" alt="" className=" w-[400px] h-[170px] bg-red-100"/>
          <h1 className="text-xl font-bold mb-4">"Urdu Language and Culture Blog</h1>
          <p><strong>Description</strong>:Target Audience: Language learners, cultural enthusiasts, expatriates, and students.:
Content: Teach Urdu through engaging posts, share cultural insights, and discuss the history and significance of the language. You can offer downloadable learning resources.
Monetization: Online language courses, eBooks, and language tutoring.
Example Topics: "10 Easy Steps to Start Learning Urdu," "Exploring the Rich History of Urdu Poetry," "Fun Ways to Teach Kids Urdu."

          </p>

       <Link href="/blog2">
          <button className="read absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-[90px] h-[25px] font-medium bg-yellow-400 rounded-full hover:font-medium hover:bg-black hover:text-yellow-400 hover:transition duration-500">
            <span>Read More</span>
           </button>
        </Link>
      </div>
      <div className="blogcontainer scale-in-bottom min-h-[380px] lg:min-w-[400px] lg:min-h-[380px] md:min-h-[410px] md:max-w-[320px] sm:max-w-[280px] sm:min-h-[430px] m-4 rounded-xl p-3">
        {" "}
          <img src="blog3.jpeg" alt="" className=" w-[400px] h-[170px] bg-red-100"/>
          <h1 className="text-xl font-bold mb-4"> Freelancing and Remote Work Tips</h1>
          <p><strong>Description</strong>:Target Audience: Freelancers and remote workers across various industries.
Content: Provide insights, tips, and experiences related to freelancing. Focus on how to find clients, manage projects, and grow a remote business.
Monetization: Affiliate programs, freelance tools, and online courses on freelancing.
Example Topics: "How to Manage Multiple Freelance Projects Effectively," "Top Platforms to Find Freelance IT Jobs," "The Best Productivity Tools for Remote Workers."

          </p>
        <Link href="/blog3">
          <button className="read absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-[90px] h-[25px] font-medium bg-yellow-400 rounded-full hover:font-medium hover:bg-black hover:text-yellow-400 hover:transition duration-500">
            <span>Read More</span>
           </button>
        </Link>
      </div>
      <div className="blogcontainer scale-in-bottom min-h-[380px] lg:min-w-[400px] lg:min-h-[380px] md:min-h-[410px] md:max-w-[320px] sm:max-w-[280px] sm:min-h-[430px] m-4 rounded-xl p-3">
        {" "}
          <img src="blog4.jpeg" alt="" className=" w-[400px] h-[170px] bg-red-100"/>
          <h1 className="text-xl font-bold mb-4">Personal Development and Productivity Blog</h1>
          <p><strong>Description</strong>:Target Audience: Professionals, students, and self-improvement enthusiasts.
Content: Share practical tips on time management, goal setting, mindfulness, and productivity hacks. Include personal stories and case studies.
Monetization: Coaching services, self-help books, and paid membership for exclusive content.
Example Topics: "5 Daily Habits of Highly Productive People," "How to Overcome Procrastination in the Digital Age," "Tools to Boost Your Personal Development Journey."
          </p>
        <Link href="/blog4">
        <br />
          <button className="read absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-[90px] h-[25px] font-medium bg-yellow-400 rounded-full hover:font-medium hover:bg-black hover:text-yellow-400 hover:transition duration-500">
            <span>Read More</span>
           </button>
        </Link>
      </div>
      <div className="blogcontainer scale-in-bottom min-h-[380px] lg:min-w-[400px] lg:min-h-[380px] md:min-h-[410px] md:max-w-[320px] sm:max-w-[280px] sm:min-h-[430px] m-4 mx-<6> rounded-xl p-3">
        {" "}
          <img src="blog5.jpeg" alt="" className=" w-[400px] h-[170px] bg-red-100"/>
          <h1 className="text-xl font-bold mb-4">Healthy Lifestyle and Wellness Blog</h1>
          <p><strong>Description</strong>:Target Audience: Health-conscious individuals, fitness enthusiasts, and those seeking balanced living.
Content: Write about physical health, mental well-being, healthy recipes, and fitness routines. You can also offer tips for maintaining a healthy work-life balance.
Monetization: Affiliate marketing for wellness products, online fitness classes, and eBooks on healthy living.
Example Topics: "10 Easy Recipes for a Healthier Life," "Best Meditation Techniques for Busy Professionals," "How to Stay Active While Working from Home."
          </p>
        <Link href="/blog5">
          <button className="read absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-[90px] h-[25px] font-medium bg-yellow-400 rounded-full hover:font-medium hover:bg-black hover:text-yellow-400 hover:transition duration-500">
            <span>Read More</span>
           </button>
        </Link>
      </div>
      <div className="blogcontainer scale-in-bottom min-h-[400px] lg:min-w-[400px] lg:min-h-[380px] md:min-h-[410px] md:max-w-[320px] sm:max-w-[280px] sm:min-h-[430px] m-4 rounded-xl p-3">
          <img src="blog6.jpg" alt="" className=" w-[400px] h-[170px] bg-red-100"/>
          <h1 className="text-xl font-bold mb-4"> Travel and Adventure Blog</h1>
          <p><strong>Description</strong>: Target Audience: Travel enthusiasts, backpackers, and adventure seekers.
Content: Share personal travel experiences, destination guides, tips for budget travel, and adventure stories. Provide advice on how to plan trips and explore new cultures.
Monetization: Sponsored travel deals, affiliate links for booking platforms, and travel-related products.
Example Topics: "Top 10 Off-the-Beaten-Path Destinations for 2024," "How to Travel the World on a Budget," "Best Travel Gadgets for Digital Nomads."          </p>
        <Link href="/blog6">
          <button className="read absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-[90px] h-[25px] font-medium bg-yellow-400 rounded-full hover:font-medium hover:bg-black hover:text-yellow-400 hover:transition duration-500">
            <span>Read More</span>
           </button>
        </Link>
      </div>
    </div>
  );
}