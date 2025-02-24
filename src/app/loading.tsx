export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
      <div className="relative">
        <div className="h-24 w-24">
          <div className="absolute h-24 w-24 rounded-full border-8 border-gray-200"></div>
          <div className="absolute h-24 w-24 animate-spin rounded-full border-8 border-primary border-t-transparent"></div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-gray-500">Loading...</p>
        </div>
      </div>
    </div>
  )
} 