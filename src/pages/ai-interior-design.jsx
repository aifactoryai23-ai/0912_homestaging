import { Helmet } from "react-helmet-async";
import AutoPlayVideo from "@/components/shared/AutoPlayVideo";
import BeforeAfterSlider from "@/components/shared/BeforeAfterSlider";
import "@/styles/scroll-animations.css";

// Images for BEFORE / AFTER blocks
import livingRoomBefore from "@/assets/images/before-after/livingRoomBefore.jpg";
import livingRoomAfter from "@/assets/images/before-after/livingRoomAfter.jpg";
import bedroomBefore from "@/assets/images/before-after/bedroomBefore.jpg";
import bedroomAfter from "@/assets/images/before-after/bedroomAfter.jpg";
import lobbyBefore from "@/assets/images/before-after/lobbyBefore.jpg";
import lobbyAfter from "@/assets/images/before-after/lobbyAfter.jpg";

export default function AiInteriorDesign() {
  return (
    <div className="container mx-auto leading-relaxed text-gray-800">
      {/* SEO META */}
      <Helmet>
        <title>AI Interior Design — Redesign Any Room from a Photo in Seconds</title>
        <meta
          name="description"
          content="Transform any room using AI interior design. Upload a photo, choose a style, and get instant redesigns in seconds."
        />
        <link rel="canonical" href="https://homedesignpro.ai/ai-interior-design" />
        <meta property="og:title" content="AI Interior Design — Redesign Any Room in Seconds" />
        <meta
          property="og:description"
          content="Upload a photo and instantly redesign your space using AI. Modern, minimalist, Scandinavian, luxury styles and more."
        />
        <meta property="og:url" content="https://homedesignpro.ai/ai-interior-design" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO */}
      <section
        className="hero mb-20"
        style={{
          paddingTop: "calc(5rem + env(safe-area-inset-top, 0px))",
        }}
      >
        <h1 className="hero__title">
          AI Interior Design — Upload a Photo & Redesign Any Room Instantly
        </h1>

        <p className="hero__payoff max-w-2xl mx-auto">
          Transform your room in seconds using artificial intelligence. Upload a photo, choose from
          50+ styles, and get photorealistic redesigns instantly.
        </p>

        <a
          href="/transform"
          className="px-8 py-4 bg-black text-white rounded-lg text-lg font-medium shadow-lg hover:bg-gray-900 transition"
        >
          🎨 Start Your AI Redesign Now
        </a>

        <p className="mt-3 text-sm text-gray-500">2 Free credits included. No card required.</p>
      </section>

      {/* MAIN WRAPPER */}
      <div className="divider-v">

        {/* ================================
            HERO IMAGE WITH srcSet
        ================================ */}
        <section className="section">
          <div className="calendar-container">
            <div className="calendar-wide">
              <img
                src="/styles/luxury-desktop.webp"
                alt="Luxury living-room - Wide View"
                loading="lazy"
                width={1200}
                height={600}
                className="calendar-image mx-auto"
                style={{ borderRadius: "12px" }}
                srcSet="
                  /styles/luxury-mobile.webp 800w,
                  /styles/luxury-desktop.webp 1200w
                "
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
        </section>

        {/* ================================
            VALUE PROPOSITION WITH CARDS
        ================================ */}
        <section className="section panel text-center">
          <div className="split-h">

            {/* TEXT BLOCK */}
            <div className="grid-center">
              <div className="panel__content">

                <h2 className="text-3xl font-bold mb-6">Why Choose AI Interior Design?</h2>
                
                <p className="text-gray-700 mb-4">
                  AI generates fresh, professional design concepts for any room. Fast, precise, and
                  surprisingly realistic — no designer required.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Perfect for staging, remodeling, Airbnb, or creative inspiration.
                </p>
                
                <p className="text-gray-700 mb-4 text-justify">
                  HomeDesignPro app generates fresh, professional design concepts tailored for any
                  room in your home or commercial property. Whether you're redecorating a living
                  room, remodeling a kitchen, or designing an entire office, AI delivers fast,
                  precise, and surprisingly realistic visualizations — all without the need for a
                  traditional interior designer. HomeDesignPro saves you time and money by
                  providing instant inspiration and actionable plans. It's perfect for homeowners
                  looking to refresh their space, real estate agents staging properties, Airbnb
                  hosts wanting to attract more guests with appealing interiors, and creative
                  professionals seeking innovative design ideas. Experience seamless remodeling and
                  decoration by visualizing changes before the work even begins, reducing costly
                  mistakes and accelerating decision-making. With HomeDesignPro AI, transforming
                  your space has never been easier or more accessible.
                </p>

              </div>
            </div>

            {/* IMAGE CARDS */}
            <div className="cards hidden md:block">
              <div className="card">
                <img
                  src="/styles/sketch-600.webp"
                  alt="Sketch"
                  loading="lazy"
                  srcSet="
                    /styles/sketch-300.webp 300w,
                    /styles/sketch-600.webp 600w
                  "
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 300px"
                />
              </div>

              <div className="card">
                <img
                  src="/styles/bohemian-600.webp"
                  alt="Bohemian"
                  loading="lazy"
                  srcSet="
                    /styles/bohemian-300.webp 300w,
                    /styles/bohemian-600.webp 600w
                  "
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 300px"
                />
              </div>

              <div className="card">
                <img
                  src="/styles/modern-600.webp"
                  alt="Modern"
                  loading="lazy"
                  srcSet="
                    /styles/modern-300.webp 300w,
                    /styles/modern-600.webp 600w
                  "
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 300px"
                />
              </div>

              <div className="card">
                <img
                  src="/styles/modern-boho-600.webp"
                  alt="Modern Boho"
                  loading="lazy"
                  srcSet="
                    /styles/modern-boho-300.webp 300w,
                    /styles/modern-boho-600.webp 600w
                  "
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 300px"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ================================
            WHAT IS AI INTERIOR DESIGN
        ================================ */}
        <section className="section panel panel--no-overflow">
          <div className="split-h">

            {/* VIDEO BLOCK */}
            <div>
              <div className="cover-image">
                <div className="relative rounded-2xl shadow-lg overflow-hidden">
                  <AutoPlayVideo src="/video_24112025.mp4" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* TEXT BLOCK */}
            <div className="grid-center">
              <div className="panel__content">
                <h2 className="text-3xl font-bold mb-4">What Is AI Interior Design?</h2>
                <p className="text-gray-700 mb-4">
                  AI redesigns any room from a single uploaded photo, understanding layout, lighting,
                  geometry, and décor.
                </p>

                <p className="font-semibold mb-2">Perfect for:</p>

                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Homeowners</li>
                  <li>Renters</li>
                  <li>Real estate agents</li>
                  <li>Airbnb hosts</li>
                  <li>Renovation planners</li>
                </ul>

                <p>Fast, realistic design ideas — instantly.</p>
              </div>
            </div>

          </div>
        </section>

        {/* ================================
            HOW IT WORKS
        ================================ */}
        <section className="section panel">
          <div className="split-h">

            <div className="panel__content">
              <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>

              <div className="flex flex-col items-center">
                <ol className="space-y-6 text-gray-700 text-center">
                  <li><strong>1. Upload a room photo</strong></li>
                  <li><strong>2. Choose your style</strong></li>
                  <li><strong>3. AI generates realistic designs</strong></li>
                  <li><strong>4. Download or regenerate</strong></li>
                </ol>

                <a
                  href="/transform"
                  className="inline-block mt-8 px-8 py-4 bg-black text-white rounded-lg"
                >
                  Try It Now — 2 Free Credits
                </a>
              </div>
            </div>

            <div className="grid-center">
              <div className="spinner spinner--large">
                <div className="spinner__progress"></div>
              </div>
            </div>

          </div>
        </section>

        {/* ================================
            BEFORE & AFTER EXAMPLES
        ================================ */}
        <section className="section panel panel--no-overflow">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Before & After Examples</h2>
            <p className="text-gray-600 mb-8">Real rooms transformed using AI.</p>
          </div>

          {/* LIVING ROOM */}
          <div className="mb-16">
            <div className="relative rounded-2xl shadow-lg overflow-hidden w-full lg:w-1/2 mx-auto">
              <BeforeAfterSlider beforeImage={livingRoomBefore} afterImage={livingRoomAfter} />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-semibold text-lg mb-2">Living Room Transformation</h3>
              <p className="text-gray-600">Empty space turned into modern living area</p>
            </div>
          </div>

          {/* BEDROOM */}
          <div className="mb-16">
            <div className="relative rounded-2xl shadow-lg overflow-hidden w-full lg:w-1/2 mx-auto">
              <BeforeAfterSlider beforeImage={bedroomBefore} afterImage={bedroomAfter} />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-semibold text-lg mb-2">Bedroom Redesign</h3>
              <p className="text-gray-600">Basic room transformed into luxury bedroom</p>
            </div>
          </div>

          {/* LOBBY */}
          <div className="mb-16">
            <div className="relative rounded-2xl shadow-lg overflow-hidden w-full lg:w-1/2 mx-auto">
              <BeforeAfterSlider beforeImage={lobbyBefore} afterImage={lobbyAfter} />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-semibold text-lg mb-2">Lobby / Hall decluttering</h3>
              <p className="text-gray-600">Hall full of personal items turned into empty corner</p>
            </div>
          </div>

        </section>

        {/* ================================
            TESTIMONIALS
        ================================ */}
        <section className="section">
          <h2 className="section__title text-3xl font-bold text-center">What People Say</h2>

          <div className="popup-container">

            <div className="review">
              <h3 className="font-semibold text-lg mb-2">Real Estate Agent</h3>
              <p>
                "My listings started selling faster with AI staging. HomeDesignPro creates realistic,
                appealing images that help buyers visualize the potential of a space."
              </p>
            </div>

            <div className="review">
              <h3 className="font-semibold text-lg mb-2">Homeowner</h3>
              <p>
                "I redesigned my living room in minutes! The app is intuitive and fun — I tested dozens
                of styles without moving any furniture."
              </p>
            </div>

            <div className="review">
              <h3 className="font-semibold text-lg mb-2">Airbnb Host</h3>
              <p>
                "My booking rate increased instantly. AI-made staged photos made my listing look much
                more inviting."
              </p>
            </div>

          </div>
        </section>

        {/* ================================
            FINAL CTA
        ================================ */}
        <section className="section text-center mt-24">
          <h2 className="text-3xl font-bold mb-4">Redesign Your Room with AI Today</h2>
          <p className="text-gray-700 mb-6">
            Upload a photo and explore unlimited design possibilities.
          </p>

          <a
            href="/transform"
            className="px-10 py-4 bg-black text-white rounded-lg text-lg shadow hover:bg-gray-900 transition"
          >
            🎨 Start Redesigning Now
          </a>
        </section>

      </div> 
    </div> 
  );
}
