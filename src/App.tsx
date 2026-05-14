/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Lock, 
  Languages, 
  Instagram, 
  Mail, 
  LayoutGrid, 
  Calendar, 
  Sparkles, 
  MessageCircle,
  Plus,
  PlayCircle,
  Heart,
  Eye
} from 'lucide-react';

// --- Components ---

const Header = ({ onOpenMenu, onReserve }: { onOpenMenu: () => void, onReserve: () => void }) => (
  <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-7xl rounded-full bg-surface/80 backdrop-blur-xl border border-on-surface/10 shadow-[0px_20px_40px_rgba(0,0,0,0.04)] flex justify-between items-center px-8 h-16 z-50 transition-all hover:scale-[1.02]">
    <div className="flex items-center gap-2">
      <Menu className="text-primary w-6 h-6 cursor-pointer" onClick={onOpenMenu} />
    </div>
    <div className="font-headline text-2xl tracking-[0.2em] text-primary uppercase">THE POTTER SHED</div>
    <button 
      onClick={onReserve}
      className="bg-primary text-on-primary font-body text-xs font-semibold px-6 py-2.5 rounded-full uppercase tracking-widest hover:bg-secondary transition-colors duration-500"
    >
      RESERVE
    </button>
  </header>
);

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="menu-drawer-overlay"
        />
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          className="menu-drawer p-8"
        >
          <div className="flex justify-between items-center mb-12">
            <span className="font-headline text-xl text-primary">NAVIGATION</span>
            <button onClick={onClose} className="text-on-surface-variant hover:text-primary">
              <Plus className="w-6 h-6 rotate-45" />
            </button>
          </div>
          <nav className="flex flex-col gap-8">
            {['Menu', 'Events', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={onClose}
                className="font-headline text-3xl text-primary hover:text-secondary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="absolute bottom-12 left-8 right-8">
            <p className="font-body text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Location</p>
            <p className="font-body text-xs mb-8">18 Rue de la Paix, Paris</p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-on-surface-variant" />
              <Mail className="w-5 h-5 text-on-surface-variant" />
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

const Hero = ({ onReserve, onViewMenu }: { onReserve: () => void, onViewMenu: () => void }) => (
  <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-5 floating-particles">
    <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface pointer-events-none"></div>
    
    <div className="relative w-72 h-72 mb-12 flex items-center justify-center clay-rotation" style={{ transformStyle: 'preserve-3d' }}>
      <div className="absolute inset-0 rounded-full border-4 border-primary/10 shadow-2xl backdrop-blur-sm bg-gradient-to-tr from-surface-variant to-secondary-fixed-dim/20"></div>
      <img 
        alt="Le Bistro Shed Icon" 
        className="w-40 h-40 opacity-90 z-10 drop-shadow-2xl" 
        src="https://img.icons8.com/wired/512/000000/cloche.png"
      />
    </div>

    <div className="text-center z-10">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-headline text-4xl md:text-7xl text-primary mb-6 leading-tight"
      >
        Plated By Hand. <br/> Designed To Be Tasted.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-body text-lg text-on-surface-variant max-w-xs mx-auto mb-10"
      >
        Seasonal flavors, wine pairings, artisanal pastries, and intimate dining spaces.
      </motion.p>
      <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
        <button 
          onClick={onReserve}
          className="bg-primary text-on-primary py-5 rounded-full font-body text-xs font-bold tracking-widest transition-all duration-500 hover:scale-[1.02] shadow-xl"
        >
          RESERVE A TABLE
        </button>
        <button 
          onClick={onViewMenu}
          className="bg-transparent border border-outline-variant text-primary py-5 rounded-full font-body text-xs font-bold tracking-widest transition-all duration-500 hover:bg-surface-container"
        >
          VIEW OUR MENU
        </button>
      </div>
    </div>
  </section>
);

const Collection = () => (
  <section id="menu" className="px-5 py-24 max-w-7xl mx-auto scroll-mt-24">
    <h2 className="font-headline text-3xl text-center mb-12">Our Menu</h2>
    <style>{`
      .menu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1px; background: #e8e0d4; }
      .menu-card { background: #fff8f4; padding: 2rem 1.75rem; position: relative; }
      .menu-card-label { font-family: 'Manrope', sans-serif; font-size: 9px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #944a00; margin-bottom: 1rem; }
      .menu-card-title { font-family: 'EB Garamond', Georgia, serif; font-size: 1.6rem; font-weight: 400; color: #010101; margin-bottom: 1.25rem; line-height: 1.1; }
      .menu-item { display: flex; justify-content: space-between; align-items: baseline; padding: 0.55rem 0; border-bottom: 0.5px solid #ece1d6; gap: 1rem; }
      .menu-item:last-child { border-bottom: none; }
      .item-name { font-family: 'Manrope', sans-serif; font-size: 13px; font-weight: 500; color: #201b14; }
      .item-desc { font-family: 'Manrope', sans-serif; font-size: 11px; color: #747878; margin-top: 2px; }
      .item-price { font-family: 'EB Garamond', Georgia, serif; font-size: 15px; color: #944a00; white-space: nowrap; flex-shrink: 0; }
      .item-badge { font-size: 9px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; background: #ffdcc5; color: #663100; padding: 2px 7px; border-radius: 3px; margin-left: 6px; vertical-align: middle; }
      .corner-mark { position: absolute; top: 14px; right: 14px; width: 8px; height: 8px; border-top: 1px solid #c4c7c7; border-right: 1px solid #c4c7c7; }
    `}</style>
    <div className="menu-grid">

      <div className="menu-card">
        <div className="corner-mark"></div>
        <div className="menu-card-label">Morning</div>
        <div className="menu-card-title">Breakfast</div>
        <div className="menu-item"><div><div className="item-name">Full Shed Breakfast</div><div className="item-desc">Eggs, bacon, sausage, toast, grilled tomato</div></div><div className="item-price">R185</div></div>
        <div className="menu-item"><div><div className="item-name">Avocado Toast <span className="item-badge">Popular</span></div><div className="item-desc">Sourdough, avo, poached egg, feta</div></div><div className="item-price">R145</div></div>
        <div className="menu-item"><div><div className="item-name">French Toast</div><div className="item-desc">Brioche, maple syrup, seasonal berries</div></div><div className="item-price">R135</div></div>
        <div className="menu-item"><div><div className="item-name">Granola Bowl</div><div className="item-desc">House granola, yoghurt, honey, fruit</div></div><div className="item-price">R110</div></div>
      </div>

      <div className="menu-card">
        <div className="corner-mark"></div>
        <div className="menu-card-label">All Day</div>
        <div className="menu-card-title">All-Day Eats</div>
        <div className="menu-item"><div><div className="item-name">Potter Club Sandwich</div><div className="item-desc">Chicken, bacon, egg, lettuce, mayo</div></div><div className="item-price">R175</div></div>
        <div className="menu-item"><div><div className="item-name">Garden Salad <span className="item-badge">Vegan</span></div><div className="item-desc">Seasonal leaves, seeds, lemon dressing</div></div><div className="item-price">R120</div></div>
        <div className="menu-item"><div><div className="item-name">Quiche of the Day</div><div className="item-desc">Ask your server for today's filling</div></div><div className="item-price">R140</div></div>
        <div className="menu-item"><div><div className="item-name">Soup & Bread</div><div className="item-desc">Slow-cooked seasonal soup, crusty roll</div></div><div className="item-price">R105</div></div>
      </div>

      <div className="menu-card">
        <div className="corner-mark"></div>
        <div className="menu-card-label">Mains</div>
        <div className="menu-card-title">Burgers</div>
        <div className="menu-item"><div><div className="item-name">Shed Smash Burger <span className="item-badge">Best Seller</span></div><div className="item-desc">Double smash, cheddar, special sauce</div></div><div className="item-price">R195</div></div>
        <div className="menu-item"><div><div className="item-name">Mushroom Swiss</div><div className="item-desc">Beef patty, sautéed mushrooms, gruyère</div></div><div className="item-price">R185</div></div>
        <div className="menu-item"><div><div className="item-name">Crispy Chicken Burger</div><div className="item-desc">Buttermilk chicken, slaw, pickles</div></div><div className="item-price">R175</div></div>
        <div className="menu-item"><div><div className="item-name">Plant Burger <span className="item-badge">Vegan</span></div><div className="item-desc">Beyond patty, avocado, tomato relish</div></div><div className="item-price">R175</div></div>
      </div>

      <div className="menu-card">
        <div className="corner-mark"></div>
        <div className="menu-card-label">Little Ones</div>
        <div className="menu-card-title">Kids</div>
        <div className="menu-item"><div><div className="item-name">Mini Cheeseburger</div><div className="item-desc">Beef patty, cheese, ketchup, fries</div></div><div className="item-price">R95</div></div>
        <div className="menu-item"><div><div className="item-name">Mac & Cheese</div><div className="item-desc">Creamy cheddar, pasta, breadcrumb top</div></div><div className="item-price">R85</div></div>
        <div className="menu-item"><div><div className="item-name">Chicken Strips</div><div className="item-desc">Crumbed chicken, dipping sauce, fries</div></div><div className="item-price">R95</div></div>
        <div className="menu-item"><div><div className="item-name">Pancakes</div><div className="item-desc">Three pancakes, maple syrup, banana</div></div><div className="item-price">R80</div></div>
      </div>

      <div className="menu-card">
        <div className="corner-mark"></div>
        <div className="menu-card-label">Stone Baked</div>
        <div className="menu-card-title">Pizza (Vegan)</div>
        <div className="menu-item"><div><div className="item-name">Roasted Veg <span className="item-badge">Vegan</span></div><div className="item-desc">Peppers, zucchini, red onion, olive oil</div></div><div className="item-price">R165</div></div>
        <div className="menu-item"><div><div className="item-name">Cashew Pesto <span className="item-badge">Vegan</span></div><div className="item-desc">House pesto, cherry tomato, rocket</div></div><div className="item-price">R160</div></div>
        <div className="menu-item"><div><div className="item-name">Spicy Arrabbiata <span className="item-badge">Vegan</span></div><div className="item-desc">Chilli tomato, olives, capers</div></div><div className="item-price">R155</div></div>
        <div className="menu-item"><div><div className="item-name">Mushroom Truffle <span className="item-badge">Vegan</span></div><div className="item-desc">Wild mushrooms, truffle oil, thyme</div></div><div className="item-price">R175</div></div>
      </div>

      <div className="menu-card">
        <div className="corner-mark"></div>
        <div className="menu-card-label">Stone Baked</div>
        <div className="menu-card-title">Pizza</div>
        <div className="menu-item"><div><div className="item-name">Margherita</div><div className="item-desc">San Marzano tomato, fior di latte, basil</div></div><div className="item-price">R155</div></div>
        <div className="menu-item"><div><div className="item-name">Pepperoni <span className="item-badge">Popular</span></div><div className="item-desc">Double pepperoni, mozzarella, oregano</div></div><div className="item-price">R175</div></div>
        <div className="menu-item"><div><div className="item-name">BBQ Chicken</div><div className="item-desc">Pulled chicken, BBQ base, red onion</div></div><div className="item-price">R180</div></div>
        <div className="menu-item"><div><div className="item-name">Four Cheese</div><div className="item-desc">Mozzarella, gorgonzola, brie, parmesan</div></div><div className="item-price">R185</div></div>
      </div>

    </div>
  </section>
);

const DiningEvents = () => (
  <section id="events" className="bg-surface-container py-24 px-5 scroll-mt-24">
    <h2 className="font-headline text-3xl text-center mb-4">Dining Events</h2>
    <p className="font-body text-center text-on-surface-variant mb-12">Immersive culinary experiences for the curious palate.</p>
    
    <div className="bg-surface rounded-2xl p-6 shadow-[0px_20px_40px_rgba(0,0,0,0.04)] mb-8 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <span className="font-body text-xs font-bold uppercase tracking-widest text-primary">October 2024</span>
        <div className="flex gap-4">
          <ChevronLeft className="text-outline w-5 h-5 cursor-pointer" />
          <ChevronRight className="text-primary w-5 h-5 cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center mb-4">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
          <div key={d} className="text-[10px] font-bold text-outline-variant">{d}</div>
        ))}
        {[12, 13, 14, 15, 16, 17, 18].map(d => (
          <div key={d} className={`p-2 text-xs ${d === 16 ? 'bg-primary text-on-primary rounded-full font-bold' : ''}`}>
            {d}
          </div>
        ))}
      </div>
    </div>

    <div className="space-y-4 max-w-md mx-auto">
      <div className="bg-surface/50 backdrop-blur-md border border-outline-variant p-6 rounded-2xl flex justify-between items-center transition-all hover:border-primary cursor-pointer group">
        <div>
          <h3 className="font-headline text-2xl text-primary">Pastry Masterclass</h3>
          <p className="font-body text-[10px] font-bold text-on-surface-variant mt-1 uppercase tracking-wider">3 HOURS • $95 PP</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="bg-secondary-container/10 text-secondary font-body text-[8px] font-bold px-2 py-0.5 rounded-full mb-2">LAST FEW SEATS</span>
          <ArrowRight className="text-primary w-5 h-5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
      <div className="bg-surface/50 backdrop-blur-md border border-outline-variant p-6 rounded-2xl flex justify-between items-center opacity-60">
        <div>
          <h3 className="font-headline text-2xl text-primary">Wine Pairing Dinner</h3>
          <p className="font-body text-[10px] font-bold text-on-surface-variant mt-1 uppercase tracking-wider">4 HOURS • $180 / PAIR</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="bg-on-surface/5 text-on-surface-variant font-body text-[8px] font-bold px-2 py-0.5 rounded-full mb-2 uppercase">FULLY BOOKED</span>
          <Lock className="text-outline w-5 h-5" />
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-24 px-5 bg-primary text-on-primary overflow-hidden scroll-mt-24">
    <h2 className="font-headline text-3xl text-center mb-16">The Culinary Journey</h2>
    <div className="relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
      
      {[
        { step: '01', title: 'The Soil', desc: 'Sourcing organic, seasonal ingredients directly from local artisanal farms.' },
        { step: '02', title: 'The Flame', desc: 'Transforming raw produce into culinary art through time-honored techniques.' },
        { step: '03', title: 'The Palate', desc: 'Discovering the final composition, where every flavor finds its perfect harmony.' }
      ].map((item, idx) => (
        <div key={idx} className="relative mb-24 last:mb-0 flex flex-col items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 z-10 border ${idx === 1 ? 'bg-secondary border-secondary' : 'bg-primary border-outline'}`}>
            <span className="font-headline text-xl">{item.step}</span>
          </div>
          <h4 className="font-headline text-3xl mb-4">{item.title}</h4>
          <p className="text-center font-body text-sm text-on-primary-container max-w-xs opacity-80">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

const Reviews = () => (
  <section className="py-24 px-5 overflow-hidden relative">
    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-fixed-dim/20 blur-[100px] rounded-full"></div>
    <h2 className="font-headline text-3xl text-center mb-12">Guest Reviews</h2>
    <div className="flex flex-col gap-6 max-w-lg mx-auto">
      <div className="bg-surface-container-highest/30 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-xl transform -rotate-2">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 bg-surface-dim rounded-full flex items-center justify-center font-headline">S</div>
          <div>
            <p className="font-body text-xs font-bold text-primary tracking-wider">SOPHIE MARCEL</p>
            <p className="text-[10px] text-on-surface-variant font-bold">Food Critic</p>
          </div>
        </div>
        <p className="italic font-body text-on-surface text-sm">
          "The most evocative bistro I've visited this year. The plating, the wine, the atmosphere—it all fuels the senses effortlessly."
        </p>
      </div>
      <div className="bg-surface-container-highest/30 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-xl transform rotate-2 ml-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 bg-surface-dim rounded-full flex items-center justify-center font-headline">J</div>
          <div>
            <p className="font-body text-xs font-bold text-primary tracking-wider">JULIEN DUBOIS</p>
            <p className="text-[10px] text-on-surface-variant font-bold">Sommelier</p>
          </div>
        </div>
        <p className="italic font-body text-on-surface text-sm">
          "An intimate sanctuary for gastronomy. The attention to detail in every course is a testament to the chef's profound craft."
        </p>
      </div>
    </div>
  </section>
);

const SocialFeed = () => (
  <section className="py-24">
    <div className="px-5 flex justify-between items-end mb-8">
      <h2 className="font-headline text-3xl">Bistro Reels</h2>
      <span className="font-body text-[10px] font-bold text-secondary uppercase tracking-widest">@lebistroshed</span>
    </div>
    <div className="flex overflow-x-auto gap-4 px-5 no-scrollbar scroll-smooth">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex-shrink-0 w-56 aspect-[9/16] rounded-2xl bg-surface-container overflow-hidden group relative">
          <img 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
            src={`https://images.unsplash.com/photo-1550966841-3ee3228a496f?auto=format&fit=crop&q=80&w=600&i=${i}`} 
            alt="Bistro Reel"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <PlayCircle className="text-white w-12 h-12" />
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <Eye className="text-white w-3 h-3" />
            <span className="text-white text-[10px] font-bold">{(Math.random() * 5).toFixed(1)}k</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 px-5 max-w-lg mx-auto scroll-mt-24">
    <h2 className="font-headline text-3xl text-center mb-12">Connect With Us</h2>
    <form className="space-y-8 mb-16" onSubmit={(e) => e.preventDefault()}>
      <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary font-body placeholder:text-outline" placeholder="Your Name" />
      <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary font-body placeholder:text-outline" placeholder="Email Address" />
      <textarea className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary font-body placeholder:text-outline" placeholder="How can we help?" rows={3}></textarea>
      <button 
        type="button"
        className="w-full bg-primary text-on-primary py-5 rounded-full font-body text-xs font-bold tracking-widest transition-all duration-500 hover:scale-[1.02]"
      >
        SEND MESSAGE
      </button>
    </form>
    
    <button className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-secondary text-secondary font-body text-xs font-bold tracking-widest mb-12">
      <MessageCircle className="w-4 h-4" />
      CHAT WITH US
    </button>

    <div className="w-full h-64 rounded-3xl overflow-hidden grayscale border border-outline-variant relative">
      <img className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1524661141543-ef88bd40f7ae?auto=format&fit=crop&q=80&w=1000" alt="Map" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 bg-secondary rounded-full animate-ping"></div>
        <div className="absolute w-3 h-3 bg-secondary rounded-full"></div>
      </div>
      <div className="absolute bottom-4 left-4 bg-surface/95 backdrop-blur-md p-4 rounded-xl">
        <p className="font-body text-[8px] font-bold text-on-surface-variant uppercase tracking-wider">LOCATION</p>
        <p className="font-body text-xs font-medium">18 Rue de la Paix, Paris</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full py-24 bg-surface border-t border-outline-variant pb-32">
    <div className="max-w-7xl mx-auto px-5 flex flex-col items-center gap-12 text-center">
      <div className="font-headline text-4xl text-primary">THE POTTER SHED</div>
      <nav className="flex flex-wrap justify-center gap-8">
        {['Menu', 'Events', 'Experience', 'Contact'].map(item => (
          <a key={item} className="text-on-surface-variant font-body text-[10px] font-bold uppercase tracking-[0.2em] hover:text-secondary transition-colors" href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
      </nav>
      <div className="flex gap-6">
        <Languages className="w-5 h-5 text-on-surface-variant" />
        <Instagram className="w-5 h-5 text-on-surface-variant" />
        <Mail className="w-5 h-5 text-on-surface-variant" />
      </div>
      <p className="font-body text-[10px] text-on-surface-variant opacity-60">© 2026 THE POTTER SHED. GASTRONOMY CRAFTED.</p>
    </div>
  </footer>
);

const MobileNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 bg-surface/80 backdrop-blur-2xl border-t border-on-surface/5 flex justify-around items-center h-20 px-4 z-50 md:hidden">
    <a href="#menu" className="flex flex-col items-center gap-1 text-primary relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-secondary after:rounded-full">
      <LayoutGrid className="w-5 h-5" />
      <span className="text-[8px] font-bold uppercase">Menu</span>
    </a>
    <a href="#events" className="flex flex-col items-center gap-1 text-on-surface-variant">
      <Calendar className="w-5 h-5" />
      <span className="text-[8px] font-bold uppercase">Book</span>
    </a>
    <a href="#experience" className="flex flex-col items-center gap-1 text-on-surface-variant">
      <Sparkles className="w-5 h-5" />
      <span className="text-[8px] font-bold uppercase">Vibe</span>
    </a>
    <a href="#contact" className="flex flex-col items-center gap-1 text-on-surface-variant">
      <Mail className="w-5 h-5" />
      <span className="text-[8px] font-bold uppercase">Talk</span>
    </a>
  </nav>
);

const FAB = () => (
  <div className="fixed bottom-24 right-6 z-40 md:hidden">
    <button className="bg-primary text-on-primary w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-transform active:scale-95">
      <Plus className="w-6 h-6" />
    </button>
  </div>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header 
        onOpenMenu={() => setMenuOpen(true)} 
        onReserve={() => scrollTo('events')}
      />
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero 
        onReserve={() => scrollTo('events')}
        onViewMenu={() => scrollTo('menu')} 
      />
      <Collection />
      <DiningEvents />
      <Experience />
      <Reviews />
      <SocialFeed />
      <Contact />
      <Footer />
      <MobileNav />
      <FAB />
    </div>
  );
}
