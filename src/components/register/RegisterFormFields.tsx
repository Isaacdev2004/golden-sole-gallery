
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

interface RegisterFormFieldsProps {
  formData: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeTerms: boolean;
    agreeAge: boolean;
  };
  showPassword: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setShowPassword: (show: boolean) => void;
}

export const RegisterFormFields = ({
  formData,
  showPassword,
  handleChange,
  setShowPassword,
}: RegisterFormFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="John Doe"
          required
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email"
          name="email"
          type="email" 
          placeholder="name@example.com" 
          required 
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input 
            id="password"
            name="password"
            type={showPassword ? "text" : "password"} 
            placeholder="••••••••" 
            required 
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeOffIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input 
          id="confirmPassword"
          name="confirmPassword"
          type={showPassword ? "text" : "password"} 
          placeholder="••••••••" 
          required 
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="agreeTerms" 
            name="agreeTerms"
            checked={formData.agreeTerms}
            onCheckedChange={(checked) => 
              handleChange({
                target: { name: "agreeTerms", type: "checkbox", checked: checked === true }
              } as React.ChangeEvent<HTMLInputElement>)}
          />
          <label
            htmlFor="agreeTerms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the{" "}
            <Link to="/terms" className="text-gold hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-gold hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="agreeAge" 
            name="agreeAge"
            checked={formData.agreeAge}
            onCheckedChange={(checked) => 
              handleChange({
                target: { name: "agreeAge", type: "checkbox", checked: checked === true }
              } as React.ChangeEvent<HTMLInputElement>)}
          />
          <label
            htmlFor="agreeAge"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I confirm that I am at least 18 years old
          </label>
        </div>
      </div>
    </>
  );
};
