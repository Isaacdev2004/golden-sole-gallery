
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormLabel } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  fee: string;
  isDefault: boolean;
}

interface WithdrawDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  stage: "method" | "amount" | "confirm" | "success";
  paymentMethods: PaymentMethod[];
  selectedPaymentMethod: string | null;
  withdrawAmount: string;
  withdrawNote: string;
  balance: number;
  isProcessing: boolean;
  onPaymentMethodSelect: (methodId: string) => void;
  onWithdrawAmountChange: (value: string) => void;
  onWithdrawNoteChange: (value: string) => void;
  onSubmitAmount: () => void;
  onConfirmWithdrawal: () => void;
  onClose: () => void;
  getWithdrawalFee: () => number;
  getWithdrawalTotal: () => number;
}

const WithdrawDialog: React.FC<WithdrawDialogProps> = ({
  open,
  onOpenChange,
  stage,
  paymentMethods,
  selectedPaymentMethod,
  withdrawAmount,
  withdrawNote,
  balance,
  isProcessing,
  onPaymentMethodSelect,
  onWithdrawAmountChange,
  onWithdrawNoteChange,
  onSubmitAmount,
  onConfirmWithdrawal,
  onClose,
  getWithdrawalFee,
  getWithdrawalTotal,
}) => {
  const selectedMethod = paymentMethods.find(method => method.id === selectedPaymentMethod);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {stage === "method" && "Withdraw Funds"}
            {stage === "amount" && "Enter Amount"}
            {stage === "confirm" && "Confirm Withdrawal"}
            {stage === "success" && "Withdrawal Successful"}
          </DialogTitle>
        </DialogHeader>
        
        {stage === "method" && (
          <div className="space-y-4">
            <p className="text-sm text-gray-500">Select your preferred payment method:</p>
            <div className="space-y-2">
              {paymentMethods.map((method) => (
                <div 
                  key={method.id} 
                  className={`
                    flex items-center justify-between p-3 rounded-lg cursor-pointer border
                    ${selectedPaymentMethod === method.id ? 'border-gold bg-gold/5' : 'border-gray-200 hover:bg-gray-50'}
                  `}
                  onClick={() => onPaymentMethodSelect(method.id)}
                >
                  <div className="flex items-center">
                    <div className="bg-gold/10 p-2 rounded mr-3">
                      {method.icon}
                    </div>
                    <div>
                      <p className="font-medium">{method.name}</p>
                      <p className="text-xs text-gray-500">{method.description} • {method.fee}</p>
                    </div>
                  </div>
                  {method.isDefault && (
                    <Badge className="bg-gold">Default</Badge>
                  )}
                </div>
              ))}
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </div>
        )}
        
        {stage === "amount" && (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">Available balance: <span className="font-medium text-black">${balance.toFixed(2)}</span></p>
            </div>
            <div className="space-y-2">
              <FormLabel>Amount to withdraw ($)</FormLabel>
              <Input 
                value={withdrawAmount}
                onChange={(e) => onWithdrawAmountChange(e.target.value)}
                type="number" 
                step="0.01"
                min="0.01"
                max={balance}
                placeholder="Enter amount"
              />
            </div>
            <div className="space-y-2">
              <FormLabel>Note (Optional)</FormLabel>
              <Textarea 
                value={withdrawNote}
                onChange={(e) => onWithdrawNoteChange(e.target.value)}
                placeholder="Add a note to this transaction"
                rows={2}
              />
            </div>
            <DialogFooter className="grid grid-cols-2 gap-2 sm:justify-start">
              <Button 
                variant="outline"
                onClick={() => onClose()}
              >
                Back
              </Button>
              <Button 
                className="bg-gold hover:bg-gold-dark"
                onClick={onSubmitAmount}
                disabled={!withdrawAmount || parseFloat(withdrawAmount) <= 0}
              >
                Continue
              </Button>
            </DialogFooter>
          </div>
        )}
        
        {stage === "confirm" && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Amount:</span>
                <span className="font-medium">${parseFloat(withdrawAmount).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Fee:</span>
                <span className="font-medium">${getWithdrawalFee().toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between">
                <span className="text-gray-700 font-medium">Total:</span>
                <span className="font-bold text-gold">${getWithdrawalTotal().toFixed(2)}</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">The funds will be sent to:</p>
              {selectedMethod && (
                <div className="flex items-center mt-2">
                  <div className="bg-gold/10 p-2 rounded mr-3">
                    {selectedMethod.icon}
                  </div>
                  <div>
                    <p className="font-medium">{selectedMethod.name}</p>
                    <p className="text-xs text-gray-500">{selectedMethod.description}</p>
                  </div>
                </div>
              )}
            </div>
            
            <DialogFooter className="grid grid-cols-2 gap-2 sm:justify-start">
              <Button 
                variant="outline"
                onClick={() => onClose()}
                disabled={isProcessing}
              >
                Back
              </Button>
              <Button 
                className="bg-gold hover:bg-gold-dark"
                onClick={onConfirmWithdrawal}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <><span className="animate-spin mr-1">◌</span> Processing...</>
                ) : (
                  'Confirm Withdrawal'
                )}
              </Button>
            </DialogFooter>
          </div>
        )}
        
        {stage === "success" && (
          <div className="space-y-4 text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <CheckCircle className="text-green-500 h-6 w-6" />
            </div>
            <p className="font-medium">Withdrawal Initiated Successfully!</p>
            <p className="text-sm text-gray-500">
              Your withdrawal of ${parseFloat(withdrawAmount).toFixed(2)} has been initiated and is being processed.
            </p>
            {selectedMethod && (
              <p className="text-sm text-gray-500">
                The funds should arrive in your account within {selectedMethod.description.toLowerCase()}.
              </p>
            )}
            <DialogFooter className="justify-center mt-4">
              <Button 
                className="bg-gold hover:bg-gold-dark"
                onClick={onClose}
              >
                Close
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawDialog;
