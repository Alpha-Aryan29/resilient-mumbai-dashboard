
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Send, StopCircle, Smile, Meh, Frown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  emotion?: "neutral" | "happy" | "sad" | "anxious";
  timestamp: Date;
}

const VoiceAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your mental health assistant. How are you feeling today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const sendMessage = (text: string, emotion?: "neutral" | "happy" | "sad" | "anxious") => {
    if (!text.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      isUser: true,
      emotion: emotion,
      timestamp: new Date(),
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    
    // Simulate AI thinking
    setIsThinking(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      let response: string;
      
      if (emotion === "happy") {
        response = "That's wonderful to hear! It's great that you're feeling positive today. Is there anything specific that's contributing to your good mood?";
      } else if (emotion === "sad") {
        response = "I'm sorry to hear you're feeling down. Remember that it's okay to not feel okay sometimes. Would you like to talk about what's troubling you or try a quick breathing exercise?";
      } else if (emotion === "anxious") {
        response = "I notice you might be feeling anxious. Let's take a moment to ground ourselves. Try taking a few deep breaths with me. Inhale for 4 counts, hold for 4, and exhale for 6.";
      } else {
        response = "Thank you for sharing. How else have you been feeling lately? I'm here to listen and help however I can.";
      }
      
      const assistantMessage: Message = {
        id: messages.length + 2,
        text: response,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
      setIsThinking(false);
    }, 1500);
  };

  const startRecording = () => {
    setIsRecording(true);
    // In a real implementation, this would access the microphone
    // and start speech-to-text processing
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Simulate voice recognition result
    setTimeout(() => {
      const voiceText = "I'm feeling a bit stressed about work today.";
      setInput(voiceText);
      sendMessage(voiceText, "anxious");
    }, 1000);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="flex-1 p-0">
        <div className="flex flex-col h-full">
          {/* Chat messages area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-[400px] max-h-[calc(100vh-300px)]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex max-w-[80%] animate-slide-in",
                  message.isUser ? "ml-auto" : "mr-auto"
                )}
              >
                <div
                  className={cn(
                    "rounded-2xl px-4 py-3",
                    message.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.emotion && message.isUser && (
                    <div className="flex items-center mb-1 text-xs text-primary-foreground/80">
                      {message.emotion === "happy" && <Smile className="h-3 w-3 mr-1" />}
                      {message.emotion === "sad" && <Frown className="h-3 w-3 mr-1" />}
                      {message.emotion === "anxious" && <Meh className="h-3 w-3 mr-1" />}
                      <span>Detected mood: {message.emotion}</span>
                    </div>
                  )}
                  <div>{message.text}</div>
                  <div className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isThinking && (
              <div className="flex max-w-[80%] mr-auto animate-pulse">
                <div className="rounded-2xl px-4 py-3 bg-muted flex items-center">
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Message input area */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Button
                variant={isRecording ? "destructive" : "outline"}
                size="icon"
                className="shrink-0"
                onClick={isRecording ? stopRecording : startRecording}
              >
                {isRecording ? (
                  <StopCircle className="h-5 w-5" />
                ) : (
                  <Mic className="h-5 w-5" />
                )}
              </Button>
              
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage(input, "neutral");
                  }
                }}
              />
              
              <Button
                variant="default"
                size="icon"
                className="shrink-0"
                onClick={() => sendMessage(input, "neutral")}
                disabled={!input.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-3 text-xs"
                onClick={() => sendMessage("I'm feeling happy today!", "happy")}
              >
                <Smile className="h-4 w-4 mr-1 text-green-500" />
                I'm feeling happy
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-3 text-xs"
                onClick={() => sendMessage("I'm feeling sad today.", "sad")}
              >
                <Frown className="h-4 w-4 mr-1 text-blue-500" />
                I'm feeling sad
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-3 text-xs"
                onClick={() => sendMessage("I'm feeling anxious about something.", "anxious")}
              >
                <Meh className="h-4 w-4 mr-1 text-amber-500" />
                I'm feeling anxious
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceAssistant;
