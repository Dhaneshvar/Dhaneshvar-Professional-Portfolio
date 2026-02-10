import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  ExternalLink, 
  Play, 
  Youtube,
  ArrowRight
} from 'lucide-react';

const blogPosts = [
  {
    id: 'myJourney',
    title: 'My Journey from Campus to Corporate World',
    excerpt: 'Deep dive into architecting reliable AI agents at scale, covering error handling, memory management, and production monitoring strategies.',
    readTime: '7 min',
    date: 'Aug 2025',
    platform: 'Medium',
    image: 'https://miro.medium.com/v2/da:true/resize:fit:1024/0*Is2icKhN_WqVvmCm',
    link: 'https://medium.com/@dhaneshvarMaha/my-journey-from-campus-to-corporate-world-cf576783be9b',
  },
  {
    id: 'AgenticAIHackathon',
    title: 'Agentic AI Hackathon |{ Receipt Management for Google Wallet using Agentic AI} | Team AI Shark',
    excerpt: 'Agentic AI Hackathon |{ Receipt Management for Google Wallet using Agentic AI} | Team AI Shark',
    readTime: '10 min',
    date: 'Sept 2025',
    platform: 'Medium',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
    link: 'https://medium.com/@dhaneshvarMaha/agentic-ai-hackathon-receipt-management-for-google-wallet-using-agentic-ai-team-ai-shark-a2412fdfd5cb',
  },
  {
    id: 'vibecoding2025',
    title: 'Vibe Coding Hackathon @ Google: A Firebase-Fueled Gen AI App Development',
    excerpt: 'Vibe Coding Hackathon @ Google: A Firebase-Fueled Gen AI App Development',
    readTime: '8 min',
    date: 'Sept 2025',
    platform: 'Medium',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*1AL6hxaJba8kkpTpJq3uPA.jpeg',
    link: 'https://medium.com/@dhaneshvarMaha/vibe-coding-hackathon-google-a-firebase-fueled-gen-ai-app-development-9f630cc72a7b',
  },
  {
    id: 'HackathonWin',
    title: 'From Idea to Podium: Our 1st Runner-Up Win in the Foursquare Hackathon on HackerEarth',
    excerpt: 'From Idea to Podium: Our 1st Runner-Up Win in the Foursquare Hackathon on HackerEarth',
    readTime: '6 min',
    date: 'Oct 2025',
    platform: 'Medium',
    image: 'https://miro.medium.com/v2/resize:fit:580/1*IYZmUBnxIY0V5LbJoRebxA.png',
    link: 'https://medium.com/@dhaneshvarMaha/from-idea-to-podium-our-2nd-runner-up-win-at-the-foursquare-hackathon-on-hackerearth-6fc7bd22cd13',
  },
];

const youtubeVideos = [
  {
    id: 'video1',
    title: 'SuperHack 2025 | SuperDesk.AI | Hack2Skill | AWS',
    views: '1.3K',
    duration: '07:19',
    thumbnail: 'https://img.youtube.com/vi/aalEf76uM9Q/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=aalEf76uM9Q',
  },
  {
    id: 'video2',
    title: 'EarthGuard AI | IBM Techxchange PreConference Watsonx 2025 | Hackathon',
    views: '1.5K',
    duration: '04:03',
    thumbnail: 'https://img.youtube.com/vi/RxRqzCwhqeE/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=RxRqzCwhqeE',
  },
  
  {
    id: 'video3',
    title: 'TechTrek | Agent.ai Hackathon',
    views: '1.3K',
    duration: '03:53',
    thumbnail: 'https://img.youtube.com/vi/JX5wK2cA5co/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=JX5wK2cA5co',
  },
];

// Correct Ways to Get Medium Preview Images
// ✅ Option 1: Manual (Best & simplest)

// Open the Medium article and go inside it

// Right-click → Inspect

// Search for og:image

// Copy the URL (it will be a miro.medium.com link)

// Example:

// image: 'https://miro.medium.com/v2/resize:fit:1200/1*abcXYZ.jpeg'

const TechInsights = () => {
  return (
    <section id="tech-insights" className="relative min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-2 block">
            Chapter 08
          </span>
          <h2 className="section-title">Tech Insights</h2>
          <p className="section-subtitle">Blogs, Articles & Video Content</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Blog Posts Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Latest Articles</h3>
              </div>
              <a 
                href="https://medium.com/@dhaneshvarMaha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-mono text-primary hover:text-primary/80 flex items-center gap-1"
              >
                View All <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <motion.a
                  key={post.id}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="card-cyber rounded-xl overflow-hidden h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2 py-1 text-xs font-mono bg-primary/80 text-white rounded">
                          {post.platform}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h4 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* YouTube Videos Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 border border-red-500/50 flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Featured Videos</h3>
              </div>
              <a 
                href="https://youtube.com/@dhaneshvarmaha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-mono text-red-500 hover:text-red-400 flex items-center gap-1"
              >
                Subscribe <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Videos Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {youtubeVideos.map((video, index) => (
                <motion.a
                  key={video.id}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="card-cyber rounded-xl overflow-hidden transition-all duration-300 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center">
                          <Play className="w-6 h-6 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      {/* Duration */}
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 text-xs font-mono bg-black/80 text-white rounded">
                        {video.duration}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h4 className="font-bold text-foreground text-sm line-clamp-2 group-hover:text-red-400 transition-colors">
                        {video.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-2">
                        {video.views} views
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* More videos CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <a
                href="https://youtube.com/@dhaneshvarmaha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 border border-red-500/50 rounded-lg font-mono text-red-400 hover:bg-red-500/30 transition-colors"
              >
                <Youtube className="w-4 h-4" />
                More Videos on YouTube
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechInsights;
