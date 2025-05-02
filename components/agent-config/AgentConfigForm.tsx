"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Plus } from "lucide-react";

export function AgentConfigForm() {
  const [temperature, setTemperature] = useState(0.7);

  return (
    <Tabs defaultValue="agent" className="space-y-4">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="agent">Agent</TabsTrigger>
        <TabsTrigger value="voice">Voice</TabsTrigger>
        <TabsTrigger value="analysis">Analysis</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>

      <TabsContent value="agent" className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <Label>Agent Language</Label>
                <p className="text-sm text-muted-foreground">
                  Choose the default language the agent will communicate in.
                </p>
                <Select defaultValue="english">
                  <SelectTrigger className="mt-2 w-full">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                    <SelectItem value="turkish">Turkish</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Additional Languages</Label>
                <p className="text-sm text-muted-foreground">
                  Specify additional languages which callers can choose from.
                </p>
                <Select>
                  <SelectTrigger className="mt-2 w-full">
                    <SelectValue placeholder="Add additional languages" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                    <SelectItem value="turkish">Turkish</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="first-message">First message</Label>
                <p className="text-sm text-muted-foreground">
                  The first message the agent will say. If empty, the agent will wait for the user to start the conversation.
                </p>
                <Textarea
                  id="first-message"
                  className="mt-2"
                  placeholder="e.g. Hello, how can I help you today?"
                  rows={4}
                />
                <Button variant="outline" size="sm" className="mt-2">
                  <Plus className="mr-1 h-4 w-4" />
                  Add Variable
                </Button>
              </div>

              <div>
                <Label htmlFor="system-prompt">System prompt</Label>
                <p className="text-sm text-muted-foreground">
                  The system prompt is used to determine the persona of the agent and the context of the conversation.
                </p>
                <Textarea
                  id="system-prompt"
                  className="mt-2"
                  placeholder="You are a helpful assistant."
                  rows={6}
                  defaultValue="You are a helpful assistant."
                />
                <Button variant="outline" size="sm" className="mt-2">
                  <Plus className="mr-1 h-4 w-4" />
                  Add Variable
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <Label>LLM</Label>
                <p className="text-sm text-muted-foreground">
                  Select which provider and model to use for the LLM.
                </p>
                <Select defaultValue="gemini">
                  <SelectTrigger className="mt-2 w-full">
                    <SelectValue placeholder="Select LLM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gemini">Gemini 2.0 Flash</SelectItem>
                    <SelectItem value="gpt4">GPT-4o</SelectItem>
                    <SelectItem value="claude">Claude 3 Opus</SelectItem>
                  </SelectContent>
                </Select>
                <p className="mt-2 text-xs text-muted-foreground">
                  Currently, the LLM cost is covered by us. In the future, this cost will be passed onto you.
                </p>
              </div>

              <div>
                <Label>Temperature</Label>
                <p className="text-sm text-muted-foreground">
                  Temperature is a parameter that controls the creativity or randomness of the responses generated by the LLM.
                </p>
                <div className="mt-6">
                  <Slider
                    defaultValue={[0.7]}
                    max={1}
                    step={0.1}
                    onValueChange={(value) => setTemperature(value[0])}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="token-limit">Limit token usage</Label>
                <p className="text-sm text-muted-foreground">
                  Configure the maximum number of tokens that the LLM can predict. A limit will be applied if the value is greater than 0.
                </p>
                <Input
                  id="token-limit"
                  type="number"
                  className="mt-2"
                  placeholder="-1"
                  defaultValue="-1"
                />
              </div>

              <div>
                <Label>Knowledge base</Label>
                <p className="text-sm text-muted-foreground">
                  Provide the LLM with domain-specific information to help it answer questions more accurately.
                </p>
                <div className="mt-2">
                  <Button>Add document</Button>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Use RAG</Label>
                    <p className="text-sm text-muted-foreground">
                      Retrieval-Augmented Generation (RAG) increases the agent's maximum Knowledge Base size. The agent will have access to relevant pieces of attached Knowledge Base during answer generation.
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div>
                <Label>Tools</Label>
                <p className="text-sm text-muted-foreground">
                  Provide the agent with tools it can use to help users.
                </p>
                <div className="mt-4 rounded-md border">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded bg-muted">
                        ✓
                      </div>
                      <div>
                        <p className="font-medium">end_call</p>
                        <p className="text-sm text-muted-foreground">System</p>
                        <p className="text-sm">Gives agent the ability to end the call with the user.</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      ⌘
                    </Button>
                  </div>
                </div>
                <Button variant="outline" className="mt-4">
                  Add tool
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="voice">
        <Card>
          <CardContent className="pt-6">
            <p>Voice configuration options will appear here.</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="analysis">
        <Card>
          <CardContent className="pt-6">
            <p>Analysis configuration options will appear here.</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security">
        <Card>
          <CardContent className="pt-6">
            <p>Security configuration options will appear here.</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="advanced">
        <Card>
          <CardContent className="pt-6">
            <p>Advanced configuration options will appear here.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}