// src/pages/NotFoundPage.jsx
import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'

export default function NotFoundPage() {
  const { t } = useTranslation()
  const featuredTools = getFeaturedTools().slice(0, 3)

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12">
      <div className="text-center max-w-2xl mx-auto space-y-8">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 rounded-lg p-6 flex flex-col items-center">
          <AlertTriangle className="h-16 w-16 text-red-500 dark:text-red-400 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            404 - Không tìm thấy đường dẫn
          </h1>
          
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
            text-base font-medium rounded-md text-white bg-primary-600 
            hover:bg-primary-700 focus:outline-none focus:ring-2 
            focus:ring-offset-2 focus:ring-primary-500"
          >
            Trở về Home
          </Link>
        </div>
      </div>
    </div>
  );
}