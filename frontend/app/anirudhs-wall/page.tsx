'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, Lock, FileText, CheckCircle, AlertCircle, Loader2, Home, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AnirudhsWall() {
  const [step, setStep] = useState<'password' | 'upload'>('password');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const CORRECT_PASSWORD = '2617';

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password === CORRECT_PASSWORD) {
      setStep('upload');
      setSuccess('Access granted! You can now upload documents.');
      setTimeout(() => setSuccess(''), 3000);
    } else {
      setError('Incorrect password. Access denied.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/pdf') {
        setError('Please upload a PDF file only.');
        return;
      }
      if (selectedFile.size > 10 * 1024 * 1024) { // 10MB limit
        setError('File size must be less than 10MB.');
        return;
      }
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setError('');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first.');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('source_id', `document_${Date.now()}`);

      const response = await fetch('/api/ingest', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('✅ Document successfully ingested into Qdrant! Ready for RAG queries.');
        setFile(null);
        setFileName('');
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSuccess('');
        }, 5000);
      } else {
        setError(data.error || 'Failed to ingest document.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 py-12 px-4">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
              Anirudh's Wall
            </h1>
            <p className="text-muted-foreground">
              Secure document ingestion portal for Qdrant vector database
            </p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </motion.div>

        {success && (
          <motion.div 
            variants={itemVariants}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Alert className="mb-6 border-green-500 bg-green-50 dark:bg-green-950/50 border-2 shadow-lg">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              <AlertDescription className="font-medium flex-grow">{success}</AlertDescription>
            </Alert>
            {/* Subtle pulse animation */}
            <motion.div
              className="absolute inset-0 rounded-lg border-2 border-green-400 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        )}

        {error && (
          <motion.div variants={itemVariants}>
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </motion.div>
        )}

        {step === 'password' ? (
          <motion.div variants={itemVariants}>
            <Card className="border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <Lock className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Restricted Access</CardTitle>
                <CardDescription>
                  Enter the 4-digit passcode to access document upload functionality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Passcode</Label>
                    <Input
                      id="password"
                      type="password"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={4}
                      value={password}
                      onChange={(e) => setPassword(e.target.value.replace(/\D/g, ''))}
                      placeholder="Enter 4-digit passcode"
                      className="text-center text-2xl tracking-widest"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={password.length !== 4 || isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      'Unlock Access'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div variants={itemVariants}>
            <Card className="border-2 border-dashed border-primary/30">
              <CardHeader className="text-center">
                <Upload className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Document Upload</CardTitle>
                <CardDescription>
                  Upload PDF documents to be ingested into Qdrant vector database
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="file-upload">Choose PDF File</Label>
                  <div className="relative">
                    <Input
                      id="file-upload"
                      type="file"
                      accept=".pdf"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full h-12"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      {fileName || 'Select PDF file'}
                    </Button>
                  </div>
                  {fileName && (
                    <p className="text-sm text-muted-foreground text-center">
                      Selected: {fileName}
                    </p>
                  )}
                </div>

                <div className="bg-secondary/50 rounded-lg p-4">
                  <h3 className="font-medium mb-2 flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    Upload Requirements
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• PDF files only</li>
                    <li>• Maximum file size: 10MB</li>
                    <li>• Documents will be processed and stored in Qdrant</li>
                    <li>• Content will be available for RAG queries</li>
                  </ul>
                </div>

                <Button
                  onClick={handleUpload}
                  className="w-full"
                  disabled={!file || isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing Document...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Ingest Document
                    </>
                  )}
                </Button>

                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => {
                    setStep('password');
                    setPassword('');
                  }}
                >
                  Back to Passcode
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <motion.div variants={itemVariants} className="mt-8 text-center text-sm text-muted-foreground">
          <p>🔒 Strict Access Control • Only Anirudh can upload/ingest documents</p>
          <p className="mt-2">Powered by Qdrant Vector Database</p>
        </motion.div>
      </motion.div>
    </div>
  );
}