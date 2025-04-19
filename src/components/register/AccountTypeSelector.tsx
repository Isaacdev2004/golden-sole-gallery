
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface AccountTypeSelectorProps {
  accountType: string;
  setAccountType: (value: string) => void;
  disabled?: boolean;
}

export const AccountTypeSelector = ({
  accountType,
  setAccountType,
  disabled
}: AccountTypeSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label>I want to join as a:</Label>
      <RadioGroup 
        value={accountType} 
        onValueChange={setAccountType}
        className="flex gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="buyer" id="buyer" disabled={disabled} />
          <Label htmlFor="buyer">Buyer</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="seller" id="seller" disabled={disabled} />
          <Label htmlFor="seller">Seller</Label>
        </div>
      </RadioGroup>
    </div>
  );
};
