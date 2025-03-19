export default function Loader({
  message = "Loading...",
}: {
  message?: string;
}) {
  return (
    <div className="flex justify-center items-center h-full text-gray-600 text-lg">
      <span className="animate-spin border-4 border-blue-400 border-t-transparent rounded-full w-10 h-10"></span>
      <p className="ml-2">{message}</p>
    </div>
  );
}
