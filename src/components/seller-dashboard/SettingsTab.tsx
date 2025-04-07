
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SettingsTab: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "Olivia",
    lastName: "Grace",
    email: "olivia@example.com",
    phone: "+1 555-123-4567",
    username: "GoldenSteps",
    bio: "Passionate content creator specializing in premium foot-focused content. Sharing beauty and elegance since 2025.",
    website: "https://oliviagrace.com",
    social: "@olivia.grace",
    paymentMethod: "bank",
    currency: "usd",
    emailNotifications: true,
    smsNotifications: false,
    marketingUpdates: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your profile settings have been updated successfully."
    });
  };

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
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName"
                  name="firstName"
                  value={formData.firstName} 
                  onChange={handleChange}
                  className="mt-1" 
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1" 
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email"
                  name="email" 
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1" 
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1" 
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-1" 
                />
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="mt-1"
                  rows={4}
                />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input 
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="mt-1" 
                />
              </div>
              <div>
                <Label htmlFor="social">Social Media</Label>
                <div className="flex items-center mt-1">
                  <Instagram className="h-5 w-5 text-gray-400 mr-2" />
                  <Input 
                    id="social"
                    name="social"
                    value={formData.social}
                    onChange={handleChange}
                    className="flex-1" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Payment Settings</h3>
            <div className="space-y-4">
              <div>
                <Label>Default Payment Method</Label>
                <RadioGroup 
                  value={formData.paymentMethod} 
                  onValueChange={(value) => handleRadioChange("paymentMethod", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank" className="cursor-pointer">Bank Transfer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="cursor-pointer">PayPal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="cursor-pointer">Credit/Debit Card</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label>Default Currency</Label>
                <RadioGroup 
                  value={formData.currency}
                  onValueChange={(value) => handleRadioChange("currency", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="usd" id="usd" />
                    <Label htmlFor="usd" className="cursor-pointer">USD - US Dollar</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="eur" id="eur" />
                    <Label htmlFor="eur" className="cursor-pointer">EUR - Euro</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="gbp" id="gbp" />
                    <Label htmlFor="gbp" className="cursor-pointer">GBP - British Pound</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="emailNotifications">Email Notifications</Label>
                <Switch 
                  id="emailNotifications" 
                  checked={formData.emailNotifications}
                  onCheckedChange={(checked) => handleSwitchChange("emailNotifications", checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="smsNotifications">SMS Notifications</Label>
                <Switch 
                  id="smsNotifications"
                  checked={formData.smsNotifications}
                  onCheckedChange={(checked) => handleSwitchChange("smsNotifications", checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="marketingUpdates">Marketing Updates</Label>
                <Switch 
                  id="marketingUpdates"
                  checked={formData.marketingUpdates}
                  onCheckedChange={(checked) => handleSwitchChange("marketingUpdates", checked)}
                />
              </div>
            </div>
          </div>
          
          <div className="pt-4 flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-gold hover:bg-gold-dark" onClick={handleSave}>Save Changes</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SettingsTab;
