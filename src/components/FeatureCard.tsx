
import React, { useState } from 'react';
import { LucideIcon, Upload, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  placeholder: string;
  buttonText: string;
  acceptedFiles: string;
  gradientColors: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  title,
  description,
  icon: Icon,
  placeholder,
  buttonText,
  acceptedFiles,
  gradientColors
}) => {
  const [inputText, setInputText] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async () => {
    if (!inputText.trim() && !selectedFile) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      // Here you would implement the actual AI functionality
      console.log(`Processing ${title} with:`, { inputText, selectedFile });
    }, 2000);
  };

  const hasContent = inputText.trim() || selectedFile;

  return (
    <Card className="group p-6 md:p-8 bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Feature Info */}
        <div className="lg:w-1/2 space-y-6">
          {/* Icon and Title */}
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${gradientColors} text-white group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Visual Enhancement */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border-2 border-dashed border-gray-200">
              <div className="text-center text-gray-500">
                <Icon className={`w-12 h-12 mx-auto mb-3 text-gray-400`} />
                <p className="text-sm">
                  Ready to transform your career? Start here! 👉
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Interactive Area */}
        <div className="lg:w-1/2 space-y-4">
          {/* File Upload Section */}
          {acceptedFiles && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-sky-400">
                Upload File (Optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept={acceptedFiles}
                  onChange={handleFileSelect}
                  className="hidden"
                  id={`file-${id}`}
                />
                <label
                  htmlFor={`file-${id}`}
                  className="flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors cursor-pointer group/upload"
                >
                  <div className="text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover/upload:text-gray-600 transition-colors" />
                    {selectedFile ? (
                      <div>
                        <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
                        <p className="text-xs text-gray-500">Click to change file</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-medium text-gray-700">Click to upload</p>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX</p>
                      </div>
                    )}
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Text Input Area */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-sky-400">
              Tell us more
            </label>
            <div className="relative">
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={placeholder}
                className="min-h-[120px] resize-none border-gray-300 focus:border-sky-500 focus:ring-sky-500 rounded-lg"
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                {inputText.length}/500
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Button
            onClick={handleSubmit}
            disabled={!hasContent || isProcessing}
            className={`w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
              hasContent && !isProcessing
                ? `bg-gradient-to-r ${gradientColors} text-white hover:shadow-lg hover:scale-105`
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                {buttonText}
              </div>
            )}
          </Button>

          {/* Encouragement Text */}
          <p className="text-center text-sm text-gray-500 italic">
            ✨ You've got this! Let AI help you shine ✨
          </p>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
