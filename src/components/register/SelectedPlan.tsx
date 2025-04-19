
interface SelectedPlanProps {
  plan: string;
  hasPaid: boolean;
}

export const SelectedPlan = ({ plan, hasPaid }: SelectedPlanProps) => {
  return (
    <div className="bg-gold/10 p-3 rounded-md border border-gold/30">
      <p className="text-sm font-medium">
        Selected Plan: <span className="font-bold">{plan.charAt(0).toUpperCase() + plan.slice(1)}</span>
      </p>
      {hasPaid && (
        <p className="text-xs text-green-600 mt-1">Payment complete</p>
      )}
    </div>
  );
};
