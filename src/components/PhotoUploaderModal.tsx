import React, { useState, useRef } from 'react';
import { X, Upload, Check, RefreshCw, Image as ImageIcon } from 'lucide-react';

interface PhotoUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onSavePhoto: (newUrl: string) => void;
  onResetPhoto: () => void;
}

export const PhotoUploaderModal: React.FC<PhotoUploaderModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onSavePhoto,
  onResetPhoto,
}) => {
  const [preview, setPreview] = useState<string>(currentPhoto);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, JPEG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPreview(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleSave = () => {
    onSavePhoto(preview);
    onClose();
  };

  const handleReset = () => {
    onResetPhoto();
    setPreview('/kiranmai-photo.svg');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-[#0A1929] border border-cyan-800/60 rounded-2xl p-6 shadow-2xl shadow-cyan-950/80">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-heading font-bold text-white">
              Personal Photograph
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-5 space-y-4">
          <p className="text-xs text-slate-300">
            Upload your actual photograph for the Hero section. Your photo will be displayed in high definition with natural proportions and a subtle cyan glow.
          </p>

          {/* Preview Circle */}
          <div className="flex flex-col items-center justify-center py-2">
            <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-lg shadow-cyan-900/50">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover object-top rounded-full bg-slate-900"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.endsWith('/kiranmai-photo.svg')) {
                    target.src = '/kiranmai-photo.svg';
                  }
                }}
              />
            </div>
            <span className="text-[11px] text-slate-400 mt-2 font-mono">
              Live Hero Preview Frame
            </span>
          </div>

          {/* Drag & Drop Zone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors ${
              isDragging
                ? 'border-cyan-400 bg-cyan-950/40'
                : 'border-slate-700 hover:border-cyan-600 bg-slate-900/60'
            }`}
          >
            <Upload className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <p className="text-xs font-medium text-slate-200">
              Click to browse or drag & drop your image
            </p>
            <p className="text-[10px] text-slate-400 mt-1 font-mono">
              Supports JPG, PNG, WEBP
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFile(e.target.files[0]);
                }
              }}
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={handleReset}
            type="button"
            className="text-xs px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              type="button"
              className="text-xs px-3 py-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              type="button"
              className="text-xs px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium shadow-md shadow-cyan-600/30 flex items-center gap-1.5 transition-all"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Apply Photo</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
