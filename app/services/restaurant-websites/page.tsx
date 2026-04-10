import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import { Metadata } from 'next'

export const metadata = {
  title: 'Restaurant Website Design | Built By AI',
  description: 'Professional restaurant website starting at $250. Menu pages, online ordering integration, reservation systems, and food photography galleries. Fast turnaround.',
}

export default function RestaurantWebsites() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-400 font-semibold text-sm tracking-wider uppercase">Restaurant Website Specialists</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Your Restaurant Deserves a<br />
            <span className="text-amber-400">Website That Sells</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            From food trucks to fine dining — get a professional restaurant website in 7 days. 
            Menu pages, reservation systems, and online ordering integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors">
              Get Your Restaurant Website →
            </a>
            <a href="/portfolio" className="border border-slate-500 hover:border-white px-8 py-4 rounded-lg text-lg transition-colors">
              See Examples
            </a>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Everything Your Restaurant Website Needs</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">Built with your cuisine, ambiance, and customers in mind.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Menu Pages',
                desc: 'Beautiful, searchable menus with categories, photos, and dietary icons. PDF menu upload option available.',
                icon: '🍽️'
              },
              {
                title: 'Reservation System',
                desc: 'Integrate OpenTable, Resy, or a custom booking system. Let customers reserve tables 24/7.',
                icon: '📅'
              },
              {
                title: 'Online Ordering',
                desc: 'Connect to DoorDash, Uber Eats, or a custom ordering system. Never miss an order.',
                icon: '🛵'
              },
              {
                title: 'Photo Galleries',
                desc: 'Showcase your food, interior, and events. Instagram feed integration available.',
                icon: '📸'
              },
              {
                title: 'Mobile Optimized',
                desc: '70% of restaurant website visits are from phones. Your site will look perfect on any device.',
                icon: '📱'
              },
              {
                title: 'Fast Loading',
                desc: 'Nobody waits for slow websites. We optimize for speed so hungry customers don\'t leave.',
                icon: '⚡'
              },
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-600 text-center mb-12">No hidden fees. No surprises. Just a great restaurant website.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Landing Page */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-600 mb-2">Landing Page</h3>
              <div className="text-4xl font-bold mb-4">$100</div>
              <p className="text-slate-600 mb-6">Perfect for food trucks & pop-ups</p>
              <ul className="space-y-2 text-sm">
                <li>✅ Single page website</li>
                <li>✅ Menu display</li>
                <li>✅ Location & hours</li>
                <li>✅ Contact form</li>
                <li>✅ Mobile optimized</li>
              </ul>
              <a href="https://buy.stripe.com/test_placeholder" className="block mt-6 text-center bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                Get Started
              </a>
            </div>

            {/* Full Website */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-amber-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-900 text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>
              <h3 className="text-lg font-semibold text-slate-600 mb-2">Full Website</h3>
              <div className="text-4xl font-bold mb-4">$250</div>
              <p className="text-slate-600 mb-6">For established restaurants</p>
              <ul className="space-y-2 text-sm">
                <li>✅ Up to 5 pages</li>
                <li>✅ Full menu system</li>
                <li>✅ Reservation integration</li>
                <li>✅ Photo gallery</li>
                <li>✅ SEO optimization</li>
                <li>✅ Google Maps integration</li>
              </ul>
              <a href="https://buy.stripe.com/test_placeholder" className="block mt-6 text-center bg-amber-500 text-slate-900 py-3 rounded-lg font-bold hover:bg-amber-600 transition-colors">
                Get Started
              </a>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-600 mb-2">Premium</h3>
              <div className="text-4xl font-bold mb-4">$500</div>
              <p className="text-slate-600 mb-6">Multi-location & enterprise</p>
              <ul className="space-y-2 text-sm">
                <li>✅ Up to 15 pages</li>
                <li>✅ Online ordering system</li>
                <li>✅ Multi-location support</li>
                <li>✅ Custom features</li>
                <li>✅ Priority support</li>
                <li>✅ Content management</li>
              </ul>
              <a href="https://buy.stripe.com/test_placeholder" className="block mt-6 text-center bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get More Customers?</h2>
          <p className="text-slate-400 mb-8">
            Most restaurant websites pay for themselves within the first month of new customers. 
            Let's build yours.
          </p>
          <a href="/#contact" className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors">
            Start Your Restaurant Website →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
