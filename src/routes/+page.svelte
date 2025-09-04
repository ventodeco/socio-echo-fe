<script lang="ts">
  import { onMount } from 'svelte';
  import * as Button from '@/components/ui/button';
  import * as Card from '@/components/ui/card';
  import * as Separator from '@/components/ui/separator';
</script>

<svelte:head>
  <title>Socio Echo - Trend Making and Keyword Analysis Tool</title>
  <meta name="description" content="Discover emerging trends and gain insights from keyword analysis with Socio Echo - the ultimate tool for marketers, researchers, and businesses." />
</svelte:head>

<div class="flex flex-col min-h-screen">
  <!-- Header/Navigation -->
  <header class="w-full py-4 px-6 lg:px-10 bg-white border-b border-gray-200 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        <path d="M17 14h.01"/>
      </svg>
      <span class="text-xl font-bold tracking-tight">Socio Echo</span>
    </div>
    <nav class="hidden md:flex items-center gap-6">
      <a href="#features" class="text-sm font-medium text-gray-600 hover:text-primary">Features</a>
      <a href="#how-it-works" class="text-sm font-medium text-gray-600 hover:text-primary">How It Works</a>
      <a href="#use-cases" class="text-sm font-medium text-gray-600 hover:text-primary">Use Cases</a>
      <a href="/blog" class="text-sm font-medium text-gray-600 hover:text-primary">Blog</a>
    </nav>
    <div class="flex items-center gap-4">
      <a href="/login" class="text-sm font-medium text-gray-600 hover:text-primary">Login</a>
      <Button.Root size="sm" class="px-4">Get Started</Button.Root>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-white to-gray-50 py-20 px-6 lg:px-10">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Turn Social Signals Into Actionable Insights
          </h1>
          <p class="text-xl text-gray-600">
            Socio Echo helps you identify emerging trends, analyze keywords, and understand sentiment to stay ahead of the conversation.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <Button.Root size="lg" class="px-8">Request Demo</Button.Root>
            <Button.Root size="lg" variant="outline" class="px-8">Learn More</Button.Root>
          </div>
        </div>
        <div class="relative">
          <div class="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full"></div>
          <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full"></div>
          <div class="relative bg-white p-4 rounded-xl shadow-lg border border-gray-200">
            <img src="https://placehold.co/600x400/e9f5ff/0085ff?text=Socio+Echo+Dashboard" alt="Socio Echo Dashboard" class="rounded-lg w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Problem/Solution Section -->
    <section class="py-20 px-6 lg:px-10 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-3xl font-bold tracking-tight">The Challenge and Our Solution</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            In today's fast-paced digital world, staying on top of trends is more challenging than ever.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Card.Root class="border-2 border-red-100 bg-red-50/50">
            <Card.Header>
              <Card.Title class="text-xl font-bold text-red-600">The Challenge</Card.Title>
            </Card.Header>
            <Card.Content>
              <ul class="space-y-4">
                <li class="flex gap-3">
                  <div class="shrink-0 w-6 h-6 bg-red-100 rounded-full text-red-600 flex items-center justify-center">✗</div>
                  <span>Manually tracking keywords across multiple platforms is time-consuming</span>
                </li>
                <li class="flex gap-3">
                  <div class="shrink-0 w-6 h-6 bg-red-100 rounded-full text-red-600 flex items-center justify-center">✗</div>
                  <span>Difficult to identify emerging trends before they go mainstream</span>
                </li>
                <li class="flex gap-3">
                  <div class="shrink-0 w-6 h-6 bg-red-100 rounded-full text-red-600 flex items-center justify-center">✗</div>
                  <span>Analyzing public sentiment requires extensive manual research</span>
                </li>
                <li class="flex gap-3">
                  <div class="shrink-0 w-6 h-6 bg-red-100 rounded-full text-red-600 flex items-center justify-center">✗</div>
                  <span>Comparing performance against competitors lacks context</span>
                </li>
              </ul>
            </Card.Content>
          </Card.Root>

          <Card.Root class="border-2 border-green-100 bg-green-50/50">
            <Card.Header>
              <Card.Title class="text-xl font-bold text-green-600">Our Solution</Card.Title>
            </Card.Header>
            <Card.Content>
              <ul class="space-y-4">
                <li class="flex gap-3">
                  <div class="shrink-0 w-6 h-6 bg-green-100 rounded-full text-green-600 flex items-center justify-center">✓</div>
                  <span>Automated keyword tracking and trend identification in real-time</span>
                </li>
                <li class="flex gap-3">
                  <div class="shrink-0 w-6 h-6 bg-green-100 rounded-full text-green-600 flex items-center justify-center">✓</div>
                  <span>Early detection of emerging trends with predictive analytics</span>
                </li>
                <li class="flex gap-3">
                  <div class="shrink-0 w-6 h-6 bg-green-100 rounded-full text-green-600 flex items-center justify-center">✓</div>
                  <span>Advanced sentiment analysis powered by AI</span>
                </li>
                <li class="flex gap-3">
                  <div class="shrink-0 w-6 h-6 bg-green-100 rounded-full text-green-600 flex items-center justify-center">✓</div>
                  <span>Comprehensive competitive insights and benchmarking</span>
                </li>
              </ul>
            </Card.Content>
          </Card.Root>
        </div>
      </div>
    </section>

    <!-- How It Works/Features Section -->
    <section id="features" class="py-20 px-6 lg:px-10 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-3xl font-bold tracking-tight">Key Features</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Socio Echo provides powerful tools to help you understand and leverage social trends.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card.Root>
            <Card.Header class="space-y-3">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                  <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                  <path d="m13 13 6 6"/>
                </svg>
              </div>
              <Card.Title>Real-time Trend Monitoring</Card.Title>
            </Card.Header>
            <Card.Content class="text-gray-600">
              <p>Track keywords across social media platforms, news sites, and forums in real-time.</p>
            </Card.Content>
          </Card.Root>

          <Card.Root>
            <Card.Header class="space-y-3">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                  <rect width="18" height="18" x="3" y="3" rx="2"/>
                  <path d="M7 7h10"/>
                  <path d="M7 12h10"/>
                  <path d="M7 17h10"/>
                </svg>
              </div>
              <Card.Title>Keyword Analysis</Card.Title>
            </Card.Header>
            <Card.Content class="text-gray-600">
              <p>Analyze keyword performance, related terms, and semantic connections.</p>
            </Card.Content>
          </Card.Root>

          <Card.Root>
            <Card.Header class="space-y-3">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                  <path d="M2 12h5"/>
                  <path d="M17 12h5"/>
                  <path d="M12 2v5"/>
                  <path d="M12 17v5"/>
                  <path d="M12 12 7 7"/>
                  <path d="m12 12 5 5"/>
                  <path d="m12 12 5-5"/>
                  <path d="m12 12-5 5"/>
                </svg>
              </div>
              <Card.Title>Sentiment Analysis</Card.Title>
            </Card.Header>
            <Card.Content class="text-gray-600">
              <p>Understand the emotional context and public sentiment around your keywords.</p>
            </Card.Content>
          </Card.Root>

          <Card.Root>
            <Card.Header class="space-y-3">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                  <path d="M21 21H3"/>
                  <path d="M10 17 A2 2 0 0 1 8 15 L4 7 L12 5 L14.5 9.5"/>
                  <path d="m18 17-2-7"/>
                  <path d="m4 7 6.5-4.5"/>
                  <circle cx="16" cy="17" r="2"/>
                </svg>
              </div>
              <Card.Title>Competitor Insights</Card.Title>
            </Card.Header>
            <Card.Content class="text-gray-600">
              <p>Compare your performance against competitors and industry benchmarks.</p>
            </Card.Content>
          </Card.Root>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-20 px-6 lg:px-10 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-3xl font-bold tracking-tight">How It Works</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Socio Echo makes trend analysis simple and effective with our streamlined process.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span class="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Input Keywords</h3>
            <p class="text-gray-600">Enter the keywords, topics, or brands you want to track and analyze.</p>
          </div>

          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span class="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Get Analyzed Data</h3>
            <p class="text-gray-600">Our algorithm processes vast amounts of data to deliver actionable insights.</p>
          </div>

          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span class="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Take Action</h3>
            <p class="text-gray-600">Use the insights to inform your strategy, content, and business decisions.</p>
          </div>
        </div>

        <div class="mt-16 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-2xl font-bold mb-4">See Socio Echo in Action</h3>
              <p class="text-gray-600 mb-6">
                Watch our quick demo to see how Socio Echo can transform your approach to trend analysis and keyword research.
              </p>
              <Button.Root>Watch Demo</Button.Root>
            </div>
            <div class="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section id="use-cases" class="py-20 px-6 lg:px-10 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-3xl font-bold tracking-tight">Use Cases</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Socio Echo serves diverse needs across different industries and roles.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card.Root>
            <Card.Header>
              <Card.Title>For Marketers</Card.Title>
            </Card.Header>
            <Card.Content class="space-y-4">
              <p class="text-gray-600">Identify trending topics to create timely, relevant content that resonates with your audience.</p>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-1">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Content strategy optimization</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-1">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Campaign performance tracking</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-1">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Social media engagement improvement</span>
                </li>
              </ul>
            </Card.Content>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <Card.Title>For Researchers</Card.Title>
            </Card.Header>
            <Card.Content class="space-y-4">
              <p class="text-gray-600">Analyze public sentiment and trends to inform research projects and market studies.</p>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-1">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Demographic insights</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-1">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Public opinion analysis</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-1">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Market research data collection</span>
                </li>
              </ul>
            </Card.Content>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <Card.Title>For Business Owners</Card.Title>
            </Card.Header>
            <Card.Content class="space-y-4">
              <p class="text-gray-600">Stay ahead of industry trends and make data-driven decisions to grow your business.</p>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-1">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Competitive analysis</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-1">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Product development insights</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mt-1">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Brand reputation monitoring</span>
                </li>
              </ul>
            </Card.Content>
          </Card.Root>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6 lg:px-10 bg-primary/5 border-y border-primary/10">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <h2 class="text-3xl font-bold tracking-tight">Ready to Discover Trends Before Everyone Else?</h2>
        <p class="text-xl text-gray-600">
          Join the growing community of professionals who rely on Socio Echo to stay ahead of trends and make data-driven decisions.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button.Root size="lg" class="px-8">Request Demo</Button.Root>
          <Button.Root size="lg" variant="outline" class="px-8">Learn More</Button.Root>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-300 py-12 px-6 lg:px-10 mt-auto">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
              <path d="M17 14h.01"/>
            </svg>
            <span class="text-lg font-bold text-white">Socio Echo</span>
          </div>
          <p class="text-sm text-gray-400">
            Turning social signals into actionable insights for businesses, marketers, and researchers.
          </p>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Product</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#features" class="hover:text-primary">Features</a></li>
            <li><a href="#how-it-works" class="hover:text-primary">How It Works</a></li>
            <li><a href="#use-cases" class="hover:text-primary">Use Cases</a></li>
            <li><a href="/blog" class="hover:text-primary">Blog</a></li>
            <li><a href="#" class="hover:text-primary">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-primary">About Us</a></li>
            <li><a href="#" class="hover:text-primary">Blog</a></li>
            <li><a href="#" class="hover:text-primary">Careers</a></li>
            <li><a href="#" class="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Legal</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-primary">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-primary">Terms of Service</a></li>
            <li><a href="#" class="hover:text-primary">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <Separator.Root class="my-8 bg-gray-800" />

      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-400">© {new Date().getFullYear()} Socio Echo. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <a href="#" class="text-gray-400 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
