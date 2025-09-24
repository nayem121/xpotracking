import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Search, Bell, Shield, Clock, Download, AlertCircle, Package, Truck, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Xpo Tracking Logo - Track XPO Logistics Packages"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Xpo Tracking</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
            >
              Features
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.nuc.xpotracking"
              className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
            >
              Download
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
            >
              Privacy Policy
            </Link>
          </div>
        </nav>
      </header>

      {/* Third-party disclaimer */}
      <section className="container mx-auto px-4 py-2">
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 max-w-4xl mx-auto">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Third-Party App:</strong> This is an unofficial XPO tracking app developed independently. We are
              not affiliated with XPO Logistics or any specific courier service.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge variant="secondary" className="mb-4">
          Free XPO Tracking App Available Now
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
          Track Your XPO Logistics Packages
          <span className="text-pink-600"> With Real-Time Updates</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-pretty">
          Stay updated on your XPO shipments with our fast, reliable package tracking app. Track XPO tracking numbers,
          PRO numbers, and get real-time delivery status updates directly on your phone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700" asChild>
            <Link
              href="https://play.google.com/store/apps/details?id=com.nuc.xpotracking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Android
            </Link>
          </Button>
          <Button size="lg" variant="outline" disabled className="opacity-60 bg-transparent">
            iOS Coming Soon
          </Button>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            XPO Package Tracking Made Simple
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Track XPO Logistics shipments, freight deliveries, and LTL shipments with our comprehensive tracking
            solution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </div>
              <CardTitle>Track XPO Packages</CardTitle>
              <CardDescription>
                Enter your XPO tracking number or PRO number to get instant shipment status and delivery updates.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>Freight & LTL Tracking</CardTitle>
              <CardDescription>
                Monitor your XPO freight shipments, truckload deliveries, and less-than-truckload (LTL) cargo in
                real-time.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle>Current Location</CardTitle>
              <CardDescription>
                Get precise location updates and estimated delivery dates for all your XPO Logistics shipments.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Advanced XPO Tracking Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the most convenient way to track XPO shipments with our feature-rich mobile application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <CardTitle>Real-Time XPO Tracking</CardTitle>
              <CardDescription>
                Get instant updates on your XPO package location, delivery status, and shipment visibility with our
                advanced tracking system.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle>Delivery Notifications</CardTitle>
              <CardDescription>
                Receive instant push notifications about XPO delivery attempts, estimated delivery dates, and successful
                deliveries.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle>Mobile Optimized</CardTitle>
              <CardDescription>
                Designed specifically for tracking XPO packages on mobile devices with an intuitive interface for all
                screen sizes.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <CardTitle>24/7 XPO Tracking</CardTitle>
              <CardDescription>
                Track your XPO packages anytime, day or night. Our XPO tracking service is available round the clock.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>Secure Tracking</CardTitle>
              <CardDescription>
                Your XPO tracking data is protected with industry-standard security. We respect privacy and never share
                tracking information.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <CardTitle>Free XPO Tracker</CardTitle>
              <CardDescription>
                Completely free XPO tracking app with no hidden charges. Track unlimited XPO packages without
                subscription fees.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="container mx-auto px-4 py-16">
        <Card className="border-0 shadow-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Tracking XPO Packages Now</h2>
            <p className="text-xl mb-8 opacity-90">
              Download the XPO Tracking app and never lose track of your XPO Logistics shipments again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100" asChild>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.nuc.xpotracking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Get it on Google Play
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-pink-600 bg-transparent"
                disabled
              >
                iOS Coming Soon
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.png" alt="Xpo Tracking Logo" width={32} height={32} className="w-8 h-8" />
                <span className="text-xl font-bold">Xpo Tracking</span>
              </div>
              <p className="text-gray-400">
                Track your XPO Logistics packages, freight shipments, and cargo deliveries anytime, anywhere with our
                reliable mobile application.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Third-party XPO tracking app - Not affiliated with XPO Logistics
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">XPO Tracking Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://xpotracking.yec.org.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    Official XPO Tracking Website
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.nuc.xpotracking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    Download XPO Tracking App
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">Email: nayem121@programmer.com</p>
              <p className="text-gray-400">
                Developed by{" "}
                <Link
                  href="https://nayem121.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Nayem Uddin Chowdhury
                </Link>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Xpo Tracking: Logistic Tracker App. Track XPO packages and shipments. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
