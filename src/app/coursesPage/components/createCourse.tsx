import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PrimaryButton } from "@/components/ui/primaryButton";

export default function CreateCourse() {
  return (
    <Dialog>
      <DialogTrigger>Create Course</DialogTrigger>
      <DialogContent className="bg-gray-950 border-none sm:rounded-2xl gap-[26px]">
        <DialogHeader>
          <DialogTitle className="text-semibold text-[20px] text-white">Create New Course</DialogTitle>
          <DialogDescription className="!-mt-0.5 text-base text-gray-300">
            Fill in the details to create your new course
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-2.5">
            <Label htmlFor="course-name" className="text-base font-bold text-white">Course Name</Label>
            <Input
              id="course-name"
              placeholder="e.g. Complete Web Development Bootcamp"
              className="border-none bg-gray-900 p-2.5 px-4 h-10 text-white placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2.5">
            <Label htmlFor="course-description" className="text-base font-bold text-white">Course Description</Label>
            <Input
              id="course-description"
              placeholder="Describe what students will learn in this course..."
              className="border-none bg-gray-900 p-2.5 px-4 h-10 text-white placeholder:text-gray-400"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2.5">
              <Label htmlFor="course-price" className="text-base font-bold text-white">Price (XLM)</Label>
              <Input
                id="course-price"
                placeholder="99.99"
                className="border-none bg-gray-900 p-2.5 px-4 h-10 text-white placeholder:text-gray-400"
              />
            </div>{" "}
            <div className="space-y-2.5">
              <Label htmlFor="course-category" className="text-base font-bold text-white">Category</Label>
              <Input
                id="course-category"
                placeholder="Select category"
                className="border-none bg-gray-900 p-2.5 px-4 h-10 text-white placeholder:text-gray-400"
              />
            </div>{" "}
            <div className="space-y-2.5">
              <Label htmlFor="course-level" className="text-base font-bold text-white">Level</Label>
              <Input
                id="course-level"
                placeholder="Select level"
                className="border-none bg-gray-900 p-2.5 px-4 h-10 text-white placeholder:text-gray-400"
              />
            </div>{" "}
            <div className="space-y-2.5">
              <Label htmlFor="course-duration" className="text-base font-bold text-white">Duration</Label>
              <Input
                id="course-duration"
                placeholder="Select duration"
                className="border-none bg-gray-900 p-2.5 px-4 h-10 text-white placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>        
        <DialogFooter className="border-t border-gray-400 pt-6 gap-5">
          <DialogClose className="border border-white p-3 text-base text-semibold px-2.5 py-[6px] rounded-md">Cancel</DialogClose>
          <PrimaryButton type="submit" className="rounded-md font-semibold px-2.5 py-[6px]">Create Course</PrimaryButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
