"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.321 5.562a5.122 5.122 0 0 1-3.585-1.446A5.075 5.075 0 0 1 14.29.531h-4.003v15.594c0 1.625-1.325 2.95-2.951 2.95a2.954 2.954 0 0 1-2.95-2.95 2.954 2.954 0 0 1 2.95-2.95c.24 0 .47.037.694.095V8.622a7.004 7.004 0 0 0-.694-.038A7.662 7.662 0 0 0 0 16.246 7.662 7.662 0 0 0 7.663 23.91a7.662 7.662 0 0 0 7.664-7.664V8.17a9.063 9.063 0 0 0 5.17 1.608V5.776c-.39 0-.78-.037-1.176-.214z" fill="currentColor"/>
  </svg>
)

export const SuggestMentorForm = ({ onClose }: { onClose: () => void }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    mentorName: "",
    communityName: "",
    socialMediaHandle: "",
    youtubeChannel: "",
    website: "",
    bestKnownFor: "",
    recommendation: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", { ...formData, selectedPlatform });
    onClose();
  };

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
        <motion.form
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <Label
              htmlFor="mentorName"
              className="text-sm font-medium text-gray-700"
            >
              Mentor&apos;s Name *
            </Label>
            <Input
              id="mentorName"
              name="mentorName"
              placeholder="Enter mentor's trading name"
              value={formData.mentorName}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="communityName"
              className="text-sm font-medium text-gray-700"
            >
              Community Name
            </Label>
            <Input
              id="communityName"
              name="communityName"
              placeholder="Enter community name"
              value={formData.communityName}
              onChange={handleInputChange}
              className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="socialMediaHandle"
              className="text-sm font-medium text-gray-700"
            >
              Primary Social Media Handle *
            </Label>
            <div className="flex flex-col space-y-2">
              <Input
                id="socialMediaHandle"
                name="socialMediaHandle"
                placeholder="Enter social media handle"
                value={formData.socialMediaHandle}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 border-gray-300"
              />
              <div className="flex justify-center space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className={`${
                    selectedPlatform === "X"
                      ? "bg-purple-100 border-purple-500"
                      : "bg-white"
                  } hover:bg-gray-100 text-gray-800`}
                  onClick={() => setSelectedPlatform("X")}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-x-50-BkfEB3yyMz7aMWWJ90eRGyn1aZwKBT.png"
                    alt="X (formerly Twitter)"
                    width={24}
                    height={24}
                  />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className={`${
                    selectedPlatform === "Instagram"
                      ? "bg-purple-100 border-purple-500"
                      : "bg-white"
                  } hover:bg-gray-100 text-gray-800`}
                  onClick={() => setSelectedPlatform("Instagram")}
                >
                  <Instagram className="h-6 w-6" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className={`${
                    selectedPlatform === "TikTok"
                      ? "bg-purple-100 border-purple-500"
                      : "bg-white"
                  } hover:bg-gray-100 text-gray-800`}
                  onClick={() => setSelectedPlatform("TikTok")}
                >
                  <TikTokIcon className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="youtubeChannel"
              className="text-sm font-medium text-gray-700"
            >
              YouTube Channel URL (if applicable)
            </Label>
            <Input
              id="youtubeChannel"
              name="youtubeChannel"
              placeholder="https://www.youtube.com/channel/..."
              value={formData.youtubeChannel}
              onChange={handleInputChange}
              className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="website"
              className="text-sm font-medium text-gray-700"
            >
              Website (if applicable)
            </Label>
            <Input
              id="website"
              name="website"
              placeholder="https://www.example.com"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="bestKnownFor"
              className="text-sm font-medium text-gray-700"
            >
              Best Known For
            </Label>
            <Textarea
              id="bestKnownFor"
              name="bestKnownFor"
              placeholder="Enter what the mentor is best known for"
              value={formData.bestKnownFor}
              onChange={handleInputChange}
              className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="recommendation"
              className="text-sm font-medium text-gray-700"
            >
              Why do you recommend this mentor?
            </Label>
            <Textarea
              id="recommendation"
              name="recommendation"
              placeholder="Tell us why you think this mentor would be a great addition to our platform"
              value={formData.recommendation}
              onChange={handleInputChange}
              className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 border-gray-300"
            />
          </div>
          <div className="flex justify-center mt-6">
            <Button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white hover:bg-purple-700 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 text-base shadow-md hover:shadow-lg"
            >
              Suggest Mentor
            </Button>
          </div>
        </motion.form>
        <p className="text-xs text-center text-gray-600 mt-4">
          Fields marked with * are required
        </p>
      </CardContent>
    </Card>
  );
};
