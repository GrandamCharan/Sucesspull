export default function ErrorMessage({ error }: { error: string }) {
  return (
    <div className="text-center text-red-600 bg-red-100 p-2 rounded-md">
      {error}
    </div>
  );
}
