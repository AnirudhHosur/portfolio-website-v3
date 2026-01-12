'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  Send, Bot, User, Loader2, Heart, ArrowLeft, Upload, FileText, Target, 
  Sparkles, Clipboard, FileUp 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  type?: 'general' | 'alignment';
}

export default function ChatPage() {
  // General chat states
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Anirudh's AI assistant. Ask me anything about his professional background!",
      role: 'assistant',
      timestamp: new Date(),
      type: 'general'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Job description states
  const [jobFile, setJobFile] = useState<File | null>(null);
  const [jobText, setJobText] = useState('');
  const [alignmentQuestion, setAlignmentQuestion] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [inputMethod, setInputMethod] = useState<'upload' | 'paste'>('upload');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle general chat
  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      role: 'user',
      timestamp: new Date(),
      type: 'general'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: userMessage.content,
          top_k: 5,
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to get response');

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.answer || "I couldn't find relevant information.",
        role: 'assistant',
        timestamp: new Date(),
        type: 'general'
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, having trouble connecting to the knowledge base.",
        role: 'assistant',
        timestamp: new Date(),
        type: 'general'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle job file upload
  const handleJobUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setJobFile(file);
      setJobText(''); // Clear text input when file is uploaded
    }
  };

  // Analyze job alignment
  const analyzeJobAlignment = async () => {
    const jobContent = inputMethod === 'upload' ? 
      (jobFile ? `Uploaded PDF: ${jobFile.name}` : '') : 
      jobText.trim();
    
    if (!jobContent || !alignmentQuestion.trim()) return;
    
    setIsAnalyzing(true);
    
    try {
      // Call the backend API for real analysis
      const response = await fetch('/api/analyze-alignment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          job_description: jobContent,
          question: alignmentQuestion.trim()
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to analyze job alignment');

      const analysisMessage: Message = {
        id: Date.now().toString(),
        content: data.analysis || "I couldn't generate a proper analysis.",
        role: 'assistant',
        timestamp: new Date(),
        type: 'alignment'
      };
      
      setMessages(prev => [...prev, analysisMessage]);
      setAlignmentQuestion('');
      if (inputMethod === 'paste') {
        setJobText('');
      }
      
    } catch (error) {
      console.error('Analysis error:', error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: "Sorry, having trouble analyzing the job alignment. Please try again.",
        role: 'assistant',
        timestamp: new Date(),
        type: 'alignment'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header with Back Button */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-red-500 fill-current" />
                <div>
                  <h1 className="text-xl font-bold">Chat with Anirudh</h1>
                  <p className="text-sm text-muted-foreground">
                    Professional insights & job alignment analysis
                  </p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="gap-1">
              <Sparkles className="h-3 w-3" />
              AI-Powered
            </Badge>
          </div>
        </div>
      </header>

      {/* Two-Panel Layout */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Panel - Job Analysis */}
          <div>
            <Card className="shadow-lg h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Job Description Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Input Method Toggle */}
                <div className="flex gap-2">
                  <Button
                    onClick={() => setInputMethod('upload')}
                    variant={inputMethod === 'upload' ? 'default' : 'secondary'}
                    className="flex-1 gap-2"
                    size="sm"
                  >
                    <FileUp className="h-4 w-4" />
                    Upload PDF
                  </Button>
                  <Button
                    onClick={() => setInputMethod('paste')}
                    variant={inputMethod === 'paste' ? 'default' : 'secondary'}
                    className="flex-1 gap-2"
                    size="sm"
                  >
                    <Clipboard className="h-4 w-4" />
                    Paste Text
                  </Button>
                </div>

                {/* Input Section */}
                {inputMethod === 'upload' ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Upload Job Description (PDF)</span>
                    </div>
                    
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleJobUpload}
                        className="hidden"
                        id="job-upload"
                      />
                      <label htmlFor="job-upload" className="cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">
                          {jobFile ? jobFile.name : 'Click to upload PDF'}
                        </p>
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Paste Job Description</label>
                    <Textarea
                      value={jobText}
                      onChange={(e) => setJobText(e.target.value)}
                      placeholder="Paste the job description text here..."
                      className="min-h-[120px]"
                      disabled={isAnalyzing}
                    />
                  </div>
                )}

                {/* Analysis Input */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Ask about job alignment</label>
                  <Textarea
                    value={alignmentQuestion}
                    onChange={(e) => setAlignmentQuestion(e.target.value)}
                    placeholder="How well does Anirudh match this role? What should he emphasize?"
                    className="min-h-[100px]"
                    disabled={isAnalyzing || (inputMethod === 'upload' ? !jobFile : !jobText.trim())}
                  />
                  <Button
                    onClick={analyzeJobAlignment}
                    disabled={
                      isAnalyzing || 
                      !alignmentQuestion.trim() || 
                      (inputMethod === 'upload' ? !jobFile : !jobText.trim())
                    }
                    className="w-full gap-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        Analyze Fit
                      </>
                    )}
                  </Button>
                </div>

                {/* Sample Questions */}
                <div className="text-xs text-muted-foreground space-y-1">
                  <p className="font-medium">Try asking:</p>
                  <ul className="space-y-1">
                    <li>• How well does he match the technical requirements?</li>
                    <li>• What are his strongest qualifications for this role?</li>
                    <li>• What gaps should he address in interviews?</li>
                    <li>• How should he position his experience?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - General Chat */}
          <div>
            <Card className="shadow-lg h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  General Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Messages */}
                <div className="space-y-6 mb-6 max-h-[60vh] overflow-y-auto pr-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`flex max-w-[85%] gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                      >
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary text-secondary-foreground'
                          }`}
                        >
                          {message.role === 'user' ? (
                            <User className="h-4 w-4" />
                          ) : (
                            <Bot className="h-4 w-4" />
                          )}
                        </div>
                        <div
                          className={`rounded-2xl px-4 py-3 ${
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          <p className="text-xs opacity-70 mt-2">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="rounded-2xl bg-secondary px-4 py-3">
                          <Loader2 className="h-4 w-4 animate-spin" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Form */}
                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <Textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about Anirudh's experience, skills, projects..."
                    className="min-h-[60px] resize-none"
                    disabled={isLoading}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleChatSubmit(e);
                      }
                    }}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={isLoading || !inputValue.trim()}
                    className="self-end h-12 w-12"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Powered by Anirudh's resume knowledge base</p>
        </div>
      </main>
    </div>
  );
}