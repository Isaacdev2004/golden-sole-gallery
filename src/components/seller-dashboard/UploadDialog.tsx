
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormLabel } from "@/components/ui/form";
import { Upload } from "lucide-react";

interface UploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filePreview: string | null;
  fileType: "image" | "video" | null;
  title: string;
  caption: string;
  price: string;
  step: "select" | "details";
  onTitleChange: (value: string) => void;
  onCaptionChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  triggerFileInput: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const UploadDialog: React.FC<UploadDialogProps> = ({
  open,
  onOpenChange,
  filePreview,
  fileType,
  title,
  caption,
  price,
  step,
  onTitleChange,
  onCaptionChange,
  onPriceChange,
  onFileSelect,
  onSubmit,
  triggerFileInput,
  fileInputRef,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{step === "select" ? "Upload Content" : "Content Details"}</DialogTitle>
          <DialogDescription>
            {step === "select" 
              ? "Select a file to upload to your store" 
              : "Add details about your content"}
          </DialogDescription>
        </DialogHeader>
        
        {step === "select" ? (
          <div className="space-y-4">
            <div 
              className="border-2 border-dashed rounded-lg p-12 text-center cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={triggerFileInput}
            >
              <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-400 mt-1">JPG, PNG, or MP4 (max 20MB)</p>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*,video/*" 
              onChange={onFileSelect}
            />
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline"
                onClick={() => onOpenChange(false)}
                type="button"
              >
                Cancel
              </Button>
              <Button 
                className="bg-gold hover:bg-gold-dark"
                onClick={triggerFileInput}
                type="button"
              >
                Select File
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {filePreview && (
              <div className="aspect-square w-full max-h-64 overflow-hidden rounded-md bg-gray-100">
                {fileType === "image" ? (
                  <img 
                    src={filePreview} 
                    alt="Preview" 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <video 
                    src={filePreview} 
                    className="w-full h-full object-contain" 
                    controls
                  />
                )}
              </div>
            )}
            <div className="space-y-2">
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input 
                id="title"
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}
                placeholder="Enter a title for your content"
              />
            </div>
            <div className="space-y-2">
              <FormLabel htmlFor="caption">Caption (Optional)</FormLabel>
              <Textarea 
                id="caption"
                value={caption}
                onChange={(e) => onCaptionChange(e.target.value)}
                placeholder="Add a description for your content"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <FormLabel htmlFor="price">Price ($)</FormLabel>
              <Input 
                id="price"
                value={price}
                onChange={(e) => onPriceChange(e.target.value)}
                placeholder="Enter price (e.g. 4.99)"
                type="number"
                step="0.01"
                min="0"
              />
            </div>
            <DialogFooter className="grid grid-cols-2 gap-2 sm:justify-start">
              <Button 
                variant="outline"
                onClick={() => onOpenChange(false)}
                type="button"
              >
                Cancel
              </Button>
              <Button 
                className="bg-gold hover:bg-gold-dark"
                onClick={onSubmit}
                type="button"
              >
                Upload Content
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UploadDialog;
