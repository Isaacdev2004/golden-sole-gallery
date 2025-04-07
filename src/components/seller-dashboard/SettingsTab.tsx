
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Instagram } from "lucide-react";

const SettingsTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
        <CardDescription>Manage your account and preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <FormLabel>First Name</FormLabel>
                <Input defaultValue="Olivia" className="mt-1" />
              </div>
              <div>
                <FormLabel>Last Name</FormLabel>
                <Input defaultValue="Grace" className="mt-1" />
              </div>
              <div>
                <FormLabel>Email Address</FormLabel>
                <Input defaultValue="olivia@example.com" className="mt-1" />
              </div>
              <div>
                <FormLabel>Phone Number</FormLabel>
                <Input defaultValue="+1 555-123-4567" className="mt-1" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div>
                <FormLabel>Username</FormLabel>
                <Input defaultValue="GoldenSteps" className="mt-1" />
              </div>
              <div>
                <FormLabel>Bio</FormLabel>
                <Textarea 
                  defaultValue="Passionate content creator specializing in premium foot-focused content. Sharing beauty and elegance since 2025."
                  className="mt-1"
                  rows={4}
                />
              </div>
              <div>
                <FormLabel>Website</FormLabel>
                <Input defaultValue="https://oliviagrace.com" className="mt-1" />
              </div>
              <div>
                <FormLabel>Social Media</FormLabel>
                <div className="flex items-center mt-1">
                  <Instagram className="h-5 w-5 text-gray-400 mr-2" />
                  <Input defaultValue="@olivia.grace" className="flex-1" />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Payment Settings</h3>
            <div className="space-y-4">
              <div>
                <FormLabel>Default Payment Method</FormLabel>
                <RadioGroup defaultValue="bank" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank" id="bank" />
                    <FormLabel htmlFor="bank" className="cursor-pointer">Bank Transfer</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <FormLabel htmlFor="paypal" className="cursor-pointer">PayPal</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <FormLabel htmlFor="card" className="cursor-pointer">Credit/Debit Card</FormLabel>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <FormLabel>Default Currency</FormLabel>
                <RadioGroup defaultValue="usd" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="usd" id="usd" />
                    <FormLabel htmlFor="usd" className="cursor-pointer">USD - US Dollar</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="eur" id="eur" />
                    <FormLabel htmlFor="eur" className="cursor-pointer">EUR - Euro</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="gbp" id="gbp" />
                    <FormLabel htmlFor="gbp" className="cursor-pointer">GBP - British Pound</FormLabel>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <FormLabel htmlFor="email-notifications">Email Notifications</FormLabel>
                <Switch id="email-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <FormLabel htmlFor="sms-notifications">SMS Notifications</FormLabel>
                <Switch id="sms-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <FormLabel htmlFor="marketing-updates">Marketing Updates</FormLabel>
                <Switch id="marketing-updates" />
              </div>
            </div>
          </div>
          
          <div className="pt-4 flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-gold hover:bg-gold-dark">Save Changes</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SettingsTab;
