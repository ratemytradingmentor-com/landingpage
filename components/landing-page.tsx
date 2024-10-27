"use client";

import { useEffect, useState, useRef, useMemo, memo } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  AnimatePresence,
  useAnimation,
} from "framer-motion";

import { Mail, ThumbsUp, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { mentorImages } from "@/lib/landing-page-utils";

import GlowButton from "@/components/GlowButton";
// import MailChimpExtendedForm from "@/third-party/MailChimpExtendedForm";
import JoinWaitList from "./JoinWaitList";
import SuggestMentor from "./SuggestMentor";

interface FloatingMentorProps {
  src: string;
  alt: string;
  index: number;
  rotation: number;
  className?: string;
}

const FloatingMentorComponent = ({
  src,
  alt,
  index,
  rotation,
  className,
}: FloatingMentorProps) => {
  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimation();
  const totalMentors = mentorImages.length;
  const radius = 46;
  const angle = (index / totalMentors) * 2 * Math.PI + rotation;
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);

  useEffect(() => {
    if (!shouldReduceMotion) {
      controls.start({
        x: [0, Math.random() * 5 - 2.5, 0],
        y: [0, Math.random() * 5 - 2.5, 0],
        scale: [1, 1.02, 1],
        transition: {
          duration: 10 + Math.random() * 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      });
    }
  }, [shouldReduceMotion, controls]);

  return (
    <motion.div
      className="absolute z-10"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
      animate={controls}
      whileHover={{
        scale: shouldReduceMotion ? 1 : 1.05,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
    >
      <div
        className={`rounded-full overflow-hidden w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 shadow-lg transition-shadow duration-300 hover:shadow-xl relative ${
          className || ""
        }`}
      >
        <Image
          src={src}
          alt={alt}
          width={112}
          height={112}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110 filter brightness-110 contrast-100"
          loading="eager"
          priority={index < 8}
        />
      </div>
    </motion.div>
  );
};

const FloatingMentor = memo(FloatingMentorComponent, (prevProps, nextProps) => {
  return prevProps.rotation === nextProps.rotation;
});

const FloatingIcons = () => {
  const iconCount = 25;
  const shouldReduceMotion = useReducedMotion();

  const icons = useMemo(() => {
    return Array.from({ length: iconCount }).map((_, index) => ({
      id: index,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      size: Math.random() * 16 + 24,
    }));
  }, [iconCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute text-white opacity-15"
          style={{
            left: `${icon.initialX}%`,
            top: `${icon.initialY}%`,
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: ["-2%", "2%"],
                  y: ["-2%", "2%"],
                  rotate: ["-3deg", "3deg"],
                }
          }
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 10 + Math.random() * 5,
              ease: "easeInOut",
            },
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 15 + Math.random() * 5,
              ease: "easeInOut",
            },
            rotate: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20 + Math.random() * 5,
              ease: "easeInOut",
            },
          }}
        >
          <ThumbsUp size={icon.size} />
        </motion.div>
      ))}
    </div>
  );
};

const EmailSignup = () => {
  return <section>
    <JoinWaitList />
  </section>;
};

const SuggestMentorForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <Card className="w-full max-w-2xl mx-auto bg-white text-gray-800 shadow-2xl rounded-lg overflow-hidden max-h-[90vh] flex flex-col">
      <CardHeader className="space-y-1 p-4 sm:p-6">
        <Button
          onClick={onClose}
          variant="ghost"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </Button>
        <CardTitle className="text-2xl sm:text-3xl font-bold text-center leading-tight">
          Know A Great Trading Mentor?
          <br />
          Share with us!
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2 px-4 sm:px-6 pb-4 sm:pb-6 space-y-4 overflow-y-auto flex-grow">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SuggestMentor />
        </motion.div>
        <p className="text-xs text-center text-gray-600 mt-4">
          Fields marked with * are required
        </p>
      </CardContent>
    </Card>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-6 sm:py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <div className="flex flex-col space-y-2 sm:space-y-4 items-center sm:items-start">
          <h3 className="text-base sm:text-lg font-semibold">
            ratemytradingmentor.com
          </h3>
          <p className="text-sm sm:text-base text-center sm:text-left">
            &copy; 2024 All rights reserved.
          </p>
        </div>
        <div className="flex flex-col space-y-2 sm:space-y-4 items-center sm:items-start">
          <h3 className="text-base sm:text-lg font-semibold">Contact Us</h3>
          <a
            href="mailto:info@ratemytradingmentor.com"
            className="flex items-center hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:info@ratemytradingmentor.com";
            }}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base break-all">
              info@ratemytradingmentor.com
            </span>
          </a>
          <div className="flex space-x-4">
            <a
              href="https://x.com/rmtradingmentor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://x.com/rmtradingmentor",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-x-50-BkfEB3yyMz7aMWWJ90eRGyn1aZwKBT.png"
                alt="X (formerly Twitter)"
                width={20}
                height={20}
                className="invert w-4 h-4 sm:w-5 sm:h-5"
              />
            </a>
            <a
              href="https://www.instagram.com/ratemytradingmentor?igsh=d252eGphNWR0cmJ0&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.instagram.com/ratemytradingmentor?igsh=d252eGphNWR0cmJ0&utm_source=qr",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-instagram-50-RgFgFDKxBgWQ9v0Ix4gDuxI4Eyg1ic.png"
                alt="Instagram"
                width={20}
                height={20}
                className="w-4 h-4 sm:w-5 sm:h-5 invert"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export function LandingPage() {
  const [rotation, setRotation] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let animationFrameId: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;

      setRotation(
        (prevRotation) => (prevRotation + delta * 0.0001) % (2 * Math.PI)
      );
      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [shouldReduceMotion]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsFormOpen(false);
      }
    };

    if (isFormOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFormOpen]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-300 via-indigo-600 to-purple-800">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="absolute top-0 left-0 z-50 p-4">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RMTM%20on%20White%20V2%20copy-XfSFSevaZC79V0JnJqLS1T0uTTWo8F.svg"
          alt="RateMyTradingMentor Logo"
          width={240}
          height={60}
          className="w-auto h-6 sm:h-8 md:h-10 lg:h-12"
        />
      </header>
      <main className="flex-grow">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-300 via-indigo-600 to-purple-800">
          <div className="absolute inset-0 z-0">
            <FloatingIcons />
          </div>
          <div
            className="absolute inset-0"
            style={{ top: "5%", bottom: "5%", left: "5%", right: "5%" }}
          >
            {mentorImages.map((image, index) => (
              <FloatingMentor
                key={image.src}
                src={image.src}
                alt={image.alt}
                index={index}
                rotation={rotation}
                className={image.className}
              />
            ))}
          </div>
          <div className="relative z-30 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 max-w-full sm:max-w-xl md:max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-purple-900 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-purple-500">
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight space-y-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  className="inline-block mb-2 sm:mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Find Your Perfect
                </motion.span>
                <br />
                <span className="relative">
                  <span className="relative z-10">Trading Mentor</span>
                  <motion.svg
                    className="absolute -bottom-1 left-0 w-full h-3 -z-10"
                    viewBox="0 0 300 10"
                    preserveAspectRatio="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <motion.path
                      d="M0,5 Q75,5 150,5 T300,5"
                      fill="none"
                      stroke="#60A5FA"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </motion.svg>
                </span>
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 text-blue-300 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Discover, Connect, Rate.
              </motion.p>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-6 sm:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                All In One Place
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <EmailSignup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Suggest Mentor Button */}
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
          <GlowButton
            onClick={() => setIsFormOpen(true)}
            className="bg-black text-white hover:bg-gray-900 font-semibold rounded-full px-6 py-3 text-base sm:text-lg transition-all duration-300"
          >
            Suggest a Mentor
          </GlowButton>
        </div>

        {/* Popup Form */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                ref={formRef}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="my-8"
              >
                <SuggestMentorForm onClose={() => setIsFormOpen(false)} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
