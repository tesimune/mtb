import React from 'react';
import { motion } from 'framer-motion';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => void;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const Hero: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] =
    React.useState<BeforeInstallPromptEvent | null>(null);
  const [installMessage, setInstallMessage] = React.useState<string>('');

  React.useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    window.addEventListener(
      'beforeinstallprompt',
      handleBeforeInstallPrompt as unknown as EventListener
    );

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt as unknown as EventListener
      );
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        setInstallMessage('App installed successfully! 🎉');
      } else {
        console.log('User dismissed the install prompt');
        setInstallMessage(
          'Installation was canceled. You can try again later.'
        );
      }

      setDeferredPrompt(null);
    } else {
      setInstallMessage(
        'Your device or browser does not support app installation. You can still use the web version.'
      );
    }
  };

  return (
    <section className='relative min-h-screen flex items-center'>
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90' />
        <img
          src='/images/mtb-white.png?height=1080&width=1920'
          alt='Background'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Your Journey to Motherhood Starts Here
            </h1>
            <p className='text-xl text-white/90 mb-8'>
              Track your pregnancy, get expert advice, and connect with our
              community of mothers-to-be.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div> */}
            <button
              onClick={handleInstall}
              disabled={!deferredPrompt}
              className={`py-2 px-6 rounded-lg text-lg font-bold transition ${
                deferredPrompt
                  ? 'bg-pink-600 hover:bg-pink-700 text-white'
                  : 'bg-gray-500 text-gray-300 cursor-not-allowed'
              }`}
            >
              {deferredPrompt ? 'Install App' : 'Device Not Supported'}
            </button>
            {installMessage && (
              <p className='mt-4 text-white bg-black/60 p-3 rounded-lg'>
                {installMessage}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='hidden md:block'
          >
            <img
              src='/images/mtb-white.png'
              alt='Mommy to Be Logo'
              className='w-full max-w-md mx-auto'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
