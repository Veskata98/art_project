import { Loader2 } from 'lucide-react';

export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full h-full my-auto">
      <Loader2 className="animate-spin w-6 h-6 text-primary" />
      <span className="text-sm text-muted-foreground">Зареждане...</span>
    </div>
  );
};
