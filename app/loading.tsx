import { LoadingSpinner } from '@nhr/components';

export default function Loading() {
  return (
    <div className="w-full h-96 flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}
