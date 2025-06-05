"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CreateModuleProps {
  onCreateModule?: (moduleData: { title: string; description: string }) => void;
  trigger?: React.ReactNode;
}

export default function CreateModule({
  onCreateModule,
  trigger,
}: CreateModuleProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (onCreateModule) {
      onCreateModule({ title, description });
    }
    setTitle("");
    setDescription("");
    setOpen(false);
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">Create Module</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-[#0f111a] border-none">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-purple-500">
            Add New Module
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-white text-lg">
              Module Title
            </label>
            <Input
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-[#2a2d3d] border-[#3a3d4d] w-full text-white h-12 sm:h-14 text-base sm:text-lg rounded-full px-6 py-4 placeholder:text-gray-400 placeholder:text-sm focus:outline-none focus:border-2 focus:border-purple-400  focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="text-white text-lg">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-[#2a2d3d] border-[#3a3d4d] w-full text-white h-12 sm:h-14 text-base sm:text-lg rounded-full px-6 py-4 placeholder:text-gray-400 placeholder:text-sm focus:outline-none focus:border-2 focus:border-purple-400  focus:ring-2 focus:ring-purple-400 overflow-hidden resize-none"
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-4">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="bg-[#c93b5a] hover:bg-[#a82e4a] text-white border-none  rounded-full"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-purple-400 hover:bg-purple-400 text-white border-none rounded-full"
          >
            Create Module
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}




