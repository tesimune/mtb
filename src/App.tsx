"use client"

import { useEffect, useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Tracker from "./components/Tracker"
import FAQ from "./components/FAQ"
import Chat from "./components/Chat"
import Emergency from "./components/Emergency"
import Sponsors from "./components/Sponsors"
import Footer from "./components/Footer"
import SplashScreen from "./components/SplashScreen"

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("ServiceWorker registration successful")
          })
          .catch((err) => {
            console.log("ServiceWorker registration failed: ", err)
          })
      })
    }

    // Handle online/offline status
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    // Notification setup
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          scheduleDailyNotification()
        }
      })
    }

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  function scheduleDailyNotification() {
    const now = new Date()
    const scheduledTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0)

    if (now > scheduledTime) {
      scheduledTime.setDate(scheduledTime.getDate() + 1)
    }

    const timeUntilNotification = scheduledTime.getTime() - now.getTime()

    setTimeout(() => {
      new Notification("Daily Pregnancy Tip", {
        body: "Remember to stay hydrated and eat a balanced diet!",
        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mtb%20trans-cy74Ab16q8jV7BJM56sNn481UgRzus.png",
      })
      scheduleDailyNotification()
    }, timeUntilNotification)
  }

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />
  }

  return (
    <div className="App bg-gradient-to-b from-purple-50 to-pink-50">
      {!isOnline && (
        <div className="fixed bottom-0 w-full bg-red-500 text-white p-2 text-center z-50">
          You are currently offline. Some features may be limited.
        </div>
      )}
      <Header />
      <Hero />
      <Features />
      <Tracker />
      <FAQ />
      <Chat />
      <Emergency />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default App

