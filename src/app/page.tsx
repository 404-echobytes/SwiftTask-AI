import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Users,
  Zap,
  Brain,
  Globe,
  DollarSign,
  Star,
  Smartphone,
  BarChart3,
} from "lucide-react";
import { createClient } from "../../supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How SwiftTask Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three simple steps to connect global AI developers with talented
              African workers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Create Task Batches
              </h3>
              <p className="text-gray-600">
                Clients upload files, set task details, and define pricing for
                their AI projects
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Workers Complete Tasks
              </h3>
              <p className="text-gray-600">
                Skilled African workers browse, select, and complete tasks
                through our mobile-friendly platform
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Quality Control</h3>
              <p className="text-gray-600">
                GPT-4 powered quality control ensures high standards before
                payment release
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage AI tasks and connect with global
              talent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Client Dashboard",
                description:
                  "Create task batches, monitor progress, and view results in real-time",
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Mobile-Friendly Worker Interface",
                description:
                  "Browse and complete tasks on any device with our responsive design",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Admin Tools",
                description:
                  "Quality review, job assignment, and payment management tools",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI Quality Control",
                description:
                  "GPT-4 integration for automatic quality assessment",
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "Secure Payments",
                description:
                  "Stripe integration with escrow system for safe transactions",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Global Network",
                description: "Connect with talented workers across Africa",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Global Teams</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Join the growing community of AI developers and African talent
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Tasks Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Active Workers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Quality Score</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from clients and workers who are transforming their workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "SwiftTask has revolutionized how we handle data labeling for
                our AI models. The quality is consistently high and the
                turnaround time is incredible."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-gray-500 text-sm">AI Research Lead</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "As a worker on SwiftTask, I've been able to earn a steady
                income while contributing to cutting-edge AI projects. The
                platform is user-friendly and payments are always on time."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">Amara Okafor</div>
                  <div className="text-gray-500 text-sm">SwiftTask Worker</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your AI Workflow?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join SwiftTask today and connect with talented workers or start
            creating tasks for your AI projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/dashboard"
              className="inline-flex items-center px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Start as Client
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/sign-up"
              className="inline-flex items-center px-8 py-4 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-lg font-medium"
            >
              Join as Worker
              <Users className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
